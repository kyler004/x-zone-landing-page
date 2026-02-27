# X-Zone Landing Page

A modern, highly responsive landing page built with React, Vite, and Tailwind CSS. The project features a premium design aesthetic with glassmorphism, animated gradients, and micro-interactions.

## 📁 Project Structure

The project follows a component-driven architecture organized into focused functional areas:

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Top navigation bar
│   ├── Hero.jsx         # Main hero section with CTA
│   ├── Services.jsx     # Overview of services offered
│   ├── Features.jsx     # Key features display
│   ├── Features2.jsx    # Additional features display
│   ├── Team.jsx         # Team members section
│   ├── Newsletter.jsx   # Newsletter subscription form
│   └── Footer.jsx       # Page footer with links
├── constants/
│   └── index.js         # Static data and content used across components
├── App.jsx              # Main application entry point & layout wrapper
├── main.jsx             # React DOM rendering
└── index.css            # Global styles, Tailwind directives, and custom animations
```

## 🛠️ Implementation Details

### Tech Stack

- **Framework:** React 18+ powered by Vite for lightning-fast HMR and building.
- **Styling:** Tailwind CSS for structural styling, responsive design, and utility classes. Custom animations and complex visual effects are handled in `index.css`.
- **Icons & Assets:** Public folder contains SVGs and graphical assets used by the components.

### Design System & Aesthetics

- **Backgrounds:** The app uses dynamic, animated glowing orbs (`animate-orb-drift`, `animate-orb-pulse`) positioned absolutely in the background of `App.jsx` to create a modern, immersive feel.
- **Glassmorphism:** Components frequently use semi-transparent backgrounds with backdrop blurring to create a frosted glass effect over the animated background layer.
- **Responsiveness:** Designed mobile-first using Tailwind's responsive prefixes (`md:`, `lg:`, etc.) ensuring a seamless experience across all device sizes, particularly optimized as seen in the Newsletter component adjustments.
- **Animations:** Custom keyframe animations defined in `index.css` bring the page to life (e.g., button pulses, scroll reveals, floating background orbs).

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
