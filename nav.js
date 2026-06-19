// Shared navigation — included in all pages via <script src="_nav.js">
(function() {
  const pages = [
    { href: "/",         label: "About"    },
    { href: "/register", label: "Register" },
    { href: "/sponsor",  label: "Sponsor"  },
    { href: "/travel",   label: "Travel"   },
  ];

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const isActive = (href) => {
    if (href === "/") return path === "" || path === "/";
    return path === href || path.startsWith(href + "/");
  };

  const links = pages.map(p =>
    `<a href="${p.href}" class="nav-link${isActive(p.href) ? " nav-active" : ""}">${p.label}</a>`
  ).join("");

  const html = `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner">
    <a href="/" class="nav-brand">
      <span class="nav-brand-flag">🛢</span>
      <span class="nav-brand-text"><strong>EOR</strong> Forum 2026</span>
    </a>
    <button class="nav-burger" id="nav-burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links" id="nav-links">${links}</div>
    <a href="/register" class="nav-cta">Register →</a>
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
