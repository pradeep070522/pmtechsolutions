/* ═══════════════════════════════════════════════════════
   PAGE LOADER
   ═══════════════════════════════════════════════════════ */
(function initLoader() {
  const loader = document.getElementById("pageLoader");
  const bar = document.getElementById("loaderBar");
  if (!loader) return;

  let pct = 0;
  const tick = setInterval(() => {
    pct += Math.random() * 18 + 4;
    if (pct >= 95) { pct = 95; clearInterval(tick); }
    if (bar) bar.style.width = pct + "%";
  }, 80);

  window.addEventListener("load", () => {
    clearInterval(tick);
    if (bar) bar.style.width = "100%";
    setTimeout(() => {
      loader.classList.add("hide");
      // Trigger counters after loader hides
      setTimeout(runCounters, 200);
    }, 350);
  });

  // Safety: hide after 3.5s no matter what
  setTimeout(() => {
    loader.classList.add("hide");
    setTimeout(runCounters, 200);
  }, 3500);
})();

/* ═══════════════════════════════════════════════════════
   COUNTER ANIMATION — Projects, Clients, Experience
   Runs when element enters viewport
   ═══════════════════════════════════════════════════════ */
function animateCounter(el) {
  if (el.dataset.animated) return;
  el.dataset.animated = "1";

  const target = parseInt(el.dataset.target) || 0;
  const suffix = el.dataset.suffix || "";
  const dur = 1800; // ms
  const steps = 50;
  const step = dur / steps;
  let current = 0;

  el.classList.add("counting");
  const timer = setInterval(() => {
    current += target / steps;
    if (current >= target) {
      current = target;
      clearInterval(timer);
      el.classList.remove("counting");
    }
    el.textContent = Math.floor(current) + suffix;
  }, step);
}

function runCounters() {
  document.querySelectorAll(".counter-num[data-target]").forEach(el => {
    // Check if in viewport
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) animateCounter(el);
  });
}

// Also trigger when scrolling into view
window.addEventListener("scroll", () => {
  document.querySelectorAll(".counter-num[data-target]:not([data-animated])").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) animateCounter(el);
  });
}, { passive: true });

/* ─── YOUR DETAILS ────────────────────────────────────── */
const CONFIG = {
  name: "PRADEEP",
  waNumber: "917397569979",
  email: "pradeepmohan63744@gmail.com",
  instagram: "https://instagram.com/pradeep_webdev",
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
};

/* ─── PROJECTS ────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "My First Project",
    desc: "A full-stack web application built with React and Django. Features user authentication, REST API, and a responsive dashboard with real-time data updates.",
    tags: ["React", "Django", "PostgreSQL"],
    img: "projects/project1.svg",
    github: "https://github.com/yourhandle/project1",
    demo: "https://project1.vercel.app",
  },
  {
    title: "My Second Project",
    desc: "An e-commerce platform with product management, cart system, and Stripe payment integration. Built with Next.js and a Python Flask backend.",
    tags: ["Next.js", "Flask", "Stripe"],
    img: "projects/project2.svg",
    github: "https://github.com/yourhandle/project2",
    demo: "https://project2.vercel.app",
  },
];

/* ─── SERVICES ────────────────────────────────────────── */
const SERVICES = [
  { icon: "🌐", title: "Web Development", desc: "Blazing-fast, SEO-optimised websites built with Next.js and React.", tags: ["Next.js", "React", "TailwindCSS"] },
  { icon: "⚡", title: "Full Stack Development", desc: "End-to-end engineering from database design to pixel-perfect UI.", tags: ["Node.js", "PostgreSQL", "Django"] },
  { icon: "🛒", title: "E-commerce Websites", desc: "High-converting storefronts with seamless checkout and payments.", tags: ["Shopify", "Stripe", "WooCommerce"] },
  { icon: "💼", title: "Portfolio Websites", desc: "Premium personal and agency portfolios designed to win clients.", tags: ["Framer", "Next.js", "GSAP"] },
  { icon: "📣", title: "Landing Pages", desc: "High-impact pages built to convert visitors into customers.", tags: ["A/B Testing", "CRO", "SEO"] },
];

/* ─── SKILLS ──────────────────────────────────────────── */
const SKILLS = [
  { icon: "TS", name: "TypeScript", level: "Expert", color: "#a78bfa" },
  { icon: "Re", name: "React / Next.js", level: "Expert", color: "#a78bfa" },
  { icon: "Py", name: "Python / Django", level: "Advanced", color: "#38bdf8" },
  { icon: "No", name: "Node.js", level: "Advanced", color: "#38bdf8" },
  { icon: "Pg", name: "PostgreSQL / SQL", level: "Intermediate", color: "#34d399" },
  { icon: "Fl", name: "Flask", level: "Intermediate", color: "#34d399" },
];

/* ─── PRICING ─────────────────────────────────────────── */
const PRICING = [
  {
    name: "Starter", price: "₹4999", period: "one-time", pro: false,
    features: ["1–3 Page Website", "Mobile Responsive", "Basic SEO", "Contact Form", "2 Revisions", "7-Day Delivery", "WhatsApp Support"],
    cta: "Get Started",
  },
  {
    name: "Professional", price: "₹14,999", period: "one-time", pro: true, badge: "Most Popular",
    features: ["Up to 10 Pages", "Full Stack App", "Advanced SEO & Analytics", "Admin Panel", "5 Revisions", "30-Day Support"],
    cta: "Book Now",
  },
  {
    name: "Enterprise", price: "Custom", period: "quote", pro: false,
    features: ["Unlimited Pages", "Microservices Architecture", "Project Manager", "Priority 24/7 Support", "Unlimited Revisions", "1-Year Maintenance"],
    cta: "Let's Talk",
  },
];

/* ─── TESTIMONIALS ────────────────────────────────────── */
const TESTIMONIALS = [

  { av: "MN", name: "Meera Nair", role: "Creative Director, Lumina", txt: "My portfolio went viral after launch. The animations are stunning and I've booked 12 new clients from the website." },
  { av: "RV", name: "Rahul Verma", role: "Founder, SkyStay", txt: "Completed our full-stack marketplace in 6 weeks. The code quality is exceptional and easy to maintain and scale." },
];

/* ─── FAQ ─────────────────────────────────────────────── */
const FAQS = [
  { q: "How long does a typical project take?", a: "Most websites are delivered in 7–21 days. Full-stack apps typically take 3–8 weeks. A clear timeline is provided before starting." },
  { q: "Do you offer post-launch support?", a: "Yes. Starter gets 7 days, Professional gets 30 days, and Enterprise includes a full year of dedicated maintenance." },
  { q: "What is your payment process?", a: "50% upfront, 50% on delivery. Enterprise projects support milestone-based payments via UPI, bank transfer, or Razorpay." },
  { q: "Can I see a prototype before development?", a: "Absolutely. Professional and Enterprise projects include Figma prototypes before a single line of code is written." },
  { q: "Do you work with international clients?", a: "Yes! Clients across India, USA, UK, UAE, and more. Payments via PayPal, Wise, or Stripe for international clients." },
];

/* ─── TECH STACK ──────────────────────────────────────── */
const TECHS = [
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

/* ═══════════════════════════════════════════════════════
   WHATSAPP MESSAGE BUILDER
   ═══════════════════════════════════════════════════════ */
function buildWA(f) {
  return encodeURIComponent(
    `👋 Hello ${CONFIG.name}!

I came across your portfolio and I'm interested in working with you.

━━━━━━━━━━━━━━━━━━━━
📋 PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━

👤 Name:    ${f.name || "Not provided"}
📧 Email:   ${f.email || "Not provided"}
📱 Phone:   ${f.phone || "Not provided"}

🛠️ Service: ${f.service || "Not specified"}
💰 Budget:  ${f.budget || "To be discussed"}

📝 Description:
${f.msg || "Will discuss in detail."}

━━━━━━━━━━━━━━━━━━━━
Looking forward to hearing from you! 🚀`
  );
}

/* ═══════════════════════════════════════════════════════
   RENDER — Tech Stack
   ═══════════════════════════════════════════════════════ */
function renderTech() {
  const chip = (t) =>
    `<div class="tech-chip">
      <img src="${t.url}" alt="${t.name}" loading="lazy"
           onerror="this.style.opacity='.3'"/>
      <span>${t.name}</span>
    </div>`;

  const triple = (arr) => [...arr, ...arr, ...arr].map(chip).join("");

  const t1 = document.getElementById("mq1");
  const t2 = document.getElementById("mq2");
  if (t1) t1.innerHTML = triple(TECHS);
  if (t2) t2.innerHTML = triple([...TECHS].reverse());
}

/* ═══════════════════════════════════════════════════════
   RENDER — Projects
   ═══════════════════════════════════════════════════════ */
function renderProjects() {
  const el = document.getElementById("projGrid");
  if (!el) return;
  el.innerHTML = PROJECTS.map((p, i) => `
    <div class="proj-card"
         data-aos="fade-up" data-aos-delay="${i * 120}"
         onclick="openModal(${i})">
      <div class="proj-thumb">
        <img src="${p.img}" alt="${p.title}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80'"/>
        <div class="proj-ovl"><span class="proj-view">View Details →</span></div>
      </div>
      <div class="proj-body">
        <h3 class="proj-ttl">${p.title}</h3>
        <div class="proj-tags">
          ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="proj-foot">
        <a class="btn-gh" href="${p.github}" target="_blank"
           onclick="event.stopPropagation()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          GitHub
        </a>
        <a class="btn-demo" href="${p.demo}" target="_blank"
           onclick="event.stopPropagation()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Live Demo
        </a>
      </div>
    </div>`).join("");
}

/* ═══════════════════════════════════════════════════════
   RENDER — Services
   ═══════════════════════════════════════════════════════ */
function renderServices() {
  const el = document.getElementById("svcGrid");
  if (!el) return;
  el.innerHTML = SERVICES.map((s, i) => `
    <div class="svc-card"
         data-aos="fade-up" data-aos-delay="${i * 90}">
      <div class="svc-ico">${s.icon}</div>
      <h3 class="svc-ttl">${s.title}</h3>
      <p class="svc-desc">${s.desc}</p>
      <div class="svc-tags">
        ${s.tags.map(t => `<span class="svc-tag">${t}</span>`).join("")}
      </div>
    </div>`).join("");
}

/* ═══════════════════════════════════════════════════════
   RENDER — Skills
   ═══════════════════════════════════════════════════════ */
function renderSkills() {
  const el = document.getElementById("skillsGrid");
  if (!el) return;
  el.innerHTML = SKILLS.map(s => `
    <div class="sk-card" data-aos="zoom-in">
      <div class="sk-ico">${s.icon}</div>
      <div>
        <div class="sk-name">${s.name}</div>
        <div class="sk-level" style="color:${s.color}">${s.level}</div>
      </div>
    </div>`).join("");
}

/* ═══════════════════════════════════════════════════════
   RENDER — Pricing
   ═══════════════════════════════════════════════════════ */
function renderPricing() {
  const el = document.getElementById("priceGrid");
  if (!el) return;
  el.innerHTML = PRICING.map((p, i) => `
    <div class="price-card ${p.pro ? "pro" : ""}"
         data-aos="fade-up" data-aos-delay="${i * 110}">
      ${p.badge ? `<div class="price-badge">${p.badge}</div>` : ""}
      <h3 class="plan-name">${p.name}</h3>
      <div class="price-row">
        <span class="plan-price">${p.price}</span>
        ${p.period !== "quote" ? `<span class="plan-period">/${p.period}</span>` : ""}
      </div>
      <hr class="plan-div"/>
      <div class="plan-feats">
        ${p.features.map(f => `
          <div class="plan-feat">
            <span class="p-tick">✓</span>
            <span class="p-txt">${f}</span>
          </div>`).join("")}
      </div>
      <button class="btn-plan ${p.pro ? "pri" : ""}"
              onclick="goTo('contact')">${p.cta}</button>
    </div>`).join("");
}

/* ═══════════════════════════════════════════════════════
   RENDER — Testimonials
   ═══════════════════════════════════════════════════════ */
let tIdx = 0;

function renderTestimonials() {
  const grid = document.getElementById("testiGrid");
  const dots = document.getElementById("dotRow");
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="t-card ${i === tIdx ? "active" : ""}"
         id="tc${i}"
         data-aos="fade-up" data-aos-delay="${i * 90}">
      <div class="t-stars">★★★★★</div>
      <p class="t-txt">"${t.txt}"</p>
      <div class="t-foot">
        <div class="t-av">${t.av}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-role">${t.role}</div>
        </div>
      </div>
    </div>`).join("");

  if (dots) {
    dots.innerHTML = TESTIMONIALS.map((_, i) => `
      <button class="dot ${i === tIdx ? "active" : ""}"
              onclick="setTesti(${i})"></button>`).join("");
  }
}

function setTesti(i) {
  tIdx = i;
  document.querySelectorAll(".t-card").forEach((c, j) =>
    c.classList.toggle("active", j === i));
  document.querySelectorAll(".dot").forEach((d, j) =>
    d.classList.toggle("active", j === i));
}

setInterval(() => setTesti((tIdx + 1) % TESTIMONIALS.length), 4500);

/* ═══════════════════════════════════════════════════════
   RENDER — FAQ
   ═══════════════════════════════════════════════════════ */
function renderFAQ() {
  const el = document.getElementById("faqWrap");
  if (!el) return;
  el.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-aos="fade-up" data-aos-delay="${i * 70}">
      <button class="faq-q" onclick="toggleFAQ(${i})">
        <span class="faq-qt">${f.q}</span>
        <span class="faq-ic" id="fi${i}">+</span>
      </button>
      <p class="faq-ans" id="fa${i}">${f.a}</p>
    </div>`).join("");
}

function toggleFAQ(i) {
  const open = document.getElementById(`fa${i}`).classList.contains("open");
  document.querySelectorAll(".faq-ans").forEach(a => a.classList.remove("open"));
  document.querySelectorAll(".faq-ic").forEach(ic => {
    ic.classList.remove("open"); ic.textContent = "+";
  });
  if (!open) {
    document.getElementById(`fa${i}`).classList.add("open");
    const ic = document.getElementById(`fi${i}`);
    ic.classList.add("open");
    ic.textContent = "+";
  }
}

/* ═══════════════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════════════ */
function openModal(i) {
  const p = PROJECTS[i];
  document.getElementById("mImg").src = p.img;
  document.getElementById("mImg").onerror = function () {
    this.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80";
  };
  document.getElementById("mTitle").textContent = p.title;
  document.getElementById("mDesc").textContent = p.desc;
  document.getElementById("mTags").innerHTML =
    p.tags.map(t => `<span class="modal-tag">${t}</span>`).join("");
  document.getElementById("mGh").href = p.github;
  document.getElementById("mDemo").href = p.demo;
  document.getElementById("modalBg").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalBg").classList.add("hidden");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ═══════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════ */
function submitForm() {
  const name = document.getElementById("fname").value.trim();
  const service = document.getElementById("fservice").value;
  if (!name || !service) {
    alert("Please enter your name and select a service.");
    return;
  }

  const btn = document.getElementById("fSubmit");
  btn.classList.add("loading");
  btn.innerHTML = `<span class="spinner"></span> Sending…`;

  const f = {
    name,
    email: document.getElementById("femail").value.trim(),
    phone: document.getElementById("fphone").value.trim(),
    service,
    budget: document.getElementById("fbudget").value,
    msg: document.getElementById("fmsg").value.trim(),
  };

  setTimeout(() => {
    window.open(`https://wa.me/${CONFIG.waNumber}?text=${buildWA(f)}`, "_blank");
    btn.classList.remove("loading");
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> Send via WhatsApp`;
    document.getElementById("cFormCard").classList.add("hidden");
    const ok = document.getElementById("formOk");
    ok.classList.remove("hidden");
    AOS.refresh();
  }, 1200);
}

function resetForm() {
  ["fname", "femail", "fphone", "fmsg"].forEach(id =>
    (document.getElementById(id).value = ""));
  ["fservice", "fbudget"].forEach(id =>
    (document.getElementById(id).selectedIndex = 0));
  document.getElementById("cFormCard").classList.remove("hidden");
  document.getElementById("formOk").classList.add("hidden");
}

/* ═══════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════ */
function goTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ═══════════════════════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════════════════════ */
function toggleMenu() {
  const drawer = document.getElementById("mobDrawer");
  const btn = document.getElementById("hamBtn");
  drawer.classList.toggle("open");
  btn.classList.toggle("open");
}
function closeMenu() {
  document.getElementById("mobDrawer").classList.remove("open");
  document.getElementById("hamBtn").classList.remove("open");
}

/* ═══════════════════════════════════════════════════════
   THEME
   ═══════════════════════════════════════════════════════ */
function toggleTheme() {
  const body = document.getElementById("body");
  const isDark = body.classList.contains("dark");
  if (isDark) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("pf_theme", "light");
    ["themeBtn", "themeBtnMob"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "🌙";
    });
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("pf_theme", "dark");
    ["themeBtn", "themeBtnMob"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "☀️";
    });
  }
}

function applyTheme() {
  // Default is always LIGHT (white) mode
  // Only go dark if user has explicitly toggled before
  const saved = localStorage.getItem("pf_theme") || "light";
  const body = document.getElementById("body");
  body.className = saved;
  // Ensure both classes never coexist
  if (saved === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }
  const icon = saved === "dark" ? "☀️" : "🌙";
  ["themeBtn", "themeBtnMob"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = icon;
  });
}

/* ═══════════════════════════════════════════════════════
   SCROLL HANDLER
   ═══════════════════════════════════════════════════════ */
function onScroll() {
  const sy = window.scrollY;
  const doc = document.documentElement;

  /* Progress bar */
  const bar = document.getElementById("scrollBar");
  if (bar) bar.style.transform =
    `scaleX(${sy / (doc.scrollHeight - doc.clientHeight)})`;

  /* Navbar glass */
  const nav = document.getElementById("navbar");
  if (nav) nav.classList.toggle("scrolled", sy > 20);

  /* Back to top */
  const btt = document.getElementById("btt");
  if (btt) btt.classList.toggle("hidden", sy < 500);

  /* Active nav highlight */
  const sections = ["home", "about", "projects", "services", "pricing", "testimonials", "contact"];
  let cur = "home";
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 88) cur = id;
  });
  document.querySelectorAll(".nl, .ml").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.s === cur));
}

/* ═══════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();

  /* AOS init */
  AOS.init({
    duration: 750,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
    disable: false,
  });

  renderTech();
  renderProjects();
  renderServices();
  renderSkills();
  renderPricing();
  renderTestimonials();
  renderFAQ();

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile: swipe testimonials ─────────── */
  let tsX = 0;
  const tg = document.getElementById("testiGrid");
  if (tg) {
    tg.addEventListener("touchstart", e => { tsX = e.touches[0].clientX; }, { passive: true });
    tg.addEventListener("touchend", e => {
      const dx = e.changedTouches[0].clientX - tsX;
      if (Math.abs(dx) > 50) setTesti(dx < 0
        ? (tIdx + 1) % TESTIMONIALS.length
        : (tIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, { passive: true });
  }

  /* ── Mobile: close menu on outside tap ──── */
  document.addEventListener("click", e => {
    const drawer = document.getElementById("mobDrawer");
    const ham = document.getElementById("hamBtn");
    if (drawer && drawer.classList.contains("open")
      && !drawer.contains(e.target)
      && !ham.contains(e.target)) {
      closeMenu();
    }
  });

  /* ── Mobile: close modal on swipe down ──── */
  let mdY = 0;
  const mb = document.getElementById("modalBg");
  if (mb) {
    mb.addEventListener("touchstart", e => { mdY = e.touches[0].clientY; }, { passive: true });
    mb.addEventListener("touchend", e => {
      if (e.changedTouches[0].clientY - mdY > 80) closeModal();
    }, { passive: true });
  }

  /* ── Fix 100vh on iOS ─────────────────────
     iOS Safari doesn't account for address bar */
  function fixVh() {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  }
  fixVh();
  window.addEventListener("resize", fixVh, { passive: true });
});
