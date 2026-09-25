# VYOM Design System Rules

This document outlines the conventions, tokens, and structures for the VYOM React project. Use these guidelines when interpreting Figma designs and generating or modifying components.

## 1. Token Definitions
Design tokens are primarily managed through Tailwind CSS configuration (`tailwind.config.js`).

- **Colors**:
  - `brand-blue`: `#0D1775`
  - `brand-dark`: `#0B0D17`
  - `brand-light`: `#F8F9FA`
  - *Note: Direct hex codes (e.g., `#ffffff`, `#14171a`) are often used inline or in CSS files alongside Tailwind tokens.*
- **Typography**: 
  - The default `font-sans` is `"IBM Plex Sans"`.
  - **Tracking/Kerning**: Global tight tracking is defined as `tracking-tighter` (`-0.05em`, equating to -5% kerning as per Figma).
- **Format**: Tailwind configuration acts as the single source of truth for base tokens.

## 2. Component Library
- **Location**: All UI components are located in `src/components/` (e.g., `Navbar.jsx`, `Hero.jsx`, `About.jsx`).
- **Architecture**: Functional React components utilizing hooks. Layouts favor composition (e.g., separating `Navbar` from `Hero`).
- **State/Animation**: Framer Motion is actively used for animations, transitions, scroll-based effects (parallax, fading navbar on scroll), and Lenis is used for smooth scrolling.

## 3. Frameworks & Libraries
- **Core**: React 19 + Vite.
- **Styling**: Tailwind CSS combined with standard vanilla CSS files (e.g., `Navbar.css`, `index.css`) for complex behaviors or legacy styling.
- **Animation**: `framer-motion` for declarative animations, `lenis` for smooth scrolling.
- **Linting**: `oxlint` for performance-focused linting.

## 4. Asset Management
- **Directories**: 
  - `/images/` and `/new_images/` (Project Root): General large image assets (e.g., `heroimage.png`).
  - `/public/logos/`: Logo assets (e.g., `logopng.png`).
- **Referencing**: Import root/src images directly into components (e.g., `import heroImage from '../../images/heroimage.png'`). Assets in `/public` can be referenced via absolute paths (e.g., `src="/logos/logopng.png"`).

## 5. Icon System
- **Lucide React**: Available in `package.json` (`lucide-react`) for standard icons.
- **Inline SVGs**: Custom Figma icons (like the dropdown chevron or custom search icon) are often exported as inline SVGs directly inside the React components to easily utilize `currentColor` for dynamic styling (e.g., adapting to scroll states).

## 6. Styling Approach
- **Hybrid CSS/Tailwind**:
  - **Tailwind**: Used for layout (`flex`, `items-center`, `gap-X`), typography (`text-center`, `tracking-tighter`), and rapid responsive design.
  - **Vanilla CSS**: Used in accompanying `.css` files (e.g., `Navbar.css`) for specific pseudo-classes, complex layout structures, and scroll-based state overrides (e.g., `.navbar.scrolled`).
- **Global Styles**: `@layer base` in `index.css` overrides default HTML elements (like `body`, `button`) applying brand fonts and sizes globally.

## 7. Project Structure
- **Root**: Configuration (`package.json`, `tailwind.config.js`, `vite.config.js`).
- **`/src`**: Contains entry points (`main.jsx`, `App.jsx`, `index.css`) and feature components.
- **Separation of Concerns**: Components are heavily modularized per fold/section (e.g., `ClientStrip.jsx`, `LatestNews.jsx`, `Services.jsx`).
