/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";
import RetroButton from "@/components/RetroButton";
import PolaroidPost from "@/components/PolaroidPost";
import Link from "next/link";

export const revalidate = 30;

export default async function Home() {
  const posts =
    await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    body
  }`);

  const getExcerpt = (body: any[]) => {
    const firstBlock = body?.find((block) => block._type === "block");
    return firstBlock
      ? firstBlock.children.map((child: any) => child.text).join("")
      : "Sem descrição...";
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

  return (
    <main className="min-h-screen p-8 bg-fuchsia-200 flex flex-col gap-12 items-center lg:items-start justify-center">

      <div className="w-full max-w-2xl mx-auto pt-10">
        <RetroWindow title="bem_vindo_naymi.exe">
          <h1 className="text-4xl font-[var(--font-caveat)] text-pink-600 mb-4">
            Oioioi! ✨
          </h1>
          <p className="text-gray-800 mb-6">
            O blog mais icônico da internet está nascendo!
          </p>

          <div className="flex justify-end">
            <RetroButton>NOVO POST 💖</RetroButton>
          </div>
        </RetroWindow>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-10 pt-10 px-4">
        {posts.map((post: any, index: number) => {
          const rotation = index % 2 === 0 ? "rotate-2" : "-rotate-3";

          return (
            <Link key={post._id} href={`/post/${post.slug}`}>
              <PolaroidPost
                title={post.title}
                date={formatDate(post.publishedAt)}
                imageUrl={post.imageUrl}
                content={getExcerpt(post.body)}
                rotation={rotation}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
