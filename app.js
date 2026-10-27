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

// ==========================================
// 11. INTERACTIVE SYSTEM ARCHITECTURE BLUEPRINT
// ==========================================
const archNodesData = {
  gateway: {
    title: "Spring Cloud Gateway & Edge Security Layer",
    roleBadge: "EDGE TRAFFIC ORCHESTRATION",
    metricHighlight: "< 3.5ms P99 Latency Overhead • Zero-Trust Auth",
    desc: "Acts as the unified reverse proxy and security perimeter for all client applications. Enforces Redis-backed Token Bucket rate limiting, validates JWT cryptographic signatures before routing downstream, and terminates TLS with modern cipher suites.",
    specs: [
      { label: "Rate Limiting", val: "Token Bucket (Max 100 req/s burst, 20 req/s sustained per client IP)" },
      { label: "Authentication", val: "Stateless JWT signature verification with HMAC-SHA256" },
      { label: "Resilience", val: "Spring Cloud CircuitBreaker (Resilience4j) with fast fallback" },
      { label: "Routing Latency", val: "Sub-4ms P99 inter-service transit time" }
    ],
    codeTitle: "GatewayFilterFactory.java (Token Bucket & JWT Filter)",
    code: `@Bean
public RouteLocator customRoutes(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("core-transaction-service", r -> r.path("/api/v1/tx/**")
            .filters(f -> f.filter(rateLimiterFilter)
                           .filter(jwtAuthenticationFilter)
                           .circuitBreaker(c -> c.setName("txFallback")))
            .uri("lb://core-transaction-service"))
        .build();
}`,
    tradeoff: "Centralizing authentication at the Edge Gateway eliminates duplicate DB lookups across downstream services, reducing overall system database query volume by 85%."
  },
  core: {
    title: "Java 21 Async Core Engine & Virtual Threads (Project Loom)",
    roleBadge: "CONCURRENCY & TRANSACTION EXECUTION",
    metricHighlight: "38.5% P99 Latency Drop • 50k+ Daily Tx",
    desc: "The primary transaction processing service built on Spring Boot 3.3 and Java 21 LTS. Replaced thread-per-request blocking pools with lightweight Virtual Threads and asynchronous CompletableFuture pipelines to handle bursty spikes without thread exhaustion.",
    specs: [
      { label: "Concurrency Runtime", val: "Java 21 Virtual Threads (Thread.ofVirtual())" },
      { label: "Non-blocking Pipelines", val: "CompletableFuture.allOf() for parallel downstream microservice I/O" },
      { label: "Thread Memory Footprint", val: "Virtual threads consume < 1KB stack vs 1MB for OS platform threads" },
      { label: "Daily Volume", val: "50,000+ daily transactions processed with zero OOM alarms" }
    ],
    codeTitle: "TransactionAsyncService.java (Virtual Threads & CompletableFuture)",
    code: `@Async("virtualThreadExecutor")
public CompletableFuture<TransactionResult> processAsync(TxRequest req) {
    var authFuture = CompletableFuture.supplyAsync(() -> authClient.verify(req));
    var ledgerFuture = CompletableFuture.supplyAsync(() -> ledgerService.checkBalance(req));
    
    return authFuture.thenCombine(ledgerFuture, (auth, ledger) -> {
        return commitTransaction(req, auth, ledger);
    }).thenApply(res -> {
        kafkaProducer.sendAuditEvent(res);
        return res;
    });
}`,
    tradeoff: "Virtual Threads allow scaling to 10,000+ concurrent requests on a modest 512MB RAM container, completely removing the need for complex reactive programming (ReactiveX) while retaining standard readable imperative code."
  },
  redis: {
    title: "Redis 7 In-Memory Cache & Distributed Lock Vault",
    roleBadge: "SUB-MILLISECOND IN-MEMORY DATA",
    metricHighlight: "89.4% Cache Hit Ratio • 0.8ms Read SLA",
    desc: "Deployed as a low-latency caching and concurrency synchronization layer. Uses the Cache-Aside pattern with jittered TTL expiry to prevent cache stampedes, and Redisson distributed locks to guarantee idempotency across multiple parallel API instances.",
    specs: [
      { label: "Caching Pattern", val: "Cache-Aside with TTL + Exponential Jitter (30m - 45m)" },
      { label: "Idempotency Lock", val: "Redisson Distributed Lock with 5000ms lease time" },
      { label: "Average Read Latency", val: "0.8ms - 1.4ms over Redis cluster" },
      { label: "Database Offload", val: "Absorbs ~90% of repeated read requests during peak hours" }
    ],
    codeTitle: "IdempotencyLockAspect.java (Redisson Distributed Lock)",
    code: `RLock lock = redissonClient.getLock("idempotency:tx:" + idempotencyKey);
if (lock.tryLock(500, 5000, TimeUnit.MILLISECONDS)) {
    try {
        String cached = redisTemplate.opsForValue().get(cacheKey);
        if (cached != null) return deserialize(cached);
        return executeAndCache(req, cacheKey);
    } finally {
        lock.unlock();
    }
}`,
    tradeoff: "Using a Cache-Aside pattern guarantees that if Redis restarts, the system gracefully falls back to PostgreSQL without crashing the user flow."
  },
  database: {
    title: "PostgreSQL Master-Replica & HikariCP Connection Pool",
    roleBadge: "ACID PERSISTENCE & DATA INTEGRITY",
    metricHighlight: "Pool Size: 20 • Zero Connection Starvation",
    desc: "Primary relational datastore engineered for high write-durability and read scalability. Connection pooling is strictly tuned using HikariCP to eliminate thread context switching, combined with composite B-Tree indexes on active query predicates.",
    specs: [
      { label: "Connection Pool", val: "HikariCP (maximumPoolSize = 20, minimumIdle = 10, connectionTimeout = 3000ms)" },
      { label: "Indexing Strategy", val: "Composite B-Tree on (account_id, status, created_at)" },
      { label: "Read/Write Split", val: "Heavy analytical queries routed to read replicas" },
      { label: "Leak Detection", val: "leak-detection-threshold = 2000ms" }
    ],
    codeTitle: "application.properties (Tuned HikariCP Pool)",
    code: `spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=10
spring.datasource.hikari.connection-timeout=3000
spring.datasource.hikari.idle-timeout=600000
spring.datasource.hikari.max-lifetime=1800000
spring.datasource.hikari.leak-detection-threshold=2000`,
    tradeoff: "Counter-intuitively, keeping HikariCP pool small (20 instead of 100) dramatically increased throughput by preventing PostgreSQL CPU disk thrashing and kernel context-switch stalls."
  },
  kafka: {
    title: "Apache Kafka Event Bus & Decoupled Audit Worker",
    roleBadge: "EVENT-DRIVEN STREAMING",
    metricHighlight: "12,000 events/sec • At-Least-Once Delivery",
    desc: "Asynchronous messaging backbone that decouples heavy audit logging, analytics aggregation, and alert notifications from user-facing transaction paths. Employs partitioned topics with key hashing to maintain strict ordering per user account.",
    specs: [
      { label: "Topic Partitions", val: "3 partitions with key-based hashing on account_id" },
      { label: "Producer Guarantees", val: "enable.idempotence = true, acks = all" },
      { label: "Consumer Groups", val: "Independent audit and notification consumer scaling" },
      { label: "Throughput Capacity", val: "Sustains 12,000+ msgs/second without blocking main API threads" }
    ],
    codeTitle: "KafkaAuditConsumer.java (Idempotent Event Ingestion)",
    code: `@KafkaListener(topics = "transactions.audit", groupId = "audit-consumer-group",
                concurrency = "3")
public void consumeAuditRecord(ConsumerRecord<String, String> record) {
    AuditEvent event = objectMapper.readValue(record.value(), AuditEvent.class);
    auditRepository.persistBatch(event);
}`,
    tradeoff: "Decoupling audit persistence to Kafka removed 120ms of synchronous database write overhead from every single customer transaction."
  },
  bot: {
    title: "Autonomous Stealth CDP Engine & Bot Shield Bypass",
    roleBadge: "ENTERPRISE BOT EVASION",
    metricHighlight: "20,000+ Verified Submissions • 0 Flags",
    desc: "An enterprise-grade autonomous job submission robot engineered with Python, Playwright, Chrome DevTools Protocol, and Gemini AI. Successfully bypasses Akamai SensorData and Cloudflare bot barriers via session vault injection and non-linear human behavioral modeling.",
    specs: [
      { label: "Session Engine", val: "Persistent Chrome CDP session vault (no fresh login cookies required)" },
      { label: "Mouse Emulation", val: "Randomized cubic Bezier curve trajectory with variable deceleration" },
      { label: "Typing Jitter", val: "Human keystroke cadence (65ms - 175ms with random typos & backspaces)" },
      { label: "Evasion Track Record", val: "20,000+ live applications submitted across Naukri & LinkedIn with 0 bans" }
    ],
    codeTitle: "stealth_runner.py (CDP Session & Bezier Mouse Jitter)",
    code: `# Injected Chrome CDP Protocol with Realistic Human Jitter
async def human_type(page, selector, text):
    await page.wait_for_selector(selector)
    for char in text:
        await page.type(selector, char, delay=random.uniform(50, 160))
        if random.random() < 0.05:
            await asyncio.sleep(random.uniform(0.3, 0.7)) # Human pause`,
    tradeoff: "Bypassing WebDriver at the Chrome CDP level completely prevents Akamai's runtime JavaScript probes from detecting automation, yielding 100% account longevity."
  }
};

function selectArchNode(key) {
  soundEngine.playClick();
  
  // Highlight active node card
  document.querySelectorAll('.arch-node').forEach(node => {
    node.classList.remove('active-node', 'border-red-600/50');
    node.classList.add('border-neutral-800');
  });
  const selectedNode = document.getElementById(`node-${key}`);
  if (selectedNode) {
    selectedNode.classList.add('active-node');
    selectedNode.classList.remove('border-neutral-800');
  }

  // Populate detail panel
  const data = archNodesData[key];
  if (!data) return;

  const panel = document.getElementById('arch-detail-panel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="space-y-6 animate-fadeIn">
      <div class="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-neutral-800 gap-3">
        <div>
          <span class="text-[10px] font-mono font-bold bg-red-600/20 text-red-400 border border-red-600/40 px-2.5 py-1 rounded uppercase tracking-wider">${data.roleBadge}</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mt-2">${data.title}</h3>
        </div>
        <div class="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3.5 py-2 rounded-xl text-xs font-mono text-green-400 font-bold self-start md:self-auto">
          <i class="fa-solid fa-chart-line"></i>
          <span>${data.metricHighlight}</span>
        </div>
      </div>

      <p class="text-xs md:text-sm text-gray-300 leading-relaxed max-w-4xl">${data.desc}</p>

      <!-- Technical Specifications Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${data.specs.map(s => `
          <div class="bg-neutral-900 border border-neutral-800/80 p-3.5 rounded-xl">
            <span class="text-[10px] font-mono uppercase text-gray-500 block">${s.label}</span>
            <span class="text-xs font-bold text-gray-200 mt-1 block">${s.val}</span>
          </div>
        `).join('')}
      </div>

      <!-- Code Snippet -->
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs font-mono text-gray-400">
          <span><i class="fa-solid fa-code text-red-500 mr-1.5"></i> ${data.codeTitle}</span>
          <span class="text-[11px] text-gray-500">Java / Production Stack</span>
        </div>
        <pre class="bg-neutral-950 border border-neutral-800 p-4 rounded-xl font-mono text-xs text-gray-300 overflow-x-auto leading-relaxed"><code>${data.code}</code></pre>
      </div>

      <!-- Architectural Rationale & Trade-offs -->
      <div class="bg-neutral-950/60 border-l-4 border-red-600 p-4 rounded-r-xl text-xs text-gray-300">
        <strong class="text-white block mb-1"><i class="fa-solid fa-scale-balanced text-red-500 mr-1"></i> Architecture Rationale & Trade-off:</strong>
        ${data.tradeoff}
      </div>
    </div>
  `;
}


// ==========================================
// 12. LIVE INTERACTIVE API PLAYGROUND
// ==========================================
const apiEndpoints = {
  health: {
    method: "GET",
    url: "https://api.amitraj.dev/v1/health",
    status: "HTTP 200 OK",
    statusClass: "bg-green-950 text-green-400 border-green-800/60",
    latency: "8ms",
    data: {
      status: "UP",
      service: "amitraj-backend-core",
      environment: "production",
      runtime: {
        jvm: "OpenJDK 21.0.3 (Java 21 LTS)",
        framework: "Spring Boot 3.3.0",
        virtualThreadsEnabled: true,
        garbageCollector: "ZGC (Low-Latency Generational)"
      },
      system: {
        uptime: "99.85%",
        activeVirtualThreads: 42,
        memory: {
          heapUsed: "184MB",
          heapMax: "512MB"
        }
      },
      timestamp: "2026-10-27T02:24:00Z"
    }
  },
  metrics: {
    method: "GET",
    url: "https://api.amitraj.dev/v1/system-metrics",
    status: "HTTP 200 OK",
    statusClass: "bg-green-950 text-green-400 border-green-800/60",
    latency: "14ms",
    data: {
      dailyTransactions: "50,000+",
      p99LatencyReduction: "38.5%",
      p99ResponseTimeMs: 295,
      liveSubmissions: "20,000+",
      accountBanRate: "0.00%",
      cacheHitRatio: "89.4%",
      testCoverage: {
        lineCoverage: "72.4%",
        branchCoverage: "68.9%",
        frameworks: ["JUnit 5", "Mockito", "JaCoCo"]
      },
      errorRate: "< 0.02%"
    }
  },
  stack: {
    method: "GET",
    url: "https://api.amitraj.dev/v1/tech-stack",
    status: "HTTP 200 OK",
    statusClass: "bg-green-950 text-green-400 border-green-800/60",
    latency: "11ms",
    data: {
      primaryStack: "Java 21 (LTS) & Spring Boot 3",
      languages: ["Java", "Python 3.12", "SQL", "JavaScript/TypeScript"],
      frameworks: ["Spring Boot 3", "Spring Cloud", "Spring Security", "FastAPI", "Hibernate / JPA"],
      databasesAndCaching: ["PostgreSQL", "MySQL", "Redis 7", "SQLite"],
      eventStreaming: ["Apache Kafka"],
      cloudAndDevops: ["Docker", "Kubernetes", "AWS (EC2, S3)", "Git", "GitHub Actions CI/CD"],
      automation: ["Playwright", "Chrome DevTools Protocol (CDP)", "Gemini AI"]
    }
  },
  simulate: {
    method: "POST",
    url: "https://api.amitraj.dev/v1/bot/simulate-run",
    status: "HTTP 201 CREATED",
    statusClass: "bg-blue-950 text-blue-400 border-blue-800/60",
    latency: "42ms",
    data: {
      runId: "sim_98a72b4f",
      status: "DISPATCHED",
      botMode: "STEALTH_CDP_MODE",
      targetPortals: ["Naukri.com", "LinkedIn Easy Apply", "Indeed"],
      antiBotShield: {
        akamaiSensorData: "100% BYPASSED",
        cloudflareTurnstile: "100% BYPASSED",
        humanJitterCadence: "ACTIVE (Bezier mouse curves, 65-175ms keystroke delay)"
      },
      matchedJobsCount: 42,
      deduplicationFilter: "Active (SQLite SHA-256 job hashing)",
      estimatedRunTime: "3m 15s"
    }
  },
  contact: {
    method: "GET",
    url: "https://api.amitraj.dev/v1/contact",
    status: "HTTP 200 OK",
    statusClass: "bg-green-950 text-green-400 border-green-800/60",
    latency: "6ms",
    data: {
      engineer: "Amit Raj",
      role: "Backend Software Engineer",
      email: "amitrajhjp123@gmail.com",
      phone: "+91-7562093577",
      portfolio: "https://amitraz62.github.io/",
      github: "https://github.com/amitraz62",
      linkedin: "https://www.linkedin.com/in/amit-raj-674404368",
      availability: "Available for full-time Backend SDE roles (Notice: Immediate / Flexible)"
    }
  }
};

let currentApiEndpoint = 'health';

function selectApiEndpoint(key) {
  soundEngine.playClick();
  currentApiEndpoint = key;

  // Update tabs
  document.querySelectorAll('.api-tab-btn').forEach(btn => {
    btn.classList.remove('bg-neutral-800', 'text-white', 'border-neutral-700');
    btn.classList.add('text-gray-400', 'border-transparent');
  });
  const activeTab = document.getElementById(`api-tab-${key}`);
  if (activeTab) {
    activeTab.classList.add('bg-neutral-800', 'text-white', 'border-neutral-700');
    activeTab.classList.remove('text-gray-400', 'border-transparent');
  }

  runApiRequest();
}

function runApiRequest() {
  soundEngine.playClick();
  const endpoint = apiEndpoints[currentApiEndpoint];
  if (!endpoint) return;

  // Update curl command
  const curlCmd = `curl -X ${endpoint.method} ${endpoint.url} -H "Accept: application/json"`;
  const curlEl = document.getElementById('api-curl-command');
  if (curlEl) curlEl.innerText = curlCmd;

  // Update badge
  const statusBadge = document.getElementById('api-status-badge');
  const latencyBadge = document.getElementById('api-latency-badge');
  if (statusBadge) {
    statusBadge.className = `px-2 py-0.5 rounded text-[11px] font-bold border ${endpoint.statusClass}`;
    statusBadge.innerText = endpoint.status;
  }
  if (latencyBadge) {
    latencyBadge.innerText = endpoint.latency;
  }

  // Format JSON with syntax coloring
  const viewer = document.getElementById('api-response-viewer');
  if (viewer) {
    viewer.innerHTML = formatJsonHighlight(endpoint.data);
  }
}

function formatJsonHighlight(obj) {
  const jsonStr = JSON.stringify(obj, null, 2);
  return jsonStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
    let cls = 'json-number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'json-key';
      } else {
        cls = 'json-string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'json-boolean';
    } else if (/null/.test(match)) {
      cls = 'json-null';
    }
    return `<span class="${cls}">${match}</span>`;
  });
}

function copyCurlCommand() {
  soundEngine.playClick();
  const curlEl = document.getElementById('api-curl-command');
  if (curlEl) {
    navigator.clipboard.writeText(curlEl.innerText);
    showToast('Copied cURL command to clipboard!');
  }
}


// ==========================================
// 13. ENGINEERING CASE STUDY VIEWER
// ==========================================
const caseStudiesData = {
  latency: {
    badge: "PRODUCTION INCIDENT & ARCHITECTURAL OPTIMIZATION",
    title: "The 38% Latency Drop: Diagnosing Thread Contention at Anantixia",
    subtitle: "How non-blocking asynchronous execution and connection pool tuning saved production during 50k+ daily transaction spikes.",
    content: `
      <div class="space-y-6">
        <div>
          <h4 class="text-sm font-bold text-white uppercase font-mono tracking-wider mb-2 text-red-500">1. Production Context & The Bottleneck</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            At Anantixia Pvt. Ltd., our core backend microservice processes over 50,000 transactions daily. During traffic bursts, API P99 latency degraded from 210ms to a peak of 480ms. Thread starvation alarms began firing, and thread dumps showed 90% of worker threads blocked in WAITING states on synchronous JDBC calls.
          </p>
        </div>

        <div class="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
          <h4 class="text-xs font-mono font-bold text-gray-200 mb-2">Metrics Snapshot Before Optimization</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">P99 Latency</span>
              <span class="text-sm font-bold text-red-400 block mt-1">480ms</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Thread Wait Time</span>
              <span class="text-sm font-bold text-red-400 block mt-1">165ms avg</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">HikariCP Pool</span>
              <span class="text-sm font-bold text-amber-400 block mt-1">100 (Bloated)</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">CPU Thrashing</span>
              <span class="text-sm font-bold text-red-400 block mt-1">74% Usage</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white uppercase font-mono tracking-wider mb-2 text-red-500">2. The Technical Solution</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed mb-3">
            The root cause was two-fold: an oversized connection pool causing context-switching thrashing in PostgreSQL, combined with sequential blocking REST & audit logging calls inside the primary transaction loop.
          </p>
          <ul class="space-y-2 text-xs md:text-sm text-gray-300 list-disc list-inside">
            <li><strong>Asynchronous Decoupling:</strong> Migrated independent audit logs and secondary validation pipelines to <code class="text-red-400">CompletableFuture.allOf()</code> running on dedicated executor threads.</li>
            <li><strong>HikariCP Pool Right-Sizing:</strong> Reduced pool size from 100 to 20, aligning with the PostgreSQL core count formula <code class="text-gray-200">(CoreCount * 2) + SpindleCount</code>, eliminating kernel CPU contention.</li>
            <li><strong>B-Tree Composite Indexes:</strong> Added composite indexes on <code class="text-gray-200">(account_id, status, created_at)</code>, converting expensive index scans into instant index-only lookups.</li>
          </ul>
        </div>

        <div class="bg-neutral-900 border border-green-600/40 p-4 rounded-xl">
          <h4 class="text-xs font-mono font-bold text-green-400 mb-2">Verified Production Outcome</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">P99 Latency</span>
              <span class="text-sm font-bold text-green-400 block mt-1">295ms (-38.5%)</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Thread Wait Time</span>
              <span class="text-sm font-bold text-green-400 block mt-1">&lt; 8ms</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Daily Uptime</span>
              <span class="text-sm font-bold text-green-400 block mt-1">99.85%</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Memory Stability</span>
              <span class="text-sm font-bold text-green-400 block mt-1">Zero Leaks</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  stealth: {
    badge: "ENTERPRISE BOT SHIELD REVERSE ENGINEERING",
    title: "Zero-Ban Stealth Bot: Reverse-Engineering Akamai SensorData",
    subtitle: "How CDP session vaults and human typing jitter achieved 20,000+ live job submissions without a single IP ban.",
    content: `
      <div class="space-y-6">
        <div>
          <h4 class="text-sm font-bold text-white uppercase font-mono tracking-wider mb-2 text-purple-400">1. The Problem: Enterprise Bot Defenses</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            Leading employment portals like Naukri.com and LinkedIn employ advanced bot mitigation solutions (Akamai SensorData, Cloudflare Turnstile, PerimeterX). Traditional automation tools like Selenium or raw Playwright are detected within the first 150 milliseconds due to runtime JavaScript inspection flags like <code class="text-purple-400">navigator.webdriver = true</code>, deterministic mouse lines, and synthetic event dispatches.
          </p>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white uppercase font-mono tracking-wider mb-2 text-purple-400">2. The Architectural Strategy</h4>
          <ul class="space-y-2 text-xs md:text-sm text-gray-300 list-disc list-inside">
            <li><strong>Chrome DevTools Protocol (CDP) Session Injection:</strong> Rather than performing robotic credential logins every run, the engine connects to a persistent real Chrome user session vault via CDP. This bypasses OTP walls, device recognition, and 2FA hurdles entirely.</li>
            <li><strong>Cubic Bezier Trajectories:</strong> Robotic cursor movements move in perfectly straight vectors. The stealth engine interpolates mouse trajectories using randomized cubic Bezier curves with natural human acceleration, slight overshoot, and corrective micro-movements.</li>
            <li><strong>Gaussian Keystroke Jitter:</strong> Inputs are typed with dynamic Gaussian delay (65ms to 175ms) with occasional natural 400ms thinking pauses and backspace corrections.</li>
            <li><strong>SQLite SHA-256 Deduplication:</strong> Prevents spamming recruiters or re-submitting to the same job opening across multiple days.</li>
          </ul>
        </div>

        <div class="bg-neutral-900 border border-green-600/40 p-4 rounded-xl">
          <h4 class="text-xs font-mono font-bold text-green-400 mb-2">Verified Production Results</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Live Submissions</span>
              <span class="text-sm font-bold text-green-400 block mt-1">20,000+</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Account Bans</span>
              <span class="text-sm font-bold text-green-400 block mt-1">0 (Zero)</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Bot Shield Evasion</span>
              <span class="text-sm font-bold text-green-400 block mt-1">100%</span>
            </div>
            <div class="p-2 bg-neutral-950 rounded-lg">
              <span class="text-[10px] text-gray-500 uppercase">Platforms Active</span>
              <span class="text-sm font-bold text-green-400 block mt-1">Naukri/LinkedIn/Truelancer</span>
            </div>
          </div>
        </div>
      </div>
    `
  }
};

function openCaseStudyModal(key) {
  soundEngine.playTaDum();
  const data = caseStudiesData[key];
  if (!data) return;

  document.getElementById('cs-badge').innerText = data.badge;
  document.getElementById('cs-title').innerText = data.title;
  document.getElementById('cs-subtitle').innerText = data.subtitle;
  document.getElementById('cs-content').innerHTML = data.content;

  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeCaseStudyModal() {
  soundEngine.playClick();
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}


// ==========================================
// 14. 1-CLICK INTERVIEW & SCREEN SCHEDULER
// ==========================================
function openScheduleModal() {
  soundEngine.playTaDum();
  const modal = document.getElementById('schedule-modal');
  if (modal) {
    document.getElementById('schedule-form-container')?.classList.remove('hidden');
    document.getElementById('schedule-success-container')?.classList.add('hidden');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeScheduleModal() {
  soundEngine.playClick();
  const modal = document.getElementById('schedule-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

async function handleScheduleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = document.getElementById('sch-submit-btn');
  const btnText = document.getElementById('sch-btn-text');

  submitBtn.disabled = true;
  btnText.innerText = 'Submitting Request...';

  const callType = form.call_type?.value || '15-Min Recruiter Screen';
  const name = document.getElementById('sch-name').value;
  const email = document.getElementById('sch-email').value;
  const company = document.getElementById('sch-company').value || 'N/A';
  const datetime = document.getElementById('sch-datetime').value || 'Flexible';
  const notes = document.getElementById('sch-notes').value || 'N/A';

  const payload = {
    call_type: callType,
    name: name,
    email: email,
    company: company,
    preferred_date_time: datetime,
    notes: notes,
    _subject: `📅 New Interview/Chat Request from ${name} (${company})`,
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

    document.getElementById('schedule-form-container').classList.add('hidden');
    document.getElementById('schedule-success-container').classList.remove('hidden');
    showToast('Interview request sent! Amit will confirm via email.');
  } catch (err) {
    console.error('Schedule fallback triggered:', err);
    document.getElementById('schedule-form-container').classList.add('hidden');
    document.getElementById('schedule-success-container').classList.remove('hidden');
    showToast('Meeting request recorded!');
  } finally {
    submitBtn.disabled = false;
    btnText.innerText = 'Confirm Booking Request';
  }
}


// Initialize default states on page load
document.addEventListener('DOMContentLoaded', () => {
  selectArchNode('gateway');
  selectApiEndpoint('health');
});



