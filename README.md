# Ankur Singh | Software Engineer Portfolio

A premium, modern, and highly interactive portfolio website showcasing my work, projects, and technical skills as a Software Engineer. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, featuring a stunning dark space theme with an animated 3D starfield background.

Live Site: [https://github.com/AnkurApex/Portfolio](https://github.com/AnkurApex/Portfolio)

---

## 🚀 Overview

This portfolio website is designed to highlight my experience in computer science engineering, focusing on building scalable systems, backend services, and AI-integrated web applications.

Features include sleek glassmorphic navigation, interactive components, responsive layout configurations, and high-performance Webpack building for stability.

---

## ✨ Features

- **Premium Design Aesthetics**: Smooth hover micro-animations, glassmorphic navigation, and a modern dark space theme.
- **Dynamic 3D Starfield**: Animated starry backdrop built with Three.js / React Three Fiber.
- **Responsive Layout**: Fully optimized and pixel-perfect across mobile, tablet, and desktop screens.
- **Command Palette (⌘K)**: Quick, keyboard-driven navigation for power users.
- **Technical Sections**:
  - Biography and interactive education timeline.
  - Comprehensive skills showcase categorized by domain.
  - Project cards featuring tech tags, descriptions, and direct code/live links.
  - Direct social connectivity and contact portals.
- **SEO & Performance**: Pre-rendered paths, descriptive metadata, and optimized Webpack compiling.

---

## 🛠️ Tech Stack

- **Core & Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & React Three Fiber (Three.js)
- **UI Components**: Radix UI & shadcn/ui
- **Icons**: Lucide React
- **Development Server**: Webpack (for enhanced Windows development stability)

---

## 📥 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation & Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AnkurApex/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the Site**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📁 Project Structure

```
├── app/                       # Next.js app directory (pages & layout config)
│   ├── (routes)/              # Page routes (about, experience, contact, projects)
│   ├── globals.css            # Core styles & design tokens
│   ├── favicon.ico            # Custom "AS" logo favicon
│   └── layout.tsx             # Base page shell
├── components/                # Modular React components
│   ├── home/                  # Hero, Skills, and landing sections
│   ├── layout/                # Navbar and Footer elements
│   ├── projects/              # Project display cards
│   ├── shared/                # Scrolling utilities, theme switches, canvases
│   └── ui/                    # Base Radix components
├── data/                      # Structured developer profile configuration
│   ├── developer.ts           # About text, tagline, details (Name: Ankur Singh)
│   ├── education.ts           # Academic timeline details
│   ├── projects.ts            # Project descriptions & links
│   └── social.ts              # Social links config
├── public/                    # Static asset hosting (resumes, videos, static images)
└── package.json               # Scripts and dependency list
```

---

## ⚙️ Customization

To personalize the portfolio with your own details:
- **Profile Info**: Edit `data/developer.ts` to update your name, bio description, tagline, email, and resume path.
- **Academic details**: Edit `data/education.ts` to add or modify degrees and institutions.
- **Projects**: Edit `data/projects.ts` to detail your applications and GitHub repositories.
- **Social links**: Edit `data/social.ts` to add LinkedIn, GitHub, and email handles.

---

## 📝 License & Attribution

Designed and developed by Ankur Singh. Original design template credits to [Achyut Katiyar](https://github.com/achyut21).

© 2026 Ankur Singh. All Rights Reserved.
