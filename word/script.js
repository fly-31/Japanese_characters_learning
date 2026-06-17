// ── Word Data ──────────────────────────────────────────────────────
// readings[]: accepted Korean phonetic spellings (first = canonical)
// meanings[]:  accepted Korean meanings (first = canonical)

const HIRAGANA_WORDS = [
    { word: 'まぶしい',   readings: ['마부시이'],        meanings: ['눈부시다'] },
    { word: 'たのしい',   readings: ['타노시이'],        meanings: ['즐겁다'] },
    { word: 'さむい',     readings: ['사무이'],          meanings: ['춥다'] },
    { word: 'あつい',     readings: ['아츠이'],          meanings: ['덥다', '뜨겁다'] },
    { word: 'おいしい',   readings: ['오이시이'],        meanings: ['맛있다'] },
    { word: 'むずかしい', readings: ['무즈카시이'],      meanings: ['어렵다'] },
    { word: 'やさしい',   readings: ['야사시이'],        meanings: ['친절하다', '쉽다'] },
    { word: 'うれしい',   readings: ['우레시이'],        meanings: ['기쁘다'] },
    { word: 'かなしい',   readings: ['카나시이'],        meanings: ['슬프다'] },
    { word: 'くらい',     readings: ['쿠라이'],          meanings: ['어둡다'] },
    { word: 'あかるい',   readings: ['아카루이'],        meanings: ['밝다'] },
    { word: 'ひろい',     readings: ['히로이'],          meanings: ['넓다'] },
    { word: 'せまい',     readings: ['세마이'],          meanings: ['좁다'] },
    { word: 'おおきい',   readings: ['오오키이'],        meanings: ['크다'] },
    { word: 'ちいさい',   readings: ['치이사이'],        meanings: ['작다'] },
    { word: 'ながい',     readings: ['나가이'],          meanings: ['길다'] },
    { word: 'みじかい',   readings: ['미지카이'],        meanings: ['짧다'] },
    { word: 'たかい',     readings: ['타카이'],          meanings: ['높다', '비싸다'] },
    { word: 'やすい',     readings: ['야스이'],          meanings: ['싸다', '쉽다'] },
    { word: 'はやい',     readings: ['하야이'],          meanings: ['빠르다'] },
    { word: 'おそい',     readings: ['오소이'],          meanings: ['느리다'] },
    { word: 'あたらしい', readings: ['아타라시이'],      meanings: ['새롭다'] },
    { word: 'ふるい',     readings: ['후루이'],          meanings: ['낡다', '오래되다'] },
    { word: 'わかい',     readings: ['와카이'],          meanings: ['젊다'] },
    { word: 'こわい',     readings: ['코와이'],          meanings: ['무섭다'] },
    { word: 'あぶない',   readings: ['아부나이'],        meanings: ['위험하다'] },
    { word: 'すごい',     readings: ['스고이'],          meanings: ['대단하다', '굉장하다'] },
    { word: 'かわいい',   readings: ['카와이이'],        meanings: ['귀엽다'] },
    { word: 'いたい',     readings: ['이타이'],          meanings: ['아프다'] },
    { word: 'ねむい',     readings: ['네무이'],          meanings: ['졸리다'] },
    { word: 'いそがしい', readings: ['이소가시이'],      meanings: ['바쁘다'] },
    { word: 'さびしい',   readings: ['사비시이'],        meanings: ['외롭다'] },
    { word: 'うるさい',   readings: ['우루사이'],        meanings: ['시끄럽다'] },
    { word: 'きれい',     readings: ['키레이'],          meanings: ['예쁘다', '깨끗하다'] },
    { word: 'はずかしい', readings: ['하즈카시이'],      meanings: ['부끄럽다'] },
    { word: 'つよい',     readings: ['츠요이'],          meanings: ['강하다'] },
    { word: 'よわい',     readings: ['요와이'],          meanings: ['약하다'] },
    { word: 'かるい',     readings: ['카루이'],          meanings: ['가볍다'] },
    { word: 'おもい',     readings: ['오모이'],          meanings: ['무겁다'] },
    { word: 'うつくしい', readings: ['우츠쿠시이'],      meanings: ['아름답다'] },
    { word: 'たべる',     readings: ['타베루'],          meanings: ['먹다'] },
    { word: 'のむ',       readings: ['노무'],            meanings: ['마시다'] },
    { word: 'みる',       readings: ['미루'],            meanings: ['보다'] },
    { word: 'きく',       readings: ['키쿠'],            meanings: ['듣다', '묻다'] },
    { word: 'はなす',     readings: ['하나스'],          meanings: ['이야기하다', '말하다'] },
    { word: 'かく',       readings: ['카쿠'],            meanings: ['쓰다'] },
    { word: 'よむ',       readings: ['요무'],            meanings: ['읽다'] },
    { word: 'かう',       readings: ['카우'],            meanings: ['사다'] },
    { word: 'いく',       readings: ['이쿠'],            meanings: ['가다'] },
    { word: 'くる',       readings: ['쿠루'],            meanings: ['오다'] },
    { word: 'かえる',     readings: ['카에루'],          meanings: ['돌아가다', '돌아오다'] },
    { word: 'おきる',     readings: ['오키루'],          meanings: ['일어나다'] },
    { word: 'ねる',       readings: ['네루'],            meanings: ['자다'] },
    { word: 'はたらく',   readings: ['하타라쿠'],        meanings: ['일하다'] },
    { word: 'まつ',       readings: ['마츠'],            meanings: ['기다리다'] },
];

const KATAKANA_WORDS = [
    { word: 'テレビ',         readings: ['테레비'],              meanings: ['텔레비전'] },
    { word: 'カメラ',         readings: ['카메라'],              meanings: ['카메라'] },
    { word: 'コーヒー',       readings: ['코오히이', '코히'],    meanings: ['커피'] },
    { word: 'パン',           readings: ['팡'],                  meanings: ['빵'] },
    { word: 'バス',           readings: ['바스'],                meanings: ['버스'] },
    { word: 'タクシー',       readings: ['타쿠시이', '타쿠시'],  meanings: ['택시'] },
    { word: 'ホテル',         readings: ['호테루'],              meanings: ['호텔'] },
    { word: 'レストラン',     readings: ['레스토랑'],            meanings: ['레스토랑', '식당'] },
    { word: 'スーパー',       readings: ['스우파아', '스파아'],  meanings: ['슈퍼마켓'] },
    { word: 'デパート',       readings: ['데파아토'],            meanings: ['백화점'] },
    { word: 'アパート',       readings: ['아파아토'],            meanings: ['아파트'] },
    { word: 'パソコン',       readings: ['파소콩'],              meanings: ['컴퓨터', 'PC'] },
    { word: 'スマホ',         readings: ['스마호'],              meanings: ['스마트폰'] },
    { word: 'インターネット', readings: ['인타아넷토'],          meanings: ['인터넷'] },
    { word: 'メール',         readings: ['메에루', '메루'],      meanings: ['메일', '이메일'] },
    { word: 'ゲーム',         readings: ['게에무', '게무'],      meanings: ['게임'] },
    { word: 'ニュース',       readings: ['뉴우스', '뉴스'],      meanings: ['뉴스'] },
    { word: 'スポーツ',       readings: ['스포오츠', '스포츠'],  meanings: ['스포츠'] },
    { word: 'サッカー',       readings: ['삭카아', '삿카'],      meanings: ['축구'] },
    { word: 'テニス',         readings: ['테니스'],              meanings: ['테니스'] },
    { word: 'プール',         readings: ['푸우루', '푸루'],      meanings: ['수영장'] },
    { word: 'ジム',           readings: ['지무'],                meanings: ['헬스장', '체육관'] },
    { word: 'コンビニ',       readings: ['콩비니'],              meanings: ['편의점'] },
    { word: 'ラーメン',       readings: ['라아멩', '라멘'],      meanings: ['라면'] },
    { word: 'ピザ',           readings: ['피자'],                meanings: ['피자'] },
    { word: 'ハンバーガー',   readings: ['함바아가아'],          meanings: ['햄버거'] },
    { word: 'アイスクリーム', readings: ['아이스쿠리이무'],      meanings: ['아이스크림'] },
    { word: 'チョコレート',   readings: ['쵸코레에토'],          meanings: ['초콜릿'] },
    { word: 'ジュース',       readings: ['쥬우스', '쥬스'],      meanings: ['주스'] },
    { word: 'ビール',         readings: ['비이루', '비루'],      meanings: ['맥주'] },
    { word: 'ワイン',         readings: ['와인'],                meanings: ['와인'] },
    { word: 'シャンプー',     readings: ['샴푸우', '샴푸'],      meanings: ['샴푸'] },
    { word: 'タオル',         readings: ['타오루'],              meanings: ['수건'] },
    { word: 'ソファ',         readings: ['소파'],                meanings: ['소파'] },
    { word: 'テーブル',       readings: ['테에부루', '테부루'],  meanings: ['테이블'] },
    { word: 'ベッド',         readings: ['벳도'],                meanings: ['침대'] },
    { word: 'ドア',           readings: ['도아'],                meanings: ['문'] },
    { word: 'バッグ',         readings: ['밧구'],                meanings: ['가방'] },
    { word: 'ジャケット',     readings: ['쟈켓토', '자켓토'],    meanings: ['재킷'] },
    { word: 'シャツ',         readings: ['샤츠'],                meanings: ['셔츠'] },
    { word: 'パンツ',         readings: ['팡츠'],                meanings: ['바지'] },
    { word: 'ドレス',         readings: ['도레스'],              meanings: ['드레스'] },
    { word: 'マフラー',       readings: ['마후라아', '마후라'],  meanings: ['목도리'] },
    { word: 'リュック',       readings: ['류쿠'],                meanings: ['백팩'] },
    { word: 'スニーカー',     readings: ['스니이카아', '스니카'], meanings: ['운동화'] },
    { word: 'ブーツ',         readings: ['부우츠', '부츠'],      meanings: ['부츠'] },
    { word: 'サンダル',       readings: ['산다루'],              meanings: ['샌들'] },
    { word: 'グラス',         readings: ['구라스'],              meanings: ['유리잔'] },
    { word: 'ボトル',         readings: ['보토루'],              meanings: ['병'] },
    { word: 'フォーク',       readings: ['포오쿠', '포크'],      meanings: ['포크'] },
    { word: 'スプーン',       readings: ['스푸운', '스푼'],      meanings: ['숟가락', '스푼'] },
    { word: 'ナイフ',         readings: ['나이후'],              meanings: ['칼', '나이프'] },
    { word: 'アルバイト',     readings: ['아루바이토'],          meanings: ['아르바이트'] },
    { word: 'チケット',       readings: ['치켓토'],              meanings: ['티켓'] },
    { word: 'ノート',         readings: ['노오토', '노토'],      meanings: ['노트'] },
    { word: 'アクセサリー',   readings: ['아쿠세사리이'],        meanings: ['액세서리'] },
];

const KANJI_WORDS = [
    { word: '日本',   readings: ['니혼'],          meanings: ['일본'] },
    { word: '学校',   readings: ['각코우'],        meanings: ['학교'] },
    { word: '先生',   readings: ['센세이'],        meanings: ['선생님'] },
    { word: '学生',   readings: ['각세이'],        meanings: ['학생'] },
    { word: '友達',   readings: ['토모다치'],      meanings: ['친구'] },
    { word: '家族',   readings: ['카조쿠'],        meanings: ['가족'] },
    { word: '父',     readings: ['치치'],          meanings: ['아버지'] },
    { word: '母',     readings: ['하하'],          meanings: ['어머니'] },
    { word: '兄',     readings: ['아니'],          meanings: ['형', '오빠'] },
    { word: '姉',     readings: ['아네'],          meanings: ['누나', '언니'] },
    { word: '弟',     readings: ['오토우토'],      meanings: ['남동생'] },
    { word: '妹',     readings: ['이모우토'],      meanings: ['여동생'] },
    { word: '時間',   readings: ['지캉'],          meanings: ['시간'] },
    { word: '今日',   readings: ['쿄우'],          meanings: ['오늘'] },
    { word: '明日',   readings: ['아시타'],        meanings: ['내일'] },
    { word: '昨日',   readings: ['키노우'],        meanings: ['어제'] },
    { word: '食べ物', readings: ['타베모노'],      meanings: ['음식'] },
    { word: '飲み物', readings: ['노미모노'],      meanings: ['음료'] },
    { word: '電車',   readings: ['덴샤'],          meanings: ['전철'] },
    { word: '車',     readings: ['쿠루마'],        meanings: ['자동차'] },
    { word: '自転車', readings: ['지텐샤'],        meanings: ['자전거'] },
    { word: '映画',   readings: ['에이가'],        meanings: ['영화'] },
    { word: '音楽',   readings: ['옹가쿠'],        meanings: ['음악'] },
    { word: '本',     readings: ['혼'],            meanings: ['책'] },
    { word: '新聞',   readings: ['심분', '신분'], meanings: ['신문'] },
    { word: '雑誌',   readings: ['잣시'],          meanings: ['잡지'] },
    { word: '病院',   readings: ['뵤우잉', '뵤잉'], meanings: ['병원'] },
    { word: '薬局',   readings: ['약쿄쿠'],        meanings: ['약국'] },
    { word: '銀行',   readings: ['긴코우'],        meanings: ['은행'] },
    { word: '図書館', readings: ['토쇼캉'],        meanings: ['도서관'] },
    { word: '駅',     readings: ['에키'],          meanings: ['역'] },
    { word: '空港',   readings: ['쿠우코우'],      meanings: ['공항'] },
    { word: '海',     readings: ['우미'],          meanings: ['바다'] },
    { word: '山',     readings: ['야마'],          meanings: ['산'] },
    { word: '川',     readings: ['카와'],          meanings: ['강'] },
    { word: '花',     readings: ['하나'],          meanings: ['꽃'] },
    { word: '木',     readings: ['키'],            meanings: ['나무'] },
    { word: '犬',     readings: ['이누'],          meanings: ['개'] },
    { word: '猫',     readings: ['네코'],          meanings: ['고양이'] },
    { word: '魚',     readings: ['사카나'],        meanings: ['물고기', '생선'] },
    { word: '水',     readings: ['미즈'],          meanings: ['물'] },
    { word: '火',     readings: ['히'],            meanings: ['불'] },
    { word: '仕事',   readings: ['시고토'],        meanings: ['일', '업무'] },
    { word: '会社',   readings: ['카이샤'],        meanings: ['회사'] },
    { word: '電話',   readings: ['덴와'],          meanings: ['전화'] },
    { word: '手紙',   readings: ['테가미'],        meanings: ['편지'] },
    { word: '言葉',   readings: ['코토바'],        meanings: ['말', '언어'] },
    { word: '気持ち', readings: ['키모치'],        meanings: ['기분', '마음'] },
    { word: '場所',   readings: ['바쇼'],          meanings: ['장소'] },
    { word: '天気',   readings: ['텡키'],          meanings: ['날씨'] },
    { word: '勉強',   readings: ['벵쿄우'],        meanings: ['공부'] },
    { word: '料理',   readings: ['료우리'],        meanings: ['요리'] },
    { word: '旅行',   readings: ['료코우'],        meanings: ['여행'] },
    { word: '休み',   readings: ['야스미'],        meanings: ['휴일', '휴식'] },
    { word: '生活',   readings: ['세이카츠'],      meanings: ['생활'] },
    { word: '世界',   readings: ['세카이'],        meanings: ['세계'] },
];

const POOLS = { hiragana: HIRAGANA_WORDS, katakana: KATAKANA_WORDS, kanji: KANJI_WORDS };

// ── State ──────────────────────────────────────────────────────────
const state = {
    category: 'hiragana',
    mode: 'reading',
    liveMode: true,
    testCount: 10,
    selectedWords: [],
};

// ── Utilities ──────────────────────────────────────────────────────
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function isReadingCorrect(word, answer) {
    return word.readings.includes(answer.trim());
}

function isMeaningCorrect(word, answer) {
    return word.meanings.map(m => m.trim()).includes(answer.trim());
}

// ── Screen Helper ──────────────────────────────────────────────────
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ── Setup Screen ───────────────────────────────────────────────────
function updateCountHint() {
    const max = POOLS[state.category].length;
    document.getElementById('count-hint').textContent = `(최대 ${max}개)`;
    document.getElementById('test-count').max = max;
}

document.querySelectorAll('.toggle-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn[data-category]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.category = btn.dataset.category;
        updateCountHint();
    });
});

document.querySelectorAll('.toggle-btn[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn[data-mode]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.mode = btn.dataset.mode;
    });
});

document.querySelectorAll('.toggle-btn[data-live]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn[data-live]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.liveMode = btn.dataset.live === 'on';
    });
});

document.getElementById('start-btn').addEventListener('click', () => {
    const pool = POOLS[state.category];
    const raw  = parseInt(document.getElementById('test-count').value) || 10;
    state.testCount    = Math.max(1, Math.min(raw, pool.length));
    state.selectedWords = shuffle(pool).slice(0, state.testCount);
    startPractice();
});

// ── Practice Screen ────────────────────────────────────────────────
function buildPracticeCard(word, index) {
    const card = document.createElement('div');
    card.className = 'word-card';
    card.dataset.index = index;

    const num = document.createElement('div');
    num.className = 'word-num';
    num.textContent = index + 1;

    const wordEl = document.createElement('div');
    wordEl.className = 'word-text';
    wordEl.textContent = word.word;

    const wrap = document.createElement('div');
    wrap.className = 'word-inputs-wrap';

    // Reading input row
    const readingRow = document.createElement('div');
    readingRow.className = 'input-row';
    const readingTag = document.createElement('span');
    readingTag.className = 'input-tag';
    readingTag.textContent = '발음';
    const readingInput = document.createElement('input');
    readingInput.type = 'text';
    readingInput.className = 'word-input reading-input';
    readingInput.placeholder = '한국어 발음…';
    readingInput.autocomplete = 'off';
    readingInput.spellcheck = false;
    readingInput.addEventListener('blur', () => liveCheck(card, index));
    readingInput.addEventListener('keydown', e => { if (e.key === 'Enter') readingInput.blur(); });
    readingRow.appendChild(readingTag);
    readingRow.appendChild(readingInput);
    wrap.appendChild(readingRow);

    // Meaning input row (only in both mode)
    if (state.mode === 'both') {
        const meaningRow = document.createElement('div');
        meaningRow.className = 'input-row';
        const meaningTag = document.createElement('span');
        meaningTag.className = 'input-tag';
        meaningTag.textContent = '의미';
        const meaningInput = document.createElement('input');
        meaningInput.type = 'text';
        meaningInput.className = 'word-input meaning-input';
        meaningInput.placeholder = '한국어 의미…';
        meaningInput.autocomplete = 'off';
        meaningInput.spellcheck = false;
        meaningInput.addEventListener('blur', () => liveCheck(card, index));
        meaningInput.addEventListener('keydown', e => { if (e.key === 'Enter') meaningInput.blur(); });
        meaningRow.appendChild(meaningTag);
        meaningRow.appendChild(meaningInput);
        wrap.appendChild(meaningRow);
    }

    card.appendChild(num);
    card.appendChild(wordEl);
    card.appendChild(wrap);
    return card;
}

// Live check: colour the card when user moves focus away
function liveCheck(card, index) {
    if (!state.liveMode) return;
    const word = state.selectedWords[index];
    const readingInput  = card.querySelector('.reading-input');
    const meaningInput  = card.querySelector('.meaning-input');

    const readingOk = readingInput && readingInput.value
        ? isReadingCorrect(word, readingInput.value)
        : null;
    const meaningOk = meaningInput && meaningInput.value
        ? isMeaningCorrect(word, meaningInput.value)
        : null;

    // Only colour if the user has filled something
    const hasReading = readingInput && readingInput.value.trim();
    const hasMeaning = meaningInput ? meaningInput.value.trim() : true;

    if (!hasReading) { card.classList.remove('correct', 'incorrect'); return; }

    const allFilled = hasReading && (state.mode === 'reading' || hasMeaning);
    const allCorrect = readingOk && (state.mode === 'reading' || meaningOk);

    if (allFilled) {
        card.classList.toggle('correct',   !!allCorrect);
        card.classList.toggle('incorrect', !allCorrect);
    } else {
        card.classList.remove('correct', 'incorrect');
    }
}

function startPractice() {
    const list = document.getElementById('words-list');
    list.innerHTML = '';
    state.selectedWords.forEach((word, i) => list.appendChild(buildPracticeCard(word, i)));

    const catLabels = { hiragana: '히라가나', katakana: '가타카나', kanji: '한자' };
    const modeLabel = state.mode === 'both' ? '발음 + 의미' : '발음만';
    document.getElementById('practice-title').textContent = `${catLabels[state.category]} · ${modeLabel}`;
    document.getElementById('word-count-label').textContent = `${state.selectedWords.length}개 단어`;

    showScreen('practice-screen');
    list.querySelector('.reading-input')?.focus();
}

document.getElementById('back-btn').addEventListener('click', () => showScreen('setup-screen'));

document.getElementById('check-btn').addEventListener('click', () => {
    const cards = document.querySelectorAll('#words-list .word-card');
    const answers = Array.from(cards).map(card => ({
        reading: card.querySelector('.reading-input')?.value.trim() || '',
        meaning: card.querySelector('.meaning-input')?.value.trim() || '',
    }));
    showResults(answers);
});

// ── Results Screen ─────────────────────────────────────────────────
function buildResultCard(word, answer, index) {
    const readingOk  = isReadingCorrect(word, answer.reading);
    const meaningOk  = state.mode === 'reading' ? true : isMeaningCorrect(word, answer.meaning);
    const allCorrect = readingOk && meaningOk;

    const card = document.createElement('div');
    card.className = `word-card ${allCorrect ? 'correct' : 'incorrect'}`;

    const num = document.createElement('div');
    num.className = 'word-num';
    num.textContent = index + 1;

    const wordEl = document.createElement('div');
    wordEl.className = 'word-text';
    wordEl.textContent = word.word;

    const wrap = document.createElement('div');
    wrap.className = 'word-inputs-wrap';

    // Reading result
    const readingRow = document.createElement('div');
    readingRow.className = 'input-row';
    const readingTag = document.createElement('span');
    readingTag.className = 'input-tag';
    readingTag.textContent = '발음';
    const readingInput = document.createElement('input');
    readingInput.type = 'text';
    readingInput.className = `word-input ${readingOk ? 'correct-input' : 'incorrect-input'}`;
    readingInput.value = answer.reading || '–';
    readingInput.readOnly = true;
    readingRow.appendChild(readingTag);
    readingRow.appendChild(readingInput);
    wrap.appendChild(readingRow);

    // Meaning result
    if (state.mode === 'both') {
        const meaningRow = document.createElement('div');
        meaningRow.className = 'input-row';
        const meaningTag = document.createElement('span');
        meaningTag.className = 'input-tag';
        meaningTag.textContent = '의미';
        const meaningInput = document.createElement('input');
        meaningInput.type = 'text';
        meaningInput.className = `word-input ${meaningOk ? 'correct-input' : 'incorrect-input'}`;
        meaningInput.value = answer.meaning || '–';
        meaningInput.readOnly = true;
        meaningRow.appendChild(meaningTag);
        meaningRow.appendChild(meaningInput);
        wrap.appendChild(meaningRow);
    }

    // Hint for incorrect answers
    const hint = document.createElement('div');
    hint.className = 'word-hint';
    const hintParts = [`발음: ${word.readings[0]}`];
    if (state.mode === 'both') hintParts.push(`의미: ${word.meanings[0]}`);
    hint.textContent = `정답 → ${hintParts.join(' / ')}`;
    wrap.appendChild(hint);

    card.appendChild(num);
    card.appendChild(wordEl);
    card.appendChild(wrap);
    return card;
}

function showResults(answers) {
    let correct = 0;
    const list = document.getElementById('results-list');
    list.innerHTML = '';

    state.selectedWords.forEach((word, i) => {
        const ans = answers[i] || { reading: '', meaning: '' };
        const readingOk = isReadingCorrect(word, ans.reading);
        const meaningOk = state.mode === 'reading' ? true : isMeaningCorrect(word, ans.meaning);
        if (readingOk && meaningOk) correct++;
        list.appendChild(buildResultCard(word, ans, i));
    });

    const total = state.selectedWords.length;
    const pct   = Math.round((correct / total) * 100);
    document.getElementById('score-display').innerHTML =
        `<span class="score">${correct} / ${total}</span>&nbsp;(${pct}%)`;

    showScreen('results-screen');
}

document.getElementById('retry-btn').addEventListener('click', () => {
    state.selectedWords = shuffle(state.selectedWords);
    startPractice();
});

document.getElementById('new-round-btn').addEventListener('click', () => showScreen('setup-screen'));

// ── Init ───────────────────────────────────────────────────────────
updateCountHint();
