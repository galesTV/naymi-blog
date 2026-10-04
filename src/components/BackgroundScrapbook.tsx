"use client";

import React from "react";
import Image from "next/image";

type ScrapItem = {
  src: string;
  className: string;
  rotate?: string;
  animation?: string;
  photo?: boolean;
  tape?: boolean;
};

const scrapbookItems: ScrapItem[] = [
  {
    src: "/scrapbook/book-1.jpg",
    className: "left-[4%] top-[34%] w-32 md:w-40",
    rotate: "-rotate-6",
    animation: "animate-scrap-float",
    photo: true,
    tape: true,
  },
  {
    src: "/scrapbook/book-2.jpg",
    className: "right-[7%] top-[43%] w-36 md:w-44",
    rotate: "rotate-5",
    animation: "animate-scrap-sway",
    photo: true,
  },
  {
    src: "/scrapbook/book-3.jpg",
    className: "right-[20%] top-[78%] w-32 md:w-40",
    rotate: "-rotate-8",
    animation: "animate-scrap-float",
    photo: true,
    tape: true,
  },

  {
    src: "/scrapbook/movie-1.jpg",
    className: "right-[3%] top-[33%] w-32 md:w-40",
    rotate: "rotate-6",
    animation: "animate-scrap-sway",
    photo: true,
  },
  {
    src: "/scrapbook/movie-2.jpg",
    className: "left-[18%] top-[52%] w-36 md:w-44",
    rotate: "-rotate-4",
    animation: "animate-scrap-float",
    photo: true,
    tape: true,
  },
  {
    src: "/scrapbook/movie-3.jpg",
    className: "left-[5%] top-[78%] w-32 md:w-40",
    rotate: "rotate-7",
    animation: "animate-scrap-sway",
    photo: true,
  },

  {
    src: "/scrapbook/serie-1.webp",
    className: "left-[35%] top-[40%] w-32 md:w-40",
    rotate: "rotate-4",
    animation: "animate-scrap-float",
    photo: true,
  },
  {
    src: "/scrapbook/serie-2.jpg",
    className: "left-[7%] top-[61%] w-36 md:w-44",
    rotate: "-rotate-7",
    animation: "animate-scrap-sway",
    photo: true,
  },
  {
    src: "/scrapbook/serie-3.jpg",
    className: "right-[25%] top-[57%] w-32 md:w-40",
    rotate: "rotate-6",
    animation: "animate-scrap-float",
    photo: true,
    tape: true,
  },

  {
    src: "/scrapbook/dog-1.jpg",
    className: "left-[23%] top-[35%] w-28 md:w-36",
    rotate: "-rotate-5",
    animation: "animate-scrap-sway",
    photo: true,
  },
  {
    src: "/scrapbook/dog-2.jpg",
    className: "right-[8%] top-[68%] w-32 md:w-40",
    rotate: "rotate-5",
    animation: "animate-scrap-float",
    photo: true,
  },

  {
    src: "/scrapbook/bow.png",
    className: "left-[22%] top-[34%] w-20 md:w-28",
    animation: "animate-bow",
  },
  {
    src: "/scrapbook/butterfly.png",
    className: "left-[3%] top-[48%] w-16 md:w-24",
    animation: "animate-butterfly",
  },
  {
    src: "/scrapbook/camera.png",
    className: "right-[4%] top-[58%] w-20 md:w-28",
    animation: "animate-sticker",
  },
  {
    src: "/scrapbook/cassette.png",
    className: "right-[28%] top-[35%] w-20 md:w-28",
    animation: "animate-cassette",
  },
  {
    src: "/scrapbook/cd.png",
    className: "left-[14%] top-[39%] w-20 md:w-28",
    animation: "animate-cd-spin",
  },
  {
    src: "/scrapbook/heart.png",
    className: "left-[31%] top-[73%] w-16 md:w-24",
    animation: "animate-heart",
  },
  {
    src: "/scrapbook/phone.png",
    className: "left-[45%] top-[82%] w-20 md:w-28",
    animation: "animate-sticker",
  },
  {
    src: "/scrapbook/star.png",
    className: "right-[17%] top-[48%] w-16 md:w-24",
    animation: "animate-star",
  },
];

const stickers = [
  {
    emoji: "⭐",
    position: "top-[38%] left-[12%]",
    size: "text-5xl",
  },
  {
    emoji: "✨",
    position: "top-[42%] right-[38%]",
    size: "text-4xl",
  },
  {
    emoji: "💖",
    position: "top-[50%] right-[18%]",
    size: "text-5xl",
  },
  {
    emoji: "🌟",
    position: "top-[68%] left-[15%]",
    size: "text-5xl",
  },
  {
    emoji: "✨",
    position: "bottom-[20%] right-[25%]",
    size: "text-6xl",
  },
  {
    emoji: "💿",
    position: "bottom-[8%] left-[38%]",
    size: "text-4xl",
  },
  {
    emoji: "🦋",
    position: "top-[38%] right-[8%]",
    size: "text-4xl",
  },
  {
    emoji: "💗",
    position: "bottom-[38%] left-[30%]",
    size: "text-4xl",
  },
  {
    emoji: "✦",
    position: "top-[50%] left-[45%]",
    size: "text-3xl",
  },
  {
    emoji: "♡",
    position: "bottom-[12%] right-[42%]",
    size: "text-5xl",
  },
];

export default function BackgroundScrapbook() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-fuchsia-200">
      <div
        className="
          absolute inset-0
          opacity-35
          mix-blend-multiply
          bg-repeat
        "
        style={{
          backgroundImage: "url('/scrapbook/paper-texture.jpg')",
          backgroundSize: "600px 600px",
        }}
      />

      <div
        className="
          absolute
          top-[5%]
          left-[5%]
          w-72
          h-96
          bg-white/50
          -rotate-6
          shadow-[5px_7px_12px_rgba(0,0,0,0.12)]
          opacity-35
        "
      />

      <div
        className="
          absolute
          top-[35%]
          right-[3%]
          w-64
          h-80
          bg-pink-100/50
          rotate-8
          shadow-[5px_7px_12px_rgba(0,0,0,0.12)]
          opacity-30
        "
      />

      <div
        className="
          absolute
          bottom-[5%]
          left-[10%]
          w-72
          h-80
          bg-yellow-100/40
          rotate-6
          shadow-[5px_7px_12px_rgba(0,0,0,0.12)]
          opacity-25
        "
      />

      {scrapbookItems.map((item, index) => (
        <div
          key={`${item.src}-${index}`}
          className={`
      absolute
      ${item.className}
      ${item.animation ?? ""}
      pointer-events-none
    `}
        >
          {item.tape && (
            <div
              className="
          absolute
          -top-3
          left-1/2
          -translate-x-1/2
          w-16
          h-6
          bg-yellow-100/70
          rotate-2
          z-20
          shadow-sm
          backdrop-blur-[1px]
        "
            />
          )}

          {item.photo ? (
            <div
              className={`
          relative
          bg-white
          p-2
          pb-5
          shadow-[4px_5px_0px_rgba(0,0,0,0.15)]
          ${item.rotate ?? ""}
          transition-all
          duration-300
        `}
            >
              <Image
                src={item.src}
                alt=""
                width={400}
                height={400}
                loading="lazy"
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 150px, 250px"
              />

              <div className="absolute inset-2 pointer-events-none shadow-[inset_0_0_8px_rgba(0,0,0,0.12)]" />
            </div>
          ) : (
            <Image
              src={item.src}
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className={`
          h-auto
          w-full
          object-contain
          ${item.rotate ?? ""}
          drop-shadow-[4px_5px_3px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
        `}
              sizes="(max-width: 768px) 100px, 150px"
            />
          )}
        </div>
      ))}

      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`
            absolute
            ${sticker.position}
            ${sticker.size}
            select-none
            drop-shadow-[2px_3px_0_rgba(0,0,0,0.12)]
            animate-sticker
          `}
        >
          {sticker.emoji}
        </div>
      ))}

      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-[15%] left-[35%] text-xl animate-glitter">
          ✦
        </div>

        <div className="absolute top-[27%] left-[12%] text-sm animate-glitter">
          ✧
        </div>

        <div className="absolute top-[35%] right-[28%] text-2xl animate-glitter">
          ✦
        </div>

        <div className="absolute top-[48%] left-[22%] text-lg animate-glitter">
          ✧
        </div>

        <div className="absolute top-[55%] right-[12%] text-xl animate-glitter">
          ✦
        </div>

        <div className="absolute top-[70%] left-[42%] text-sm animate-glitter">
          ✧
        </div>

        <div className="absolute bottom-[22%] right-[38%] text-2xl animate-glitter">
          ✦
        </div>

        <div className="absolute bottom-[8%] left-[12%] text-xl animate-glitter">
          ✧
        </div>

        <div className="absolute top-[80%] right-[40%] text-lg animate-glitter">
          ✦
        </div>

        <div className="absolute top-[18%] right-[15%] text-sm animate-glitter">
          ✧
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle, white 1px, transparent 1px),
            radial-gradient(circle, white 1px, transparent 1px)
          `,
          backgroundSize: "37px 37px, 61px 61px",
          backgroundPosition: "0 0, 17px 23px",
        }}
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]
        "
      />
    </div>
  );
}
