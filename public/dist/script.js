window.addEventListener("load", function () {
  document
    .querySelector("#showMenu")
    .addEventListener("click", function (event) {
      document.querySelector("#mobileNav").classList.remove("hidden");
    });

  document
    .querySelector("#hideMenu")
    .addEventListener("click", function (event) {
      document.querySelector("#mobileNav").classList.add("hidden");
    });

  document.querySelectorAll("[toggleElement]").forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      const answerElement = toggle.querySelector("[answer]");
      const caretElement = toggle.querySelector("img");

      if (answerElement.classList.contains("hidden")) {
        answerElement.classList.remove("hidden");
        caretElement.classList.add("rotate-90");
      } else {
        answerElement.classList.add("hidden");
        caretElement.classList.remove("rotate-90");
      }
    });
  });

  document.querySelectorAll("#mobileNav a[href^='#']").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelector("#mobileNav").classList.add("hidden");
    });
  });
});
