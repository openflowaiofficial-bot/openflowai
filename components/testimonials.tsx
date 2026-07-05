"use client"

export function Testimonials() {
  const testimonials: { quote: string; author: string; role: string; company: string; image?: string }[] = [
    {
      quote:
        "I was honestly skeptical about letting AI answer calls for Regenerative Mind and Body. Med spa clients can be particular — they're asking about treatments, pricing, sometimes things that feel personal — and I didn't want anyone feeling like they were talking to a robot. But after a few months, I'm sold. The AI sounds natural, handles questions about our services way better than I expected, and books consultations directly into our calendar. I'm not missing calls anymore when I'm with clients, and people don't seem to mind at all — a few have even told me how easy it was to get scheduled. The biggest difference is just peace of mind. I'm not glued to my phone, I'm not playing catch-up at the end of the day returning voicemails, and new clients are getting a great first impression every single time. If you run a med spa or any kind of appointment-based business, this is honestly a no-brainer.",
      author: "Albert Bayer",
      role: "Owner",
      company: "Regenerative Mind and Body",
    },
    {
      quote:
        "In the car business, every missed call is a missed sale. Customers shop fast, they call multiple dealerships, and whoever picks up first usually wins the deal. That's exactly why we put AI on our service line at O'Daniel Automotive Group, and it's been one of the best decisions we've made. It answers every call, day or night, weekends, lunch hours — doesn't matter. In just a few months it's booked well over 100 service appointments for us, ranging from quick oil changes on brand new CX-5s to complex stuff like check engine diagnostics, brake jobs, transmission fluid services, and full inspections on high-mileage vehicles. It captures the vehicle, mileage, service needed, whether the customer is waiting or dropping off, even loaner car requests — all the details our service advisors actually need before the customer ever walks through the door. What surprised me most is how natural it sounds. We've had customers come in and not realize they had been talking to AI when they called. It even flags high-mileage vehicles for our team to give a closer look, so we're catching upsell and safety opportunities we might've missed before. My service writers aren't tied up on the phone all day — they're focused on the customers in front of them, which is where they should be. If you're running a dealership and you're still letting service calls roll to voicemail or making customers wait on hold, you're handing business to your competition. This has paid for itself many times over.",
      author: "O'Daniel Automotive Group",
      role: "Service Department",
      company: "O'Daniel Automotive Group",
    },
  ]

  return (
    <section className="bg-white px-4 md:px-8 py-20 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 md:mb-20 text-center px-4">
          <p className="mb-3 md:mb-4 text-xs md:text-sm font-semibold uppercase tracking-wide text-[#4F46E5]">
            Customer Success
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            What our customers are saying
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 md:mb-6 flex-1">
                <svg
                  className="mb-3 md:mb-4 h-6 w-6 md:h-8 md:w-8 text-[#4F46E5] opacity-30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">"{testimonial.quote}"</p>
              </div>

              <div className="flex items-center gap-3 md:gap-4 border-t border-gray-100 pt-4 md:pt-6">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                )}
                <div>
                  <p className="text-sm md:text-base font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs md:text-sm font-medium text-[#4F46E5]">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
