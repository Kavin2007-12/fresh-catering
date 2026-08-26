import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageSquare, CheckCircle } from 'lucide-react';
import { siteData } from '../data/cateringData';

export default function VIPInquiryModal({ isOpen, onClose }) {
  const [eventType, setEventType] = useState('Wedding Reception');
  const [guestCount, setGuestCount] = useState('200 - 500 Guests');
  const [cateringStyle, setCateringStyle] = useState('Traditional Banana Leaf Feast');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message with VIP details
    const text = encodeURIComponent(
      `*VIP Catering Proposal Request*\n\n` +
      `👤 *Name:* ${name || 'Valued Client'}\n` +
      `📞 *Phone:* ${phone || 'Not provided'}\n` +
      `📅 *Event Date:* ${eventDate || 'Flexible'}\n` +
      `🎉 *Event Type:* ${eventType}\n` +
      `👥 *Guest Count:* ${guestCount}\n` +
      `🍽️ *Catering Style:* ${cateringStyle}\n\n` +
      `I would like to receive a custom proposal and discuss private tasting options.`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/${siteData.brand.whatsapp}?text=${text}`, '_blank');
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#091A14] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-white z-10 overflow-hidden"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full filter blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-[11px] font-title tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VIP BESPOKE PROPOSAL</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Reserve Your Exceptional Feast
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light">
                  Share your event details to receive a custom proposal and schedule a private studio tasting session.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Event Type Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-title tracking-wider text-[#C5A059] uppercase block">
                    1. Select Event Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Wedding Reception',
                      'Grand Gala',
                      'Housewarming',
                      'Private Villa Party'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setEventType(type)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all text-center ${
                          eventType === type
                            ? 'bg-[#006B46] border-[#C5A059] text-white shadow-lg'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-title tracking-wider text-[#C5A059] uppercase block">
                    2. Estimated Guest Count
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['50 - 200 Guests', '200 - 500 Guests', '500 - 2000+ Guests'].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setGuestCount(count)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all text-center ${
                          guestCount === count
                            ? 'bg-[#006B46] border-[#C5A059] text-white shadow-lg'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Catering Style */}
                <div className="space-y-2">
                  <label className="text-xs font-title tracking-wider text-[#C5A059] uppercase block">
                    3. Catering Presentation Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      'Traditional Banana Leaf Feast',
                      'Illuminated Royal Buffet',
                      'Live Cooking Counters'
                    ].map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setCateringStyle(style)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all text-center ${
                          cateringStyle === style
                            ? 'bg-[#006B46] border-[#C5A059] text-white shadow-lg'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs: Name, Phone, Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div>
                    <label className="text-[11px] text-gray-300 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anbu Selvan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-300 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-300 block mb-1">Event Date</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full btn-editorial-solid py-3.5 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 bg-gradient-to-r from-[#006B46] to-[#044C33] border border-[#C5A059]/40 shadow-xl"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                    <span>REQUEST CUSTOM PROPOSAL VIA WHATSAPP</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#006B46]/30 border-2 border-[#C5A059] text-[#C5A059] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Proposal Request Sent</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Connecting you directly to our Head Concierge on WhatsApp...
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
