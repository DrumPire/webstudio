'use strict';
const openBtn = document.querySelector(".button");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile");
const burgerBtn = document.querySelector(".burger");

const openMobileMenu = () => {
  mobileMenu.classList.add("is-open-menu");
}

const closeMobileMenu = () => {
  mobileMenu.classList.remove("is-open-menu");
}

const disabledScroll = () => {
  document.body.dataset.scrollY = window.scrollY;

  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      left:0;
      width:100%;
      overflow:hidden;
      height:100vh;
      padding-right: ${scrollWidth}px;
    `;
};

const enabledScroll = () => {
  document.body.style.cssText = "";
  window.scroll({
    top: document.body.dataset.scrollY,
  });
};

const openModal = () => {
  overlay.classList.add("is-open");
  disabledScroll();
}

const closeModal = () => {
  overlay.classList.remove("is-open");
  enabledScroll();
};

burgerBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);
openBtn.addEventListener('click', openModal);
overlay.addEventListener('click', e => {
  const target = e.target;

  if (
    target.classList.contains("overlay") ||
    target.classList.contains("close")
  ) {
    closeModal();
  }
})

