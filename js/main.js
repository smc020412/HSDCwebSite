const heroTitle = document.querySelector("[data-hero-title]");

if (heroTitle) {
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
