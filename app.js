/**
 * AMIT RAJ — THE SERIES
 * Netflix-Themed Portfolio Interactive Engine
 */

// 1. Web Audio API — Synthetic Netflix "Ta-Dum!" Sound Effect
class NetflixSoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTaDum() {
    // Sound disabled per user preference
  }

  playClick() {
    // Sound disabled per user preference
  }
}

const soundEngine = new NetflixSoundEngine();

// 2. Profile Selection
function selectProfile(profileType) {
  soundEngine.playTaDum();
  
  const profileScreen = document.getElementById('who-is-watching-screen');
  const mainApp = document.getElementById('main-netflix-app');
  const profileBanner = document.getElementById('profile-custom-banner');
  const bannerText = document.getElementById('profile-custom-text');

  profileScreen.classList.add('opacity-0', 'scale-95', 'pointer-events-none', 'transition-all', 'duration-700');
  
  setTimeout(() => {
    profileScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Custom profile behavior
    if (profileType === 'recruiter') {
      bannerText.innerText = "⭐ Recruiter Profile Active: Prioritizing Resume, Metrics (50k+ daily txns), and Anantixia Experience.";
      profileBanner.classList.remove('hidden');
    } else if (profileType === 'developer') {
      bannerText.innerText = "💻 Tech Lead / Developer Profile: Prioritizing Microservices Architecture, Kafka, Redis, and GitHub Repositories.";
      profileBanner.classList.remove('hidden');
    } else if (profileType === 'client') {
      bannerText.innerText = "🚀 Founder / Client Profile: Prioritizing Autonomous AI Automation, Scraping, and High-Speed Delivery.";
      profileBanner.classList.remove('hidden');
    } else {
      profileBanner.classList.add('hidden');
    }
  }, 600);
}

function switchProfileScreen() {
  soundEngine.playClick();
  const profileScreen = document.getElementById('who-is-watching-screen');
  const mainApp = document.getElementById('main-netflix-app');
  
  mainApp.classList.add('hidden');
  profileScreen.classList.remove('hidden');
  setTimeout(() => {
    profileScreen.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
  }, 50);
}

// 3. Carousel Horizontal Scroll Buttons
function scrollCarousel(id, direction) {
  soundEngine.playClick();
  const carousel = document.getElementById(id);
  if (!carousel) return;
  const scrollAmount = carousel.clientWidth * 0.75;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// 4. Modal Management
function openResumeModal() {
  soundEngine.playClick();
  const modal = document.getElementById('resume-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  soundEngine.playClick();
  const modal = document.getElementById('resume-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// 5. Interactive Cinematic Trailer Modal
let trailerInterval = null;
let trailerSlide = 0;

const trailerSlides = [
  {
    tag: "EPISODE 01: SYSTEM INITIALIZATION",
    title: "Java 21 & Spring Boot Microservices",
    code: "$ kubectl get pods -n anantixia-prod\nNAME                                READY   STATUS    RESTARTS   AGE\nfee-service-79df4b878-k9x21         1/1     Running   0          18d\nuser-service-67c4bb4f5-m7b42        1/1     Running   0          18d\nixia-core-gateway-55f46995b-w8j91   1/1     Running   0          18d\n\n> Processing 50,000+ daily transactions across high-throughput REST APIs.",
    stat: "50k+ Transactions / Day • 99.8% Reliability"
  },
  {
    tag: "EPISODE 02: LATENCY OPTIMIZATION",
    title: "Asynchronous Concurrency Pipeline",
    code: "// Decoupled execution via CompletableFuture & ExecutorService\nCompletableFuture.runAsync(() -> notificationService.broadcast(event), customExecutor)\n  .exceptionally(ex -> fallbackLogger.recover(ex));\n\n> Result: Thread starvation eliminated. API latency reduced by 38%!",
    stat: "38% API Latency Drop • 40% DB CPU Optimization"
  },
  {
    tag: "EPISODE 03: AUTONOMOUS STEALTH ENGINE",
    title: "AI Job Auto-Applier & Bot Shield Evasion",
    code: "$ python3 run_daily_cloud.py --mode production\n[*] Injected Chrome CDP session vault & human typing jitter\n[*] Akamai / Cloudflare bot detection: 100% BYPASSED\n[*] Multi-portal automation across Naukri, LinkedIn & Freelance\n[✓] Grand total: 20,000+ live verified submissions.",
    stat: "20K+ Real Submissions • 0 Bans • 100% Stealth"
  },
  {
    tag: "EPISODE 04: DISTRIBUTED EVENT BUS",
    title: "Apache Kafka & Redis High-Availability",
    code: "@KafkaListener(topics = \"student-enrollments-topic\", groupId = \"enrollment-workers\")\npublic void processBatchEnrollments(ConsumerRecord<String, StudentEvent> record) {\n    distributedLock.executeWithLock(record.key(), () -> {\n        enrollmentService.safelyPersist(record.value());\n    });\n}\n\n> Distributed idempotency with zero race conditions.",
    stat: "Distributed Locking • Zero Race Conditions"
  }
];

function openTrailerModal() {
  soundEngine.playTaDum();
  const modal = document.getElementById('trailer-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  trailerSlide = 0;
  renderTrailerSlide();

  if (trailerInterval) clearInterval(trailerInterval);
  trailerInterval = setInterval(() => {
    trailerSlide = (trailerSlide + 1) % trailerSlides.length;
    renderTrailerSlide();
  }, 4500);
}

function renderTrailerSlide() {
  const current = trailerSlides[trailerSlide];
  document.getElementById('trailer-tag').innerText = current.tag;
  document.getElementById('trailer-title').innerText = current.title;
  document.getElementById('trailer-terminal').innerText = current.code;
  document.getElementById('trailer-stat-badge').innerText = current.stat;

  // Dots
  const dots = document.querySelectorAll('.trailer-dot');
  dots.forEach((dot, idx) => {
    if (idx === trailerSlide) {
      dot.classList.add('bg-red-600', 'w-8');
      dot.classList.remove('bg-gray-600', 'w-2.5');
    } else {
      dot.classList.remove('bg-red-600', 'w-8');
      dot.classList.add('bg-gray-600', 'w-2.5');
    }
  });
}

function nextTrailerSlide() {
  soundEngine.playClick();
  trailerSlide = (trailerSlide + 1) % trailerSlides.length;
  renderTrailerSlide();
}

function prevTrailerSlide() {
  soundEngine.playClick();
  trailerSlide = (trailerSlide - 1 + trailerSlides.length) % trailerSlides.length;
  renderTrailerSlide();
}

function closeTrailerModal() {
  soundEngine.playClick();
  const modal = document.getElementById('trailer-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  if (trailerInterval) clearInterval(trailerInterval);
}

// 6. Project Detail Modal
const projectsData = {
  'autoapply': {
    title: 'Autonomous AI Job Applier & Stealth Engine',
    series: 'SERIES 01 • ORIGINAL',
    badge: 'Trending #1 in Automation',
    match: '99% Match',
    duration: 'Production Engine',
    desc: 'An enterprise-scale autonomous bot engineered with Python, Playwright, SQLite, and Gemini AI. Bypasses strict Akamai and Cloudflare anti-bot systems via persistent Chrome DevTools Protocol (CDP) session injection, automated human typing jitter, and multi-portal adapters for Naukri.com, LinkedIn Easy Apply, and Truelancer.',
    metrics: ['20K+ Live Applications Submitted', 'Zero Account Flags or Bans', 'Akamai & Cloudflare Stealth Evasion', 'SQLite Deduplication Engine'],
    tags: ['Python 3.12', 'Playwright', 'Chrome CDP', 'Gemini AI', 'SQLite', 'Docker', 'FastAPI'],
    github: 'https://github.com/amitraz62/job-auto-apply',
    image: 'assets/project_autoapply.png'
  },
  'homework': {
    title: 'Homework & Assignment Management Microservices',
    series: 'SERIES 02 • ORIGINAL',
    badge: 'Enterprise Backend',
    match: '98% Match',
    duration: 'Production Service',
    desc: 'Architected scalable REST APIs and backend microservices using Java 21, Spring Boot, Hibernate, and JPA. Integrated multiple internal microservices via Spring WebClient with automated retry and exponential backoff. Implemented asynchronous batch assignment with Java ExecutorService to process 5,000+ student groups concurrently without blocking workflows.',
    metrics: ['5,000+ Concurrent Student Groups', '35% Database Query Latency Cut', '99.8% Cross-Service Reliability', 'Spring Security RBAC'],
    tags: ['Java 21', 'Spring Boot 3', 'Spring WebClient', 'JPA / Hibernate', 'MySQL', 'Jenkins CI/CD'],
    github: 'https://github.com/amitraz62',
    image: 'assets/project_arch.png'
  },
  'student': {
    title: 'Student Management & High-Throughput Onboarding Engine',
    series: 'SERIES 03 • ORIGINAL',
    badge: 'Distributed Core',
    match: '97% Match',
    duration: 'Microservices',
    desc: 'Engineered core backend services for student onboarding, academic profile tracking, course enrollments, and sections management handling 50k+ records. Implemented secure onboarding workflows generating temporary hashed credentials and integrated asynchronous email notifications. Devised a concurrency-safe unique student ID algorithm to eliminate race conditions.',
    metrics: ['50,000+ Student Records Handled', 'Race-Condition Free Unique ID Generator', '40% Throughput Boost via Index Tuning', 'Stateless JWT Authentication'],
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'JWT', 'Docker'],
    github: 'https://github.com/amitraz62',
    image: 'assets/project_arch.png'
  },
  'speakforge': {
    title: 'SpeakForge AI: Indian English Spoken AI & Spaced Repetition',
    series: 'SERIES 04 • ORIGINAL',
    badge: 'AI / Machine Learning',
    match: '96% Match',
    duration: 'FastAPI + Deep Learning',
    desc: 'Implemented the Duolingo Half-Life Regression (HLR) mathematical model (Settles & Meeder) alongside an Indian English Grammar Error Correction (GEC) classifier. Calculates optimal next spaced repetition review intervals and resolves common Indian syntactic errors in real-time spoken audio.',
    metrics: ['Duolingo Half-Life Regression Algorithm', 'Syntactic Indianism GEC Classifier', 'FastAPI Async Inference Pipeline', 'Automated Daily Habit Scheduler'],
    tags: ['Python', 'FastAPI', 'Machine Learning', 'HLR Algorithm', 'Audio Speech Processing'],
    github: 'https://github.com/amitraz62',
    image: 'assets/project_truelancer.png'
  },
  'employee': {
    title: 'Employee & Organizational Hierarchy Service',
    series: 'SERIES 05 • ORIGINAL',
    badge: 'Enterprise Security',
    match: '97% Match',
    duration: 'Spring Security Vault',
    desc: 'Developed backend APIs for employee onboarding, departmental role assignments, designations, and team hierarchy. Utilized Spring Security Context to extract, validate, and propagate authentication tokens for downstream microservices. Enforced fine-grained method-level security and Role-Based Access Control (RBAC).',
    metrics: ['Method-level RBAC Enforcement', 'Zero-Leak Security Context Propagation', 'Tuned HikariCP Database Connection Pool', '70%+ JaCoCo Unit Test Coverage'],
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'REST APIs', 'MySQL', 'JWT', 'Mockito'],
    github: 'https://github.com/amitraz62',
    image: 'assets/project_arch.png'
  }
};

function openProjectModal(key) {
  soundEngine.playTaDum();
  const data = projectsData[key];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  document.getElementById('pm-series').innerText = data.series;
  document.getElementById('pm-title').innerText = data.title;
  document.getElementById('pm-match').innerText = data.match;
  document.getElementById('pm-badge').innerText = data.badge;
  document.getElementById('pm-desc').innerText = data.desc;
  document.getElementById('pm-github').href = data.github;

  const betaBtn = document.getElementById('pm-beta-btn');
  if (betaBtn) {
    if (key === 'autoapply') {
      betaBtn.classList.remove('hidden');
    } else {
      betaBtn.classList.add('hidden');
    }
  }
  
  const imgEl = document.getElementById('pm-image');
  if (imgEl) imgEl.src = data.image;

  // Metrics
  const metricsContainer = document.getElementById('pm-metrics');
  metricsContainer.innerHTML = '';
  data.metrics.forEach(m => {
    const li = document.createElement('li');
    li.className = 'flex items-center text-sm text-gray-300';
    li.innerHTML = `<span class="text-red-500 mr-2">✔</span> ${m}`;
    metricsContainer.appendChild(li);
  });

  // Tags
  const tagsContainer = document.getElementById('pm-tags');
  tagsContainer.innerHTML = '';
  data.tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'px-2.5 py-1 bg-neutral-800 border border-neutral-700 rounded text-xs font-mono text-gray-300';
    span.innerText = t;
    tagsContainer.appendChild(span);
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  soundEngine.playClick();
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// 7. My List / Bookmark Toast
function toggleMyList() {
  soundEngine.playClick();
  const btn = document.getElementById('my-list-btn');
  const toast = document.getElementById('toast');
  
  if (btn.classList.contains('in-list')) {
    btn.classList.remove('in-list', 'bg-neutral-700', 'text-white');
    btn.classList.add('bg-neutral-800/80', 'text-gray-300');
    btn.innerHTML = `<i class="fa-solid fa-plus mr-2"></i> My List`;
    showToast("Removed from My List");
  } else {
    btn.classList.add('in-list', 'bg-neutral-700', 'text-white');
    btn.classList.remove('bg-neutral-800/80', 'text-gray-300');
    btn.innerHTML = `<i class="fa-solid fa-check mr-2 text-green-400"></i> Added to List`;
    showToast("Added 'AMIT RAJ — THE SERIES' to your favorites!");
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 2500);
}

// 8. Skill Tab Switcher
function showSkillTab(tabKey) {
  soundEngine.playClick();
  
  // Tab buttons
  document.querySelectorAll('.skill-nav-btn').forEach(btn => {
    if (btn.dataset.tab === tabKey) {
      btn.classList.add('border-l-4', 'border-red-600', 'bg-neutral-900', 'text-white');
      btn.classList.remove('text-gray-400', 'border-transparent');
    } else {
      btn.classList.remove('border-l-4', 'border-red-600', 'bg-neutral-900', 'text-white');
      btn.classList.add('text-gray-400', 'border-transparent');
    }
  });

  // Tab contents
  document.querySelectorAll('.skill-tab-pane').forEach(pane => {
    if (pane.id === `skill-pane-${tabKey}`) {
      pane.classList.remove('hidden');
    } else {
      pane.classList.add('hidden');
    }
  });
}

// 9. Sticky Navbar On Scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('netflix-navbar');
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.classList.add('bg-neutral-950/95', 'shadow-2xl', 'backdrop-blur-md');
    nav.classList.remove('bg-transparent');
  } else {
    nav.classList.remove('bg-neutral-950/95', 'shadow-2xl', 'backdrop-blur-md');
    nav.classList.add('bg-transparent');
  }
});

// 10. AutoApply Beta Pilot Modal Management
const roleDatabase = [
  { title: "Backend Engineer (Java & Spring Boot)", badge: "Trending", icon: "fa-mug-hot" },
  { title: "Backend Developer (Python / Django / FastAPI)", badge: "Popular", icon: "fa-code" },
  { title: "Backend SDE (Node.js & Microservices)", badge: "High Demand", icon: "fa-server" },
  { title: "Backend Engineer (Go / Distributed Systems)", badge: "Scale", icon: "fa-cubes" },
  { title: "Full Stack Developer (Java + React)", badge: "Top Match", icon: "fa-layer-group" },
  { title: "Full Stack Engineer (MERN / Next.js)", badge: "Popular", icon: "fa-laptop-code" },
  { title: "Software Development Engineer (SDE 1)", badge: "Entry Level", icon: "fa-terminal" },
  { title: "Software Development Engineer (SDE 2)", badge: "Mid/Senior", icon: "fa-brain" },
  { title: "Frontend Developer (React / Next.js / TypeScript)", badge: "UI/UX", icon: "fa-palette" },
  { title: "DevOps & Cloud Engineer (AWS / Docker / K8s)", badge: "Infra", icon: "fa-cloud" },
  { title: "Data Engineer (Spark / Kafka / Python / SQL)", badge: "Big Data", icon: "fa-database" },
  { title: "AI / Machine Learning Engineer (LLMs / Agents)", badge: "GenAI", icon: "fa-microchip" },
  { title: "QA Automation Engineer (Playwright / Selenium)", badge: "Testing", icon: "fa-vial" }
];

function showRoleSuggestions() {
  const input = document.getElementById('beta-role');
  filterRoleSuggestions(input ? input.value : '');
}

function filterRoleSuggestions(query) {
  const dropdown = document.getElementById('role-suggestions-dropdown');
  if (!dropdown) return;

  const q = (query || '').toLowerCase().trim();
  const matched = q === '' 
    ? roleDatabase.slice(0, 6) 
    : roleDatabase.filter(r => r.title.toLowerCase().includes(q));

  if (matched.length === 0) {
    dropdown.innerHTML = `
      <div class="p-3 text-xs text-gray-400 text-center">
        No predefined match. You can keep typing: <strong class="text-white">${query}</strong>
      </div>
    `;
    dropdown.classList.remove('hidden');
    return;
  }

  dropdown.innerHTML = matched.map(r => `
    <div onclick="selectRole('${r.title.replace(/'/g, "\\'")}')" class="p-3 hover:bg-neutral-800 cursor-pointer transition-colors flex items-center justify-between group">
      <div class="flex items-center gap-2.5">
        <i class="fa-solid ${r.icon} text-red-500 text-xs w-4 text-center"></i>
        <span class="text-xs text-gray-200 group-hover:text-white font-medium">${highlightMatch(r.title, q)}</span>
      </div>
      <span class="text-[10px] font-mono bg-neutral-800 text-gray-400 group-hover:text-red-400 px-2 py-0.5 rounded border border-neutral-700/60">${r.badge}</span>
    </div>
  `).join('');

  dropdown.classList.remove('hidden');
}

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="text-red-400 font-bold underline">$1</span>');
}

function selectRole(roleTitle) {
  soundEngine.playClick();
  const input = document.getElementById('beta-role');
  if (input) {
    input.value = roleTitle;
  }
  const dropdown = document.getElementById('role-suggestions-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
}

// Close suggestion dropdown on outside click
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('role-suggestions-dropdown');
  const input = document.getElementById('beta-role');
  if (dropdown && !dropdown.contains(e.target) && e.target !== input) {
    dropdown.classList.add('hidden');
  }
});

// Dynamic Custom Platform Adder
function addCustomPlatform() {
  soundEngine.playClick();
  const input = document.getElementById('custom-platform-input');
  if (!input) return;
  const name = input.value.trim();
  if (!name) return;

  const grid = document.getElementById('platforms-grid');
  if (!grid) return;

  const existing = Array.from(grid.querySelectorAll('input[name="platform"]')).map(i => i.value.toLowerCase());
  if (existing.includes(name.toLowerCase())) {
    showToast(`'${name}' is already in your platform list!`);
    input.value = '';
    return;
  }

  const label = document.createElement('label');
  label.className = 'platform-item flex items-center gap-2 text-xs text-white bg-red-950/40 border border-red-600/60 p-2.5 rounded-lg cursor-pointer hover:border-red-500 transition-colors shadow-sm';
  label.innerHTML = `
    <input type="checkbox" name="platform" value="${name}" checked class="accent-red-600 rounded">
    <span class="font-medium truncate">${name}</span>
    <span class="ml-auto text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-mono font-bold">CUSTOM</span>
  `;
  grid.appendChild(label);

  showToast(`Added '${name}' to target platforms!`);
  input.value = '';
}

function openAutoApplyBetaModal() {
  soundEngine.playTaDum();
  const modal = document.getElementById('autoapply-beta-modal');
  if (modal) {
    const formContainer = document.getElementById('beta-form-container');
    const successContainer = document.getElementById('beta-success-container');
    if (formContainer) formContainer.classList.remove('hidden');
    if (successContainer) successContainer.classList.add('hidden');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeAutoApplyBetaModal() {
  soundEngine.playClick();
  const modal = document.getElementById('autoapply-beta-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
  const dropdown = document.getElementById('role-suggestions-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
}

async function handleBetaFormSubmit(event) {
  event.preventDefault();
  const submitBtn = document.getElementById('beta-submit-btn');
  const btnText = document.getElementById('beta-btn-text');
  
  submitBtn.disabled = true;
  btnText.innerText = 'Submitting Pilot Request...';
  
  // Collect all checked platforms dynamically
  const platformCheckboxes = document.querySelectorAll('#platforms-grid input[name="platform"]:checked');
  const platforms = Array.from(platformCheckboxes).map(cb => cb.value);
  if (platforms.length === 0) {
    platforms.push('Naukri.com', 'LinkedIn Easy Apply');
  }

  const payload = {
    name: document.getElementById('beta-name').value,
    email: document.getElementById('beta-email').value,
    phone: document.getElementById('beta-phone').value || 'N/A',
    experience: document.getElementById('beta-experience').value,
    target_role: document.getElementById('beta-role').value,
    preferred_location: document.getElementById('beta-location').value || 'Open',
    expected_ctc: document.getElementById('beta-ctc').value || 'Open',
    resume_url: document.getElementById('beta-resume').value,
    platforms: platforms.join(', '),
    _subject: `🚀 New AutoApply Beta Pilot Request: ${document.getElementById('beta-name').value} (${document.getElementById('beta-role').value})`,
    _template: 'table'
  };

  try {
    await fetch('https://formsubmit.co/ajax/amitrajhjp123@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    document.getElementById('beta-form-container').classList.add('hidden');
    document.getElementById('beta-success-container').classList.remove('hidden');
    showToast('Pilot application sent successfully!');
  } catch (err) {
    console.error('Submission fallback triggered:', err);
    document.getElementById('beta-form-container').classList.add('hidden');
    document.getElementById('beta-success-container').classList.remove('hidden');
    showToast('Pilot application recorded!');
  } finally {
    submitBtn.disabled = false;
    btnText.innerText = 'Submit Pilot Request (100% Free)';
  }
}


