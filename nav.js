(function() {
  const BASE = "/eor-forum-2026";

  const pages = [
    { href: BASE + "/",         label: "About"    },
    { href: BASE + "/register", label: "Register" },
    { href: BASE + "/sponsor",  label: "Sponsor"  },
    { href: BASE + "/travel",   label: "Travel"   },
  ];

  const path = window.location.pathname.replace(/\/+$/, "");
  const isActive = (href) => {
    const h = href.replace(/\/+$/, "");
    if (h === BASE) return path === BASE || path === BASE + "/index.html";
    return path === h || path.startsWith(h + "/");
  };

  const links = pages.map(p =>
    `<a href="${p.href}" class="nav-link${isActive(p.href) ? " nav-active" : ""}">${p.label}</a>`
  ).join("");

  const html = `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner">
    <a href="${BASE}/" class="nav-brand">
      <span class="nav-brand-flag">🛢</span>
      <span class="nav-brand-text"><strong>EOR</strong> Forum 2026</span>
    </a>
    <button class="nav-burger" id="nav-burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links" id="nav-links">${links}</div>
    <a href="${BASE}/register" class="nav-cta">Register →</a>
  </div>
</nav>`;

  document.write(html);

  document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("nav-burger");
    const navLinks = document.getElementById("nav-links");
    if (burger && navLinks) {
      burger.addEventListener("click", function() {
        navLinks.classList.toggle("open");
        burger.classList.toggle("open");
      });
    }
  });
})();
