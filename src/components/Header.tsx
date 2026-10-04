"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RetroMarquee = "marquee" as any;

export default function Header() {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev === 1 ? 2 : 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const title = "NAYMI";
  const fonts = [
    "font-(--font-caveat)",
    "font-(--font-comic)",
    "font-(--font-vt323)",
  ];
  const textColors = [
    "text-pink-600",
    "text-blue-600",
    "text-fuchsia-600",
    "text-green-600",
    "text-purple-600",
  ];
  const bgColors = [
    "bg-yellow-200",
    "bg-white",
    "bg-pink-200",
    "bg-cyan-200",
    "bg-orange-200",
  ];
  const rotations = [
    "-rotate-6",
    "rotate-3",
    "-rotate-12",
    "rotate-12",
    "-rotate-3",
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-xl">
      <div className="bg-pink-500 text-white font-(--font-vt323) text-xl md:text-2xl border-b-2 border-black py-1 overflow-hidden whitespace-nowrap">
        <RetroMarquee scrollamount="10">
          ✨ BEM-VINDOS AO DIÁRIO DA NAYMI! ✨ O BLOG MAIS ICÔNICO DA INTERNET 
          O BLOG MAIS Y2K QUE VIRAM! MUITA CULTURA POP E GEEK!✨✨
        </RetroMarquee>
      </div>

      <div className="w-full bg-fuchsia-300 border-b-4 border-pink-400 p-4 relative flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 px-8">
        <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 cursor-pointer transform hover:scale-110 transition-transform">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={frame === 1 ? "/naymi-1.png" : "/naymi-2.png"}
              alt="Naymi Stop Motion"
              className="w-full h-full object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
            />
          </Link>
        </div>

        <Link href="/" className="flex gap-1 md:gap-2 z-10 hover:opacity-80">
          {title.split("").map((letter, i) => (
            <span
              key={i}
              className={`inline-block px-3 py-1 border-2 border-gray-800 shadow-[3px_3px_0px_rgba(0,0,0,1)] text-4xl md:text-6xl font-bold uppercase ${fonts[i % fonts.length]} ${textColors[i % textColors.length]} ${bgColors[i % bgColors.length]} ${rotations[i % rotations.length]}`}
            >
              {letter}
            </span>
          ))}
        </Link>

        <div className="md:absolute right-8 -bottom-3.75 bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 p-2 shadow-lg transform rotate-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-700 flex items-center justify-center animate-[spin_3s_linear_infinite]">
            <div className="w-3 h-3 bg-fuchsia-500 rounded-full border border-gray-300"></div>
          </div>
          <div className="font-(--font-vt323) leading-tight">
            <p className="text-gray-700 text-sm">▶ Now Playing</p>
            <p className="text-blue-800 text-lg font-bold">
              Britney Spears - Toxic
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
