import React from "react";

interface PolaroidPostProps {
  title: string;
  date: string;
  imageUrl?: string;
  content: string;
  rotation?: string;
}

export default function PolaroidPost({
  title,
  date,
  imageUrl,
  content,
  rotation = "rotate-2",
}: PolaroidPostProps) {
  return (
    <div
      className={`relative bg-white p-3 pb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] border border-gray-300 w-full max-w-sm ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 ease-out`}
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm rotate-2 z-10" />

      <div className="bg-pink-100 w-full aspect-square mb-4 border border-gray-200 overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover grayscale-[20%] sepia-[20%]"
          />
        ) : (
          <span className="text-pink-300 font-bold text-xl tracking-widest uppercase">
            Foto Aqui
          </span>
        )}
      </div>

      <div className="px-2">
        <h2 className="font-extrabold text-xl text-gray-800 leading-tight mb-1">
          {title}
        </h2>
        <p className="text-xs text-fuchsia-500 font-bold mb-2 uppercase tracking-wider">
          {date}
        </p>
        <p className="text-sm text-gray-600 line-clamp-3">{content}</p>
      </div>
    </div>
  );
}
