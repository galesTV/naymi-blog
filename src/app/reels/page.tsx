/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";

export const revalidate = 30;

export default async function ReelsPage() {
  const reels =
    await client.fetch(`*[_type == "instagram"] | order(publishedAt desc) {
    _id,
    title,
    url,
    "imageUrl": coverImage.asset->url,
    publishedAt
  }`);

  return (
    <main className="min-h-screen flex flex-col items-center pt-32 md:pt-40 px-4 pb-20 w-full">
      <div className="relative w-full max-w-xl mx-auto mt-4 md:mt-8">
        <div className="absolute bottom-full right-0 mb-2 flex flex-col items-end z-10 pointer-events-none transform rotate-3">
          <span className="font-(--font-caveat) text-xl md:text-2xl text-pink-600 font-bold bg-white/90 border-2 border-pink-200 px-3 py-1 shadow-sm mb-1">
            voltar para a página inicial
          </span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-pink-500 mr-2 mt-1"
          >
            <line x1="12" y1="2" x2="12" y2="20" />
            <polyline points="6 14 12 20 18 14" />
          </svg>
        </div>

        <div className="w-full">
          <RetroWindow title="C:\Meus_Documentos\Videos\Reels" onCloseHref="/">
            <div className="bg-pink-50 border-2 border-gray-400 p-4 md:p-6 min-h-[500px] shadow-inner flex flex-col items-center">
              <h2 className="font-(--font-caveat) font-bold text-4xl md:text-6xl text-pink-600 mb-8 text-center transform -rotate-1 bg-yellow-200 px-6 py-2 border-2 border-dashed border-pink-300 shadow-sm leading-tight">
                Arquivo de Videoclipes 🎬
              </h2>

              {reels.length === 0 ? (
                <div className="text-center text-gray-500 font-(--font-comic) mt-10 text-lg">
                  A pasta está vazia... Nenhuma fita VHS encontrada! 📼
                </div>
              ) : (
                <div className="w-full grid grid-cols-2 gap-4 md:gap-6">
                  {reels.map((reel: any, index: number) => (
                    <a
                      key={reel._id}
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative group flex flex-col bg-white p-2 pb-5 md:pb-6 border border-gray-300 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:-translate-y-2 hover:z-10 ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 md:w-12 h-4 md:h-5 bg-yellow-500/30 -rotate-2 z-10 shadow-sm backdrop-blur-[2px] border border-yellow-500/20"></div>

                      <div className="relative w-full aspect-[4/5] bg-gray-900 overflow-hidden border border-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={reel.imageUrl}
                          alt={reel.title}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/50 group-hover:bg-pink-500/90 group-hover:border-pink-400 group-hover:scale-110 transition-all shadow-lg">
                            <span className="text-white text-lg md:text-xl ml-1 drop-shadow-md">
                              ▶
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 md:mt-3 flex items-center justify-center px-1 h-10 md:h-12">
                        <p className="font-(--font-caveat) text-base md:text-xl text-gray-800 text-center leading-tight line-clamp-2">
                          {reel.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-10 pt-4 border-t border-dashed border-gray-300 w-full text-center text-gray-500 font-(--font-vt323) text-lg md:text-xl">
                <p>Status: {reels.length} reel(s) carregados com sucesso.</p>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </main>
  );
}
