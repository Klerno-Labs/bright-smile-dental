import React from "react";
import { Shield, Award, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const trustFactors = [
  {
    icon: Shield,
    title: "Top Rated",
    description: "4.9/5 Stars on Google",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Best of Houston 2023",
  },
  {
    icon: Clock,
    title: "Same Day",
    description: "Emergency Appointments",
  },
  {
    icon: Users,
    title: "15+ Years",
    description: "Serving Houston Families",
  },
];

export function TrustBar() {
  return (
    <section className="bg-surface py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustFactors.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-medical mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}