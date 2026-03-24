(function () {
  document.querySelectorAll(".top-nav a.current-page").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      try {
        var url = new URL(href, window.location.href);
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) {
          e.preventDefault();
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      } catch (_) {
        /* ignore */
      }
    });
  });
})();
