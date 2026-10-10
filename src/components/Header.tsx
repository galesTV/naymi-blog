"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RetroMarquee = "marquee" as any;

const playlist = [
  { title: "Britney Spears - Toxic", src: "/music/Britney Spears - Toxic.mp3" },
  {
    title: "PinkPantheress - Stateside + Zara Larsson",
    src: "/music/PinkPantheress - Stateside Zara Larsson.mp3",
  },
  {
    title: "Nelly Furtado - Maneater",
    src: "/music/Nelly Furtado - Maneater.mp3",
  },
  {
    title: "Avril Lavigne - Girlfriend",
    src: "/music/Avril Lavigne - Girlfriend.mp3",
  },
  {
    title: "Nelly Furtado - Promiscuous (feat. Timbaland)",
    src: "/music/Nelly Furtado - Promiscuous ft. Timbaland.mp3",
  },
  {
    title: "Rihanna - Pon de Replay",
    src: "/music/Rihanna - Pon de Replay.mp3",
  },
  {
    title: "Victoria Justice - Freak the Freak Out",
    src: "/music/Victoria Justice - Freak the Freak Out.mp3",
  },
];

const marqueeMessages = [
  "✨ BEM-VINDOS AO DIÁRIO DA NAYMI! ✨",
  "O BLOG MAIS ICÔNICO DA INTERNET",
  "O BLOG MAIS Y2K QUE JÁ VIRAM!",
  "MUITA CULTURA POP E GEEK! 💖",
];

export default function Header() {
  const [frame, setFrame] = useState(1);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev === 1 ? 2 : 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.warn("Autoplay bloqueado:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length,
    );
    setIsPlaying(true);
  };

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
    <header className="w-full sticky top-0 z-50 shadow-md">
      <div className="bg-pink-500 text-white font-(--font-vt323) text-lg border-b-2 border-black py-0.5 overflow-hidden whitespace-nowrap">
        <RetroMarquee scrollamount="8">
          {marqueeMessages.join("                 ⭐                 ")}
        </RetroMarquee>
      </div>

      <div className="w-full bg-fuchsia-300 border-b-4 border-pink-400 py-3 md:py-2 px-2 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-0">
        <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 cursor-pointer transform hover:scale-110 transition-transform">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={frame === 1 ? "/naymi-1.png" : "/naymi-2.png"}
              alt="Naymi Stop Motion"
              className="w-full h-full object-contain drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)]"
            />
          </Link>
        </div>

        <Link href="/" className="flex gap-0.5 md:gap-1 z-10 hover:opacity-80">
          {title.split("").map((letter, i) => (
            <span
              key={i}
              className={`inline-block px-2 py-0.5 md:px-3 md:py-1 border-2 border-gray-800 shadow-[2px_2px_0px_rgba(0,0,0,1)] text-2xl sm:text-3xl md:text-5xl font-bold uppercase ${fonts[i % fonts.length]} ${textColors[i % textColors.length]} ${bgColors[i % bgColors.length]} ${rotations[i % rotations.length]}`}
            >
              {letter}
            </span>
          ))}
        </Link>

        <div className="bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 p-2 md:p-3 shadow-md flex items-center gap-3 md:gap-4 w-full max-w-[280px] md:max-w-none md:w-70 mt-2 md:mt-0">
          <div
            className={`shrink-0 w-10 h-10 md:w-14 md:h-14 bg-black rounded-full border-2 border-gray-700 flex items-center justify-center ${isPlaying ? "animate-[spin_3s_linear_infinite]" : ""}`}
          >
            <div className="w-4 h-4 md:w-5 md:h-5 bg-fuchsia-500 rounded-full border border-gray-300"></div>
          </div>

          <div className="font-(--font-vt323) leading-none w-full overflow-hidden flex flex-col justify-center">
            <p className="text-gray-700 text-[10px] md:text-sm mb-1">
              {isPlaying ? "▶ Now Playing" : "⏸ Paused"}
            </p>
            <p
              className="text-blue-800 text-xs md:text-base font-bold truncate mb-2"
              title={playlist[currentSongIndex].title}
            >
              {playlist[currentSongIndex].title}
            </p>

            <div className="flex gap-2">
              <button
                onClick={prevSong}
                className="bg-gray-300 hover:bg-white border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600 px-2 py-0.5 text-xs active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white font-bold"
              >
                ⏮
              </button>
              <button
                onClick={togglePlay}
                className="bg-gray-300 hover:bg-white border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600 px-3 py-0.5 text-xs active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white font-bold"
              >
                {isPlaying ? "||" : "▶"}
              </button>
              <button
                onClick={nextSong}
                className="bg-gray-300 hover:bg-white border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600 px-2 py-0.5 text-xs active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white font-bold"
              >
                ⏭
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-full bg-[#c0c0c0] border-t-[3px] border-t-white border-b-[3px] border-b-gray-800 px-2 md:px-8 py-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:gap-8 font-sans text-xs sm:text-sm md:text-base font-bold text-gray-800 relative z-40 shadow-md">
        <Link
          href="/"
          className="cursor-pointer hover:bg-blue-800 hover:text-white px-2 md:px-3 py-0.5 flex items-center gap-1 md:gap-2 border border-transparent hover:border-dotted hover:border-white transition-colors"
        >
          <span>🏠</span> Home
        </Link>
        <Link
          href="/arquivo"
          className="cursor-pointer hover:bg-blue-800 hover:text-white px-2 md:px-3 py-0.5 flex items-center gap-1 md:gap-2 border border-transparent hover:border-dotted hover:border-white transition-colors"
        >
          <span>📁</span> Arquivo
        </Link>
        <Link
          href="/reels"
          className="cursor-pointer hover:bg-blue-800 hover:text-white px-2 md:px-3 py-0.5 flex items-center gap-1 md:gap-2 border border-transparent hover:border-dotted hover:border-white transition-colors"
        >
          <span>🎬</span> Reels
        </Link>
        <Link
          href="/links"
          className="cursor-pointer hover:bg-blue-800 hover:text-white px-2 md:px-3 py-0.5 flex items-center gap-1 md:gap-2 border border-transparent hover:border-dotted hover:border-white transition-colors"
        >
          <span>🔗</span> Links
        </Link>
      </nav>

      <audio
        ref={audioRef}
        src={playlist[currentSongIndex].src}
        onEnded={nextSong}
        className="hidden"
      />
    </header>
  );
}
