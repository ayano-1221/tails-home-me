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
