import RetroWindow from "@/components/RetroWindow";
import RetroButton from "@/components/RetroButton";
import PolaroidPost from "@/components/PolaroidPost";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-fuchsia-200 flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">
      <div className="w-full max-w-xl pt-10">
        <RetroWindow title="bem_vindo_naymi.exe">
          <h1 className="text-2xl font-bold text-pink-600 mb-4">Oioioi! ✨</h1>
          <p className="text-gray-800 mb-6">
            O blog mais icônico da internet está nascendo!
          </p>

          <div className="flex justify-end">
            <RetroButton>NOVO POST 💖</RetroButton>
          </div>
        </RetroWindow>
      </div>

      <div className="w-full max-w-sm pt-10">
        <PolaroidPost
          title="look da bienal!"
          date="03 OUT 2026"
          imageUrl="https://picsum.photos/400/400?random=1"
          content="Fui na bienal do livro e resolvi colocar aquela saia que eu tava customizando. Achei que ficou super Monster High vibes!"
          rotation="-rotate-3"
        />
      </div>
    </main>
  );
}
