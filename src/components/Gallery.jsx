import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  // गैलरी के लिए 6 प्रीमियम, रियल और कॉपीराइट-फ्री इमेजेस (Full View)
  const galleryItems = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      title: "Modern Flat & Home",
      category: "Homes"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      title: "Cozy Rental Room",
      category: "Rooms"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      title: "Premium Hotel Suite",
      category: "Hotels"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      title: "Executive Office Space",
      category: "Office Spaces"
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
      title: "Commercial Property Tower",
      category: "Commercial"
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      title: "Comfortable PG Stay",
      category: "Rooms / PGs"
    }
  ];

  // Lightbox State Management
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  // फोटो पर क्लिक करने पर लाइटबॉक्स खोलने के लिए फ़ंक्शन
  const openLightbox = (item) => {
    setActiveImage(item);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // बैकग्राउंड स्क्रॉल रोकने के लिए
  };

  // लाइटबॉक्स बंद करने के लिए फ़ंक्शन
  const closeLightbox = () => {
    setIsOpen(false);
    setActiveImage(null);
    document.body.style.overflow = 'unset'; // स्क्रॉल वापस चालू करने के लिए
  };

  return (
    <section id="gallery" className="py-20 px-6 md:px-16 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center space-y-3">
          <span className="inline-block bg-[#EAB308] text-black font-bold text-xs tracking-widest uppercase px-3 py-1 rounded">
            Visual Tour
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
            Property Showcase
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            Take a look at our high-quality listings featuring verified homes, rooms, hotels, and professional spaces.
          </p>
        </div>

        {/* --- RESPONSIVE GRID LAYOUT --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => openLightbox(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-100 shadow-sm cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Property Image */}
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover Dark Overlay & Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#EAB308] text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-extrabold text-lg tracking-wide flex items-center justify-between">
                  {item.title}
                  <Maximize2 className="w-5 h-5 text-white/80" />
                </h3>
              </div>
              
              {/* Mobile Device Visible Badge (ताकि मोबाइल यूजर्स को भी पता चले ये क्या है) */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#EAB308] lg:hidden">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- LIGHTBOX MODAL PREVIEW (POP-UP WINDOW) --- */}
      {isOpen && activeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-all duration-300 animate-fade-in"
          onClick={closeLightbox} // बाहर क्लिक करने पर भी बंद हो जाएगा
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-neutral-900 text-white rounded-full hover:bg-[#EAB308] hover:text-black transition-colors z-[110]"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[75vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800"
            onClick={(e) => e.stopPropagation()} // इमेज पर क्लिक करने से पॉपअप बंद न हो
          >
            <img 
              src={activeImage.img} 
              alt={activeImage.title} 
              className="w-full h-auto max-h-[75vh] object-contain mx-auto"
            />
          </div>

          {/* Lightbox Caption */}
          <div 
            className="text-center mt-4 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[#EAB308] text-xs font-bold uppercase tracking-widest">
              {activeImage.category}
            </span>
            <h4 className="text-white font-black text-xl tracking-wide">
              {activeImage.title}
            </h4>
          </div>
        </div>
      )}
    </section>
  );
}