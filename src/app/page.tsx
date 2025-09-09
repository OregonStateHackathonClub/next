"use client";

import { useState } from "react";
import { StepOne } from "@/components/application/StepOne";
import { StepTwo } from "@/components/application/StepTwo";
import { StepThree } from "@/components/application/StepThree";
import { StepFour } from "@/components/application/StepFour";
import ApplicationLayout from "@/components/application/ApplicationLayout";
import { ApplicationData } from "@/components/application/ApplicationData";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    teamMembers: [],
    projectName: "",
    projectDescription: "",
    proposalFile: null,
    supportingMedia: null,
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Application Data:", applicationData);
      console.log("Team Members:", applicationData.teamMembers);
      console.log("Project Name:", applicationData.projectName);
      console.log("Project Description:", applicationData.projectDescription);
      console.log("Proposal File:", applicationData.proposalFile);
      console.log("Supporting Media:", applicationData.supportingMedia);
      //todo: send data to server side and clear existing form data
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateTeamMembers = (members: string[]) => {
    setApplicationData((prev) => ({
      ...prev,
      teamMembers: members,
    }));
  };

  const updateProjectName = (projectName: string) => {
    setApplicationData((prev) => ({
      ...prev,
      projectName,
    }));
  };

  const updateProjectDescription = (projectDescription: string) => {
    setApplicationData((prev) => ({
      ...prev,
      projectDescription,
    }));
  };

  const updateProposalFile = (file: File | null) => {
    setApplicationData((prev) => ({
      ...prev,
      proposalFile: file,
    }));
  };

  const updateSupportingMedia = (file: File | null) => {
    setApplicationData((prev) => ({
      ...prev,
      supportingMedia: file,
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            teamMembers={applicationData.teamMembers}
            onTeamMembersChange={updateTeamMembers}
          />
        );
      case 2:
        return (
          <StepTwo
            projectName={applicationData.projectName}
            onProjectNameChange={updateProjectName}
            projectDescription={applicationData.projectDescription}
            onProjectDescriptionChange={updateProjectDescription}
          />
        );
      case 3:
        return (
          <StepThree
            onFileSelect={updateProposalFile}
            selectedFile={applicationData.proposalFile}
          />
        );
      case 4:
        return (
          <StepFour
            onFileSelect={updateSupportingMedia}
            selectedFile={applicationData.supportingMedia}
          />
        );
      default:
        return (
          <StepOne
            teamMembers={applicationData.teamMembers}
            onTeamMembersChange={updateTeamMembers}
          />
        );
    }
  };

  return (
    <ApplicationLayout
      currentStep={currentStep}
      totalSteps={4}
      handleNext={handleNext}
      handleBack={handleBack}
      isFinalStep={currentStep === 4}
    >
      {renderStepContent()}
    </ApplicationLayout>
  );
}
