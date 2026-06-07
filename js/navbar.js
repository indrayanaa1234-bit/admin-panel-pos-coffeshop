document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
});

function loadNavbar() {
  const navbarTarget = document.getElementById("navbar");

  if (!navbarTarget) return;

  const isInsidePages = window.location.pathname.includes("/pages/");
  const navbarPath = isInsidePages
    ? "../component/navbar.html"
    : "component/navbar.html";

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) {
        throw new Error("Navbar gagal dimuat");
      }

      return response.text();
    })
    .then(html => {
      navbarTarget.innerHTML = html;
      setNavbarLinks();
      setActiveMenu();
    })
    .catch(error => {
      console.error("Error:", error);
      navbarTarget.innerHTML = `
        <div style="padding:20px;color:red;background:#fff;border-bottom:1px solid #ddd;">
          Navbar gagal dimuat. Jalankan dengan Live Server dan cek folder component/navbar.html.
        </div>
      `;
    });
}

function setNavbarLinks() {
  const currentPath = window.location.pathname;
  const isInsidePages = currentPath.includes("/pages/");

  const posLink = document.querySelector('[data-page="pos"]');
  const historyLink = document.querySelector('[data-page="history"]');
  const dashboardLink = document.querySelector('[data-page="dashboard"]');
  const reportLink = document.querySelector('[data-page="report"]');

  if (posLink) posLink.href = isInsidePages ? "../index.html" : "index.html";
  if (historyLink) historyLink.href = isInsidePages ? "history.html" : "pages/history.html";
  if (dashboardLink) dashboardLink.href = isInsidePages ? "dashboard.html" : "pages/dashboard.html";
  if (reportLink) reportLink.href = isInsidePages ? "report.html" : "pages/report.html";
}

function setActiveMenu() {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".menu a").forEach(link => {
    link.classList.remove("active");
  });

  const posLink = document.querySelector('[data-page="pos"]');
  const historyLink = document.querySelector('[data-page="history"]');
  const dashboardLink = document.querySelector('[data-page="dashboard"]');
  const reportLink = document.querySelector('[data-page="report"]');

  if ((currentPath.endsWith("/") || currentPath.includes("index.html")) && posLink) {
    posLink.classList.add("active");
  }

  if (currentPath.includes("history.html") && historyLink) {
    historyLink.classList.add("active");
  }

  if (currentPath.includes("dashboard.html") && dashboardLink) {
    dashboardLink.classList.add("active");
  }

  if (currentPath.includes("report.html") && reportLink) {
    reportLink.classList.add("active");
  }
}
