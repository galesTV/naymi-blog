/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const revalidate = 0;

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-4 text-gray-800 text-lg leading-relaxed">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-[var(--font-caveat)] text-pink-600 mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-fuchsia-500 mb-4 mt-6">
        {children}
      </h2>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-pink-400 pl-4 my-4 italic text-gray-600 bg-pink-50 py-2 pr-2">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-extrabold text-pink-600">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-purple-600">{children}</em>
    ),
  },
};

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date
    .toLocaleDateString("pt-PT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase()
    .replace(" DE ", " ");
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      body
    }`,
    { slug },
  );

  if (!post) return notFound();

  return (
    <main className="min-h-screen p-4 md:p-12 bg-fuchsia-200 flex flex-col items-center pt-40 md:pt-48">
      <div className="relative w-full max-w-xl">
        <div className="absolute -top-17 -right-6 md:-right-13 flex flex-col items-end z-10 pointer-events-none transform rotate-2">
          <span className="font-[var(--font-caveat)] text-xl md:text-2xl text-pink-600 font-bold bg-white/70 backdrop-blur-md px-3 py-1 rounded-lg mb-1 shadow-sm">
            retornar para a página inicial
          </span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-pink-600 mr-8"
          >
            <line x1="19" y1="5" x2="5" y2="19" />
            <polyline points="14 19 5 19 5 10" />
          </svg>
        </div>

        <RetroWindow title={`${slug}.txt`} onCloseHref="/">
          <article className="p-2 md:p-6 text-center">
            <header className="mb-8 border-b-2 border-pink-200 pb-6">
              <h1 className="text-5xl font-[var(--font-caveat)] text-pink-600 mb-2 leading-tight">
                {post.title}
              </h1>
              <time className="text-gray-500 font-bold uppercase text-sm tracking-wider">
                Publicado em {formatDate(post.publishedAt)}
              </time>
            </header>

            {post.imageUrl && (
              <div className="relative mx-auto mb-10 w-[260px] sm:w-[320px] bg-white p-3 pb-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] border border-gray-300 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm rotate-3 z-10" />
                <div className="bg-pink-100 w-full aspect-square border border-gray-200 overflow-hidden flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="block w-full h-full object-cover filter grayscale-[10%] sepia-[10%]"
                  />
                </div>
              </div>
            )}

            <div className="font-[var(--font-comic)] text-left">
              {post.body ? (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-center italic text-gray-500">
                  O post tá vazio! Cadê a fofoca?
                </p>
              )}
            </div>
          </article>
        </RetroWindow>
      </div>
    </main>
  );
}
