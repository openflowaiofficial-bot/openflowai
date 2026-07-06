"use client"

import { useEffect, useState, useRef } from "react"
import { Phone, X, Mic, MicOff } from "lucide-react"
import { RetellWebClient } from "retell-client-js-sdk"

export function RetellWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCallActive, setIsCallActive] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [callStatus, setCallStatus] = useState<string>("")
  const retellClientRef = useRef<RetellWebClient | null>(null)

  useEffect(() => {
    const client = new RetellWebClient()
    retellClientRef.current = client

    client.on("call_started", () => {
      setIsCallActive(true)
      setCallStatus("Connected")
    })

    client.on("call_ended", () => {
      setIsCallActive(false)
      setCallStatus("")
      setIsOpen(false)
    })

    client.on("agent_start_talking", () => {
      setCallStatus("Agent speaking...")
    })

    client.on("agent_stop_talking", () => {
      setCallStatus("Listening...")
    })

    client.on("error", (error: Error) => {
      console.error("Voice widget error:", error)
      setIsCallActive(false)
      setCallStatus("Error: " + error.message)
    })

    return () => {
      if (retellClientRef.current) {
        retellClientRef.current.stopCall()
      }
    }
  }, [])

  const startVoiceCall = async () => {
    setCallStatus("Connecting...")

    try {
      const response = await fetch("/api/retell-web-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      const data = await response.json()

      // Handle rate limiting
      if (response.status === 429) {
        const minutes = Math.ceil((data.resetIn || 3600) / 60)
        setCallStatus(`Limit reached. Try again in ${minutes} min`)
        setTimeout(() => {
          setCallStatus("")
          setIsOpen(false)
        }, 5000)
        return
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to create web call")
      }

      if (!data.accessToken) {
        throw new Error("No access token received")
      }

      setCallStatus("Connecting to AI...")

      if (retellClientRef.current) {
        await retellClientRef.current.startCall({
          accessToken: data.accessToken,
        })
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to connect"
      setCallStatus("Error: " + errorMessage)
      setTimeout(() => {
        setCallStatus("")
        setIsOpen(false)
      }, 3000)
    }
  }

  const endVoiceCall = () => {
    if (retellClientRef.current) {
      retellClientRef.current.stopCall()
    }
    setIsCallActive(false)
    setCallStatus("")
    setIsOpen(false)
  }

  const toggleMute = () => {
    if (retellClientRef.current) {
      if (isMuted) {
        retellClientRef.current.unmute()
      } else {
        retellClientRef.current.mute()
      }
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <button
        onClick={() => {
          if (!isOpen && !isCallActive) {
            setIsOpen(true)
            startVoiceCall()
          } else if (isCallActive) {
            endVoiceCall()
          } else {
            setIsOpen(false)
          }
        }}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white hover:scale-105 ${
          isCallActive 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-gradient-to-r from-blue-500 to-blue-600"
        }`}
        aria-label={isCallActive ? "End Call" : "Talk to AI"}
      >
        {isCallActive ? (
          <Phone className="w-7 h-7 rotate-[135deg]" />
        ) : (
          <Phone className="w-7 h-7" />
        )}
        {isCallActive && (
          <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-25" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-[320px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">OpenFlow AI</h3>
                  <p className="text-sm text-white/80">
                    {isCallActive ? "Call in progress" : "Connecting..."}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (isCallActive) endVoiceCall()
                  setIsOpen(false)
                }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6 flex flex-col items-center">
            {isCallActive ? (
              <>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 relative">
                  <Phone className="w-8 h-8 text-blue-600" />
                  <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-25" />
                </div>
                <p className="text-base font-medium text-gray-900 mb-1">Speaking with AI</p>
                <p className="text-sm text-gray-500 mb-5">{callStatus || "Speak naturally"}</p>
                <div className="flex gap-3">
                  <button
                    onClick={toggleMute}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isMuted ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={endVoiceCall}
                    className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-5 h-5 rotate-[135deg]" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Phone className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-base font-medium text-gray-900 mb-1">
                  {callStatus.includes("Error") ? "Connection Failed" : "Connecting..."}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  {callStatus || "Please allow microphone access"}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default RetellWidget
