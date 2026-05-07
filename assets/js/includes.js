(function () {
  function getCurrentPage() {
    var path = window.location.pathname || "";
    var file = path.split("/").pop() || "index.html";
    if (file === "" || file === "/") file = "index.html";
    if (!file.includes(".")) file = "index.html";
    return file.toLowerCase();
  }

  function setActiveNavLink(navRoot) {
    if (!navRoot) return;

    var current = getCurrentPage();
    var links = navRoot.querySelectorAll(".nav-link[href]");
    links.forEach(function (a) {
      a.classList.remove("active");
      a.removeAttribute("aria-current");
    });

    links.forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      if (!href) return;
      if (current === "post.html") {
        if (href === "blog.html") {
          a.classList.add("active");
          a.setAttribute("aria-current", "page");
        }
        return;
      }
      if (href === current) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }
    });
  }

  function initNavAfterHero(navRoot) {
    if (!navRoot) return;
    if (!document.body.classList.contains("nav-after-hero")) return;

    navRoot.setAttribute("data-nav-after-hero", "");

    var hero = document.querySelector(".home-hero");
    if (!hero) return;

    function updateNavVisibility() {
      var heroBottom = hero.getBoundingClientRect().bottom;
      var shouldShow = heroBottom <= 0;
      navRoot.classList.toggle("is-visible", shouldShow);
    }

    updateNavVisibility();
    window.addEventListener("scroll", updateNavVisibility, { passive: true });
    window.addEventListener("resize", updateNavVisibility);
  }

  function injectPartial(target, url) {
    return fetch(url, { cache: "no-cache" })
      .then(function (res) {
        if (!res.ok) throw new Error("No se pudo cargar: " + url);
        return res.text();
      })
      .then(function (html) {
        target.innerHTML = html;
        return target;
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var navbarHost = document.querySelector('[data-include="navbar"]');
    var footerHost = document.querySelector('[data-include="footer"]');

    var tasks = [];

    if (navbarHost) {
      tasks.push(
        injectPartial(navbarHost, "./assets/partials/navbar.html").then(function (host) {
          var nav = host.querySelector("nav");
          setActiveNavLink(nav);
          initNavAfterHero(nav);
        })
      );
    }

    if (footerHost) {
      tasks.push(injectPartial(footerHost, "./assets/partials/footer.html"));
    }

    Promise.all(tasks).catch(function (err) {
      console.error(err);
    });
  });
})();

