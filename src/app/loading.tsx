export default function Loading() {
  return (
    <div className="min-h-screen p-8 bg-fuchsia-200 flex flex-col items-center justify-center pt-40">
      <div className="bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 p-6 shadow-xl flex flex-col items-center gap-4 max-w-sm w-full">
        <div className="w-12 h-12 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="font-[var(--font-vt323)] text-2xl text-gray-800 animate-pulse tracking-widest uppercase">
          Carregando a fofoca...
        </p>
      </div>
    </div>
  );
}
