// カードデータ
const cardData = {
    bones: [
        { name: "環椎 (Atlas)", image: "cards/b_atlas.png" },
        { name: "軸椎 (Axis)", image: "cards/b_axis.png" },
        { name: "鎖骨 (Clavicle)", image: "cards/b_clavicle.png" },
        { name: "尾骨 (Coccyx)", image: "cards/b_coccyx.png" },
        { name: "大腿骨 (Femur)", image: "cards/b_femur.png" },
        { name: "腓骨 (Fibula)", image: "cards/b_fibula.png" },
        { name: "上腕骨 (Humerus)", image: "cards/b_humerus.png" },
        { name: "舌骨 (Hyoid bone)", image: "cards/b_hyoid.png" },
        { name: "腸骨 (Ilium)", image: "cards/b_ilium.png" },
        { name: "坐骨 (Ischium)", image: "cards/b_ischium.png" },
        { name: "腰椎 (Lumbar vertebra)", image: "cards/b_lumbarvertebra.png" },
        { name: "下顎骨 (Mandible)", image: "cards/b_mandible.png" },
        { name: "恥骨 (Pubis)", image: "cards/b_pubis.png" },
        { name: "橈骨 (Radius)", image: "cards/b_radius.png" },
        { name: "肋骨 (Rib)", image: "cards/b_rib.png" },
        { name: "仙骨 (Sacrum)", image: "cards/b_sacrum.png" },
        { name: "肩甲骨 (Scapula)", image: "cards/b_scapula.png" },
        { name: "胸骨 (Sternum)", image: "cards/b_sternum.png" },
        { name: "側頭骨 (Temporal bone)", image: "cards/b_temporal.png" },
        { name: "胸椎 (Thoracic vertebra)", image: "cards/b_thoracicvertebra.png" },
        { name: "脛骨 (Tibia)", image: "cards/b_tibia.png" },
        { name: "尺骨 (Ulna)", image: "cards/b_ulna.png" }
    ],
    muscles: [
        { name: "三角筋 (Deltoid)", image: "cards/m_delt.png" },
        { name: "上腕三頭筋 (Triceps brachii)", image: "cards/m_tri_br.png" },
        { name: "上腕二頭筋 (Biceps brachii)", image: "cards/m_bi_br.png" },
        { name: "上腕筋 (Brachialis)", image: "cards/m_br.png" },
        { name: "腕橈骨筋 (Brachioradialis)", image: "cards/m_brachioradialis.png" },
        { name: "中殿筋 (Gluteus medius)", image: "cards/m_glu_med.png" },
        { name: "大殿筋 (Gluteus maximus)", image: "cards/m_glut_max.png" },
        { name: "小殿筋 (Gluteus minimus)", image: "cards/m_glut_min.png" },
        { name: "僧帽筋 (Trapezius)", image: "cards/m_trap.png" },
        { name: "内肋間筋 (Internal intercostal)", image: "cards/m_int_cost.png" },
        { name: "内腹斜筋 (Internal oblique)", image: "cards/m_int_obl.png" },
        { name: "内閉鎖筋 (Internal obturator)", image: "cards/m_int_obt.png" },
        { name: "前鋸筋 (Serratus anterior)", image: "cards/m_serr.png" },
        { name: "半腱様筋 (Semitendinosus)", image: "cards/m_semitend.png" },
        { name: "双子筋 (Gemelli)", image: "cards/m_gemelli.png" },
        { name: "外肋間筋 (External intercostal)", image: "cards/m_ext_cost.png" },
        { name: "外腹斜筋 (External oblique)", image: "cards/m_ext_obl.png" },
        { name: "外閉鎖筋 (External obturator)", image: "cards/m_ext_obt.png" },
        { name: "大腿二頭筋 (Biceps femoris)", image: "cards/m_bi_fem.png" },
        { name: "大腿四頭筋 (Quadriceps femoris)", image: "cards/m_quad_fem.png" },
        { name: "大胸筋 (Pectoralis major)", image: "cards/m_pect_mjr.png" },
        { name: "小胸筋 (Pectoralis minor)", image: "cards/m_pect_min.png" },
        { name: "広背筋 (Latissimus dorsi)", image: "cards/m_lat.png" },
        { name: "梨状筋 (Piriformis)", image: "cards/m_piri.png" },
        { name: "縫工筋 (Sartorius)", image: "cards/m_sart.png" },
        { name: "薄筋 (Gracilis)", image: "cards/m_grcl.png" },
        { name: "胸鎖乳突筋 (Sternocleidomastoid)", image: "cards/m_stclmt.png" },
        { name: "腹横筋 (Transversus abdominis)", image: "cards/m_trns_abd.png" },
        { name: "腓腹筋 (Gastrocnemius)", image: "cards/m_gastrocnemius.png" },
        { name: "ヒラメ筋 (Soleus)", image: "cards/m_soleus.png" },
        { name: "回外筋 (Supinator)", image: "cards/m_supinator.png" },
        { name: "円回内筋 (Pronator teres)", image: "cards/m_pron_teres.png" }
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
