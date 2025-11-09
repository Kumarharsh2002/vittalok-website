import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      headline: "Professional and Trustworthy Partner",
      content:
        "Vittalok has been instrumental in streamlining our financial operations. The team is exceptionally knowledgeable, providing tailored advice that perfectly aligns with our business goals. A highly reliable partner for any organization seeking accuracy, transparency, and innovation in financial management.",
      name: "Mr. Sandeep Mathur",
      role: "Founder & CEO",
      company: "Incredible Holidays",
      rating: 5,
    },
    {
      headline: "Excellent Expertise and Technology",
      content:
        "We’ve worked with Vittalok for over a year, and their blend of technology and professional expertise is unmatched. The consultants are proactive and consistently deliver clear, actionable insights. I highly recommend Vittalok to any business looking for smarter, tech-driven financial solutions.",
      name: "Mr. Bhavishya Gupta",
      role: "Founder & Partner",
      company: "Kisan Choice",
      rating: 5,
    },
    {
      headline: "Outstanding Service and Support",
      content:
        "The level of service we’ve received from Vittalok has been remarkable. The audit and consultancy teams are always available, offering timely support and strategic guidance. Truly a forward-thinking organisation that values its clients.",
      name: "Ms. Anchal Jaiswal",
      role: "Founder & CEO",
      company: "October",
      rating: 5,
    },
    {
      headline: "Reliable, Innovative, and Professional",
      content:
        "Vittalok stands out for its professionalism and innovative use of technology in financial services. Their team combines deep industry expertise with cutting-edge fintech solutions, making tax filing, auditing, and financial planning seamless. Their commitment to quality and integrity gives us complete peace of mind.",
      name: "Mr. Shantanu Verma",
      role: "Founder & CEO",
      company: "M/s. RL Infra Developers",
      rating: 5,
    },
    {
      headline: "A True Strategic Partner",
      content:
        "Working with Vittalok has transformed how we manage our finances. From tax consultancy to audit services, their platform simplifies every process while ensuring full compliance. What sets them apart is their strategic insight — they don’t just provide services; they help businesses grow with data-driven financial decisions.",
      name: "Mr. Pramod",
      role: "Founder & Partner",
      company: "M/s. Krishna Pharma",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover how Vittalok has empowered businesses with precision,
            trust, and innovation in financial management.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg flex flex-col h-full"
            >
              {/* Headline */}
              <h3 className="text-xl font-semibold text-amber-400 mb-3">
                {t.headline}
              </h3>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-slate-200 leading-relaxed mb-6 italic flex-grow">
                "{t.content}"
              </p>

              {/* Border + Name (perfectly aligned) */}
              <div className="border-t border-white/20 pt-4 mt-auto">
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">{t.name}</span>{" "}
                  <span className="text-slate-400">
                    — {t.role}, {t.company}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-amber-600 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule your free consultation today and discover how we can help
              you achieve your financial goals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
