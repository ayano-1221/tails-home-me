// =========================== 共通 ===========================

// -------------------- headerのスクロール時 --------------------

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

// -------------------- ハンバーガーメニュー --------------------
const menuBtn = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is_open');

  menuBtn.setAttribute('aria-expanded', isOpen);
});

// メニュー内のリンクを押したらメニューを閉じる
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is_open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});
