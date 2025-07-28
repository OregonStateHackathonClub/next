import React from 'react';
import { Navbar } from "@/components/navbar";


interface LayoutProps {
    children: React.ReactNode;
    currentStep: number;
    totalSteps: number;
    handleNext: ()=> void;
    handleBack: ()=> void;
}

export default function Layout({ children, currentStep, totalSteps, handleNext, handleBack }: LayoutProps) {
return (
    <div className = "relative min-h-screen flex flex-col ">
        <Navbar />
        <main className="flex-grow flex justify-center px-8 relative">
            <div className="w-full max-w-2xl mx-auto py-10 pb-28">
                {children}
            </div>

            <div className="absolute bottom-10 w-full max-w-2xl px-8 flex justify-start items-center z-10">
            {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className=" ml-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Continue
          </button>

            </div>
        </main>

        

        <footer className="py-4 px-8 flex justify-between items-center">
            <div className="ml-8 text-gray-600 fixed bottom-4 right-8 text-gray-600 z-10">
            {currentStep} / {totalSteps}
            </div>
        </footer>
    </div>
  );



}

