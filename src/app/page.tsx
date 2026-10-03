import RetroWindow from "@/components/RetroWindow";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-fuchsia-200">
      <RetroWindow title="bem_vindo_naymi.exe">
        <h1 className="text-2xl font-bold text-pink-600 mb-4">Oioioi! ✨</h1>
        <p className="text-gray-800 mb-2">
          O blog mais icônico da internet está nascendo!
        </p>
        <p className="text-sm text-gray-500 italic">
          (Aqui dentro vão entrar os textos e fotos dela)
        </p>
      </RetroWindow>
    </main>
  );
}