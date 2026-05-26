# 📚 Shree Nawajyoti School

A modern school website built with [Next.js 15](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

---

## 🚀 Features

- ⚡️ Next.js 15 with **Turbopack** for fast development
- 🎨 Tailwind CSS v4 for styling
- 🧩 ShadCN for accessible UI components
- 🗂️ Zustand for state management
- ✅ Strict TypeScript setup & ESLint integration

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) **v18.18 or later (LTS recommended)**  
- [pnpm](https://pnpm.io/) package manager

### Package Manager Setup

This project uses **pnpm** as the package manager for consistency and performance. 

**Installation:**
```bash
# Enable Corepack (ships with Node ≥16.9)
corepack enable

# Or install pnpm globally
npm install -g pnpm
```

**Enforcement:** This repository blocks `npm install` and `yarn install` to ensure consistency. If you try using other package managers, you'll see an error message.

---

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-org/thulbaba-school-website.git
cd thulbaba-school-website
pnpm install
```

---

## 📋 Available Scripts

In the project directory, you can run:

```bash
pnpm dev
```

Runs the development server with Turbopack.
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

```bash
pnpm build
```

Builds the app for production.

```bash
pnpm start
```

Runs the built app in production mode.

```bash
pnpm lint
```

Runs ESLint for code quality.

---

## 📖 Folder Structure

```
thulbaba-school-website/
├── app/                 # Next.js App Router pages/layouts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/          # Reusable UI components
│   └── ui/
│       └── button.tsx
├── config/              # Configuration files
│   └── zustand.ts       # Zustand store configuration
├── lib/                 # Utilities and helpers
│   ├── hooks.ts
│   └── utils.ts
├── public/              # Static assets
│   ├── images/
│   └── logos/
├── scripts/             # Build and utility scripts
│   └── ensure-pnpm.js
├── types/               # TypeScript type definitions
│   ├── components.d.ts
│   └── data.d.ts
├── .npmrc               # npm configuration
├── components.json      # shadcn/ui configuration
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── pnpm-lock.yaml       # pnpm lockfile
├── postcss.config.mjs   # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m '✨ Add amazing feature'
   ```
4. Push to the branch:

   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).