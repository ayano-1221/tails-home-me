// -------------------- fvスライダー --------------------

export function initFvSlider() {
  const fv = document.querySelector('.fv');

  const fvImagesSp = [
    'images/fv_slider_01_sp.webp',
    'images/fv_slider_02_sp.webp',
    'images/fv_slider_03_sp.webp',
    'images/fv_slider_04_sp.webp',
    'images/fv_slider_05_sp.webp',
  ];

  const fvImagesPc = [
    'images/fv_slider_01_pc.webp',
    'images/fv_slider_02_pc.webp',
    'images/fv_slider_03_pc.webp',
    'images/fv_slider_04_pc.webp',
    'images/fv_slider_05_pc.webp',
  ];

  let currentIndex = 0;
  let isChanging = false;

  // フェード用の画像レイヤー
  const sliderLayer = document.createElement('div');

  Object.assign(sliderLayer.style, {
    position: 'absolute',
    inset: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0',
    transition: 'opacity 1s ease-in-out',
    pointerEvents: 'none',
    zIndex: '0',
  });

  fv.style.position = 'relative';
  fv.style.overflow = 'hidden';
  fv.appendChild(sliderLayer);

  // 文字を画像より前に表示
  Array.from(fv.children).forEach((child) => {
    if (child !== sliderLayer) {
      child.style.position = 'relative';
      child.style.zIndex = '1';
    }
  });

  // 画面幅に合わせた画像を取得
  function getFvImages() {
    return window.innerWidth >= 768 ? fvImagesPc : fvImagesSp;
  }

  // 画像を切り替える
  function changeFvImage() {
    if (isChanging) return;
    isChanging = true;

    const images = getFvImages();
    const nextIndex = (currentIndex + 1) % images.length;

    sliderLayer.style.backgroundImage = `url("${images[nextIndex]}")`;
    sliderLayer.style.opacity = '1';

    setTimeout(() => {
      currentIndex = nextIndex;
      fv.style.backgroundImage = `url("${images[currentIndex]}")`;
      sliderLayer.style.opacity = '0';
      isChanging = false;
    }, 1000);
  }

  // 初期画像を表示
  fv.style.backgroundImage = `url("${getFvImages()[0]}")`;

  // 画面幅がスマホ・PC間で変わったら画像をリセット
  let isPc = window.innerWidth >= 768;

  window.addEventListener('resize', () => {
    const nowPc = window.innerWidth >= 768;

    if (isPc !== nowPc) {
      isPc = nowPc;
      currentIndex = 0;
      sliderLayer.style.opacity = '0';
      sliderLayer.style.backgroundImage = 'none';
      fv.style.backgroundImage = `url("${getFvImages()[0]}")`;
    }
  });

  // 3秒ごとに切り替える
  setInterval(changeFvImage, 3000);
}

// -------------------- aboutus スライダー --------------------

export function initAboutusSlider() {
  const aboutusSlider = document.querySelector('.aboutus_slider');
  const aboutusMain = document.querySelector('.aboutus_main');

  // スライダーがないページでは処理を終了
  if (!aboutusSlider || !aboutusMain) return;

  let aboutusIndex = 0;
  const aboutusSlides = Array.from(aboutusSlider.children);
  const aboutusTotal = aboutusSlides.length;

  if (aboutusTotal === 0) return;

  // 最初の画像を複製して最後に追加
  const firstSlideClone = aboutusSlides[0].cloneNode(true);
  aboutusSlider.appendChild(firstSlideClone);

  // 親要素の設定
  aboutusMain.style.position = 'relative';
  aboutusMain.style.overflow = 'visible';

  // 画像を表示する範囲を作成
  const aboutusViewport = document.createElement('div');

  Object.assign(aboutusViewport.style, {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '64px',
  });

  // スライダーを表示範囲で囲む
  aboutusMain.insertBefore(aboutusViewport, aboutusSlider);
  aboutusViewport.appendChild(aboutusSlider);

  // スライダーの設定
  Object.assign(aboutusSlider.style, {
    display: 'flex',
    width: '100%',
    transition: 'transform 0.5s ease-in-out',
  });

  Array.from(aboutusSlider.children).forEach((slide) => {
    Object.assign(slide.style, {
      flex: '0 0 100%',
      width: '100%',
      boxSizing: 'border-box',
    });
  });

  // 矢印ボタンを作成
  function createAboutusArrow(className, symbol, label) {
    const button = document.createElement('button');

    button.className = className;
    button.type = 'button';
    button.innerHTML = symbol;
    button.setAttribute('aria-label', label);

    Object.assign(button.style, {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: '10',
      width: 'clamp(40px, 4vw, 64px)',
      height: 'clamp(40px, 4vw, 64px)',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
    });

    // 画像サイズ指定
    const img = button.querySelector('img');

    if (img) {
      Object.assign(img.style, {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      });
    }

    return button;
  }

  const aboutusNext = createAboutusArrow(
    'aboutus_next',
    '<img src="images/icon_arrow_circle_r.svg" alt="次の画像">',
    '次の画像',
  );

  const aboutusPrev = createAboutusArrow(
    'aboutus_prev',
    '<img src="images/icon_arrow_circle_l.svg" alt="前の画像">',
    '前の画像',
  );

  // 矢印を画像の外側に配置
  aboutusPrev.style.left = '0';
  aboutusNext.style.right = '0';

  aboutusMain.append(aboutusPrev, aboutusNext);

  // ---------- ドットの作成 ----------
  const aboutusDots = document.createElement('div');

  Object.assign(aboutusDots.style, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginTop: '24px',
  });

  // スライドの枚数分ドットを作成
  for (let i = 0; i < aboutusTotal; i++) {
    const dot = document.createElement('button');

    dot.type = 'button';
    dot.setAttribute('aria-label', `${i + 1}枚目の画像を表示`);

    Object.assign(dot.style, {
      width: '12px',
      height: '12px',
      padding: '0',
      border: 'none',
      borderRadius: '50%',
      backgroundColor: '#d8d8d8',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    });

    dot.addEventListener('click', () => {
      if (aboutusIndex >= aboutusTotal) return;
      if (aboutusIndex === i) return;

      aboutusIndex = i;
      moveAboutusSlider();
      updateAboutusDots();
    });

    aboutusDots.appendChild(dot);
  }

  // スライダーの下に配置
  aboutusMain.appendChild(aboutusDots);

  // ドットの色を更新
  function updateAboutusDots() {
    const dots = aboutusDots.querySelectorAll('button');

    dots.forEach((dot, index) => {
      dot.style.backgroundColor =
        index === aboutusIndex ? '#788a2e' : '#d8d8d8';
    });
  }

  // 初期表示
  updateAboutusDots();

  // スライドを移動
  function moveAboutusSlider() {
    aboutusSlider.style.transform = `translateX(-${aboutusIndex * 100}%)`;
  }

  // アニメーションなしで位置をリセット
  function resetAboutusSlider(index) {
    aboutusSlider.style.transition = 'none';
    aboutusIndex = index;
    moveAboutusSlider();

    // 位置の変更を反映してからアニメーションを戻す
    aboutusSlider.offsetHeight;
    aboutusSlider.style.transition = 'transform 0.5s ease-in-out';
  }

  // 次の画像
  aboutusNext.addEventListener('click', () => {
    if (aboutusIndex >= aboutusTotal) return;

    aboutusIndex++;
    moveAboutusSlider();
    updateAboutusDots();

    // 複製した1枚目から本来の1枚目へ戻す
    if (aboutusIndex === aboutusTotal) {
      aboutusSlider.addEventListener('transitionend', function reset() {
        aboutusSlider.removeEventListener('transitionend', reset);
        resetAboutusSlider(0);
        updateAboutusDots();
      });
    }
  });

  // 前の画像
  aboutusPrev.addEventListener('click', () => {
    if (aboutusIndex <= 0) {
      resetAboutusSlider(aboutusTotal);
    }

    aboutusIndex--;
    moveAboutusSlider();
    updateAboutusDots();
  });
}
