document.querySelectorAll("a[target='_blank']").forEach((link) => {
  link.addEventListener("focus", () => link.classList.add("is-focused"));
  link.addEventListener("blur", () => link.classList.remove("is-focused"));
});
