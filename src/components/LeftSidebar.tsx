import React from "react";
import RetroWindow from "./RetroWindow";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <aside className="w-full xl:w-72 shrink-0 flex flex-col gap-8 relative z-10">
      <div className="absolute -top-8 -left-4 text-5xl transform -rotate-12 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-20 hover:scale-110 transition-transform cursor-pointer">
        ⭐
      </div>
      <div className="absolute top-[40%] -right-6 text-4xl transform rotate-45 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-20 hover:scale-110 transition-transform cursor-pointer">
        🌟
      </div>

      <RetroWindow title="perfil_naymi.exe">
        <div className="flex flex-col items-center text-center relative h-[340px] justify-between">
          <div className="absolute -top-2 -right-2 text-3xl animate-pulse">
            ✨
          </div>

          <div className="flex flex-col items-center mt-2">
            <div className="w-24 h-24 border-2 border-gray-400 p-1 mb-4 transform -rotate-3 shadow-md relative">
              <div className="absolute -bottom-2 -right-2 text-xl">💖</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/naymi-1.png"
                alt="Naymi"
                className="w-full h-full object-cover bg-fuchsia-300"
              />
            </div>

            <h2 className="font-(--font-caveat) text-4xl text-pink-600 font-bold mb-1">
              Naymi
            </h2>
            <p className="font-(--font-comic) text-sm text-gray-700">
              Sobrevivendo à internet. Amo cultura pop, geek, design vintage e
              publicidade! 🎀✨
            </p>
          </div>

          <div className="flex gap-2 w-full mt-auto">
            <Link
              href="https://letterboxd.com/naysaito/"
              target="_blank"
              className="flex-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 text-xs py-1 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white font-bold text-black hover:bg-gray-200"
            >
              Letterboxd
            </Link>
            <Link
              href="https://www.instagram.com/naycult_/"
              target="_blank"
              className="flex-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 text-xs py-1 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white font-bold text-black hover:bg-gray-200"
            >
              Instagram
            </Link>
          </div>
        </div>
      </RetroWindow>

      <RetroWindow title="status_atual.txt">
        <ul className="font-(--font-comic) text-sm flex flex-col gap-3 text-gray-800">
          <li className="flex items-center gap-2">
            <span className="text-xl">💭</span> <b>Humor:</b> Caótica
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl">📺</span> <b>Assistindo:</b> Gilmore Girls
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl">🎧</span> <b>Ouvindo:</b> Pop 2000s
          </li>
        </ul>
      </RetroWindow>
    </aside>
  );
}
