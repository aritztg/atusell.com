// atusell.com — minimal vanilla JS: mobile menu toggle + contact mailto builder.
(function () {
  "use strict";

  // --- Background: floating spark particles (styled in assets/css/stars.css) ---
  // 140 particles injected here so every page gets the effect without markup edits.
  (function () {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var layer = document.createElement("div");
    layer.className = "stars";
    layer.setAttribute("aria-hidden", "true");
    for (var i = 0; i < 140; i++) {
      var container = document.createElement("div");
      container.className = "circle-container";
      var circle = document.createElement("div");
      circle.className = "circle";
      container.appendChild(circle);
      layer.appendChild(container);
    }
    document.body.insertBefore(layer, document.body.firstChild);
  })();

  // --- Mobile navigation toggle ---
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after following a link (single-page anchors / navigation).
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Contact form -> mailto: (no backend) ---
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.elements.name && form.elements.name.value || "").trim();
      var email = (form.elements.email && form.elements.email.value || "").trim();
      var message = (form.elements.message && form.elements.message.value || "").trim();
      var subject = encodeURIComponent(name ? "Website enquiry from " + name : "Website enquiry");
      var body = encodeURIComponent([message, "", "-", name, email].join("\n"));
      window.location.href = "mailto:aritztg@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
})();
