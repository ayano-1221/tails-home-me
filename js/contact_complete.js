// URLから入力内容を取得
const params = new URLSearchParams(location.search);

// 入力内容を取得
const name = params.get('name');
const kana = params.get('kana');
const tel = params.get('tel');
const email = params.get('email');
const number = params.get('人数');
const message = params.get('message');

// コンソールに表示
console.log('お名前：' + name);
console.log('ふりがな：' + kana);
console.log('電話番号：' + tel);
console.log('メールアドレス：' + email);
console.log('ご来場人数：' + number);
console.log('ご質問・ご相談：' + message);

// document.addEventListener('DOMContentLoaded', () => {
//   // ハンバーガーボタンを取得
//   const menuBtn = document.querySelector('.menu_btn');

//   // ナビゲーションを取得
//   const nav = document.querySelector('.nav');

//   // ボタンを押したとき
//   menuBtn.addEventListener('click', () => {
//     // メニューの開閉
//     nav.classList.toggle('is_open');

//     // 開閉状態を取得
//     const isOpen = nav.classList.contains('is_open');

//     // aria-expandedを更新
//     menuBtn.setAttribute('aria-expanded', isOpen);
//   });

//   // メニュー内のリンクを押したとき
//   nav.querySelectorAll('a').forEach((link) => {
//     link.addEventListener('click', () => {
//       nav.classList.remove('is_open');
//       menuBtn.setAttribute('aria-expanded', 'false');
//     });
//   });
// });
