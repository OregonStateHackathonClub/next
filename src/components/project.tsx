"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "./modal";

type ProjectProps = {
  title: string;
  shortDescription: string;
  imageSrc: string;
  details: string;
};

export const Project = ({
  title,
  shortDescription,
  imageSrc,
  details,
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
        <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
        <p className="text-white/70">{details}</p>
      </Modal>
    </>
  );
};
