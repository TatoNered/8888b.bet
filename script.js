document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".lang-link");

  function setActiveLanguage() {
    const path = window.location.pathname;
    links.forEach((link) => {
      link.classList.remove("active");
      if (
        (link.dataset.lang === "vi" && path.includes("index.html")) ||
        (link.dataset.lang === "en" && path.includes("index-en.html"))
      ) {
        link.classList.add("active");
      }
    });
  }

  setActiveLanguage();

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.dataset.lang;

      if (lang === "vi") {
        window.location.href = "index.html";
      } else if (lang === "en") {
        window.location.href = "index-en.html";
      }
    });
  });
});
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
function toggleNav() {
  document.getElementById("mainNav").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomElements = document.querySelectorAll(".zoom-on-scroll");

  if (zoomElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    zoomElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    const animatedItems = document.querySelectorAll(
      ".fade-in, .slide-in, .slide-up, .zoom-in"
    );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedItems.forEach((item) => observer.observe(item));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", function () {
  try {
    const cards = document.querySelectorAll(".mobile-platform-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("card-visible");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", function () {
  try {
    const animatedSections = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".advantage-item");
            items.forEach((item) => item.classList.add("rotate-in", "visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    animatedSections.forEach((section) => observer.observe(section));
  } catch (e) {}
});
