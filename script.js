"use strict";

const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

function menuBtnClick(e) {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function navItmClick(e) {
  e.preventDefault();
  const targetClass = e.target.href
    .substring(this.href.lastIndexOf("#"))
    .replace("#", ".");
  const scrollTarget = document.querySelector(targetClass);
  const topMargin = Number(
    (
      scrollTarget.currentStyle || window.getComputedStyle(scrollTarget)
    ).marginTop.replace("px", "")
  );
  const newTop =
    scrollTarget.getBoundingClientRect().top - headerHeight - topMargin;
  window.scrollBy({ top: newTop, behavior: "smooth" });
  menuBtn.classList.remove("active");
  navMenu.classList.remove("active");
}

document
  .querySelector(".menu-container")
  .addEventListener("click", menuBtnClick);

document
  .querySelectorAll(".nav-itm>a")
  .forEach((itm) => itm.addEventListener("click", navItmClick));
