import React, { useState, useEffect } from 'react';

export default function Hero() {
  // 100% वर्किंग, कॉपीराइट-फ्री, असली भारतीय पूरे कमरों (Full Room View) की तस्वीरें
  const propertyCards = [
    {
      // भारतीय फ्लैट/लिविंग रूम का पूरा व्यू (Full Room View)
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      tag: "Normal Flat & Apartment"
    },
    {
      // भारतीय घरों जैसा सादा और रियल कमरा (Full Bed & Room View)
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      tag: "Rental Room & Home"
    },
    {
      // भारत के शहरों में मिलने वाला साफ-सुथरा PG रूम
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      tag: "PG Accommodation"
    },
    {
      // भारतीय शहरों का रियल होटल/गेस्ट हाउस रूम व्यू
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      tag: "Hotels & Guest House"
    },
    {
      // असली वर्किंग स्पेस/ऑफिस रूम जो भारत में कॉमन है
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      tag: "Commercial Office Space"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ऑटो-स्लाइडिंग हर 4 सेकंड में
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyCards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [propertyCards.length]);

  return (
    <section id="explore" className="relative w-full bg-white pt-12 pb-20 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="lg:col-span-5 space-y-6 z-10">
          <span className="inline-block bg-black text-[#EAB308] font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded">
            Hello11 Home
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
            Find Your Perfect <br />
            <span className="bg-black text-[#EAB308] px-2 py-1 inline-block mt-2 rounded">Space Near You</span>
          </h1>
          
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            Discover rental homes, rooms, hotels, PGs, office spaces, and commercial properties with ease through Hello11 Home.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#EAB308] hover:bg-amber-500 text-black font-extrabold px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105">
              Explore Properties
            </button>
            <button className="bg-black hover:bg-slate-900 text-white font-bold px-6 py-3 rounded-full border border-black shadow-lg transition-all transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: HORIZONTAL SLIDING PHOTO CARDS --- */}
        <div className="lg:col-span-7 relative w-full overflow-hidden py-4">
          
          {/* Card Wrapper */}
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
            
            {/* Sliding Track */}
            <div 
              className="absolute inset-0 flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {propertyCards.map((card, index) => (
                <div key={index} className="w-full h-full shrink-0 relative">
                  <img 
                    src={card.img} 
                    alt={card.tag}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* फोटो के ऊपर कैटेगरी टैग */}
                  <div className="absolute top-4 left-4 bg-black/80 text-[#EAB308] backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {card.tag}
                  </div>
                </div>
              ))}
            </div>

            {/* नेक्स्ट और प्रीवियस बटन्स */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-20">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? propertyCards.length - 1 : prev - 1))}
                className="w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center font-bold text-sm transition-colors"
              >
                &larr;
              </button>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % propertyCards.length)}
                className="w-8 h-8 rounded-full bg-[#EAB308] hover:bg-amber-500 text-black flex items-center justify-center font-bold text-sm transition-colors"
              >
                &rarr;
              </button>
            </div>

          </div>

          {/* डॉट्स इंडिकेटर */}
          <div className="flex justify-center gap-2 mt-4">
            {propertyCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-black w-6' : 'bg-slate-300 w-2'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}