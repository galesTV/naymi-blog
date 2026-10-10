import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RetroReelPlayer({ reel }: { reel: any }) {
  if (!reel) return null;

  return (
    <div className="bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 p-1.5 shadow-[8px_8px_0px_rgba(0,0,0,0.15)] w-full max-w-sm mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 px-2 py-1 flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm drop-shadow-md">🎬</span>
          <span className="text-white font-bold text-base font-sans tracking-wide">
            InstaPlayer.exe
          </span>
        </div>
        <button className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-2 text-xs font-bold text-black active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
          X
        </button>
      </div>

      <div className="bg-black p-2 border-2 border-t-gray-800 border-l-gray-800 border-b-white border-r-white flex flex-col items-center">
        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block w-full aspect-[9/16] bg-gray-900 border border-gray-700 overflow-hidden cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={reel.imageUrl}
            alt={reel.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale-[20%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-[2px] border border-white/40 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <span className="text-white text-3xl ml-1 drop-shadow-md">▶</span>
            </div>
          </div>
        </a>

        <div className="w-full bg-black border border-gray-800 mt-2 p-1 overflow-hidden">
          <p className="text-green-500 font-(--font-vt323) text-lg truncate text-center uppercase tracking-wider">
            {reel.title}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 px-1 pb-1">
        <div className="flex gap-1.5">
          <button className="bg-[#c0c0c0] hover:bg-white border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-3 py-1 text-xs font-bold active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
            ⏸
          </button>
          <button className="bg-[#c0c0c0] hover:bg-white border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-4 py-1 text-xs font-bold active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
            ▶
          </button>
          <button className="bg-[#c0c0c0] hover:bg-white border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-3 py-1 text-xs font-bold active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
            ⏹
          </button>
        </div>
        <div className="text-gray-600 font-(--font-vt323) text-sm bg-white px-2 py-0.5 border border-gray-400 shadow-inner">
          00:00 / 01:00
        </div>
      </div>
    </div>
  );
}
