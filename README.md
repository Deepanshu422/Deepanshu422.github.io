```md
# Deepanshu Singh | Developer Portfolio

A professional, minimal, and highly responsive portfolio website designed to showcase my experience in AI Workflow Engineering, LLM Evaluation Frameworks, and RAG pipelines. 

## 🚀 Features

* **Modern UI/UX:** Clean dark theme with neon teal accents (`#64ffda`), designed for readability and professional appeal.
* **Fully Responsive:** Custom CSS flex and grid layouts that adapt perfectly across desktop, tablet, and mobile screens.
* **Smooth Animations:** Lightweight Vanilla JavaScript Intersection Observers for elegant scroll-reveal animations.
* **Custom Toast Notifications:** Non-intrusive UI alerts for the Resume PDF download feature.
* **Optimized Build:** Configured with [Vite](https://vitejs.dev/) for instant local development and minified production builds.

## 🛠️ Tech Stack

* **HTML5** (Semantic structure)
* **CSS3** (Custom properties, Flexbox, CSS Grid, Media Queries)
* **Vanilla JavaScript** (ES6 Modules, DOM manipulation)
* **Vite** (Build tool and local dev server)

## 📁 Folder Structure

```text
portfolio-website/
├── public/                 # Static assets (copied directly to dist/ on build)
│   ├── images/
│   │   └── image.png       # Profile picture
│   ├── docs/
│   │   └── Deepanshu_Singh_Resume_AI.pdf
│   └── favicon.ico         
├── src/                    
│   ├── css/                
│   │   └── main.css        # Contains variables, reset, layout, and components
│   ├── js/                 
│   │   ├── animations.js   # Scroll reveal logic
│   │   ├── utils.js        # File download and toast notification logic
│   │   └── main.js         # Entry point connecting DOM elements
│   └── index.html          # Main HTML markup
├── package.json            # Scripts and dependencies
└── README.md               

```

## 💻 Local Development

To run this project locally, you will need [Node.js](https://nodejs.org/?utm_source=gemini) installed on your machine.

**1. Clone the repository:**

```bash
git clone [https://github.com/Deepanshu422/your-repo-name.git](https://github.com/Deepanshu422/your-repo-name.git)
cd your-repo-name

```

**2. Install dependencies:**

```bash
npm install

```

**3. Start the development server:**

```bash
npm run dev

```

*Vite will start a local server (usually at `http://localhost:5173`) with Hot Module Replacement (HMR).*

**4. Build for production:**

```bash
npm run build

```

*This command bundles and minifies your HTML, CSS, and JS into a `dist/` directory, ready to be deployed to GitHub Pages, Vercel, or Netlify.*

## 📝 Maintenance & Content Updates

* **Updating the Resume:** Replace the PDF file located at `public/docs/Deepanshu_Singh_Resume_AI.pdf` with your new resume. Ensure the file name stays exactly the same, or update the file path in `src/js/main.js`.
* **Updating the Profile Picture:** Replace `public/images/image.png` with your new image.
* **Modifying Colors:** Open `src/css/main.css` and modify the CSS variables under the `:root` pseudo-class (e.g., `--accent` or `--bg-color`).

## 🔗 Links

* **LinkedIn:** [Deepanshu Singh](https://www.linkedin.com/in/deepanshu-singh-936929195/?utm_source=gemini)
* **GitHub:** [@Deepanshu422](https://github.com/Deepanshu422?utm_source=gemini)

---

*Designed & Built by Deepanshu Singh*

```

```