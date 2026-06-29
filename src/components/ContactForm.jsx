import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '', 
    mobileNumber: '', 
    emailAddress: '', 
    requirementType: 'Rental Home', 
    message: '',
    honeypot: '' // HoneyPot फील्ड यहाँ स्टेट में जोड़ दी गई है
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // स्पैम प्रोटेक्शन चेक
    if (formData.honeypot) {
      console.log("Spam bot detected!");
      return; // अगर बॉट ने इसे भरा है, तो फॉर्म सबमिट नहीं होगा
    }

    // यहाँ अपना सबमिशन लॉजिक लिखें (जैसे API call)
    alert(`Thank you ${formData.fullName}! Your request has been received.`);
    
    // फॉर्म रिसेट करें
    setFormData({ fullName: '', mobileNumber: '', emailAddress: '', requirementType: 'Rental Home', message: '', honeypot: '' });
  };

  return (
    <div className="py-10 md:py-20 bg-slate-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-slate-100">
          
          {/* LEFT PANEL */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-black text-[#EAB308] font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded mb-3">
                Hello11 Home
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-black uppercase leading-tight">
                Get in Touch With Us Today
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 font-black uppercase">Mobile Number</p>
                <a href="tel:+919876543210" className="font-bold text-sm block">+91 98765 43210</a>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                <p className="text-[10px] text-amber-600 font-black uppercase">Email Address</p>
                <a href="mailto:info@hello11home.com" className="font-bold text-sm block">info@hello11home.com</a>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 font-black uppercase">Office Address</p>
                <p className="font-bold text-sm">11, Corporate Tower, Sector 62, Noida</p>
              </div>
            </div>

            <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-200">
              <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5721118116515!2d77.37121657621415!3d28.612616885331666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x390ce56041695555%3A0x6b8014526df6d38e!2sNoida%20Sector%2062!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" className="w-full h-full border-0"></iframe>
            </div>
          </div>

          {/* RIGHT PANEL: FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* HoneyPot Field - इसे बॉट्स भर देते हैं और इंसान नहीं देख पाते */}
            <input 
              type="text" 
              name="honeypot" 
              style={{ display: 'none' }} 
              value={formData.honeypot} 
              onChange={handleChange} 
              tabIndex="-1" 
              autoComplete="off" 
            />

            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:border-black outline-none transition-all" required />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="tel" name="mobileNumber" placeholder="Mobile" value={formData.mobileNumber} onChange={handleChange} className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:border-black outline-none" required />
              <input type="email" name="emailAddress" placeholder="Email" value={formData.emailAddress} onChange={handleChange} className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:border-black outline-none" required />
            </div>

            <select name="requirementType" value={formData.requirementType} onChange={handleChange} className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:border-black outline-none bg-white">
              <option>Rental Home</option>
              <option>PG / Room</option>
              <option>Commercial Unit</option>
            </select>

            <textarea name="message" rows="3" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:border-black outline-none"></textarea>
            
            <button type="submit" className="w-full bg-[#EAB308] hover:bg-black text-black hover:text-[#EAB308] font-black uppercase py-4 rounded-xl transition-all">
              Submit Request
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}