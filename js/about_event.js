// スライドショー
const track = document.querySelector('.transfermeeting_track');
const prevBtn = document.querySelector('.prev_left');
const nextBtn = document.querySelector('.prev_right');

if (track && prevBtn && nextBtn) {
  // 元の画像を取得
  const slides = Array.from(track.children);
  const slideCount = slides.length;

  // 最初と最後の画像を複製
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slideCount - 1].cloneNode(true);

  // 前後に複製を追加
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  // 最初の本物の画像からスタート
  let currentIndex = 1;
  let isSliding = false;

  track.style.transition = 'none';
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // 次のフレームでアニメーションを有効にする
  requestAnimationFrame(() => {
    track.style.transition = 'transform 0.5s ease';
  });

  // スライドを動かす
  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // 右ボタン
  nextBtn.addEventListener('click', () => {
    if (isSliding) return;

    isSliding = true;
    currentIndex++;
    updateSlider();
  });

  // 左ボタン
  prevBtn.addEventListener('click', () => {
    if (isSliding) return;

    isSliding = true;
    currentIndex--;
    updateSlider();
  });

  // スライドが終わったとき
  track.addEventListener('transitionend', (event) => {
    if (event.target !== track || event.propertyName !== 'transform') {
      return;
    }

    // 最後の複製に到達した場合
    if (currentIndex === slideCount + 1) {
      track.style.transition = 'none';
      currentIndex = 1;
      updateSlider();

      // 位置を確定してからアニメーションを戻す
      track.getBoundingClientRect();
      track.style.transition = 'transform 0.5s ease';
    }

    // 最初の複製に到達した場合
    if (currentIndex === 0) {
      track.style.transition = 'none';
      currentIndex = slideCount;
      updateSlider();

      track.getBoundingClientRect();
      track.style.transition = 'transform 0.5s ease';
    }

    isSliding = false;
  });
}
// FAQの項目をすべて取得
const faqItems = document.querySelectorAll('.faq_item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq_question');
  const answer = item.querySelector('.faq_answer');

  question.addEventListener('click', () => {
    // 現在開いているかを確認
    const isOpen = item.classList.contains('active');

    // activeクラスを切り替える
    item.classList.toggle('active', !isOpen);

    // 読み上げ用の開閉状態を更新
    question.setAttribute('aria-expanded', String(!isOpen));

    if (isOpen) {
      // 閉じる
      answer.style.height = '0px';
    } else {
      // 開く
      answer.style.height = answer.scrollHeight + 'px';
    }
  });
});
