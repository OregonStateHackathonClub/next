'use client';

import { useState } from 'react';
import { StepOne } from "@/components/application/StepOne";
import { StepTwo } from "@/components/application/StepTwo";
import { StepThree } from "@/components/application/StepThree";
import { StepFour } from "@/components/application/StepFour";
import ApplicationLayout from "@/components/application/ApplicationLayout";


export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };  

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  return (
    <ApplicationLayout currentStep={currentStep} totalSteps={4} handleNext={handleNext} handleBack={handleBack}>
      {renderStepContent()}
    </ApplicationLayout>
  );
}
