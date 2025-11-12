// カードデータ（flashcardと同じ）
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

let quizCards = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let currentAnswer = null;
const TOTAL_QUESTIONS = 10;

// DOM要素
const categorySelect = document.getElementById('category');
const startBtn = document.getElementById('start');
const startScreen = document.getElementById('startScreen');
const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('resultContainer');
const questionImage = document.getElementById('questionImage');
const optionsContainer = document.getElementById('options');
const feedbackDiv = document.getElementById('feedback');
const feedbackText = document.getElementById('feedbackText');
const nextQuestionBtn = document.getElementById('nextQuestion');
const questionNumSpan = document.getElementById('questionNum');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const correctCountSpan = document.getElementById('correctCount');
const wrongCountSpan = document.getElementById('wrongCount');
const finalCorrectSpan = document.getElementById('finalCorrect');
const finalWrongSpan = document.getElementById('finalWrong');
const finalScoreSpan = document.getElementById('finalScore');
const retryBtn = document.getElementById('retry');
const changeCategoryBtn = document.getElementById('changeCategory');

// クイズ開始
function startQuiz() {
    const category = categorySelect.value;
    let allCards = [];
    
    if (category === 'all') {
        allCards = [...cardData.bones, ...cardData.muscles, ...cardData.nerves];
    } else if (category === 'bones') {
        allCards = [...cardData.bones];
    } else if (category === 'muscles') {
        allCards = [...cardData.muscles];
    } else if (category === 'nerves') {
        allCards = [...cardData.nerves];
    }
    
    // ランダムに10問選択
    quizCards = shuffleArray([...allCards]).slice(0, Math.min(TOTAL_QUESTIONS, allCards.length));
    
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    totalQuestionsSpan.textContent = quizCards.length;
    showQuestion();
}

// 配列をシャッフル
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 問題を表示
function showQuestion() {
    const question = quizCards[currentQuestionIndex];
    currentAnswer = question.name;
    
    questionImage.src = question.image;
    questionNumSpan.textContent = currentQuestionIndex + 1;
    correctCountSpan.textContent = correctCount;
    wrongCountSpan.textContent = wrongCount;
    
    // 選択肢を生成
    const options = generateOptions(question);
    displayOptions(options);
    
    feedbackDiv.style.display = 'none';
}

// 選択肢を生成（正解1つ + ランダム3つ）
function generateOptions(correctCard) {
    const category = categorySelect.value;
    let allCards = [];
    
    if (category === 'all') {
        allCards = [...cardData.bones, ...cardData.muscles, ...cardData.nerves];
    } else if (category === 'bones') {
        allCards = [...cardData.bones];
    } else if (category === 'muscles') {
        allCards = [...cardData.muscles];
    } else if (category === 'nerves') {
        allCards = [...cardData.nerves];
    }
    
    // 正解以外のカードを取得
    const wrongCards = allCards.filter(card => card.name !== correctCard.name);
    
    // ランダムに3つ選択
    const shuffledWrong = shuffleArray(wrongCards).slice(0, 3);
    
    // 正解を含めてシャッフル
    const options = shuffleArray([correctCard, ...shuffledWrong]);
    
    return options;
}

// 選択肢を表示
function displayOptions(options) {
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.name;
        button.addEventListener('click', () => checkAnswer(option.name, button));
        optionsContainer.appendChild(button);
    });
}

// 答えをチェック
function checkAnswer(selectedAnswer, button) {
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    if (selectedAnswer === currentAnswer) {
        // 正解
        button.classList.add('correct');
        correctCount++;
        feedbackDiv.className = 'feedback correct';
        feedbackText.textContent = '正解！';
    } else {
        // 不正解
        button.classList.add('wrong');
        wrongCount++;
        feedbackDiv.className = 'feedback wrong';
        feedbackText.textContent = `不正解... 正解は「${currentAnswer}」です`;
        
        // 正解の選択肢をハイライト
        allButtons.forEach(btn => {
            if (btn.textContent === currentAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    
    correctCountSpan.textContent = correctCount;
    wrongCountSpan.textContent = wrongCount;
    feedbackDiv.style.display = 'block';
}

// 次の問題へ
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizCards.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 結果を表示
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const score = Math.round((correctCount / quizCards.length) * 100);
    
    finalCorrectSpan.textContent = correctCount;
    finalWrongSpan.textContent = wrongCount;
    finalScoreSpan.textContent = score + '%';
}

// もう一度
function retry() {
    startQuiz();
}

// カテゴリー変更
function changeCategory() {
    startScreen.style.display = 'block';
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'none';
}

// イベントリスナー
startBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', retry);
changeCategoryBtn.addEventListener('click', changeCategory);
