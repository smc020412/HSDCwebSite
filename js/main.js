const siteConfig = {
  blogUrl: "https://blog.naver.com/prologue/PrologueList.naver?blogId=hsdc2023&parentCategoryNo=1",
  storeUrl: "https://smartstore.naver.com/haengboghan",
  navItems: [
    { key: "about", label: "Company Overview", path: "about/" },
    { key: "works", label: "Works", path: "works/" },
    { key: "contact", label: "Contact", path: "contact/" },
  ],
};

function getCurrentPage() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("/about/")) return "about";
  if (path.includes("/works/")) return "works";
  if (path.includes("/contact/")) return "contact";
  return "home";
}

function getBasePath(page) {
  return page === "home" ? "./" : "../";
}

function renderSiteHeader() {
  const headerTarget = document.querySelector("[data-site-header]");
  if (!headerTarget) return;

  const currentPage = getCurrentPage();
  const basePath = getBasePath(currentPage);
  const navLinks = siteConfig.navItems
    .map((item) => {
      const href = currentPage === item.key ? "./" : `${basePath}${item.path}`;
      const activeClass = currentPage === item.key ? ' class="is-active" aria-current="page"' : "";
      return `<a href="${href}"${activeClass}>${item.label}</a>`;
    })
    .join("");

  headerTarget.outerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="${basePath}index.html" aria-label="HSDC home">
          <img src="${basePath}images/HSDC.png" alt="HSDC" />
        </a>

        <nav class="site-nav" aria-label="Main navigation">
          <div class="nav-links">
            ${navLinks}
          </div>

          <div class="nav-actions">
            <a
              class="nav-cta nav-blog"
              href="${siteConfig.blogUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="${basePath}images/블로그로고.png" alt="Blog" />
            </a>
            <a
              class="nav-cta"
              href="${siteConfig.storeUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              스마트 스토어
            </a>
          </div>
        </nav>
      </div>
    </header>
  `;
}

function renderSiteFooter() {
  const footerTarget = document.querySelector("[data-site-footer]");
  if (!footerTarget) return;

  const basePath = getBasePath(getCurrentPage());
  footerTarget.outerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>&copy; 2026 HSDC. All rights reserved.</p>
        <a href="#">Back to top</a>
      </div>
    </footer>
  `;
}

function animateHeroTitle() {
  const heroTitle = document.querySelector("[data-hero-title]");
  if (!heroTitle) return;

  const words = heroTitle.querySelectorAll(".hero-word");
  const abbreviation = heroTitle.querySelector(".hero-abbreviation");
  const wordDelay = 260;
  const abbreviationDelay = 120;
  const phraseDelay = 620;

  window.setTimeout(() => {
    abbreviation?.classList.add("is-visible");
  }, abbreviationDelay);

  window.setTimeout(() => {
    heroTitle.classList.add("is-emphasized");
    words.forEach((word, index) => {
      window.setTimeout(() => {
        word.classList.add("is-visible");
      }, index * wordDelay);
    });
  }, phraseDelay);
}

renderSiteHeader();
renderSiteFooter();
animateHeroTitle();
