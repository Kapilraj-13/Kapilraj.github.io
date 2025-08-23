// Welcome Message
console.log("Welcome to Kapilraj's Portfolio 🚀");

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Small effect: highlight header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(135deg, #111, #333)";
  } else {
    header.style.background = "linear-gradient(135deg, #222, #444)";
  }
});
