"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "./modal";

type ProjectProps = {
  title: string;
  shortDescription: string;
  imageSrc: string;
  details: string;
  groupMembers: string[];
};

export const Project = ({
  title,
  shortDescription,
  imageSrc,
  details,
  groupMembers,
}: ProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex flex-col items-center gap-4 px-4 py-3 border border-white/10 rounded hover:bg-white/5 transition"
      >
        <div className="text-center">
          <h2 className="text-white/90 text-lg font-semibold">{title}</h2>
          <p className="text-white/40 text-sm">{shortDescription}</p>
        </div>
        <Image
          className="border border-white/5 rounded"
          src={imageSrc}
          alt={`${title} media`}
          width={128}
          height={128}
        />
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center p-4">
          <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
          <div className="relative w-full max-w-lg mb-4">
            <Image
              className="w-full h-auto object-contain rounded"
              src={imageSrc}
              alt={`${title} modal image`}
              width={600}
              height={400}
            />
          </div>
          <p className="text-white/70 text-base mb-4">{details}</p>
          <p className="text-white/50 text-xs">
            Group Members: {groupMembers.join(", ")}
          </p>
        </div>
      </Modal>
    </>
  );
};
