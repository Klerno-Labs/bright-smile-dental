"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { useState } from "react";
const steps = [
  {
    id: "concern",
    question: "What concerns you most about your smile?",
    options: ["Teeth Alignment", "Whitening/Stains", "Missing Teeth", "General Checkup"],
  },
  {
    id: "urgency",
    question: "How soon are you looking to start treatment?",
    options: ["Immediately (Pain/Emergency)", "Within 1 Month", "Within 3 Months", "Just Exploring"],
  },
  {
    id: "goal",
    question: "What is your primary goal?",
    options: ["Health & Function", "Cosmetic Improvement", "Confidence Boost", "Preventive Care"],
  },
];

export function SmileAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 200);
    } else {
      setIsComplete(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  return (
    <section className="py-20 bg-gradient-mint relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-medical/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-medical font-accent font-bold tracking-widest uppercase text-sm">
            Personalized Care
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-4 mb-6">
            Find Your Perfect Treatment
          </h2>
          <p className="text-lg text-gray-600">
            Take our 30-second assessment to get a personalized recommendation from our doctors.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto border border-gray-100">
          {!isComplete ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-semibold text-gray-400">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all duration-300",
                        i <= currentStep ? "bg-medical w-8" : "bg-gray-200 w-4"
                      )}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center md:text-left">
                  {steps[currentStep].question}
                </h3>
                <div className="space-y-3">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                        answers[currentStep] === option
                          ? "border-medical bg-medical/5"
                          : "border-gray-100 hover:border-medical/50 hover:bg-gray-50"
                      )}
                    >
                      <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {option}
                      </span>
                      {answers[currentStep] === option ? (
                        <CheckCircle className="w-5 h-5 text-medical" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-medical transition-colors" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <div className="text-center py-8 animate-fade-up">
              <div className="w-20 h-20 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-medical" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Assessment Complete!
              </h3>
              <p className="text-gray-600 mb-8">
                Based on your answers, we recommend a comprehensive consultation with our Cosmetic Specialist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={reset} className="w-full sm:w-auto">
                  Start Over
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}