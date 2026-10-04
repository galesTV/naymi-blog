import React from "react";
import RetroWindow from "./RetroWindow";

export default function RightSidebar() {
  return (
    <aside className="w-full xl:w-72 shrink-0 flex flex-col gap-8 relative z-10">
      <div className="absolute -top-6 -right-2 text-4xl transform rotate-12 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-20 hover:scale-110 transition-transform cursor-pointer">
        ⭐
      </div>
      <div className="absolute bottom-[30%] -left-6 text-3xl transform -rotate-45 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-20 animate-pulse cursor-pointer">
        ✨
      </div>

      <RetroWindow title="cbox_mural.exe">
        <div className="flex flex-col h-[200px]">
          <div className="bg-white border-2 border-gray-400 flex-1 overflow-y-auto p-2 text-[11px] font-sans flex flex-col gap-2 mb-2 shadow-inner">
            <p>
              <b className="text-blue-600">Cassio:</b> primeirooo! o blog tá top
              demais!!
            </p>
            <p>
              <b className="text-pink-600">Milena:</b> a playlist tá tudo 💖
            </p>
            <p>
              <b className="text-purple-600">Felipe:</b> cadê post novo??
            </p>
            <p>
              <b className="text-orange-500">gales:</b> <strong>@Cassio</strong> farmei muita
              aura fazendo esse site, eu sei 🙄
            </p>
            <p>
              <b className="text-red-600">Pipoca 🐾:</b> au au au (pibbles
              supremacy)
            </p>
            <p>
              <b className="text-green-600">Naymi:</b> <strong>@Felipe</strong> calma q eu ja
              mandei o <strong>@gales</strong> arrumar o HTML 😭
            </p>
          </div>

          <div className="flex flex-col gap-1 shrink-0">
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Nome"
                className="w-1/3 border border-gray-400 text-[10px] px-1 py-0.5 outline-none focus:bg-yellow-50"
              />
              <input
                type="text"
                placeholder="Mensagem..."
                className="w-2/3 border border-gray-400 text-[10px] px-1 py-0.5 outline-none focus:bg-yellow-50"
              />
            </div>
            <button className="bg-gray-300 border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 text-[10px] font-bold px-2 py-0.5 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white w-full hover:bg-gray-200">
              ENVIAR RECADO
            </button>
          </div>
        </div>
      </RetroWindow>

      <RetroWindow title="meu_tamagotchi.exe">
        <div className="flex flex-col items-center bg-pink-50 border-2 border-gray-300 p-2 shadow-inner">
          <h3 className="font-(--font-vt323) text-pink-600 text-lg mb-2 uppercase tracking-wider">
            Bichinho Virtual 🐾
          </h3>

          <div className="w-24 h-22 bg-white border-[3px] border-gray-400 mb-3 flex items-center justify-center animate-[bounce_2s_infinite] shadow-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pet.gif"
              alt="Pet"
              className="w-16 h-16 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          <div className="w-full text-[10px] font-sans font-bold flex flex-col gap-1.5 text-gray-700 px-1">
            <div className="flex justify-between items-center">
              <span className="w-12">Fome:</span>
              <div className="flex-1 h-2 bg-gray-300 border border-gray-500">
                <div className="w-[10%] h-full bg-red-500"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-12">Alegria:</span>
              <div className="flex-1 h-2 bg-gray-300 border border-gray-500">
                <div className="w-[95%] h-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-12">Sono:</span>
              <div className="flex-1 h-2 bg-gray-300 border border-gray-500">
                <div className="w-[40%] h-full bg-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 w-full">
            <button className="flex-1 bg-gray-300 border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 text-[10px] font-bold py-1 hover:bg-gray-200 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
              ALIMENTAR
            </button>
            <button className="flex-1 bg-gray-300 border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 text-[10px] font-bold py-1 hover:bg-gray-200 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
              BRINCAR
            </button>
          </div>
        </div>
      </RetroWindow>
    </aside>
  );
}
