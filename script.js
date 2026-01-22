const btn = document.querySelector(".theme-toggle");
const saved = localStorage.getItem("theme"); // "dark" or "light"

if (saved === "dark") document.body.classList.add("dark");

function syncButton() {
  const isDark = document.body.classList.contains("dark");
  btn.setAttribute("aria-pressed", String(isDark));
  btn.textContent = isDark ? "Light mode" : "Dark mode";
}

syncButton();

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  syncButton();
});
