import MediaUploader from "@/components/MediaUploader";

interface StepThreeProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
}

export const StepThree = ({ onFileSelect, selectedFile }: StepThreeProps) => {
  return (
    <div className="pt-60 px-8 max-w-2xl mx-auto w-full">
      <h2 className="text-white-3xl font-bold mb-2 text-left">
        3 → Upload your proposal
      </h2>
      <p className="text-gray-600 mb-8 pl-8 text-left">
        Your proposal document should provide a comprehensive overview of your
        project's potential for continued development beyond the hackathon.
        Include detailed technical information such as your current codebase
        status, architecture decisions, technology stack, and specific
        development challenges you've encountered or anticipate. Describe your
        business case with market analysis, target audience definition,
        potential competitors, and your unique value proposition. Articulate
        your team's qualifications, relevant experience, and role distribution
        for the continued development phase. Provide a detailed budget breakdown
        showing how funds will be allocated across development, marketing, etc.
        Additionally, outline your project timeline with key milestones. This
        document should demonstrate not only what you've built during the
        hackathon, but your vision and concrete plan for transforming your
        prototype into a viable, real-world solution.
      </p>
      {/* Upload File */}
      <MediaUploader onFileSelect={onFileSelect} />

      {selectedFile && (
        <div className="mt-4 ml-8">
          <p className="text-green-600">Selected file: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};
