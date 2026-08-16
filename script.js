/**
 * NAAZ PORTFOLIO JAVASCRIPT
 * Interactive functionality, modals, smooth scroll, copy-to-clipboard, sticker tilt
 */

// Project Data Store for Rich Modal Case Studies
const projectData = {
  raah: {
    number: "01",
    title: "RAAH",
    tagline: "Making Mumbai buses move smarter.",
    role: "Lead Product Designer & Frontend Engineer",
    duration: "4 Months · Demo Day Winner & Pilot",
    image: "assets/raah_preview.jpg",
    techStack: ["React", "Leaflet GIS", "WebSocket", "Node.js", "MongoDB", "Figma"],
    overview: "Mumbai's BEST bus network carries 3.5+ million passengers daily across 400+ routes, but commuter frustration peaks around unpredictable arrival timings and crowded buses. RAAH provides live telemetry, AI-driven arrival prediction (ETA), and passenger density heatmaps.",
    problem: "Commuters lose up to 45 minutes daily waiting at stops without accurate arrival timing or crowd visibility, while transit authorities lack dynamic route re-dispatching tools.",
    solution: "Designed a clean, low-latency commuter Progressive Web App and a centralized fleet dashboard. Reduced average commuter wait times by 22% during pilot route trials on the Kurla-Andheri corridor.",
    metrics: [
      { num: "86%", label: "On-time arrival precision" },
      { num: "<1.2s", label: "Real-time telemetry latency" },
      { num: "4M+", label: "Target commuter base" }
    ],
    liveLink: "https://raah-app.vercel.app",
    link: "https://github.com/naazahmedi04"
  },
  pando: {
    number: "02",
    title: "PANDO AI",
    tagline: "Support, without the awkwardness.",
    role: "Solo UI/UX Designer & Frontend Developer",
    duration: "3 Months · Selected for Youth Tech Innovation",
    image: "assets/pando_preview.png",
    techStack: ["React", "TailwindCSS", "OpenAI API", "Figma", "Framer Motion"],
    overview: "Traditional mental health tools often feel clinical, daunting, or overly robotic. Pando AI is designed as a compassionate peer companion specifically tailored for engineering and university students experiencing burnout.",
    problem: "80% of university students report feeling overwhelmed before midterms but hesitate to use clinical therapy platforms due to social stigma and friction.",
    solution: "Created an interactive conversational guide featuring micro-reflections, guided 5-minute somatic breathing, task decomposition algorithms, and automated safety guardrails.",
    metrics: [
      { num: "4.8/5", label: "User empathy rating" },
      { num: "3.2k+", label: "Conversations hosted" },
      { num: "100%", label: "Crisis safety fallback" }
    ],
    liveLink: "https://pandoai-app.vercel.app",
    link: "https://github.com/naazahmedi04"
  },
  khetiveti: {
    number: "03",
    title: "KHETIVETI",
    tagline: "Technology that speaks the farmer's language.",
    role: "Product Designer & User Researcher",
    duration: "3 Months · Smart India Hackathon Finalist",
    image: "assets/khetiveti_preview.png",
    techStack: ["Figma", "React Native", "TensorFlow Lite", "Express", "Weather API"],
    overview: "Khetiveti bridges the digital divide for smallholder farmers across Maharashtra with voice-first vernacular interfaces, real-time crop disease diagnosis from camera scans, and direct mandi market price benchmarking.",
    problem: "Most agri-tech apps are built in English or formal Hindi, with dense text and complex graphs that alienate rural users who rely on visual and oral communication.",
    solution: "Conducted field interviews with 40+ farmers in rural Maharashtra. Designed high-contrast visual status cards, Marathi/Hindi audio prompts, and 1-tap disease diagnosis requiring zero typing.",
    metrics: [
      { num: "94%", label: "Visual task completion" },
      { num: "2 Langs", label: "Marathi & Hindi localized" },
      { num: "12 Crops", label: "AI diagnostic models" }
    ],
    link: "https://github.com/naazahmedi04"
  },
  guardrail: {
    number: "04",
    title: "GUARDRAIL",
    tagline: "Making digital spaces safer, one interaction at a time.",
    role: "Fullstack Developer & Security UI Architect",
    duration: "2 Months · TechNova Best Innovation Winner",
    image: "assets/guardrail_preview.png",
    techStack: ["Next.js", "Python FastAPIs", "Transformers", "TailwindCSS", "Docker"],
    overview: "An enterprise AI safety proxy that intercepts toxic prompts, prompt injections, PII leaks, and harmful generation in real-time before LLM responses reach end users.",
    problem: "Generative AI applications are vulnerable to jailbreak exploits and inadvertent privacy leaks, exposing platforms to severe compliance and safety risks.",
    solution: "Engineered a low-latency moderation middleware with sub-20ms inference, customizable policy rule sets, and an intuitive security intelligence dashboard with anomaly charts.",
    metrics: [
      { num: "18ms", label: "Median inspection latency" },
      { num: "78%", label: "Initial audit coverage" },
      { num: "128", label: "Incidents neutralized" }
    ],
    liveLink: "https://guardrail-app.vercel.app",
    link: "https://github.com/naazahmedi04"
  }
};

const experimentData = {
  studyflex: {
    title: "STUDYFLEX",
    tag: "UI/UX · INTERACTION DESIGN · APP DESIGN",
    tagline: "What if studying felt like a scroll?",
    desc: "A scrolling study experience designed to make learning feel more engaging, visual, and less like staring at endless notes.",
    image: "assets/studyflex_preview.png",
    features: [
      "Continuous vertical knowledge canvas replacing static textbooks",
      "Active recall mini-quizzes embedded directly in the scroll",
      "Integrated 25:00 Pomodoro focus timer with task decomposition",
      "Bite-sized visual flashcard interactions and study streaks"
    ]
  },
  suukr: {
    title: "SUÜKR",
    tag: "WEB DESIGN · UI/UX · DEVELOPMENT",
    tagline: "Good coffee deserved a good website.",
    desc: "A café website created for an Australian café, blending playful visuals with a simple, easy-to-browse experience.",
    image: "assets/suukr_preview.jpg",
    liveLink: "https://suukr.au/",
    features: [
      "Warm artisanal visual design capturing the café's physical energy",
      "Interactive visual dessert & brew menu with flavor profiles",
      "Streamlined table reservations and takeaway pre-orders",
      "Playful editorial typography and responsive mobile animations"
    ]
  },
  powow: {
    title: "powow",
    tag: "UI/UX · PRODUCT DESIGN · WEB DESIGN",
    tagline: "Find a friend. Give them a home.",
    desc: "A pet adoption portal designed to help people discover, connect with, and adopt pets looking for their forever homes.",
    image: "assets/powow_preview.png",
    features: [
      "Personality match algorithm connecting adopters with shelter pets",
      "Verified rescue shelter profiles and seamless application tracking",
      "Virtual pet play sessions and meet-and-greet scheduling",
      "Warm, uplifting card-based UI celebrating pet adoption stories"
    ]
  }
};

const certData = {
  figma: {
    name: "Figma UI/UX Design",
    issuer: "Meta · Professional Specialization",
    year: "2024",
    skills: "Advanced Component Variants, Variables, Tokens, Responsive Auto-Layout, Interactive Prototyping.",
    id: "CERT-FIG-2024-8841"
  },
  "google-ux": {
    name: "Google UX Design Professional Certificate",
    issuer: "Google · Coursera Verified",
    year: "2024",
    skills: "User Research, Wireframing, Usability Testing, Figma, Low/High Fidelity Prototyping, Empathy Maps.",
    id: "GGL-UX-2024-99201"
  },
  aws: {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    skills: "Cloud Architecture, AWS Lambda, S3, EC2, IAM Security, CloudWatch Monitoring.",
    id: "AWS-CCP-2023-4512"
  },
  "js-algo": {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp Verified Certification",
    year: "2023",
    skills: "ES6+, OOP, Functional Programming, Dynamic Programming, Graph Traversal, Algorithmic Complexity.",
    id: "FCC-JS-2023-1108"
  }
};

/* ================= DOM READY & INITIALIZATION ================= */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileDrawer();
  initActiveSectionTracking();
  initStickerPhysics();
  initKeyboardListeners();
});

/* ================= NAVBAR & SCROLL ================= */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = "0 4px 20px rgba(109, 36, 31, 0.08)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}

/* ================= MOBILE DRAWER ================= */
function initMobileDrawer() {
  const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-drawer-cta a");

  if (!toggle || !drawer) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    drawer.classList.toggle("open");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      drawer.classList.remove("open");
    });
  });
}

/* ================= ACTIVE SECTION TRACKING ================= */
function initActiveSectionTracking() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ================= STICKER TILT & MICRO-INTERACTIONS ================= */
function initStickerPhysics() {
  const stickers = document.querySelectorAll("[data-tilt]");
  stickers.forEach(sticker => {
    sticker.addEventListener("mousemove", (e) => {
      const rect = sticker.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / rect.height) * -12;
      const tiltY = (x / rect.width) * 12;
      sticker.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.06)`;
    });

    sticker.addEventListener("mouseleave", () => {
      sticker.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
}

/* ================= PROJECT MODALS ================= */
window.openProjectModal = function(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modalBackdrop = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalProjectContent");

  let metricsHTML = "";
  if (project.metrics) {
    metricsHTML = `
      <div class="modal-metrics-grid">
        ${project.metrics.map(m => `
          <div class="modal-metric-card">
            <div class="modal-metric-num">${m.num}</div>
            <div class="modal-metric-lbl">${m.label}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  let tagsHTML = project.techStack.map(t => `<span class="tag">${t}</span>`).join(" ");
  let liveBtnHTML = project.liveLink ? `
    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> VIEW LIVE DEMO
    </a>
  ` : "";

  modalContent.innerHTML = `
    <div class="modal-header-tag">PROJECT ${project.number} · CASE STUDY</div>
    <h2 class="modal-title">${project.title}</h2>
    <h4 class="modal-tagline">${project.tagline}</h4>
    
    <div class="project-tags" style="margin-bottom: 1.2rem;">${tagsHTML}</div>

    ${project.image ? `
      <div style="margin-bottom: 1.5rem; border-radius: 14px; overflow: hidden; border: 1.5px solid rgba(109,36,31,0.15); box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
        <img src="${project.image}" alt="${project.title} Preview" style="width: 100%; max-height: 320px; object-fit: cover; display: block;">
      </div>
    ` : ""}
    
    <div class="modal-body-text">
      <strong>Overview:</strong><br>${project.overview}
    </div>

    <div class="modal-body-text">
      <strong>The Problem:</strong><br>${project.problem}
    </div>

    <div class="modal-body-text">
      <strong>Design &amp; Engineering Solution:</strong><br>${project.solution}
    </div>

    ${metricsHTML}

    <div class="modal-action-row" style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1.5rem;">
      ${liveBtnHTML}
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn" style="background: #24292E; color: #FFFFFF; display: inline-flex; align-items: center; gap: 0.5rem;">
        <i class="fa-brands fa-github"></i> VIEW REPO
      </a>
      <button class="btn" style="border: 1.5px solid var(--border-maroon); color: var(--bg-maroon);" onclick="closeProjectModal()">
        CLOSE
      </button>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function() {
  const modalBackdrop = document.getElementById("projectModal");
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
};

/* ================= EXPERIMENT MODALS ================= */
window.openExperimentModal = function(expKey) {
  const exp = experimentData[expKey];
  if (!exp) return;

  const modalBackdrop = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalProjectContent");

  let featuresHTML = exp.features.map(f => `<li style="margin-bottom: 0.4rem; color: var(--text-muted);">${f}</li>`).join("");
  let siteBtnHTML = exp.liveLink ? `
    <a href="${exp.liveLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> VISIT LIVE WEBSITE ↗
    </a>
  ` : "";

  modalContent.innerHTML = `
    <div class="modal-header-tag">SIDE QUEST · ${exp.tag}</div>
    <h2 class="modal-title">${exp.title}</h2>
    <h4 class="modal-tagline" style="font-family: var(--font-doodle); font-size: 1.25rem; font-weight: 700; color: var(--bg-maroon); margin-bottom: 1rem;">
      ${exp.tagline}
    </h4>

    ${exp.image ? `
      <div style="margin-bottom: 1.3rem; border-radius: 12px; overflow: hidden; border: 1.5px solid rgba(109,36,31,0.12); box-shadow: 0 4px 16px rgba(0,0,0,0.06); background: #000000; text-align: center;">
        <img src="${exp.image}" alt="${exp.title} Preview" style="width: 100%; max-height: 280px; object-fit: contain; display: block; margin: 0 auto;">
      </div>
    ` : ""}
    
    <p class="modal-body-text" style="font-size: 0.95rem; line-height: 1.55; margin-bottom: 1.2rem;">
      ${exp.desc}
    </p>

    <h5 style="font-size: 0.88rem; font-weight: 800; color: var(--bg-maroon); margin-bottom: 0.5rem;">Key Concept Highlights:</h5>
    <ul style="padding-left: 1.2rem; margin-bottom: 1.6rem; font-size: 0.85rem; line-height: 1.45;">
      ${featuresHTML}
    </ul>

    <div class="modal-action-row" style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
      ${siteBtnHTML}
      <a href="#contact" onclick="closeProjectModal()" class="btn" style="background: rgba(109, 36, 31, 0.08); color: var(--bg-maroon); border: 1.5px solid var(--border-maroon);">
        TALK ABOUT THIS ↗
      </a>
      <button class="btn" style="border: 1.5px solid var(--border-maroon); color: var(--bg-maroon);" onclick="closeProjectModal()">
        CLOSE
      </button>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.openCertModal = function(certKey) {
  const modalBackdrop = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalProjectContent");

  if (certKey === "all") {
    let allCertsHTML = Object.values(certData).map(c => `
      <div style="background: #FFFFFF; border: 1px solid var(--border-subtle); border-radius: 12px; padding: 0.9rem; margin-bottom: 0.8rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark);">${c.name}</h4>
          <span style="font-family: var(--font-code); font-size: 0.72rem; color: var(--bg-maroon); font-weight: 700;">${c.year}</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted); margin: 0.2rem 0 0.3rem;">${c.issuer}</div>
        <div style="font-size: 0.72rem; color: var(--text-muted);"><strong style="color: var(--text-dark);">Skills:</strong> ${c.skills}</div>
      </div>
    `).join("");

    modalContent.innerHTML = `
      <div class="modal-header-tag">VERIFIED CREDENTIALS</div>
      <h2 class="modal-title">All Certifications</h2>
      <p class="modal-body-text">Industry-recognized professional specializations completed by Naaz.</p>
      ${allCertsHTML}
      <div class="modal-action-row" style="margin-top: 1.4rem;">
        <button class="btn btn-primary" onclick="closeProjectModal()">CLOSE</button>
      </div>
    `;
  } else {
    const c = certData[certKey];
    modalContent.innerHTML = `
      <div class="modal-header-tag">VERIFIED CREDENTIAL · ${c.year}</div>
      <h2 class="modal-title">${c.name}</h2>
      <h4 class="modal-tagline">${c.issuer}</h4>
      <p class="modal-body-text">
        <strong>Verified Competencies:</strong><br>
        ${c.skills}
      </p>
      <div style="background: #FFFFFF; border: 1px dashed var(--border-maroon); border-radius: 8px; padding: 0.75rem; font-family: var(--font-code); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 1.4rem;">
        Credential ID: <strong style="color: var(--bg-maroon);">${c.id}</strong> · Status: <span style="color: #16A34A; font-weight: 700;">Verified Active</span>
      </div>
      <div class="modal-action-row">
        <button class="btn btn-primary" onclick="closeProjectModal()">CLOSE</button>
      </div>
    `;
  }

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
};

/* ================= ACHIEVEMENTS MODAL ================= */
window.openAchievementsModal = function() {
  const modalBackdrop = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalProjectContent");

  modalContent.innerHTML = `
    <div class="modal-header-tag">MILESTONES &amp; HONORS · 2025</div>
    <h2 class="modal-title">All Achievements</h2>
    <p class="modal-body-text">Hackathons, pitch competitions, and national level recognitions.</p>
    
    <div style="display: flex; flex-direction: column; gap: 0.9rem; margin-bottom: 1.6rem;">
      <div style="background: #FFFDF9; border: 1.5px solid #FCD34D; border-radius: 14px; padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <strong style="color: #B45309; font-size: 1rem;">🏆 2nd Runner Up</strong>
          <span style="font-family: var(--font-code); font-size: 0.72rem; color: #B45309; font-weight: 800;">2025</span>
        </div>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--bg-maroon); display: block; margin-top: 2px;">In-House Hackathon</span>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">Built an emergency response system – Lifeline with real-time routing.</p>
      </div>

      <div style="background: #FFFDF9; border: 1.5px solid #DDD6FE; border-radius: 14px; padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <strong style="color: #6D28D9; font-size: 1rem;">⭐ Top 5 Finalist</strong>
          <span style="font-family: var(--font-code); font-size: 0.72rem; color: #6D28D9; font-weight: 800;">2025</span>
        </div>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--bg-maroon); display: block; margin-top: 2px;">Demo Day</span>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">Showcased project live despite unexpected technical challenges.</p>
      </div>

      <div style="background: #FFFDF9; border: 1.5px solid #BBF7D0; border-radius: 14px; padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <strong style="color: #15803D; font-size: 1rem;">🎯 Smart India Hackathon '25</strong>
          <span style="font-family: var(--font-code); font-size: 0.72rem; color: #15803D; font-weight: 800;">2025</span>
        </div>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--bg-maroon); display: block; margin-top: 2px;">National Level</span>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">Participated at the national level and built an impactful solution for real-world challenge.</p>
      </div>
    </div>

    <div class="modal-action-row">
      <button class="btn btn-primary" onclick="closeProjectModal()">CLOSE</button>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
};


