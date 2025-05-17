function applyTheme(theme) {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  if (theme === "light") {
    html.classList.add("light");
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    html.classList.remove("light");
    img.setAttribute("src", "./assets/avatar.png");
  }
}

function toggleMode() {
  const html = document.documentElement;
  const isLight = html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  img.setAttribute(
    "src",
    isLight ? "./assets/avatar-light.png" : "./assets/avatar.png"
  );

  localStorage.setItem("theme", isLight ? "light" : "dark");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const themeToApply = savedTheme || (prefersLight ? "light" : "dark");

  applyTheme(themeToApply);
});

const links = document.querySelectorAll("ul li a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("clicked");

    setTimeout(() => {
      link.classList.remove("clicked");
    }, 200); // tempo do efeito
  });
});

// No final do script.js
document.getElementById("year").textContent = new Date().getFullYear();
