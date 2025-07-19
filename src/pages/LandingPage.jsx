import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart2, LineChart, PieChart } from "lucide-react";
import { DataBlob } from '../components/signIn-signUp/DataBlob';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen min-w-screen flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-8 max-w-4xl mx-auto z-10">
        <div className="flex items-center justify-center gap-2 animate-fade-in">
          <BarChart2 className="w-8 h-8 text-[#6E59A5]" />
          <LineChart className="w-8 h-8 text-[#1EAEDB]" />
          <PieChart className="w-8 h-8 text-[#6E59A5]" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F2C] animate-fade-in">
          Transform Your Data Into
          <span className="text-[#6E59A5]"> Powerful Insights</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
          Visualize, analyze, and understand your data with our intuitive dashboard. Make better decisions with real-time analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-[#6E59A5] hover:bg-[#5A478C] text-white px-8"
            onClick={() => window.location.href = './SignUpForm'}
          >
            Get Started <ChevronRight className="ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#6E59A5] text-[#6E59A5] hover:bg-[#6E59A5] hover:text-white"
            onClick={() => window.location.href = '/demo'}
          >
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <DataBlob />
      </div>
    </div>
  );
};

export default HeroSection;