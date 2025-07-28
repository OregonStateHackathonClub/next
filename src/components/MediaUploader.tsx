import { useState, ChangeEvent } from 'react';
import { Upload, X } from "lucide-react"; 

interface MediaUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

export default function MediaUploader({ onFileSelect }: MediaUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);


  function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    fetch("/api/upload", {
        method: "POST",
        body: formData,
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("Upload success:", data);
        })
        .catch((err) => {
            console.error("Upload failed:", err);
        });
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    if (onFileSelect) onFileSelect(file);

    // uploadFile(file); // Uncomment once we set up backend
  }

  function removeFile() {
    setPreview(null);
    if (onFileSelect) onFileSelect(null);
  }

  const isVideo = preview ? /\.(mp4|webm|ogg)$/i.test(preview) : false;

  return (
    <div className="space-y-3">
      <label
        htmlFor="file-upload"
        className="cursor-pointer inline-block bg-gray-800 text-white px-6 w-48 py-2 rounded-md hover:bg-gray-600 transition-colors text-center"
      >
        <Upload className="w-5 h-5 inline-block mr-2" />
        Upload File
      </label>


      <input
        id="file-upload"
        type="file"
        accept="application/pdf,image/*,video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {preview && (
        <div className="relative w-fit">
          <a href={preview} target="_blank" rel="noopener noreferrer">
            {isVideo ? (
                <video
                src={preview}
                width={300}
                controls
                style={{ borderRadius: 8, cursor: 'pointer' }}
                />
            ) : (
                <img
                src={preview}
                alt="Preview"
                width={300}
                style={{ borderRadius: 8, cursor: 'pointer' }}
                />
            )}
          </a>
          <button
            onClick={removeFile}
            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-red-100 transition"
            title="Remove file"
          >
            <X className="w-4 h-4 text-red-600" />
          </button>
        </div>
      )}
    </div>
  );
}
