import React, { useState, useRef } from "react";

const ATSScoreSection: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      console.log("File dropped:", droppedFile.name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      console.log("File selected:", selectedFile.name);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name);
      // Implement file upload logic here
      alert(`File "${file.name}" would be uploaded in a real application.`);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <section
      className="bg-black flex min-h-[815px] w-full flex-col overflow-hidden items-stretch text-center justify-center p-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]"
      aria-label="Check ATS Score"
    >
      <div className="flex w-full flex-col items-stretch rounded-[0px_0px_0px_0px] max-md:max-w-full">
        <div className="max-w-screen-xl text-white pr-[var(--container-padding-desktop,] pl-[var(--container-padding-desktop,] gap-8 pt-0 pb-[32px)] max-md:max-w-full max-md:px-5">
          <div className="items-center flex w-full flex-col gap-12 max-md:max-w-full">
            <div className="max-w-screen-md items-stretch flex w-[768px] flex-col gap-6 max-md:max-w-full">
              <h2 className="w-full text-5xl font-semibold tracking-[-0.96px] leading-[60px] gap-3 max-md:max-w-full max-md:text-[40px]">
                Check Your ATS Score for Free
              </h2>
              <p className="text-xl font-normal leading-[30px] mt-6 max-md:max-w-full">
                We believe Untitled should be accessible to all companies, no
                matter the size.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`border self-center relative flex w-[854px] max-w-full flex-col mt-[49px] rounded-3xl border-[rgba(0,119,255,1)] border-solid max-md:mt-10 ${isDragging ? "bg-zinc-900" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="absolute z-0 flex min-h-44 w-[590px] max-w-full flex-col items-center font-medium top-[71px] bottom-[181px] inset-x-[132px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/304a07b1c048b2d669b59baf715a8b9432af6670?placeholderIfAbsent=true"
              alt="Upload icon"
              className="aspect-[1] object-contain w-[46px]"
            />
            <div className="flex flex-col items-center mt-12 max-md:max-w-full max-md:mt-10">
              <div
                className="text-white text-3xl max-md:max-w-full"
                onClick={handleClick}
              >
                {file ? file.name : "Choose a file or drag & drop it here"}
              </div>
              <div className="text-[rgba(169,172,180,1)] text-[26px] mt-[15px] max-md:max-w-full">
                JPEG, PNG, PDG, and MP4 formats, up to 50MB
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".jpeg,.jpg,.png,.pdf,.mp4"
              />
            </div>
          </div>
          <button
            onClick={handleUpload}
            className="bg-black shadow-[0px_8px_16px_rgba(0,111,255,0.2)] border absolute z-0 overflow-hidden text-[26px] text-white font-bold tracking-[-0.16px] leading-none px-[30px] py-[15px] rounded-2xl border-[rgba(0,119,255,1)] border-solid left-[323px] right-[322px] top-[297px] bottom-[73px] max-md:px-5 hover:bg-zinc-900 transition-colors"
          >
            Upload Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ATSScoreSection;
