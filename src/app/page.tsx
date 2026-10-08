/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";
import RetroButton from "@/components/RetroButton";
import PolaroidPost from "@/components/PolaroidPost";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Link from "next/link";

export const revalidate = 30;

const meusPostsText = "MEUS POSTS";
const fonts = [
  "font-(--font-caveat)",
  "font-(--font-comic)",
  "font-(--font-vt323)",
];
const textColors = [
  "text-pink-600",
  "text-blue-600",
  "text-fuchsia-600",
  "text-green-600",
  "text-purple-600",
];
const bgColors = [
  "bg-yellow-200",
  "bg-white",
  "bg-pink-200",
  "bg-cyan-200",
  "bg-orange-200",
];
const rotations = [
  "-rotate-6",
  "rotate-3",
  "-rotate-12",
  "rotate-12",
  "-rotate-3",
];

export default async function Home() {
  const posts =
    await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    body
  }`);

  const latestPostSlug = posts.length > 0 ? `/post/${posts[0].slug}` : "#";

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
    <main className="min-h-screen p-4 xl:p-8 flex flex-col justify-start items-center max-w-[1600px] mx-auto pt-10 overflow-hidden">
      <div className="w-full flex flex-col xl:flex-row gap-8 justify-center items-start mb-16">
        <LeftSidebar />

        <div className="flex-1 w-full flex flex-col gap-8 max-w-2xl">
          <RetroWindow title="bem_vindo_naymi.exe">
            <div className="flex flex-col h-[350px] justify-center items-center">
              <h1 className="text-4xl md:text-5xl font-(--font-caveat) text-pink-600 mb-4 text-center">
                Oioioi! ✨
              </h1>
              <p className="text-gray-800 mb-8 text-center text-lg md:text-xl px-4">
                O blog mais icônico da internet está nascendo!
              </p>
              <div className="flex justify-center hover:scale-105 transition-transform">
                <Link href={latestPostSlug}>
                  <RetroButton>NOVO POST 💖</RetroButton>
                </Link>
              </div>
            </div>
          </RetroWindow>

          <RetroWindow title="quote_do_dia.txt">
            <blockquote className="font-(--font-comic) text-center italic text-gray-700 p-8 text-lg">
              &quot;A internet era muito mais legal quando demorava 5 minutos
              para carregar uma foto.&quot; <br />
              <span className="font-bold text-pink-500 mt-2 inline-block">
                - Desconhecido
              </span>
            </blockquote>
          </RetroWindow>
        </div>

        <RightSidebar />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-wrap items-center justify-center mb-10 gap-1 md:gap-2">
          {meusPostsText.split("").map((letter, i) => {
            if (letter === " ")
              return <span key={i} className="w-4 md:w-8"></span>;
            return (
              <span
                key={i}
                className={`inline-block px-2 py-1 md:px-4 md:py-2 border-2 border-gray-800 shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] text-3xl md:text-5xl font-bold uppercase ${fonts[i % fonts.length]} ${textColors[i % textColors.length]} ${bgColors[i % bgColors.length]} ${rotations[i % rotations.length]}`}
              >
                {letter}
              </span>
            );
          })}
          <span className="text-4xl md:text-5xl ml-2 transform rotate-12 drop-shadow-md">
            📸
          </span>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-10 px-2 pb-12">
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
      </div>
    </main>
  );
}
