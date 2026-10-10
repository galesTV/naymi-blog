import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RetroMarquee = "marquee" as any;

export default function Footer() {
  const hitCounter = "008432";

  return (
    <footer className="w-full bg-pink-500 border-t-[6px] border-pink-400 mt-20 pt-8 pb-0 flex flex-col relative z-10 text-white font-(--font-vt323) shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
        <div className="flex flex-col items-center bg-black border-4 border-gray-600 p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transform -rotate-2">
          <p className="text-green-400 text-sm mb-1 uppercase tracking-widest text-center leading-tight">
            Visitante Nª:
          </p>
          <div className="flex gap-0.5 bg-black p-1 border-2 border-gray-800">
            {hitCounter.split("").map((num, i) => (
              <span
                key={i}
                className="bg-gray-900 text-green-500 text-2xl px-1.5 border border-gray-700 shadow-inner"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-pink-200 text-sm tracking-widest uppercase">
            Meus Selos Virtuais
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-[300px]">
            <div className="w-[88px] h-[31px] bg-blue-600 border-[2px] border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] text-white font-bold font-sans leading-none text-center hover:scale-110 cursor-help shadow-md transition-transform">
              HTML5
              <br />
              VALID
            </div>
            <div className="w-[88px] h-[31px] bg-yellow-400 border-[2px] border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] text-black font-bold font-sans leading-none text-center hover:scale-110 cursor-help shadow-md transition-transform">
              BEST IN
              <br />
              IE 6.0
            </div>
            <div className="w-[88px] h-[31px] bg-black border-[2px] border-t-gray-400 border-l-gray-400 border-b-gray-800 border-r-gray-800 flex items-center justify-center text-[12px] text-green-500 font-bold hover:scale-110 cursor-help shadow-md transition-transform">
              Y2K SAFE
            </div>
            <div className="w-[88px] h-[31px] bg-pink-400 border-[2px] border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[11px] text-white font-bold font-sans hover:scale-110 cursor-help shadow-md transition-transform">
              ♥ GEEK ♥
            </div>
            <div className="w-[88px] h-[31px] bg-purple-600 border-[2px] border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] text-white font-bold font-sans hover:scale-110 cursor-help shadow-md transition-transform">
              100% ANGEL
            </div>
            <div className="w-[88px] h-[31px] bg-gray-300 border-[2px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 flex items-center justify-center text-[10px] text-black font-bold font-sans hover:scale-110 cursor-help shadow-md transition-transform">
              NO CSS
            </div>
          </div>
        </div>

        <div className="bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 p-2 text-black font-sans text-[11px] text-center w-[220px] shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
          <div className="bg-blue-800 text-white font-bold px-1 mb-2 text-left tracking-wider">
            aviso_legal.txt
          </div>
          <p className="mb-2 text-gray-800 leading-tight">
            Melhor visualizado em resolução{" "}
            <b className="text-black">800x600</b> com Netscape Navigator.
          </p>
          <div className="border-t border-gray-400 pt-2 mt-1">
            <p className="font-bold text-pink-700 text-xs">
              © 2026 Diário da Naymi
            </p>
            <p className="text-gray-700">Feito com 💖 e código.</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-green-400 text-lg border-y-2 border-gray-700 py-0.5 overflow-hidden whitespace-nowrap mt-10">
        <RetroMarquee scrollamount="6">
          ✦ ✦ ✦ OBRIGADA POR VISITAR O MEU DIÁRIO! VOLTE SEMPRE! NÃO ESQUEÇA DE
          ALIMENTAR O TAMAGOCHI ANTES DE SAIR! ✦ ✦ ✦
        </RetroMarquee>
      </div>

      <div className="w-full bg-gray-900 border-t-4 border-pink-500 py-3 flex justify-center items-center relative z-20 shadow-[0_-4px_0_rgba(0,0,0,0.2)]">
        <p className="font-(--font-vt323) text-gray-400 text-sm md:text-base tracking-widest text-center">
          © {new Date().getFullYear()} NAYMI. TODOS OS DIREITOS RESERVADOS.{" "}
          <br className="md:hidden" />
          <span className="hidden md:inline">{" // "}</span>
          DESENVOLVIDO POR{" "}
          <a
            href="https://gaelguzman.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-white hover:bg-pink-500 px-1 transition-colors border border-transparent hover:border-pink-300 border-dashed"
          >
            galesTV
          </a>
        </p>
      </div>
    </footer>
  );
}
