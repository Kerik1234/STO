document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    // Игнорируем ссылки на якори (#)
    if (link.getAttribute("href").startsWith("#")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault(); // отменяем обычный переход
      const href = link.getAttribute("href");

      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 300); // Подождем завершения анимации (должно совпадать с CSS)
    });
  });
});
