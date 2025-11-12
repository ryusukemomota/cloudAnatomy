// カードデータ
const cardData = {
    bones: [
        { name: "環椎 (Atlas)", image: "cards/atlas.png" },
        { name: "軸椎 (Axis)", image: "cards/axis.png" },
        { name: "鎖骨 (Clavicle)", image: "cards/clavicle.png" },
        { name: "尾骨 (Coccyx)", image: "cards/coccyx.png" },
        { name: "大腿骨 (Femur)", image: "cards/femur.png" },
        { name: "上腕骨 (Humerus)", image: "cards/humerus.png" },
        { name: "舌骨 (Hyoid bone)", image: "cards/hyoid bone.png" },
        { name: "腸骨 (Ilium)", image: "cards/ilium.png" },
        { name: "坐骨 (Ischium)", image: "cards/ischium.png" },
        { name: "腰椎 (Lumbar vertebra)", image: "cards/lumbar vertebra.png" },
        { name: "下顎骨 (Mandible)", image: "cards/mandible.png" },
        { name: "恥骨 (Pubis)", image: "cards/pubis.png" },
        { name: "橈骨 (Radius)", image: "cards/radius.png" },
        { name: "肋骨 (Rib)", image: "cards/rib.png" },
        { name: "仙骨 (Sacrum)", image: "cards/sacrum.png" },
        { name: "肩甲骨 (Scapula)", image: "cards/scapula.png" },
        { name: "胸骨 (Sternum)", image: "cards/sternum.png" },
        { name: "側頭骨 (Temporal bone)", image: "cards/temporal bone.png" },
        { name: "胸椎 (Thoracic vertebra)", image: "cards/thoracic vertebra.png" },
        { name: "脛骨 (Tibia)", image: "cards/tibia.png" },
        { name: "尺骨 (Ulna)", image: "cards/ulna.png" }
    ],
    muscles: [
        { name: "三角筋", image: "cards/三角筋.png" },
        { name: "上腕三頭筋", image: "cards/上腕三頭筋.png" },
        { name: "上腕二頭筋", image: "cards/上腕二頭筋.png" },
        { name: "上腕筋", image: "cards/上腕筋.png" },
        { name: "中殿筋", image: "cards/中殿筋.png" },
        { name: "僧帽筋", image: "cards/僧帽筋.png" },
        { name: "内肋間筋", image: "cards/内肋間筋.png" },
        { name: "内腹斜筋", image: "cards/内腹斜筋.png" },
        { name: "内閉鎖筋", image: "cards/内閉鎖筋.png" },
        { name: "前鋸筋", image: "cards/前鋸筋.png" },
        { name: "半腱様筋", image: "cards/半腱様筋.png" },
        { name: "双子筋", image: "cards/双子筋.png" },
        { name: "外肋間筋", image: "cards/外肋間筋.png" },
        { name: "外腹斜筋", image: "cards/外腹斜筋.png" },
        { name: "外閉鎖筋", image: "cards/外閉鎖筋.png" },
        { name: "大内転筋", image: "cards/大内転筋.png" },
        { name: "大小円筋", image: "cards/大小円筋.png" },
        { name: "大小菱形筋", image: "cards/大小菱形筋.png" },
        { name: "大殿筋", image: "cards/大殿筋.png" },
        { name: "大胸筋", image: "cards/大胸筋.png" },
        { name: "大腿二頭筋", image: "cards/大腿二頭筋.png" },
        { name: "大腿四頭筋", image: "cards/大腿四頭筋.png" },
        { name: "小殿筋", image: "cards/小殿筋.png" },
        { name: "小胸筋", image: "cards/小胸筋.png" },
        { name: "広背筋", image: "cards/広背筋.png" },
        { name: "梨状筋", image: "cards/梨状筋.png" },
        { name: "棘上下筋", image: "cards/棘上下筋.png" },
        { name: "短内転筋", image: "cards/短内転筋.png" },
        { name: "縫工筋", image: "cards/縫工筋.png" },
        { name: "肩甲下筋", image: "cards/肩甲下筋.png" },
        { name: "肩甲挙筋", image: "cards/肩甲挙筋.png" },
        { name: "胸鎖乳突筋", image: "cards/胸鎖乳突筋.png" },
        { name: "腹横筋", image: "cards/腹横筋.png" },
        { name: "腹直筋", image: "cards/腹直筋.png" },
        { name: "薄筋", image: "cards/薄筋.png" },
        { name: "鎖骨下筋", image: "cards/鎖骨下筋.png" },
        { name: "長内転筋", image: "cards/長内転筋.png" }
    ],
    nerves: [
        { name: "腋窩神経 (Axillary nerve)", image: "cards/n_axillary.png" },
        { name: "大腿神経 (Femoral nerve)", image: "cards/n_femur.png" },
        { name: "下殿神経 (Inferior gluteal nerve)", image: "cards/n_inf_glu.png" },
        { name: "正中神経 (Median nerve)", image: "cards/n_median.png" },
        { name: "筋皮神経 (Musculocutaneous nerve)", image: "cards/n_muslocutaneous.png" },
        { name: "閉鎖神経 (Obturator nerve)", image: "cards/n_obturator.png" },
        { name: "橈骨神経 (Radial nerve)", image: "cards/n_radial.png" },
        { name: "坐骨神経 (Sciatic nerve)", image: "cards/n_sciatic.png" },
        { name: "上殿神経 (Superior gluteal nerve)", image: "cards/n_sup_glu.png" },
        { name: "尺骨神経 (Ulnar nerve)", image: "cards/n_ulnar.png" }
    ]
};

let currentCards = [];
let currentIndex = 0;

// DOM要素
const card = document.getElementById('card');
const cardName = document.getElementById('card-name');
const cardImage = document.getElementById('card-image');
const currentSpan = document.getElementById('current');
const totalSpan = document.getElementById('total');
const progressBar = document.getElementById('progress');
const categorySelect = document.getElementById('category');
const shuffleBtn = document.getElementById('shuffle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// 初期化
function init() {
    updateCardList();
    displayCard();
}

// カードリストを更新
function updateCardList() {
    const category = categorySelect.value;
    
    if (category === 'all') {
        currentCards = [...cardData.bones, ...cardData.muscles, ...cardData.nerves];
    } else if (category === 'bones') {
        currentCards = [...cardData.bones];
    } else if (category === 'muscles') {
        currentCards = [...cardData.muscles];
    } else if (category === 'nerves') {
        currentCards = [...cardData.nerves];
    }
    
    currentIndex = 0;
    totalSpan.textContent = currentCards.length;
    displayCard();
}

// カードを表示
function displayCard() {
    if (currentCards.length === 0) return;
    
    const currentCard = currentCards[currentIndex];
    cardName.textContent = currentCard.name;
    cardImage.src = currentCard.image;
    currentSpan.textContent = currentIndex + 1;
    
    // プログレスバー更新
    const progress = ((currentIndex + 1) / currentCards.length) * 100;
    progressBar.style.width = progress + '%';
    
    // カードを表に戻す
    card.classList.remove('flipped');
    
    // ナビゲーションボタンの状態を更新
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentCards.length - 1;
}

// カードをシャッフル
function shuffleCards() {
    for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
    }
    currentIndex = 0;
    displayCard();
}

// イベントリスナー
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

categorySelect.addEventListener('change', updateCardList);

shuffleBtn.addEventListener('click', shuffleCards);

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayCard();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < currentCards.length - 1) {
        currentIndex++;
        displayCard();
    }
});

// キーボード操作
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    } else if (e.key === ' ') {
        e.preventDefault();
        card.click();
    }
});

// 初期化実行
init();
