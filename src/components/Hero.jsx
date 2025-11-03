import React from 'react';
import { TrendingUp, Shield, Target ,Sparkles , Layers} from 'lucide-react';
import About from './About';
import Services from './Services';
import Resources from './Resources';
import Contact from './Contact';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> Financial Future</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Expert financial consulting services to help you achieve your wealth goals. 
                From investment planning to retirement strategies, we're your trusted partners 
                in financial success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">300+</div>
                <div className="text-slate-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">₹3M+</div>
                <div className="text-slate-300">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">10+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Expert Team</h4>
                    <p className="text-slate-300">Our team comprises experienced professionals with deep industry knowledge.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Tailored Solutions</h4>
                    <p className="text-slate-300">We provide customized solutions tailored to the unique needs of each client.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Client-Centric Approach</h4>
                    <p className="text-slate-300">We prioritize building long-term relationships with our clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Hero;