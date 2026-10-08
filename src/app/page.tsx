/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import RetroWindow from "@/components/RetroWindow";
import RetroButton from "@/components/RetroButton";
import PolaroidPost from "@/components/PolaroidPost";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import RetroReelPlayer from "@/components/RetroReelPlayer";
import Link from "next/link";

export const revalidate = 30;

const meusPostsText = "MEUS POSTS";
const meusReelsText = "MEUS REELS";
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

  const reels =
    await client.fetch(`*[_type == "instagram"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    url,
    "imageUrl": coverImage.asset->url,
    publishedAt
  }`);

  const latestPostSlug = posts.length > 0 ? `/post/${posts[0].slug}` : "#";

  const latestReel = reels.length > 0 ? reels[0] : null;
  const otherReels = reels.slice(1);

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

      <hr className="w-full max-w-4xl border-dashed border-pink-300 my-8 shadow-sm" />

      <div className="w-full flex flex-col items-center mt-8 mb-16">
        <div className="w-full flex flex-wrap items-center justify-center mb-12 gap-1 md:gap-2">
          {meusReelsText.split("").map((letter, i) => {
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
          <span className="text-4xl md:text-5xl ml-2 transform -rotate-12 drop-shadow-md">
            🎬
          </span>
        </div>

        {latestReel && (
          <div className="w-full max-w-4xl flex flex-col items-center gap-12 px-4">
            <RetroReelPlayer reel={latestReel} />

            {otherReels.length > 0 && (
              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {otherReels.map((reel: any, index: number) => (
                  <a
                    key={reel._id}
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative group flex flex-col bg-white p-2 pb-5 md:pb-6 border border-gray-300 shadow-[6px_6px_0px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:-translate-y-2 hover:z-10 ${index % 2 === 0 ? "rotate-2" : "-rotate-3"}`}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-yellow-500/30 -rotate-2 z-10 shadow-sm backdrop-blur-[2px] border border-yellow-500/20"></div>

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

                    <div className="mt-3 flex items-center justify-center px-1 h-12">
                      <p className="font-(--font-caveat) text-lg md:text-xl text-gray-800 text-center leading-tight line-clamp-2">
                        {reel.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="mt-4 hover:scale-105 transition-transform">
              <Link href="/reels">
                <RetroButton>VER TODOS OS REELS 🍿</RetroButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
