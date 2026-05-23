# React: Beginner to Advanced ⚛️

> 10 hands-on React projects in one repo — from basic components to Redux Toolkit, React Router, Context API, theme switching, and a custom React implementation built from scratch.

Each folder is a fully working app focused on one concept. Run it, read the code, break it, fix it. That's the point.

---

## Table of Contents

- [Projects](#projects)
- [How to Run](#how-to-run)
- [Recommended Learning Order](#recommended-learning-order)
- [Prerequisites](#prerequisites)
- [About](#about)

---

## Projects

| Folder | Project | Concepts Covered |
|---|---|---|
| `01_basics` | React Basics | JSX, components, props, state, event handling |
| `customReact` | Custom React | How React works under the hood — build a minimal React-like renderer |
| `05_password_generator` | Password Generator | `useState`, controlled inputs, string manipulation, clipboard API |
| `currency_converter` | Currency Converter | Forms, state, calculations — **intentionally has bugs to fix** |
| `themeswitcher` | Theme Switcher | Light/dark mode toggle using Context API + Tailwind |
| `mini_context_Api` | Context API Mini App | `createContext`, `useContext`, avoiding prop drilling |
| `todocontextlocal` | Todo + localStorage | Context API + `localStorage` for persistent state |
| `rouing_practise` | Routing Practice | React Router v6 — `Route`, `Link`, `useNavigate`, `useParams` |
| `redux-toolkit` | Redux Toolkit | `configureStore`, `createSlice`, `useSelector`, `useDispatch` |
| `12MegaProject` | Mega Project | Multi-page app combining routing, components, and state management |

> 💡 `customReact` is one of the most valuable folders in this repo — understanding how React renders under the hood makes everything else click.

---

## How to Run

Each project is independent. Navigate into any folder, install, and start:

```bash
# Clone the repo
git clone https://github.com/Wcoder547/React.git
cd React

# Navigate to a project
cd 05_password_generator

# Install dependencies
npm install

# Start the dev server
npm run dev
```

App runs at `http://localhost:5173`. Press `Ctrl+C` to stop.

---

## Recommended Learning Order

**For beginners** — follow this path:

```
01_basics → customReact → 05_password_generator → currency_converter
  → themeswitcher → mini_context_Api → todocontextlocal
  → rouing_practise → redux-toolkit → 12MegaProject
```

**For experienced developers** — jump to what you need. Each folder is fully self-contained.

One suggestion: even if you're experienced, look at `customReact` — building a minimal renderer from scratch is one of the best ways to understand why React works the way it does.

---

## Prerequisites

- Node.js v18+ ([nodejs.org](https://nodejs.org))
- Basic JavaScript (ES6+) — functions, destructuring, array methods, modules
- For `redux-toolkit`: familiarity with the concept of a global store will help, but isn't required

---

## About

This repo was built to cover React the right way — not just `useState` and calling it done, but understanding the full picture: how React actually renders, why Context exists and when Redux is the better choice, how routing works client-side, and what persistent state looks like in a real app.

The `customReact` folder alone is worth cloning the repo for. Building a React-like renderer from scratch — even a minimal one — changes how you read and write React code.

**Built by [Waseem Akram](https://www.linkedin.com/in/wasim-akram-dev/)** — Full-Stack Developer and DevOps Engineer based in Pakistan, working across the MERN stack, Generative AI integrations, and cloud automation.

---

*If this helped you, consider giving it a ⭐*
