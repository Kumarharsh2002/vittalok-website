import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Satisfied Clients" },
    { icon: Award, number: "$2.5B+", label: "Assets Under Management" },
    { icon: Clock, number: "15+", label: "Years of Experience" },
    { icon: Target, number: "98%", label: "Client Retention Rate" }
  ];

  const team = [
    {
      name: "Michael Johnson",
      role: "Senior Financial Advisor",
      credentials: "CFP®, CFA",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15+ years helping clients achieve financial independence through strategic planning."
    },
    {
      name: "Sarah Williams",
      role: "Investment Strategist",
      credentials: "CFA, MBA",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in portfolio management and risk assessment with a focus on sustainable investing."
    },
    {
      name: "David Chen",
      role: "Retirement Planning Specialist",
      credentials: "CFP®, ChFC",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specializes in comprehensive retirement strategies and estate planning solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Vittalok</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For over 15 years, Vittalok has been the trusted partner for individuals and families 
              seeking to build, protect, and transfer their wealth. Our team of certified financial planners 
              and investment professionals brings decades of combined experience to every client relationship.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that financial planning is not just about numbers—it's about understanding your 
              dreams, goals, and values, then creating a roadmap to help you achieve them. Our comprehensive 
              approach ensures that every aspect of your financial life works together harmoniously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                Our Philosophy
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors font-semibold">
                View Credentials
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Financial consultation meeting"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Trusted by</div>
              <div className="text-3xl font-bold">500+ Families</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Expert Team</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our certified financial professionals are committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h4 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h4>
              <p className="text-amber-600 font-semibold mb-1">{member.role}</p>
              <p className="text-slate-500 text-sm mb-4">{member.credentials}</p>
              <p className="text-slate-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;