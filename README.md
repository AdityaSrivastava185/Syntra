- Inspired by [Mistral AI](https://mistral.ai/)
- Credit - [Mistral AI](https://mistral.ai/)

# Syntra - AI Coding Solutions

A modern, dark-themed Next.js landing page for enterprise AI coding solutions, inspired by Mistral AI's platform , build from scratch as a design engineer study

## Overview

**Syntra** is a professional landing page showcasing AI-powered coding solutions for enterprises. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, this project features a complete dark mode design system with comprehensive color theming.

## Features

- **Dark Mode First**: Default dark theme with light mode support via system preferences
- **Responsive Design**: Fully responsive across all screen sizes
- **Modern Stack**: Next.js 16.3.8, React 19.2.8, TypeScript, Tailwind CSS v4
- **Comprehensive Color System**: 15+ CSS variables for consistent theming
- **Component-Based Architecture**: Modular, reusable React components

## Project Structure

```
├── app/
│   ├── (root)/
│   │   └── page.tsx              # Main landing page
│   ├── (components)/
│   │   └── components/
│   │       ├── layout/           # Header, Footer components
│   │       ├── sections/         # Hero, Workflows, Features, Support, Usages
│   │       ├── ui/               # UI components (UsageWorkTitleCard)
│   │       └── utility/          # Utility components (UsageCard)
│   ├── globals.css               # Global styles and color variables
│   └── layout.tsx                # Root layout
├── public/
│   ├── images/                   # Project images and assets
│   └── *.svg                     # SVG icons
├── types/
│   └── UsageWorkType.ts          # TypeScript type definitions
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Color System

The project uses a comprehensive dark-first color system with CSS custom properties:

### Dark Mode (Default)
```css
--background: #101013;           /* Primary background */
--foreground: #ededed;           /* Primary text */
--background-secondary: #1a1a1e; /* Secondary surfaces */
--background-tertiary: #202023;  /* Tertiary surfaces */
--border-primary: #27272b;        /* Borders */
--text-primary: #ededed;         /* Primary text */
--text-secondary: #6d6d78;       /* Secondary text */
--text-muted: #8a8a95;           /* Muted text */
--accent-primary: #ff5229;       /* Orange accent */
--accent-hover: #e64a23;         /* Accent hover */
--success: #22c55e;              /* Success state */
--warning: #f59e0b;              /* Warning state */
--error: #ef4444;                /* Error state */
--info: #3b82f6;                 /* Info state */
```

All colors are available both as root CSS variables and through Tailwind's `@theme inline` for use in both CSS and Tailwind classes.

## Page Sections

1. **Header/Navbar**: Navigation with Syntra branding and menu items
2. **Hero**: Main hero section with tagline and CTA
3. **Workflows**: Your developer team's advantage section
4. **Features**: Purpose-built coding models section
5. **Support**: AI coding solutions tailored for you
6. **Usages**: How enterprise teams use Syntra Vibe
7. **Footer**: CTA section and comprehensive navigation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd design03

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework
- **React**: [React 19](https://react.dev/) - JavaScript library
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Linting**: [ESLint](https://eslint.org/) - Code linting

## Design Inspiration

This project is inspired by and adapted from [Mistral AI's Coding Solutions](https://mistral.ai/solutions/coding/), featuring similar visual design and content structure tailored for enterprise AI coding platforms.

## Assets

- **Images**: Located in `/public/images/`
  - Hero image: `hero-image01.webp`
  - Usage images: `image01.webp` through `image05.webp`
  - Noise texture: `noise-rectangle.png`
- **Icons**: SVG files in `/public/`

## Acknowledgments

- Inspired by [Mistral AI](https://mistral.ai/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
