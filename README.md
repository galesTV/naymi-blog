# 🎀 Blog da Naymi | Y2K & Windows 98 Aesthetic

[![Deploy na Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://naymi-blog.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![Sanity CMS](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)]()

Bem-vindo ao **Blog da Naymi**, um diário digital que funciona como uma cápsula do tempo para a internet dos anos 2000. O projeto combina a nostalgia das interfaces do Windows 95/98, fóruns antigos e web design retrô.

🌐 **Acesse ao vivo:** [naymi-blog.vercel.app](https://naymi-blog.vercel.app)

---

## 💻 Sobre o Projeto

O objetivo deste projeto foi recriar a "bagunça organizada" e a expressividade artística da internet antiga (Web 1.0 / Y2K). A interface de usuário (UI) simula um sistema operacional retrô, onde cada seção é uma janela interativa.

Todo o conteúdo (Posts e Reels do Instagram) é gerenciado de forma "headless" através do **Sanity CMS**, permitindo à autora publicar conteúdo sem precisar tocar em código.

## ✨ Funcionalidades Principais (Features)
- **🖥️ Sistema Operacional UI:** Componentes reutilizáveis baseados no Windows 95 (`RetroWindow`), botões com ilusão 3D css-only, barras de navegação globais e selos virtuais clássicos.
- **📼 Galeria de Mídia Híbrida:** Componente `InstaPlayer.exe` (um falso Windows Media Player) e grids de vídeos formatados como polaroides interativas.
- **📁 Explorador de Arquivos:** Uma página `/arquivo` que unifica artigos (formatados visualmente como `.txt`) e vídeos (como `.mp4`) numa lista cronológica.
- **🎵 Leitor de Música Global:** Playlist nostálgica anos 2000 integrada diretamente no cabeçalho (Header) mantendo o estado de reprodução.
- **💙 Tela Azul da Morte (404):** Página de erro nativa do Next.js transformada numa BSOD fullscreen e imersiva com autoplay de aúdio de erro do Windows XP.
- **🚀 SEO & Performance:** Imagens responsivas, tipografia otimizada (Google Fonts), fallback `OpenGraph` dinâmico via `generateMetadata` para compartilhamentos em redes sociais.

## 🛠️ Stack
- **Frontend:** Next.js 15 (App Router), React, TypeScript.
- **Estilização:** Tailwind CSS (com classes utilitárias avançadas para efeitos *glassmorphism*, texturas de scrapbook e animações CSS personalizadas).
- **Backend / CMS:** Sanity Studio (Schema configurado para gerenciar textos ricos via PortableText e URLs externas).
- **Deploy:** Vercel (CI/CD contínuo).

## 🚀 Como correr localmente
1. Clone o repositório:
```bash
git clone https://github.com/galesTV/naymi-blog.git
```
2. Instale as dependências:
```bash
npm install
```
3. Crie um arquivo `.env.local` na raiz com as suas variáveis do Sanity:
```snippet
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Abra http://localhost:3000 no navegador para ver o resultado.
