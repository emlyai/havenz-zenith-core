# Havenz Smart Communities

The marketing website for **Havenz** — Building Tomorrow's Smart Communities.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Install & Run

```sh
# Clone the repo
git clone https://github.com/havenz/zenith-core.git
cd zenith-core

# Install dependencies
npm install

# Start dev server (runs on http://localhost:8080)
npm run dev
```

### Build for Production

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   └── ui/           # shadcn/ui primitives
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Route pages
│   ├── Index.tsx     # Home / landing page
│   ├── About.tsx     # About Havenz
│   ├── Services.tsx  # Services & capabilities
│   ├── Projects.tsx  # Featured projects
│   ├── Contact.tsx   # Contact form
│   └── NotFound.tsx  # 404 page
└── main.tsx          # App entry point
```

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Component library |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [React Query](https://tanstack.com/query) | Async state management |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## License

Proprietary - All rights reserved.
