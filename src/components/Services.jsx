import React, { useState } from "react";
import {
  Shield,
  FileText,
  Briefcase,
  BarChart,
  Cpu,
  BookOpen,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Shield,
      title: "Advisory Services",
      description:
        "Comprehensive assurance and risk management solutions to strengthen governance and internal controls.",
      features: [
        "Opinions on accounting and auditing matters",
        "GST Audits",
        "Special audits for multilateral funded projects",
        "Internal Control Review & Corporate Governance",
        "Risk Assessment & IFC (Design, Implementation & Testing)",
        "Design & Review of SOPs and Accounting Manuals",
        "ERM (Enterprise Risk Management)",
        "Business Process Documentation"
      ]
    },
    {
      icon: FileText,
      title: "Tax Advisory",
      description:
        "End-to-end tax advisory services covering domestic, international, and indirect taxation.",
      features: [
        "Direct Tax Compliance (Corporate, Individual, Non-residents)",
        "Transaction Tax & Advisory",
        "Formation of Trusts, Expat PF withdrawal",
        "GST Advisory, Reconciliation & Refunds",
        "GST Registration & Annual Return Filing",
        "GST Audits & Compliance",
        "ITC & Revenue Reconciliation with AI-Tools",
        "Tax Planning & Optimization"
      ]
    },
    {
      icon: Briefcase,
      title: "Corporate Secretarial Services",
      description:
        "Professional secretarial services ensuring compliance with corporate laws and governance.",
      features: [
        "Company Incorporation Services",
        "Ongoing Compliance Services",
        "Regulatory Reporting & Annual Filings",
        "Corporate Restructuring Assistance"
      ]
    },
    {
      icon: BarChart,
      title: "Consultancy Services",
      description:
        "Strategic consultancy to improve business performance and operational efficiency.",
      features: [
        "Business Strategy Development & Restructuring",
        "Operational Efficiency & Process Optimization",
        "Marketing & Sales Optimization",
        "Financial Planning, Budgeting & Forecasting",
        "Human Resource Consulting & Talent Development"
      ]
    },
    {
      icon: Cpu,
      title: "Information Technology",
      description:
        "Leveraging IT solutions to enable digital transformation and smarter financial management.",
      features: [
        "Technology Integration & Digital Transformation",
        "Customized Financial Software Solutions",
        "Data Analytics & ERP Post-Implementation Review"
      ]
    },
    {
      icon: BookOpen,
      title: "Other Services",
      description:
        "Value-added services for compliance, education, and financial empowerment.",
      features: [
        "Educational Programs & Financial Literacy Workshops",
        "Registrations (PAN, TAN, GST, EPF, ESIC)",
        "Book-keeping & Accounting",
        "Compliance with Income Tax, GST, EPF & ESIC laws",
        "Preparation of Financial Statements",
        "Asset Verification & Record Updating"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive professional services designed to help you achieve
            compliance, optimize operations, and drive growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 relative animate-fadeIn"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">
              <selectedService.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-slate-600 mb-6">{selectedService.description}</p>

            <ul className="space-y-2">
              {selectedService.features.map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
