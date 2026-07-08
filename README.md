# Brew Haven React

Scaffolded Vite + React conversion for the Brew Haven coffee site.

Quick start

```powershell
cd "g:\Brew Haven - Copy\react"
npm install
npm run dev
```

Build for production

```powershell
npm run build
npm run preview
```

Notes
- The project copies image assets from the original `Cofee App/assets/images` into `public/assets/images` during `npm install` using `scripts/copy-assets.js`.
- Cart state is persisted to `localStorage` and shared across pages via `CartContext`.
- This is a front-end demo; form submissions and "place order" just update `localStorage` or show a demo alert.

