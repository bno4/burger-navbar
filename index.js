const links = document.querySelectorAll("nav li");
console.log(links);

const nav = document.querySelector("nav");
console.log(nav);
let lastScrollPosition = 0;

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > lastScrollPosition) {
    nav.style.top = "-60px";
    nav.style.opacity = "0";
  } else {
    nav.style.top = "0px";
    nav.style.opacity = "1";
  }
});
