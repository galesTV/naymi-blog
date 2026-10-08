/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const revalidate = 30;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      "imageUrl": mainImage.asset->url,
    }`,
    { slug }
  );

  if (!post) return {};

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
      type: "article",
    },
  };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-5 text-gray-800 text-lg md:text-xl font-(--font-comic) leading-relaxed">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-(--font-caveat) text-pink-600 bg-yellow-200 inline-block px-3 py-1 border-2 border-dashed border-pink-400 transform -rotate-2 shadow-sm mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-(--font-vt323) text-white bg-blue-600 inline-block px-3 py-1 border-2 border-black transform rotate-1 shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-4 mt-6">
        {children}
      </h2>
    ),
    blockquote: ({ children }: any) => (
      <div className="relative my-8 px-2 md:px-8">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-yellow-100/60 rotate-3 z-10 shadow-sm border border-yellow-200 backdrop-blur-[1px]"></div>
        <blockquote className="bg-yellow-200 border border-yellow-300 p-4 md:p-6 font-(--font-caveat) text-2xl md:text-3xl text-gray-800 transform -rotate-1 shadow-md">
          &quot;{children}&quot;
        </blockquote>
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-5 flex flex-col gap-2 font-(--font-comic) text-lg text-gray-800 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-5 flex flex-col gap-2 font-(--font-comic) text-lg text-gray-800 font-bold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-2">
        <span className="text-pink-500 mt-1 drop-shadow-sm text-sm">💖</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="bg-pink-300 text-black px-1 font-extrabold transform rotate-1 inline-block">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="font-(--font-caveat) text-2xl text-blue-700 not-italic">
        {children}
      </em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-bold underline decoration-2 decoration-blue-600 hover:text-pink-500 hover:decoration-pink-500 hover:bg-yellow-100 transition-colors cursor-help"
      >
        {children}
      </a>
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
    <main className="min-h-screen flex flex-col items-center pt-32 md:pt-40 px-4 pb-20 w-full">
      <div className="relative w-full max-w-xl mx-auto mt-4 md:mt-8">
        <div className="absolute bottom-full right-0 mb-2 flex flex-col items-end z-10 pointer-events-none transform rotate-2">
          <span className="font-(--font-caveat) text-xl md:text-2xl text-pink-600 font-bold bg-white/90 border-2 border-pink-200 px-3 py-1 shadow-sm mb-1">
            retornar para a página inicial
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
            className="text-pink-600 mr-2 mt-1"
          >
            <line x1="12" y1="2" x2="12" y2="20" />
            <polyline points="6 14 12 20 18 14" />
          </svg>
        </div>

        <div className="w-full">
          <RetroWindow title={`${slug}.txt`} onCloseHref="/">
            <article className="p-2 md:p-6 text-center">
              <header className="mb-8 border-b-2 border-pink-200 pb-6">
                <h1 className="text-5xl font-(--font-caveat) text-pink-600 mb-2 leading-tight">
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

              <div className="text-left w-full mt-4">
                {post.body ? (
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                ) : (
                  <p className="text-center italic text-gray-500 font-(--font-comic)">
                    O post tá vazio! Cadê a fofoca?
                  </p>
                )}
              </div>
            </article>
          </RetroWindow>
        </div>
      </div>
    </main>
  );
}
