# Brian Mohr | Developer Portfolio

[![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://bvmohr.github.io)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Welcome to the repository hosting my personal developer portfolio! You can explore the live site here: **[bvmohr.github.io](https://bvmohr.github.io)**.

This portfolio is designed to showcase my experience in software engineering, mathematical analysis, and user-centric AI bot development.

---

## Key Features

*   **Interactive AI Console / Terminal Mockup**: A responsive developer terminal interface built entirely in vanilla JavaScript. Visitors can type query commands (like `about`, `projects`, `skills`, `contact`, `clear`) or click preset badge buttons to converse with a custom simulated AI agent representing my skillset.
*   **Premium CSS Design System**: Features a high-fidelity glassmorphic navigation bar, subtle radial background glows, smooth interactive hover scale-ups, and transition-controlled animations driven by custom HSL design variables.
*   **Dual Light/Dark Themes**: Fully customized toggles that transition smoothly between Slate-Dark (default) and Slate-Light interfaces.
*   **Scroll-Reveal Interactions**: Uses the native browser `IntersectionObserver` API to gracefully fade and slide sections into view as visitors scroll down the page, ensuring high performance without bulky animation libraries.
*   **Timeline Layout**: Highlights education tracks (Computer Science & Mathematics) in a clean, visual timeline path.

---

## Repository Structure

```bash
├── index.html   # HTML5 structure, typography configuration, and inline SVGs
├── style.css    # Responsive grids, glassmorphism tokens, keyframes, and themes
├── script.js    # Terminal parsing logic, theme control, and reveal listeners
└── README.md    # Repository overview and guide
```

---

## Core Technologies

*   **Structure**: HTML5 (Semantic elements)
*   **Styling**: Vanilla CSS3 (Custom Variables, CSS Flexbox/Grid, Glassmorphic filters)
*   **Interactivity**: ES6+ JavaScript (DOM APIs, event listeners, and viewport observer hooks)

---

## Local Development

No compilation or build step is required. To run this portfolio locally, you can choose either of the following methods:

### Method 1: Direct File Launch
Simply double-click the `index.html` file or open it directly in any modern web browser.

### Method 2: Local Server (Recommended)
Launch a local development server for smooth theme loading and browser performance:

Using **Python 3**:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

Using **Node.js (npx)**:
```bash
npx serve .
```
Then navigate to the local address provided.