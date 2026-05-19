import { motion } from "motion/react";
import { IMAGES } from "@/lib/constants";
import { useState } from "react";

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = activeTab < IMAGES.beforeAfter.length ? activeTab : 0;

  return (
    <section className="py-24 md:py-32 bg-warm-white border-t border-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] font-bold text-xl md:text-2xl mb-4">Transformation</p>
          <h2 className="text-2xl md:text-3xl font-serif text-primary leading-[1.1] italic font-light">From Concept to Completion</h2>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {IMAGES.beforeAfter.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 uppercase tracking-[0.2em] text-xs font-bold rounded-full transition-all border border-beige shadow-sm ${
                currentTab === index 
                ? "bg-primary text-white" 
                : "bg-white text-primary hover:bg-cream"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            key={`before-${currentTab}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="bg-primary text-white py-4 px-6 text-center uppercase tracking-[0.2em] text-xs font-bold rounded-t-xl border border-primary">
              Before Site Condition
            </div>
            <div className="h-[400px] md:h-[500px] rounded-b-xl overflow-hidden shadow-lg border border-beige border-t-0 p-2 bg-white">
              <img 
                src={IMAGES.beforeAfter[currentTab]?.before} 
                alt="Before" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            key={`after-${currentTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="bg-white text-primary py-4 px-6 text-center uppercase tracking-[0.2em] text-xs font-bold rounded-t-xl border border-beige content-center drop-shadow-sm">
              Final Execution / Completed
            </div>
            <div className="h-[400px] md:h-[500px] rounded-b-xl overflow-hidden shadow-lg border border-beige border-t-0 p-2 bg-white">
              <img 
                src={IMAGES.beforeAfter[currentTab]?.after} 
                alt="After" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
