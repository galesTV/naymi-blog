import RetroWindow from "@/components/RetroWindow";
import RetroButton from "@/components/RetroButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-fuchsia-200">
      <RetroWindow title="bem_vindo_naymi.exe">
        <h1 className="text-2xl font-bold text-pink-600 mb-4">Oioioi! ✨</h1>
        <p className="text-gray-800 mb-6">
          O blog mais icônico da internet está nascendo!
        </p>

        <div className="flex justify-end">
          <RetroButton>CLIQUE AQUI 💖</RetroButton>
        </div>
      </RetroWindow>
    </main>
  );
}
