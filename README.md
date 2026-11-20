# Deepanshu Singh | Developer Portfolio

A professional, minimal, and highly responsive portfolio website designed to showcase my experience in AI Workflow Engineering, LLM Evaluation Frameworks, and RAG pipelines.

## 🚀 Features

* **Modern UI/UX:** Clean dark theme with neon teal accents (`#64ffda`), designed for readability and professional appeal.
* **Component-Driven:** Modular React 18 architecture with reusable UI components.
* **Single Source of Truth:** Centralized portfolio content in `src/data/portfolioData.js` for effortless updates.
* **Fully Responsive:** Custom CSS flex and grid layouts that adapt perfectly across desktop, tablet, and mobile screens.
* **Smooth Animations:** Custom React hook with `IntersectionObserver` for elegant scroll-reveal animations.
* **Custom Toast Notifications:** Non-intrusive UI alerts for the Resume PDF download feature.
* **Fast & Optimized:** Powered by [Vite](https://vitejs.dev/) with instant HMR and minified production builds.

## 🛠️ Tech Stack

* **React 18** (Component-based UI)
* **Vite** (Build tool and local dev server)
* **React Icons** (Font Awesome icon suite)
* **CSS3** (CSS Variables, Flexbox, CSS Grid, Media Queries)
* **JavaScript / ES Modules**

## 📁 Folder Structure

```text
portfolio-website/
├── public/                 # Static assets (copied directly to dist/ on build)
│   ├── docs/
│   │   └── Deepanshu_Singh_Resume-AI-Eng.pdf
│   ├── images/
│   │   └── image.png       # Profile picture
│   └── favicon.ico         
├── src/                    
│   ├── components/         # Reusable React components
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── ExperienceItem.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── SkillCard.jsx
│   │   ├── Skills.jsx
│   │   └── Toast.jsx
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio content
│   ├── hooks/
│   │   └── useScrollAnimation.js # Scroll-triggered fade-in hook
│   ├── styles/
│   │   └── global.css      # Dark theme & styling
│   ├── utils/
│   │   └── downloadResume.js # Resume download & toast dispatch
│   ├── App.jsx             # Main layout component
│   └── main.jsx            # Application entry point
├── index.html              # HTML entry template
├── vite.config.js          # Vite configuration
├── package.json            # Scripts and dependencies
└── README.md               
```

## 💻 Local Development

To run this project locally, you will need [Node.js](https://nodejs.org/) installed on your machine.

**1. Clone the repository:**

```bash
git clone https://github.com/Deepanshu422/Deepanshu422.github.io.git
cd Deepanshu422.github.io
```

**2. Install dependencies:**

```bash
npm install
```

**3. Start the development server:**

```bash
npm run dev
```

*Vite will start a local server at `http://localhost:5173` with Hot Module Replacement (HMR).*

**4. Build for production:**

```bash
npm run build
```

*This command bundles and minifies your React app into the `dist/` directory, ready to be deployed.*

## 📝 Maintenance & Content Updates

* **Updating Content:** Edit `src/data/portfolioData.js` to update experience, projects, skills, education, or contact details.
* **Updating the Resume:** Place your new PDF in `public/docs/` and update `resumePath` in `src/data/portfolioData.js`.
* **Updating the Profile Picture:** Replace `public/images/image.png` with your new image.
* **Modifying Theme Colors:** Open `src/styles/global.css` and adjust `:root` variables (e.g., `--accent` or `--bg-color`).

## 🔗 Links

* **LinkedIn:** [Deepanshu Singh](https://www.linkedin.com/in/deepanshu-singh-936929195/)
* **GitHub:** [@Deepanshu422](https://github.com/Deepanshu422)

---

*Designed & Built by Deepanshu Singh*
