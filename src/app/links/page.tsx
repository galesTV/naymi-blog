import RetroWindow from "@/components/RetroWindow";

export default function LinksPage() {
  const myLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/naycult_/",
      color: "bg-pink-500 text-white",
      icon: "📸",
      description: "Fotos tremidas e muito brilho",
    },
    {
      name: "Letterboxd",
      url: "https://letterboxd.com/naysaito/",
      color: "bg-green-600 text-white",
      icon: "🍿",
      description: "Minhas reviews 100% parciais",
    },
    {
      name: "E-mail",
      url: "mailto:nayycult@gmail.com",
      color: "bg-blue-600 text-white",
      icon: "📧",
      description: "Me mande um correio eletrônico",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center pt-32 md:pt-40 px-4 pb-20 w-full">
      <div className="relative w-full max-w-xl mx-auto mt-4 md:mt-8">
        <div className="absolute bottom-full right-0 mb-2 flex flex-col items-end z-10 pointer-events-none transform rotate-3">
          <span
            className="text-xl md:text-2xl text-pink-600 font-bold bg-white/90 border-2 border-pink-200 px-3 py-1 shadow-sm mb-1"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            voltar para a página inicial
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
            className="text-pink-500 mr-2"
          >
            <line x1="12" y1="2" x2="12" y2="20" />
            <polyline points="6 14 12 20 18 14" />
          </svg>
        </div>

        <div className="w-full">
          <RetroWindow title="meus_links.exe" onCloseHref="/">
            <div className="bg-pink-50 border-2 border-gray-400 p-6 min-h-[400px] shadow-inner flex flex-col items-center">
              <h2
                className="text-3xl md:text-4xl text-pink-600 mb-8 text-center transform -rotate-2 bg-yellow-200 px-4 py-1 border-2 border-dashed border-pink-300 shadow-sm"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Onde me encontrar na web! 🕸️
              </h2>

              <div className="w-full flex flex-col gap-5 max-w-sm">
                {myLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 hover:-translate-y-1 transition-transform cursor-pointer shadow-[4px_4px_0px_rgba(0,0,0,0.2)] active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white active:translate-y-0 active:shadow-none ${link.color}`}
                  >
                    <span className="text-3xl mr-4 bg-white/20 p-2 border border-white/30 shadow-inner">
                      {link.icon}
                    </span>
                    <div className="flex flex-col">
                      <span
                        className="text-3xl uppercase tracking-widest leading-none mb-1 mt-1"
                        style={{ fontFamily: "var(--font-vt323), monospace" }}
                      >
                        {link.name}
                      </span>
                      <span
                        className="text-sm opacity-90 leading-tight font-bold"
                        style={{ fontFamily: "var(--font-comic), cursive" }}
                      >
                        {link.description}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className="mt-auto pt-8 text-center text-gray-500 text-sm font-bold"
                style={{ fontFamily: "var(--font-comic), cursive" }}
              >
                <p>Não esquece de assinar meu livro de visitas!</p>
                <p className="mt-1 text-xs uppercase tracking-wider">
                  Status: Online ✨
                </p>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </main>
  );
}
