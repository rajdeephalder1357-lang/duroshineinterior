import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants";

export function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${BRAND_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream border-t border-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-gold uppercase tracking-[0.2em] font-bold text-xs mb-4">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-[1.1] italic font-light">Contact Us</h2>
            <p className="text-taupe font-light mb-12">
              Ready to transform your space? Get in touch with us to discuss your interior design needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-primary text-xl mb-1">Address</p>
                  <p className="text-taupe font-light whitespace-pre-line">{BRAND_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-primary text-xl mb-1">Call Us</p>
                  <a href={`tel:+91${BRAND_CONFIG.phone}`} className="text-taupe font-light hover:text-gold transition-colors">+91 {BRAND_CONFIG.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-primary text-xl mb-1">Email</p>
                  <a href={`mailto:${BRAND_CONFIG.email}`} className="text-taupe font-light hover:text-gold transition-colors">{BRAND_CONFIG.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-primary text-xl mb-1">Website</p>
                  <a href="https://duroshineinteriorllp.com" className="text-taupe font-light hover:text-gold transition-colors">duroshineinteriorllp.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href={`https://wa.me/91${BRAND_CONFIG.phone}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-[0.2em] text-xs hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-xl shadow-xl flex flex-col justify-center border border-beige"
          >
            <h3 className="font-serif text-primary text-2xl mb-8 border-b border-beige pb-4 italic">Send an Enquiry</h3>
            <form className="space-y-6" onSubmit={handleSendEmail}>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-taupe mb-2 font-bold">Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-beige pb-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-primary placeholder-taupe/40" 
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-taupe mb-2 font-bold">Phone / Email</label>
                <input 
                  type="text" 
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full border-b border-beige pb-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-primary placeholder-taupe/40" 
                  placeholder="Your contact detail"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-taupe mb-2 font-bold">Message</label>
                <textarea 
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-beige pb-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-primary placeholder-taupe/40 resize-none" 
                  placeholder="Tell us about your project"
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-taupe transition-colors mt-4 rounded-sm">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 h-[400px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-white"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.2007421387604!2d88.36184917571344!3d22.534213579518395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dce3f68a57%3A0x673bf0dbdf247ba8!2s21B%2C%20Hindustan%20Rd%2C%20Dover%20Terrace%2C%20Ballygunge%2C%20Kolkata%2C%20West%20Bengal%20700029%2C%20India!5e0!3m2!1sen!2sus!4v1708892288019!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
