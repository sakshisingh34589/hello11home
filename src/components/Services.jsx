import React from 'react';
import { Home, Hotel, Building2, ShieldCheck, MapPin, PhoneCall, Sparkles, Search } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-16 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center space-y-4">
          <span className="inline-block bg-[#EAB308] text-black font-bold text-xs tracking-widest uppercase px-3 py-1 rounded">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Hello11 Home helps users find suitable spaces based on their requirements with absolute ease.
          </p>
        </div>

        {/* --- CORE CATEGORIES (3 Big Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Residential Spaces */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:bg-[#EAB308] transition-colors">
              <Home className="w-7 h-7 text-[#EAB308] group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-extrabold text-black mb-4">Residential Spaces</h3>
            <ul className="space-y-2.5 text-slate-600 text-sm font-medium">
              <li className="flex items-center gap-2">&bull; Rental Homes</li>
              <li className="flex items-center gap-2">&bull; Cozy Rooms</li>
              <li className="flex items-center gap-2">&bull; Flats & Apartments</li>
              <li className="flex items-center gap-2">&bull; PG Accommodations</li>
            </ul>
          </div>

          {/* Card 2: Hospitality Spaces */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:bg-[#EAB308] transition-colors">
              <Hotel className="w-7 h-7 text-[#EAB308] group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-extrabold text-black mb-4">Hospitality Spaces</h3>
            <ul className="space-y-2.5 text-slate-600 text-sm font-medium">
              <li className="flex items-center gap-2">&bull; Hotel Rooms</li>
              <li className="flex items-center gap-2">&bull; Premium Guest Houses</li>
              <li className="flex items-center gap-2">&bull; Short-Term Stays</li>
            </ul>
          </div>

          {/* Card 3: Commercial Spaces */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:bg-[#EAB308] transition-colors">
              <Building2 className="w-7 h-7 text-[#EAB308] group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-extrabold text-black mb-4">Commercial Spaces</h3>
            <ul className="space-y-2.5 text-slate-600 text-sm font-medium">
              <li className="flex items-center gap-2">&bull; Modern Office Spaces</li>
              <li className="flex items-center gap-2">&bull; Shops & Commercial Properties</li>
              <li className="flex items-center gap-2">&bull; Shared Workspaces</li>
            </ul>
          </div>

        </div>

        {/* --- KEY BENEFITS SUB-SECTION (User-friendly Highlight) --- */}
        <div className="pt-8 border-t border-slate-200">
          <h4 className="text-center text-lg font-bold uppercase tracking-wider text-slate-800 mb-10">
            Why Choose Hello11 Home?
          </h4>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            
            {/* Benefit 1 */}
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <Search className="w-5 h-5 text-black" />
              </div>
              <h5 className="font-bold text-sm text-black mb-1">Easy Property Search</h5>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <h5 className="font-bold text-sm text-black mb-1">Nearby Location</h5>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <h5 className="font-bold text-sm text-black mb-1">Verified Listings</h5>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <PhoneCall className="w-5 h-5 text-black" />
              </div>
              <h5 className="font-bold text-sm text-black mb-1">Quick Owner Contact</h5>
            </div>

            {/* Benefit 5 */}
            <div className="col-span-2 lg:col-span-1 flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3 shadow-md">
                <Sparkles className="w-5 h-5 text-[#EAB308]" />
              </div>
              <h5 className="font-bold text-sm text-black mb-1">User-Friendly Experience</h5>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}