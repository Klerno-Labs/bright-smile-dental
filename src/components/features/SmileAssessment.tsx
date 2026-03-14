"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    question: "What is your primary smile concern?",
    options: ["Teeth Alignment", "Whitening", "Missing Teeth", "Chipped/Cracked", "General Checkup"],
  },
  {
    id: 2,
    question: "How soon are you looking to start treatment?",
    options: ["Immediately", "Within 1 month", "Within 3 months", "Just researching"],
  },
  {
    id: 3,
    question: "Have you visited a dentist in the last 12 months?",
    options: ["Yes", "No"],
  },
];

export function SmileAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <section className="py-section-gap bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#008080]" />
          </div>
          <h2 className="font-heading font-bold text-3xl text-[#0F3460] mb-4">Assessment Complete!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Based on your answers, we recommend a <span className="font-bold text-[#0F3460]">Comprehensive Consultation</span>. 
            Our team will contact you shortly to discuss your options for {answers[0].toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}>
              Book Consultation
             </Button>
             <Button size="lg" variant="outline" onClick={reset}>Start Over</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-section-gap bg-gradient-to-br from-[#F0FDFA] to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl text-[#0F3460] mb-4">Find Your Perfect Smile</h2>
          <p className="text-lg text-gray-600">Take our 30-second assessment to get a personalized recommendation.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#E5E7EB]">
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-2 mb-10">
            <div 
              className="bg-[#008080] h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-[#0F3460]">
                {steps[currentStep].question}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleNext(option)}
                    className="text-left p-6 rounded-xl border-2 border-[#E5E7EB] hover:border-[#008080] hover:bg-[#008080]/5 transition-all duration-200 flex items-center justify-between group"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-[#0F3460]">{option}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#008080] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}