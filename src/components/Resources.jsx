import React from 'react';
import { BookOpen, TrendingUp, Calculator, FileText, Download, ArrowRight } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: Calculator,
      title: "Retirement Calculator",
      description: "Calculate how much you need to save for a comfortable retirement",
      type: "Interactive Tool",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Investment Risk Assessment",
      description: "Determine your risk tolerance and optimal asset allocation",
      type: "Assessment",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "Tax Planning Guide",
      description: "Comprehensive guide to tax-efficient investment strategies",
      type: "PDF Guide",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      title: "Estate Planning Checklist",
      description: "Essential steps to protect your legacy and loved ones",
      type: "Checklist",
      color: "bg-amber-500"
    }
  ];

  const articles = [
    {
      title: "5 Investment Mistakes to Avoid in 2024",
      excerpt: "Learn about common investment pitfalls and how to avoid them in today's market environment.",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Planning for Healthcare Costs in Retirement",
      excerpt: "Understanding and preparing for one of retirement's biggest expenses.",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "The Power of Compound Interest",
      excerpt: "How starting early can dramatically impact your long-term wealth building.",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Financial Resources</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access our comprehensive library of tools, guides, and insights to help you make informed financial decisions
          </p>
        </div>

        {/* Tools Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Free Financial Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
                  <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2 block">
                    {resource.type}
                  </span>
                  <h4 className="font-bold text-lg text-slate-800 mb-3">{resource.title}</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                  <button className="flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors " onClick={""}>
                    Access Tool <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Articles Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800">Latest Insights</h3>
            <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              View All Articles →
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-bold text-xl text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-4">{article.excerpt}</p>
                  <button className="flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-slate-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly financial insights, market updates, and exclusive resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;