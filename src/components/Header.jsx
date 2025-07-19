import React, { useEffect, useState } from "react";
// import * as echarts from "echarts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const tourSteps = [
    {
      title: "Welcome to DataViz",
      description:
        "Let's take a quick tour of our powerful data visualization platform.",
      element: "hero-section",
    },
    {
      title: "Powerful Features",
      description:
        "Explore our AI-powered features that help you create stunning visualizations in minutes.",
      element: "features-section",
    },
    {
      title: "Interactive Demo",
      description:
        "Try our interactive demo to see how easy it is to transform your data into beautiful visualizations.",
      element: "demo-section",
    },
    {
      title: "Customer Success Stories",
      description:
        "See how other companies are using DataViz to transform their data workflows.",
      element: "testimonials-section",
    },
  ];

  const startTour = () => {
    setCurrentStep(0);
    setShowTour(true);
    highlightElement(tourSteps[0].element);
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      const nextIndex = currentStep + 1;
      setCurrentStep(nextIndex);
      highlightElement(tourSteps[nextIndex].element);
    } else {
      endTour();
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      const prevIndex = currentStep - 1;
      setCurrentStep(prevIndex);
      highlightElement(tourSteps[prevIndex].element);
    }
  };

  const endTour = () => {
    setShowTour(false);
    setCurrentStep(0);
    removeHighlight();
  };

  const highlightElement = (elementId) => {
    removeHighlight();
    const element = document.getElementById(elementId);
    if (element) {
      element.style.position = "relative";
      element.style.zIndex = "60";
      element.style.boxShadow = "0 0 0 9999px rgba(0, 0, 0, 0.75)";
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const removeHighlight = () => {
    document.querySelectorAll("section").forEach((section) => {
      section.style.position = "";
      section.style.zIndex = "";
      section.style.boxShadow = "";
    });
  };

  useEffect(() => {
    return () => {
      removeHighlight();
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
        className={`fixed top-0 p-3 px-5 md:px-16 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="mr-8 ml-2">
              <div className="flex items-center">
                <div className="text-3xl font-bold">
                  <i className="fas fa-chart-bar mr-2"></i>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                    dataviz
                  </span>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium hover:text-indigo-400 transition-colors"
              >
                Product <i className="fas fa-chevron-down text-xs ml-1"></i>
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-indigo-400 transition-colors"
              >
                Docs <i className="fas fa-chevron-down text-xs ml-1"></i>
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-indigo-400 transition-colors"
              >
                Example Apps
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-indigo-400 transition-colors"
              >
                Resources <i className="fas fa-chevron-down text-xs ml-1"></i>
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-indigo-400 transition-colors"
              >
                Solutions <i className="fas fa-chevron-down text-xs ml-1"></i>
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-indigo-400 transition-colors"
              >
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4 mr-4">
            <Button
              variant="outline"
              className="text-black bg-white border-gray-700 hover:bg-gray-500 !rounded-button whitespace-nowrap cursor-pointer"
              onClick={startTour}
            >
              TAKE A TOUR
            </Button>

            <Dialog open={showTour} onOpenChange={setShowTour}>
              <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {tourSteps[currentStep].title}
                  </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-gray-300 mb-4">
                    {tourSteps[currentStep].description}
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2">
                      {tourSteps.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentStep
                              ? "bg-indigo-500"
                              : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        className="border-gray-700 text-white hover:bg-gray-800 !rounded-button whitespace-nowrap"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                      >
                        <i className="fas fa-arrow-left mr-2"></i> Previous
                      </Button>
                      <Button
                        className="bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap"
                        onClick={nextStep}
                      >
                        {currentStep === tourSteps.length - 1
                          ? "Finish"
                          : "Next"}
                        {currentStep < tourSteps.length - 1 && (
                          <i className="fas fa-arrow-right ml-2"></i>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button className=" bg-indigo-600 hover:bg-indigo-800 hover:border-indigo-950 !rounded-button whitespace-nowrap cursor-pointer">
              GET A DEMO
            </Button>
            
          </div>
        </div>
      </header>
  );
};

export default Header;