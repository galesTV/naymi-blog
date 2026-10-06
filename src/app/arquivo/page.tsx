/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";
import Link from "next/link";

export const revalidate = 30;

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export default async function ArquivoPage() {
  const posts =
    await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    "slug": slug.current
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
          <RetroWindow
            title="C:\Meus_Documentos\Diario\Arquivo"
            onCloseHref="/"
          >
            <div className="bg-white border-2 border-gray-400 p-1 min-h-[400px] shadow-inner flex flex-col">
              <div className="flex gap-4 text-xs font-sans text-gray-700 border-b border-gray-300 pb-1 mb-2 px-2">
                <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                  Arquivo
                </span>
                <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                  Editar
                </span>
                <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                  Ver
                </span>
                <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                  Ajuda
                </span>
              </div>

              <div className="flex border-b-2 border-gray-300 font-bold text-xs md:text-sm font-sans bg-gray-200 text-gray-700 px-2 py-1 mb-2 shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_gray]">
                <div className="w-10 text-center">Ícone</div>
                <div className="flex-1 border-l border-gray-400 pl-2">
                  Nome do Arquivo
                </div>
                <div className="w-24 md:w-32 border-l border-gray-400 pl-2">
                  Data
                </div>
              </div>

              <div className="flex flex-col gap-1 overflow-y-auto">
                {posts.map((post: any, index: number) => (
                  <Link key={post._id} href={`/post/${post.slug}`}>
                    <div
                      className={`flex items-center px-2 py-1 cursor-pointer font-sans text-sm md:text-base group hover:bg-blue-600 hover:text-white ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    >
                      <div className="w-10 flex justify-center text-xl group-hover:drop-shadow-md">
                        📄
                      </div>
                      <div className="flex-1 truncate pl-2 group-hover:underline">
                        {post.title}
                      </div>
                      <div className="w-24 md:w-32 pl-2 text-xs md:text-sm text-gray-500 group-hover:text-blue-200">
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                  </Link>
                ))}

                {posts.length === 0 && (
                  <div className="text-center text-gray-500 font-(--font-comic) mt-10">
                    A pasta está vazia... 🕸️
                  </div>
                )}
              </div>

              <div className="mt-auto border-t border-gray-400 pt-1 px-2 text-xs font-sans text-gray-600 bg-gray-200 flex justify-between">
                <span>{posts.length} objeto(s)</span>
                <span>1337 KB</span>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </main>
  );
}
