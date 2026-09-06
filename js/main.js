// Scholar's Quest — small vanilla-JS behaviors (no framework needed)

document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Testimonial carousel
  var quotes = document.querySelectorAll("[data-quote]");
  var dots = document.querySelectorAll("[data-dot]");
  if (quotes.length) {
    var idx = 0;
    var timer;
    function show(i) {
      idx = (i + quotes.length) % quotes.length;
      quotes.forEach(function (q, n) { q.hidden = n !== idx; });
      dots.forEach(function (d, n) { d.classList.toggle("active", n === idx); });
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show(idx + 1); }, 8000);
    }
    dots.forEach(function (d, n) {
      d.addEventListener("click", function () { show(n); restart(); });
    });
    var prevBtn = document.querySelector("[data-quote-prev]");
    var nextBtn = document.querySelector("[data-quote-next]");
    if (prevBtn) prevBtn.addEventListener("click", function () { show(idx - 1); restart(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { show(idx + 1); restart(); });
    show(0);
    restart();
  }

  // Placeholder forms: show a success state client-side.
  // These do NOT submit anywhere yet -- wire the form's `action` up to
  // Formspree/Getform/your booking system, then this can go away or stay
  // as an optimistic UI while the real request goes out.
  document.querySelectorAll("form[data-placeholder-form]").forEach(function (form) {
    var successId = form.getAttribute("data-success-target");
    var success = successId ? document.getElementById(successId) : null;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (success) {
        form.hidden = true;
        success.hidden = false;
      }
    });
    var resetBtn = success ? success.querySelector("[data-form-reset]") : null;
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        success.hidden = true;
        form.hidden = false;
        form.reset();
      });
    }
  });
});
