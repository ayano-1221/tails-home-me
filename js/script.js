// import { initFvSlider } from './top_page.js';
// import { initAboutusSlider } from './top_page.js';
// import { initFaq, initSlider } from './about_event.js';

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

// =========================== top_page import ===========================

// -------------------- fvスライダー --------------------

// initFvSlider();

// -------------------- aboutus スライダー --------------------

// initAboutusSlider();

// =========================== about_event import ===========================

// -------------------- インポート --------------------

// -------------------- 実行 --------------------
// initFaq();
// initSlider();

// =========================== contact_form import ===========================
// validation.jsから関数を持ってくる
// import { validateForm } from './validation.js';

// document.addEventListener('DOMContentLoaded', () => {
//   // フォームとボタンを取得
//   const form = document.querySelector('form');
//   const button = form.querySelector('button[type="submit"]');

//   // 必須項目を取得
//   const requiredFields = form.querySelectorAll(
//     'input[required], select[required], textarea[required]',
//   );

//   // 最初はボタンを無効化
//   button.disabled = true;

//   // 入力するたびにチェック
//   requiredFields.forEach((field) => {
//     field.addEventListener('input', () => {
//       validateForm(form, button, requiredFields);
//     });

//     field.addEventListener('change', () => {
//       validateForm(form, button, requiredFields);
//     });
//   });

//   // 送信時にもチェック
//   form.addEventListener('submit', (event) => {
//     validateForm(form, button, requiredFields);

//     if (!form.checkValidity()) {
//       event.preventDefault();
//       return;
//     }

//     // 予約完了ページへ移動
//     event.preventDefault();
//     window.location.href = 'contact_complete.html';
//   });
// });
