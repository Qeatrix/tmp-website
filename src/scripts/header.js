document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

  // Profile dropdown toggle + click-away
  const profileBtn = document.getElementById('profile-btn');
  const profileMenu = document.getElementById('profile-menu');

  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
      profileMenu.classList.add('hidden');
    }
  });

  const authedItems = document.querySelectorAll(".authed");
  const nonAuthedItems = document.querySelectorAll(".non-authed");

  const data = JSON.parse(localStorage.getItem("user")) || null;

  if (data) {
      nonAuthedItems.forEach((e) => {
          e.style.display = "none";
      })
  } else {
      authedItems.forEach((e) => {
          e.style.display = "none";
      })
  }

  document.getElementById("logout").addEventListener("mousedown", (event) => {
      console.log("asd");
      localStorage.removeItem("user");
      window.location.href = "../index.html";
  })

  document.querySelectorAll("#logout").forEach((e) => {
      e.addEventListener("mousedown", () => {
          console.log("asd");
          localStorage.removeItem("user");
          window.location.href = "../index.html";
      })
  })

  const fastlink = document.getElementById("fastlink");

  fastlink.style.cursor = "pointer";

  fastlink.addEventListener("mousedown", () => {
      window.location.href = "../index.html";
  })
});
