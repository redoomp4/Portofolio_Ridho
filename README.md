# Portfolio Dev

Portfolio Dev adalah website portfolio interaktif berbasis React + Vite untuk menampilkan profil, project case study, experience, dan tech stack.

## Gambaran Singkat

Alur utamanya dibuat sederhana: pengunjung masuk ke halaman utama, membaca profil, melihat project dan detailnya, serta mengecek experience dan tech stack.

Fitur utamanya:
- Animasi modern dengan GSAP + ScrollTrigger.
- Smooth scrolling dengan Lenis.
- Project gallery dengan halaman detail dinamis berbasis route.
- Desain responsif dan modern dengan Tailwind CSS.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis
- React Router

## Prasyarat

- Node.js 22 atau lebih baru
- npm 10 atau lebih baru

## Mulai Dari Nol

### 1. Clone repository

```bash
git clone https://github.com/redoomp4/Portfolio_Ridho.git
cd Portfolio-dev
```

### 2. Install dependency

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya `http://localhost:5173`.

### 4. Build production

```bash
npm run build
```

Hasil build akan masuk ke folder `build/`.

### 5. Preview hasil build

```bash
npm run preview
```

## Struktur Project

```text
.
├── index.html
├── public/
├── src/
│   ├── components/
│   ├── components/projects/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── projectDetails/
│   ├── services/
│   └── utils/
├── tailwind.config.js
├── vite.config.js
└── build/
```

## Cara Kerja Konten

Kalau kamu ingin mengubah isi portfolio tanpa mengutak-atik layout besar, fokus ke file berikut:

- Profile, experience, tech stack, projects, achievements, dan capabilities: `src/data/portfolioData.js`
- Metadata kartu project di gallery: `src/data/projectMeta.js`
- Konten detail project: `src/data/projectDetailsData.js`
- Detail route custom per project: `src/projectDetails/projectRegistry.js`

### Menambah project baru

1. Tambahkan metadata project di `src/data/projectMeta.js`.
2. Tambahkan data detail dengan `slug` yang sama di `src/data/projectDetailsData.js`.
3. Jika butuh tampilan detail custom, buat komponen baru di `src/projectDetails/`.
4. Daftarkan komponen tersebut di `src/projectDetails/projectRegistry.js`.

## Asset Penting

- Foto about: `public/profilee.webp`
- Foto preload hero: `public/profile.webp`
- CV: `public/cv.pdf`

## Deploy

Deploy hasil folder `build/` ke hosting statis seperti Netlify, Vercel, atau Cloudflare Pages.

Karena ini SPA (Single Page Application), pastikan rewrite/fallback route diarahkan ke `index.html` supaya route seperti detail project tetap aman saat dibuka langsung.
