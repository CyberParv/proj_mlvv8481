# Smoke Bistro

> Modern dining with a touch of smoke

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Experience the art of smoke and fire at Smoke Bistro. Our chefs combine traditional smoking techniques with modern culinary innovation for an unforgettable dining experience.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Customer testimonials

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, content-split, featured-grid, info-cards, testimonials, cta-banner
- **Menu** (`/menu`) — page-header, menu-list
- **About** (`/about`) — page-header, content-split, features-grid
- **Reservations** (`/reservations`) — page-header, reservation-form, info-cards
- **Contact** (`/contact`) — page-header, contact-split

## Project Structure

```
├── app/
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Menu.tsx
│   └── Reservations.tsx
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#C45C26](https://via.placeholder.com/15/C45C26/000000?text=+) | `#C45C26` |
| Secondary | ![#2C2C2C](https://via.placeholder.com/15/2C2C2C/000000?text=+) | `#2C2C2C` |
| Accent | ![#D4A574](https://via.placeholder.com/15/D4A574/000000?text=+) | `#D4A574` |
| Background | ![#FDFBF7](https://via.placeholder.com/15/FDFBF7/000000?text=+) | `#FDFBF7` |

## Typography

- **Headings:** Playfair Display
- **Body:** Inter

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mlvv8481.git

# Navigate to the project
cd proj_mlvv8481

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mlvv8481)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
