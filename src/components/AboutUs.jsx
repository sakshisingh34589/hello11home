import React from 'react';
import { Target, Compass, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT SIDE: REAL INDIAN PROPERTY IMAGE & LOGO --- */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* डेकोरेटिव बैकग्राउंड शेप */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#EAB308]/20 to-transparent rounded-3xl blur-xl -z-10"></div>
          
          {/* भारतीय रियल एस्टेट की वास्तविक और साफ़ तस्वीर (Copyright-Free) */}
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80" 
              alt="Indian Property Building"
              className="w-full h-full object-cover"
            />
            
            {/* तस्वीर के ऊपर तैरता हुआ आपका ब्रांड लोगो */}
            <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 border border-neutral-800 shadow-2xl">
              <div className="w-12 h-12 rounded-full border-2 border-[#EAB308] bg-white overflow-hidden shrink-0">
                <img src="/logo.png" alt="Hello11 Home Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-wider">Hello11 Home</h4>
                <p className="text-[#EAB308] text-xs font-bold">Trusted Platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: DETAILED CONTENT & MISSION --- */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* छोटा अट्रैक्टिव टैग */}
          <span className="inline-block bg-black text-[#EAB308] font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded">
            Who We Are
          </span>
          
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight uppercase">
            About Hello11 Home
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Hello11 Home is a trusted platform dedicated to simplifying property and space discovery. 
            Whether you need a room for living, a hotel for a temporary stay, or an office for your business, 
            Hello11 Home makes the search process fast, convenient, and reliable.
          </p>

          <div className="h-px bg-slate-100 my-4"></div>

          {/* फीचर्स / मिशन ग्रिड (Icons के साथ) */}
          <div className="space-y-5">
            
            {/* Mission Item */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                <Target className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-extrabold text-black text-base uppercase tracking-wide">Our Mission</h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  To connect people with the right rental and commercial spaces in their preferred locations effortlessly.
                </p>
              </div>
            </div>

            {/* Goal Item */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0 mt-1">
                <Compass className="w-5 h-5 text-[#EAB308]" />
              </div>
              <div>
                <h3 className="font-extrabold text-black text-base uppercase tracking-wide">Our Goal</h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  To create a seamless experience where users can discover, compare, and connect with property providers in just a few clicks.
                </p>
              </div>
            </div>

            {/* Trust Item */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-extrabold text-black text-base uppercase tracking-wide">Reliable Connections</h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  Ensuring a transparent and direct bridge between genuine space seekers and trusted property owners.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}