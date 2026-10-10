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
  const postsData = await client.fetch(`*[_type == "post"] {
    _id,
    title,
    publishedAt,
    "slug": slug.current
  }`);

  const reelsData = await client.fetch(`*[_type == "instagram"] {
    _id,
    title,
    url,
    publishedAt
  }`);

  const allFiles = [
    ...postsData.map((p: any) => ({ ...p, type: "post" })),
    ...reelsData.map((r: any) => ({ ...r, type: "reel" })),
  ].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

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
                {allFiles.map((file: any, index: number) => {
                  const isPost = file.type === "post";
                  const href = isPost ? `/post/${file.slug}` : file.url;
                  const target = isPost ? "_self" : "_blank";
                  const icon = isPost ? "📄" : "🎬";
                  const extension = isPost ? ".txt" : ".mp4";

                  return (
                    <Link
                      key={file._id}
                      href={href}
                      target={target}
                      rel={isPost ? "" : "noopener noreferrer"}
                    >
                      <div
                        className={`flex items-center px-2 py-1 cursor-pointer font-sans text-sm md:text-base group hover:bg-blue-600 hover:text-white ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <div className="w-10 flex justify-center text-xl group-hover:drop-shadow-md">
                          {icon}
                        </div>
                        <div className="flex-1 truncate pl-2 group-hover:underline">
                          {file.title}
                          <span className="opacity-40 text-xs ml-1 font-(--font-vt323)">
                            {extension}
                          </span>
                        </div>
                        <div className="w-24 md:w-32 pl-2 text-xs md:text-sm text-gray-500 group-hover:text-blue-200">
                          {formatDate(file.publishedAt)}
                        </div>
                      </div>
                    </Link>
                  );
                })}

                {allFiles.length === 0 && (
                  <div className="text-center text-gray-500 font-(--font-comic) mt-10">
                    A pasta está vazia... 🕸️
                  </div>
                )}
              </div>

              <div className="mt-auto border-t border-gray-400 pt-1 px-2 text-xs font-sans text-gray-600 bg-gray-200 flex justify-between">
                <span>{allFiles.length} objeto(s)</span>
                <span>1337 KB</span>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </main>
  );
}
