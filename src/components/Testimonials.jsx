import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert & Linda Martinez",
      role: "Retired Educators",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Vittalok helped us retire comfortably at 62. Their retirement planning strategy exceeded our expectations, and we now have the financial freedom to travel and enjoy our golden years without worry.",
      rating: 5
    },
    {
      name: "Jennifer Thompson",
      role: "Small Business Owner",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "As a business owner, I needed comprehensive financial planning that could adapt to my changing needs. The team's expertise in both personal and business finance has been invaluable to my success.",
      rating: 5
    },
    {
      name: "Mark & Susan Davis",
      role: "Young Professionals",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Starting our financial journey in our 30s felt overwhelming, but Vittalok made it simple. They created a clear roadmap for our goals, from buying our first home to planning for our children's education.",
      rating: 5
    },
    {
      name: "Patricia Wilson",
      role: "Healthcare Professional",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The investment strategies they developed for me have consistently outperformed the market. Their attention to detail and proactive communication gives me complete confidence in my financial future.",
      rating: 5
    },
    {
      name: "James Rodriguez",
      role: "Tech Executive",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Working with Vittalok has been transformative. They helped me optimize my stock options, plan for early retirement, and create a tax-efficient investment strategy that's saving me thousands annually.",
      rating: 5
    },
    {
      name: "Carol & Tom Anderson",
      role: "Empty Nesters",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "After our children left for college, we needed to refocus our financial priorities. The team helped us restructure our portfolio and create an estate plan that protects our legacy for future generations.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-amber-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-amber-400 mb-4 opacity-50" />
              <p className="text-slate-200 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-amber-600 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule your free consultation today and discover how we can help you achieve your financial goals
            </p>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;