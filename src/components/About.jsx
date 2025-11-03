import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "300+", label: "Satisfied Clients" },
    { icon: Award, number: "₹3M+", label: "Assets Under Management" },
    { icon: Clock, number: "10+", label: "Years of Experience" },
    { icon: Target, number: "98%", label: "Client Retention Rate" }
  ];

  const team = [
    {
      name: "Richi Agrawal",
      role: "CEO",
      credentials: "CA",
      // image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Finance & audit professional with over 10 years of experience in Statutory Audit, Internal Audit, Regulatory Compliance, and financial management, and a qualified Chartered Accountant. "
    },
    {
      name: "Sarah Williams",
      role: "Investment Strategist",
      credentials: "CFA, MBA",
      // image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in portfolio management and risk assessment with a focus on sustainable investing."
    },
    {
      name: "David Chen",
      role: "Retirement Planning Specialist",
      credentials: "CFP®, ChFC",
      // image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
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
             VITTALOK PRIVATE LIMITED, a company registered under the Companies Act, 2013, and recognized under the Startup India initiative and the MSME Act since 2024,
             <p className="text-lg text-slate-600 mb-6 leading-relaxed">The main objectives of the firm are:</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
To provide services related to accounting, bookkeeping, internal and external auditing, financial and tax consultancy, compliance management, payroll processing, financial planning, and allied business and professional support services, whether through digital platforms or traditional methods, and to act as advisors, consultants, or service providers in all such areas.
            </p>
            <p className='text-lg text-slate-600 mb-8 leading-relaxed'>To carry on the business of a financial technology company engaged in the development, design, integration, implementation, maintenance and support of financial technology solutions, including but not limited to software, platforms, mobile applications, artificial intelligence (AI), robotic process automation (RPA), blockchain, data analytics, and other digital tools for use in banking, finance, insurance, accounting, taxation and compliance.</p>
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
              <div className="text-3xl font-bold">300+ Families</div>
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