import React from 'react';
import { TrendingUp, Calculator, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const resources = [
    {
      icon: Calculator,
      title: "Retirement Calculator",
      description: "Calculate how much you need to save for a comfortable retirement.",
      type: "Interactive Tool",
      color: "bg-blue-500",
      link: "/retirement"
    },
    {
      icon: TrendingUp,
      title: "Investment Risk Assessment",
      description: "Determine your risk tolerance and optimal asset allocation.",
      type: "Assessment",
      color: "bg-green-500",
      link: "/risk-assessment"
    },
    {
      icon: FileText,
      title: "Tax Planning Guide",
      description: "Comprehensive guide to tax-efficient investment strategies.",
      type: "PDF Guide",
      color: "bg-purple-500",
      link: "/tax-guide"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Financial Resources</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access our comprehensive library of tools, guides, and insights to help you make informed financial decisions.
          </p>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Free Financial Tools</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2 block">
                    {resource.type}
                  </span>
                  <h4 className="font-bold text-lg text-slate-800 mb-3">{resource.title}</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                  <Link
                    to={resource.link}
                    className="flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    Access Tool <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
