document.addEventListener('DOMContentLoaded', () => {
  // フォームとボタンを取得
  const form = document.querySelector('form');
  const button = form.querySelector('button[type="submit"]');

  // 必須項目を取得
  const requiredFields = form.querySelectorAll(
    'input[required], select[required], textarea[required]',
  );

  // 入力内容をチェックする関数
  function validateForm() {
    let isValid = true;

    requiredFields.forEach((field) => {
      // 入力されていない場合
      if (!field.value.trim()) {
        field.classList.add('error');
        isValid = false;
      } else {
        field.classList.remove('error');
      }
    });

    // 全項目が正しければボタンを有効化
    button.disabled = !isValid;
  }

  // 最初はボタンを無効化
  button.disabled = true;

  // 入力するたびにチェック
  requiredFields.forEach((field) => {
    field.addEventListener('input', validateForm);
    field.addEventListener('change', validateForm);
  });

  // 送信時にもチェック
  form.addEventListener('submit', (event) => {
    validateForm();

    if (!form.checkValidity()) {
      event.preventDefault();
      return;
    }

    // 予約完了ページへ移動
    event.preventDefault();
    window.location.href = 'contact_complete.html';
  });
});
