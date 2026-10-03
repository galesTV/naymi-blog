/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";
import Link from "next/link";
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

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-fuchsia-200 flex flex-col items-center">
      <div className="w-full max-w-3xl pt-6">
        <Link
          href="/"
          className="inline-block mb-6 text-fuchsia-700 font-bold hover:text-pink-500 hover:underline"
        >
          ← Voltar para a Home
        </Link>

        <RetroWindow title={`${slug}.txt`}>
          <article className="p-2 md:p-6">
            <header className="mb-8 border-b-2 border-pink-200 pb-6 text-center">
              <h1 className="text-5xl font-[var(--font-caveat)] text-pink-600 mb-2">
                {post.title}
              </h1>
              <time className="text-gray-500 font-bold uppercase text-sm tracking-wider">
                Publicado em {formatDate(post.publishedAt)}
              </time>
            </header>

            {post.imageUrl && (
              <div className="mb-10 border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] bg-white p-2 transform -rotate-1 mx-auto max-w-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-auto object-cover filter grayscale-[10%] sepia-[10%]"
                />
              </div>
            )}

            <div className="font-[var(--font-comic)]">
              {post.body ? (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              ) : (
                <p>O post tá vazio! Cadê a fofoca?</p>
              )}
            </div>
          </article>
        </RetroWindow>
      </div>
    </main>
  );
}
