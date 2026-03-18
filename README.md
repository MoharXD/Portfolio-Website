# 🚀 Developer Portfolio

> A modern, highly optimized developer portfolio built with vanilla web technologies, featuring a liquid-glass aesthetic, ambient 3D animations, and a strict focus on web performance and accessibility.

🌐 **[View Live Website](https://moharxd.github.io/Portfolio-Website/)**

## ✨ Key Technical Features

Instead of relying on heavy frameworks, this portfolio demonstrates a deep understanding of core web APIs, browser rendering, and modern CSS capabilities:

* **Advanced Glassmorphism UI:** Utilizes CSS `backdrop-filter` and carefully layered transparency for a deep, premium aesthetic.
* **Hardware-Accelerated Animations:** Background ambient orbs and 3D tilt effects leverage `transform: translateZ(0)` and CSS perspective to ensure smooth 60fps rendering without straining the main thread.
* **Device-Aware Interactions:** Custom cursor trails and 3D hover effects dynamically adapt using `window.matchMedia("(pointer: fine)")`, ensuring complex pointer logic is ignored on touch devices (like iPads or touch-laptops) to prevent buggy behavior.
* **Accessibility (a11y) First:** Implements `prefers-reduced-motion` detection to disable dynamic typing and cursor trails for users with vestibular disorders. Includes optimized text-shadows to ensure WCAG-compliant legibility against dynamic background orbs.
* **Bulletproof Resilience:** Engineered with graceful degradation. Fully functional `<noscript>` fallbacks guarantee the site layout, typography, and content remain pristine even if JavaScript is strictly disabled by the user's browser or corporate firewall.
* **Fluid Typography & Layout:** Uses CSS `clamp()` for truly responsive text that scales seamlessly from ultra-wide monitors down to mobile viewports.

## 🛠 Tech Stack

Built entirely from scratch to ensure maximum control over the DOM and asset loading:

* **Structure:** Semantic HTML5
* **Styling:** CSS3 (Custom Properties/Variables, CSS Grid/Flexbox, Advanced Keyframes)
* **Logic:** Vanilla JavaScript (ES6+, Intersection Observer API, `requestAnimationFrame`)
* **Hosting & CI/CD:** GitHub Pages

## 📂 Project Structure

```text
MoharXD.github.io/
│
├── index.html            # Entry point: Hero section & high-level intro
├── about.html            # Education timeline & language proficiencies
├── project-work.html     # Bento grid of featured apps & GitHub activity
├── contact.html          # Professional links, email & location
├── README.md             # Project overview & documentation
│
├── css/
│   └── style.css         # Glassmorphism tokens, responsive rules & animations
│
├── js/
│   └── script.js         # 3D Tilt, a11y motion checks, & cursor trail logic
│
├── img/                  # Optimized visual assets
│   └── profile.jpg       # Hero portrait
│
└── assets/               # External documents
    └── Mohar_Resume.pdf  # Downloadable CV