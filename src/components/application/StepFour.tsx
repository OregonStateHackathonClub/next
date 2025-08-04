import MediaUploader from '@/components/application/MediaUploader';

interface StepFourProps {
  onFileSelect: (file: File | null) => void;
}

export const StepFour = ({ onFileSelect }: StepFourProps) => {
  return (
    <div className = "pt-60 px-8 max-w-2xl mx-auto w-full">
        <h2 className="text-white-3xl font-bold mb-2 text-left">4 → Add other supporting Media </h2>
        <p className="text-gray-600 mb-8 pl-8 text-left">Slide deck, graphs, demo video, etc</p>
        <MediaUploader onFileSelect={onFileSelect} />
    </div>
  );
};
