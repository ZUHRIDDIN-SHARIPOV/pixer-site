const body = document.querySelector(".site-header__mobile");
const mobileList = document.querySelector(".site-header__mobile-list");
const menuBtn = document.querySelector(".site-header__menu-logo");
const closeBtn = document.querySelector(".site-header__close-logo");
menuBtn.addEventListener("click", () => {
  mobileList.classList.add("site-header__mobile-key");
  body.style.display = "inline-block";
});
closeBtn.addEventListener("click", () => {
  mobileList.classList.remove("site-header__mobile-key");
  body.style.display = "none";
});
body.addEventListener("click", () => {
  mobileList.classList.remove("site-header__mobile-key");
  body.style.display = "none";
});
