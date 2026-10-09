"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) =>
          console.warn("Autoplay bloqueado pelo navegador:", err),
        );
    }
  }, []);

  return (
    <main className="fixed inset-0 z-[100] bg-[#0000AA] text-white flex flex-col items-center justify-center p-8 font-(--font-vt323) w-full overflow-hidden">
      <audio ref={audioRef} src="/music/error.mp3" />

      <div className="max-w-3xl w-full">
        <div className="bg-white text-[#0000AA] px-2 py-0.5 inline-block mb-8 font-bold tracking-widest text-lg md:text-xl">
          Windows
        </div>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Um erro fatal 0E ocorreu em 0028:C0011E36 no VXD VMM(01) + 00010E36. A
          página que você procura não existe ou a conexão caiu porque alguém
          tirou o telefone do gancho.
        </p>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-yellow-300">
          * Verifique se o cabo azul está bem conectado no seu modem.
          <br />* Certifique-se de que a sua mãe não vai usar o telefone fixo
          nos próximos 20 minutos.
        </p>

        <div className="text-center mt-12 animate-pulse">
          <Link
            href="/"
            className="text-xl md:text-2xl text-white hover:text-yellow-300 underline decoration-dashed"
          >
            Aperte aqui para voltar à civilização (Home) _
          </Link>
        </div>
      </div>
    </main>
  );
}
