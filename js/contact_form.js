document.addEventListener('DOMContentLoaded', () => {
  // フォームを取得
  const form = document.querySelector('form');

  // 必須項目を取得
  const requiredFields = form.querySelectorAll(
    '#name, #kana, #tel, #email, #人数',
  );

  // 入力内容をチェックする関数
  function validateForm() {
    let isValid = true;

    requiredFields.forEach((field) => {
      // 空欄の場合
      if (!field.value.trim()) {
        field.classList.add('error');
        isValid = false;
      } else {
        field.classList.remove('error');
      }
    });

    return isValid;
  }

  // 入力するたびに赤枠を解除・表示
  requiredFields.forEach((field) => {
    field.addEventListener('input', () => {
      if (field.value.trim()) {
        field.classList.remove('error');
      }
    });

    field.addEventListener('change', () => {
      if (field.value.trim()) {
        field.classList.remove('error');
      }
    });
  });

  // 予約ボタンを押したとき
  form.addEventListener('submit', (event) => {
    // ブラウザ標準の送信を一旦止める
    event.preventDefault();

    // 必須項目をチェック
    if (!validateForm()) {
      return;
    }

    // 予約完了ページへ移動
    window.location.href = 'contact_complete.html';
  });
});
// ==========================================================
// scriptjsから持ってきた
// ==========================================================

// document.addEventListener('DOMContentLoaded', () => {
//   // フォームとボタンを取得
//   const form = document.querySelector('form');
//   const button = form.querySelector('button[type="submit"]');

//   // 必須項目を取得
//   const requiredFields = form.querySelectorAll(
//     'input[required], select[required], textarea[required]'
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
// ==========================================================

// ここから下は動いている
// document.addEventListener('DOMContentLoaded', () => {
//   // ハンバーガーメニュー
//   const menuBtn = document.querySelector('.menu_btn');
//   const nav = document.querySelector('.nav');

//   menuBtn.addEventListener('click', () => {
//     nav.classList.toggle('is_open');

//     const isOpen = nav.classList.contains('is_open');

//     menuBtn.setAttribute('aria-expanded', isOpen);
//   });

//   // メニュー内のリンクを押したら閉じる
//   nav.querySelectorAll('a').forEach((link) => {
//     link.addEventListener('click', () => {
//       nav.classList.remove('is_open');
//       menuBtn.setAttribute('aria-expanded', 'false');
//     });
//   });
// });

// window.addEventListener('scroll', () => {
//   const header = document.querySelector('header');
//   if (window.scrollY > 50) {
//     header.classList.add('is-scrolled');
//   } else {
//     header.classList.remove('is-scrolled');
//   }
// });
