// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

// Close side navigation
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// ✅ Contact Form: Send to Justin + Auto-Reply to User
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Send to Justin
  emailjs.sendForm('service_12ooit6', 'template_a93qb98', this)
    .then(function () {
      console.log("✅ Message sent to Justin.");
    }, function (error) {
      console.error("❌ Failed to send to Justin:", error);
    });

  // Auto-reply to user
  emailjs.sendForm('service_12ooit6', 'template_p0qp82f', this)
    .then(function () {
      alert("✅ Message sent! You'll receive a confirmation email.");
    }, function (error) {
      alert("❌ Auto-reply failed: " + error.text);
    });

  this.reset();
});
