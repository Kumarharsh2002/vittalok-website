import React from "react";
import { TrendingUp, Calculator, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      icon: Calculator,
      title: "Retirement Calculator",
      description:
        "Calculate how much you need to save for a comfortable retirement.",
      type: "Interactive Tool",
      color: "bg-blue-500",
      link: "/retirement",
    },
    {
      icon: TrendingUp,
      title: "Investment Risk Assessment",
      description:
        "Determine your risk tolerance and optimal asset allocation.",
      type: "Assessment",
      color: "bg-green-500",
      link: "/risk-assessment",
    },
    {
      icon: FileText,
      title: "Tax Planning Guide",
      description:
        "Comprehensive guide to tax-efficient investment strategies.",
      type: "PDF Guide",
      color: "bg-purple-500",
      link: "/tax-guide",
    },
  ];

  const FirstIcon = resources[0].icon;

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Financial Resources
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access our comprehensive library of tools, guides, and insights to
            help you make informed financial decisions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Left Large Card */}
          <div className="md:col-span-2 relative bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>
            <div className="p-10 flex flex-col justify-between h-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
              <div>
                <div
                  className={`w-14 h-14 ${resources[0].color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <FirstIcon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2 block">
                  {resources[0].type}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {resources[0].title}
                </h3>
                <p className="text-slate-600 text-base mb-6">
                  {resources[0].description}
                </p>
              </div>
              <Link
                to={resources[0].link}
                className="inline-flex items-center bg-amber-500 text-black font-semibold rounded-full px-6 py-3 hover:bg-amber-400 transition"
              >
                Explore
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8">
            {resources.slice(1).map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex-1 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>
                  <div className="p-8 flex items-center justify-between relative z-10 group-hover:scale-[1.02] transition-transform duration-500 h-full">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide block">
                          {resource.type}
                        </span>
                        <h4 className="text-lg font-bold text-slate-800">
                          {resource.title}
                        </h4>
                      </div>
                    </div>
                    <Link
                      to={resource.link}
                      className="bg-amber-500 rounded-full p-3 hover:bg-amber-400 transition"
                    >
                      <ArrowRight className="w-5 h-5 text-black" />
                    </Link>
                  </div>
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
