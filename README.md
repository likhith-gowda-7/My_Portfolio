<p align="center">
  <img src="https://media.base44.com/images/public/user_69e620b432b1b031fe38c197/1ffd6a727_Photo.jpg" width="120" height="140" style="border-radius: 16px; object-fit: cover;" alt="Likhith D M" />
</p>

<h1 align="center">Likhith D M — Portfolio</h1>

<p align="center">
  <strong>System Engineer · DSA Enthusiast · Full-Stack Developer</strong>
</p>

<p align="center">
  <a href="https://leetcode.com/u/D_M_Likhith/">
    <img src="https://img.shields.io/badge/LeetCode-700+-F97316?style=for-the-badge&logo=leetcode&logoColor=white" alt="LeetCode" />
  </a>
  <a href="https://www.linkedin.com/in/d-m-likhith/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/likhith-gowda-7">
    <img src="https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

---

## 🔥 Overview

A modern, performance-optimized personal portfolio built with **React 18**, **Vite**, and **Framer Motion**. Features a distinctive amber-dark aesthetic, interactive canvas particle backgrounds, a custom cursor system, and data-driven content architecture.

> **Live**: Deployed on Base44 platform

---

## ✨ Features

| Feature | Description |
|---|---|
| **Amber-Dark Theme** | Cohesive design system with light/dark mode toggle and smooth ripple transition |
| **Canvas Particle Background** | Interactive particle network rendered on HTML5 Canvas with optimized distance calculations |
| **Custom Cursor** | GPU-accelerated cursor with hover detection — zero React re-renders via direct DOM manipulation |
| **Typewriter Effect** | Animated role cycling in the hero section |
| **DSA Dashboard** | Animated counters, difficulty breakdown bars, radar chart, and multi-platform stats |
| **Timeline Experience** | Git commit-style achievement tags (FIX / FEAT / OPTIMIZE) with expandable cards |
| **Lazy-Loaded Sections** | Below-the-fold sections loaded via `React.lazy` + `Suspense` for faster initial paint |
| **Contact Form** | Working form powered by Web3Forms API with loading/error/success states |
| **Scroll Progress** | Top progress bar + corner percentage indicator (ref-based, no re-renders) |
| **Responsive Design** | Fully responsive across all breakpoints with mobile navigation |
| **SEO Optimized** | Open Graph meta tags, semantic HTML, proper heading hierarchy |

---

## 🛠️ Tech Stack

### Core
- **React 18** — UI framework with hooks, lazy loading, and Suspense
- **Vite 6** — Build tool with HMR and optimized bundling
- **React Router v6** — Client-side routing

### Styling & Animation
- **Tailwind CSS 3** — Utility-first CSS with custom design tokens
- **Framer Motion** — Scroll-triggered animations, layout transitions, and spring physics
- **Custom CSS** — Blueprint grid, glassmorphism, micro-interactions

### Data Visualization
- **Recharts** — Radar chart for skill visualization
- **HTML5 Canvas** — Particle network background

### Integrations
- **Web3Forms** — Serverless contact form email delivery
- **Lucide React** — Icon system
- **Google Fonts** — Inter + Poppins typography

---

## 📁 Project Structure

```
├── index.html                        # Entry HTML with SEO meta tags
├── src/
│   ├── App.jsx                       # Router + Auth wrapper
│   ├── main.jsx                      # React DOM entry point
│   ├── index.css                     # Design tokens + custom styles
│   ├── pages/
│   │   └── Portfolio.jsx             # Main page — lazy loads sections
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── Navbar.jsx            # Floating nav + theme toggle
│   │   │   ├── HeroSection.jsx       # Photo + typewriter + particles
│   │   │   ├── AboutSection.jsx      # Bio + education card
│   │   │   ├── DSASection.jsx        # LeetCode stats + radar chart
│   │   │   ├── ExperienceSection.jsx # Timeline with expandable cards
│   │   │   ├── ProjectsSection.jsx   # Project cards with status
│   │   │   ├── SkillsSection.jsx     # Skill bars by category
│   │   │   ├── ContactSection.jsx    # Form + social links
│   │   │   ├── CustomCursor.jsx      # GPU-accelerated custom cursor
│   │   │   └── ScrollProgress.jsx    # Scroll bar + percentage
│   │   └── ui/                       # Shared UI components (shadcn)
│   ├── data/
│   │   └── portfolioData.js          # Single source of truth for content
│   ├── lib/                          # Utilities + auth context
│   └── hooks/                        # Custom React hooks
├── tailwind.config.js                # Tailwind + design tokens
├── vite.config.js                    # Vite configuration
└── package.json                      # Dependencies + scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/likhith-gowda-7/My_Portfolio.git
cd My_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview    # Preview the production build
```

---

## ⚡ Performance Optimizations

This portfolio is engineered for speed:

| Optimization | Impact |
|---|---|
| **React.lazy + Suspense** | 6 below-the-fold sections lazy-loaded — smaller initial bundle |
| **DOM-direct cursor** | Custom cursor uses `requestAnimationFrame` + raw DOM manipulation — zero React re-renders |
| **Ref-based scroll %** | Scroll percentage updates via `ref.textContent` — no `setState` on scroll |
| **Optimized canvas** | Particle count tuned to 18, squared-distance pre-check skips `Math.sqrt` for distant pairs |
| **Scoped cursor CSS** | `cursor: none` only on `@media (pointer: fine)` — preserves touch device UX |
| **Single animation containers** | DSA topic chips animate as a group, not 28 individual instances |

---

## 📝 Content Management

All portfolio content lives in a single file: [`src/data/portfolioData.js`](src/data/portfolioData.js)

Update your data there — the UI renders automatically. Exports include:

| Export | Purpose |
|---|---|
| `PERSONAL` | Name, title, tagline, photo, social links |
| `ABOUT` | Bio paragraphs + highlight cards |
| `EDUCATION` | Degree, institution, CGPA, achievements |
| `SKILLS` | Categorized skills with proficiency levels |
| `EXPERIENCE` | Job/internship/freelance timeline |
| `PROJECTS` | Project cards with tech stacks + links |
| `DSA_STATS` | LeetCode stats, platform profiles, topics mastered |
| `STATS` | Animated counter values |
| `NAV_ITEMS` | Navigation structure + section order |

---

## 📬 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) for serverless email delivery.

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email to get a free access key
3. Update the key in `src/components/portfolio/ContactSection.jsx`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built with precision by <strong>Likhith D M</strong></sub>
</p>
