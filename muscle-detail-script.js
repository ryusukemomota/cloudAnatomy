let muscleData = {};
let currentMuscles = [];
let currentIndex = 0;

// 画像ファイル名のマッピング（英語名から画像ファイルへ）
const imageMapping = {
    // 頭部・顔面の筋肉
    "Frontalis": "m_rccpps_mj.png",
    "Occipitalis": "m_oblcap_sup.png",
    
    // 頸部の筋肉
    "Sternocleidomastoid": "m_stclmt.png",
    "Trapezius": "m_trap.png",
    "Suprahyoid muscles": "m_geniohyoid.png",
    "Infrahyoid muscles": "m_sternohyoid.png",
    "Scalene muscles": "m_lev_scp.png",
    
    // 上肢の筋肉
    "Deltoid": "m_delt.png",
    "Supraspinatus": "m_spin.png",
    "Infraspinatus": "m_scp_inf.png",
    "Teres minor": "m_ters.png",
    "Teres major": "m_ters.png",
    "Subscapularis": "m_scp_inf.png",
    "Biceps brachii": "m_bi_br.png",
    "Triceps brachii": "m_tri_br.png",
    "Brachialis": "m_br.png",
    "Brachioradialis": "m_brachioradialis.png",
    "Pronator teres": "m_pron_teres.png",
    "Supinator": "m_supinator.png",
    
    // 体幹の筋肉
    "Pectoralis major": "m_pect_mjr.png",
    "Pectoralis minor": "m_pect_min.png",
    "Serratus anterior": "m_serr.png",
    "Intercostal muscles": "m_int_cost.png",
    "Rectus abdominis": "m_rct_abd.png",
    "External oblique": "m_ext_obl.png",
    "Internal oblique": "m_int_obl.png",
    "Transversus abdominis": "m_trns_abd.png",
    "Latissimus dorsi": "m_lat.png",
    "Erector spinae": "m_iliocostales.png",
    "Rhomboid major/minor": "m_rhombs.png",
    "Multifidus": "m_semispinalis.png",
    
    // 下肢の筋肉
    "Gluteus maximus": "m_glut_max.png",
    "Gluteus medius": "m_glu_med.png",
    "Gluteus minimus": "m_glut_min.png",
    "Rectus femoris": "m_rectcapi_lata.png",
    "Vastus lateralis": "m_quad_fem.png",
    "Vastus medialis": "m_quad_fem.png",
    "Vastus intermedius": "m_quad_fem.png",
    "Biceps femoris": "m_bi_fem.png",
    "Semimembranosus": "m_semitend.png",
    "Semitendinosus": "m_semitend.png",
    "Sartorius": "m_sart.png",
    "Gracilis": "m_grcl.png",
    "Gastrocnemius": "m_gastrocnemius.png",
    "Soleus": "m_soleus.png",
    "Tibialis anterior": "m_tibia_ant.png",
    "Extensor digitorum longus": "m_f_extdigi_long.png",
    "Extensor hallucis longus": "m_f_exthall_long.png",
    
    // その他
    "Piriformis": "m_piri.png",
    "Gemelli": "m_gemelli.png"
};

// DOM要素
const categorySelect = document.getElementById('category');
const shuffleBtn = document.getElementById('shuffle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentSpan = document.getElementById('current');
const totalSpan = document.getElementById('total');
const progressBar = document.getElementById('progress');
const muscleImage = document.getElementById('muscleImage');
const muscleName = document.getElementById('muscleName');
const originSpan = document.getElementById('origin');
const insertionSpan = document.getElementById('insertion');
const innervationSpan = document.getElementById('innervation');
const bloodSupplySpan = document.getElementById('bloodSupply');

// JSONデータを読み込み
async function loadMuscleData() {
    try {
        const response = await fetch('cards/all_body_muscles.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        muscleData = await response.json();
        console.log('筋肉データ読み込み成功:', Object.keys(muscleData));
        populateCategories();
    } catch (error) {
        console.error('データの読み込みに失敗しました:', error);
        alert('筋肉データの読み込みに失敗しました。ファイルパスを確認してください。');
    }
}

// カテゴリーセレクトボックスを設定
function populateCategories() {
    categorySelect.innerHTML = '<option value="">カテゴリーを選択</option>';
    Object.keys(muscleData).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// カテゴリー変更時
function updateMuscleList() {
    const category = categorySelect.value;
    console.log('選択されたカテゴリー:', category);
    
    if (!category) {
        currentMuscles = [];
        totalSpan.textContent = '0';
        currentSpan.textContent = '0';
        return;
    }
    
    currentMuscles = muscleData[category] || [];
    console.log('筋肉数:', currentMuscles.length);
    currentIndex = 0;
    totalSpan.textContent = currentMuscles.length;
    
    if (currentMuscles.length > 0) {
        displayMuscle();
    } else {
        console.warn('このカテゴリーには筋肉データがありません');
    }
}

// 筋肉情報を表示
function displayMuscle() {
    if (currentMuscles.length === 0) {
        console.log('表示する筋肉がありません');
        return;
    }
    
    const muscle = currentMuscles[currentIndex];
    console.log('表示中の筋肉:', muscle.name_jp, muscle.name_en);
    
    // 画像を設定（英語名でマッピング）
    const imageName = imageMapping[muscle.name_en];
    if (imageName) {
        muscleImage.src = `cards/${imageName}`;
        muscleImage.alt = muscle.name_jp;
        console.log('画像設定:', imageName);
    } else {
        muscleImage.src = '';
        muscleImage.alt = '画像なし';
        console.warn('画像が見つかりません:', muscle.name_en);
    }
    
    // 筋肉情報を表示
    muscleName.textContent = `${muscle.name_jp} (${muscle.name_en})`;
    originSpan.textContent = muscle.origin || '-';
    insertionSpan.textContent = muscle.insertion || '-';
    innervationSpan.textContent = muscle.innervation || '-';
    bloodSupplySpan.textContent = muscle.blood_supply || '-';
    
    // 進捗を更新
    currentSpan.textContent = currentIndex + 1;
    const progress = ((currentIndex + 1) / currentMuscles.length) * 100;
    progressBar.style.width = progress + '%';
    
    // ナビゲーションボタンの状態を更新
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentMuscles.length - 1;
}

// シャッフル
function shuffleMuscles() {
    if (currentMuscles.length === 0) return;
    
    for (let i = currentMuscles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentMuscles[i], currentMuscles[j]] = [currentMuscles[j], currentMuscles[i]];
    }
    currentIndex = 0;
    displayMuscle();
}

// イベントリスナー
categorySelect.addEventListener('change', updateMuscleList);
shuffleBtn.addEventListener('click', shuffleMuscles);

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayMuscle();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < currentMuscles.length - 1) {
        currentIndex++;
        displayMuscle();
    }
});

// キーボード操作
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// 初期化
loadMuscleData();
