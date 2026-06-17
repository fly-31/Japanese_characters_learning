// ── Character Data ─────────────────────────────────────────────────

// Basic hiragana — 五十音 order, positions 1-46 → indices 0-45
const HIRAGANA = [
    { char: 'あ', korean: ['아'] }, { char: 'い', korean: ['이'] },
    { char: 'う', korean: ['우'] }, { char: 'え', korean: ['에'] },
    { char: 'お', korean: ['오'] },
    { char: 'か', korean: ['카'] }, { char: 'き', korean: ['키'] },
    { char: 'く', korean: ['쿠'] }, { char: 'け', korean: ['케'] },
    { char: 'こ', korean: ['코'] },
    { char: 'さ', korean: ['사'] }, { char: 'し', korean: ['시'] },
    { char: 'す', korean: ['스'] }, { char: 'せ', korean: ['세'] },
    { char: 'そ', korean: ['소'] },
    { char: 'た', korean: ['타'] }, { char: 'ち', korean: ['치'] },
    { char: 'つ', korean: ['츠'] }, { char: 'て', korean: ['테'] },
    { char: 'と', korean: ['토'] },
    { char: 'な', korean: ['나'] }, { char: 'に', korean: ['니'] },
    { char: 'ぬ', korean: ['누'] }, { char: 'ね', korean: ['네'] },
    { char: 'の', korean: ['노'] },
    { char: 'は', korean: ['하'] }, { char: 'ひ', korean: ['히'] },
    { char: 'ふ', korean: ['후', '푸'] }, { char: 'へ', korean: ['헤'] },
    { char: 'ほ', korean: ['호'] },
    { char: 'ま', korean: ['마'] }, { char: 'み', korean: ['미'] },
    { char: 'む', korean: ['무'] }, { char: 'め', korean: ['메'] },
    { char: 'も', korean: ['모'] },
    { char: 'や', korean: ['야'] }, { char: 'ゆ', korean: ['유'] },
    { char: 'よ', korean: ['요'] },
    { char: 'ら', korean: ['라'] }, { char: 'り', korean: ['리'] },
    { char: 'る', korean: ['루'] }, { char: 'れ', korean: ['레'] },
    { char: 'ろ', korean: ['로'] },
    { char: 'わ', korean: ['와'] }, { char: 'を', korean: ['워', '오'] },
    { char: 'ん', korean: ['응', '은'] },
];

// Basic katakana — same order
const KATAKANA = [
    { char: 'ア', korean: ['아'] }, { char: 'イ', korean: ['이'] },
    { char: 'ウ', korean: ['우'] }, { char: 'エ', korean: ['에'] },
    { char: 'オ', korean: ['오'] },
    { char: 'カ', korean: ['카'] }, { char: 'キ', korean: ['키'] },
    { char: 'ク', korean: ['쿠'] }, { char: 'ケ', korean: ['케'] },
    { char: 'コ', korean: ['코'] },
    { char: 'サ', korean: ['사'] }, { char: 'シ', korean: ['시'] },
    { char: 'ス', korean: ['스'] }, { char: 'セ', korean: ['세'] },
    { char: 'ソ', korean: ['소'] },
    { char: 'タ', korean: ['타'] }, { char: 'チ', korean: ['치'] },
    { char: 'ツ', korean: ['츠'] }, { char: 'テ', korean: ['테'] },
    { char: 'ト', korean: ['토'] },
    { char: 'ナ', korean: ['나'] }, { char: 'ニ', korean: ['니'] },
    { char: 'ヌ', korean: ['누'] }, { char: 'ネ', korean: ['네'] },
    { char: 'ノ', korean: ['노'] },
    { char: 'ハ', korean: ['하'] }, { char: 'ヒ', korean: ['히'] },
    { char: 'フ', korean: ['후', '푸'] }, { char: 'ヘ', korean: ['헤'] },
    { char: 'ホ', korean: ['호'] },
    { char: 'マ', korean: ['마'] }, { char: 'ミ', korean: ['미'] },
    { char: 'ム', korean: ['무'] }, { char: 'メ', korean: ['메'] },
    { char: 'モ', korean: ['모'] },
    { char: 'ヤ', korean: ['야'] }, { char: 'ユ', korean: ['유'] },
    { char: 'ヨ', korean: ['요'] },
    { char: 'ラ', korean: ['라'] }, { char: 'リ', korean: ['리'] },
    { char: 'ル', korean: ['루'] }, { char: 'レ', korean: ['레'] },
    { char: 'ロ', korean: ['로'] },
    { char: 'ワ', korean: ['와'] }, { char: 'ヲ', korean: ['워', '오'] },
    { char: 'ン', korean: ['응', '은'] },
];

// Dakuten (voiced) + Handakuten (semi-voiced) hiragana — 25 characters
const DAKUTEN_HIRAGANA = [
    // が行
    { char: 'が', korean: ['가'] }, { char: 'ぎ', korean: ['기'] },
    { char: 'ぐ', korean: ['구'] }, { char: 'げ', korean: ['게'] },
    { char: 'ご', korean: ['고'] },
    // ざ行
    { char: 'ざ', korean: ['자'] }, { char: 'じ', korean: ['지'] },
    { char: 'ず', korean: ['즈'] }, { char: 'ぜ', korean: ['제'] },
    { char: 'ぞ', korean: ['조'] },
    // だ行
    { char: 'だ', korean: ['다'] }, { char: 'ぢ', korean: ['지'] },
    { char: 'づ', korean: ['즈'] }, { char: 'で', korean: ['데'] },
    { char: 'ど', korean: ['도'] },
    // ば行
    { char: 'ば', korean: ['바'] }, { char: 'び', korean: ['비'] },
    { char: 'ぶ', korean: ['부'] }, { char: 'べ', korean: ['베'] },
    { char: 'ぼ', korean: ['보'] },
    // ぱ行 (半濁音)
    { char: 'ぱ', korean: ['파'] }, { char: 'ぴ', korean: ['피'] },
    { char: 'ぷ', korean: ['푸'] }, { char: 'ぺ', korean: ['페'] },
    { char: 'ぽ', korean: ['포'] },
];

// Dakuten katakana — 25 characters
const DAKUTEN_KATAKANA = [
    // ガ行
    { char: 'ガ', korean: ['가'] }, { char: 'ギ', korean: ['기'] },
    { char: 'グ', korean: ['구'] }, { char: 'ゲ', korean: ['게'] },
    { char: 'ゴ', korean: ['고'] },
    // ザ行
    { char: 'ザ', korean: ['자'] }, { char: 'ジ', korean: ['지'] },
    { char: 'ズ', korean: ['즈'] }, { char: 'ゼ', korean: ['제'] },
    { char: 'ゾ', korean: ['조'] },
    // ダ行
    { char: 'ダ', korean: ['다'] }, { char: 'ヂ', korean: ['지'] },
    { char: 'ヅ', korean: ['즈'] }, { char: 'デ', korean: ['데'] },
    { char: 'ド', korean: ['도'] },
    // バ行
    { char: 'バ', korean: ['바'] }, { char: 'ビ', korean: ['비'] },
    { char: 'ブ', korean: ['부'] }, { char: 'ベ', korean: ['베'] },
    { char: 'ボ', korean: ['보'] },
    // パ行
    { char: 'パ', korean: ['파'] }, { char: 'ピ', korean: ['피'] },
    { char: 'プ', korean: ['푸'] }, { char: 'ペ', korean: ['페'] },
    { char: 'ポ', korean: ['포'] },
];

// Yōon hiragana — 33 characters (21 basic + 12 voiced)
const YOUON_HIRAGANA = [
    // Basic yōon
    { char: 'きゃ', korean: ['캬'] }, { char: 'きゅ', korean: ['큐'] }, { char: 'きょ', korean: ['쿄'] },
    { char: 'しゃ', korean: ['샤'] }, { char: 'しゅ', korean: ['슈'] }, { char: 'しょ', korean: ['쇼'] },
    { char: 'ちゃ', korean: ['챠', '차'] }, { char: 'ちゅ', korean: ['츄', '추'] }, { char: 'ちょ', korean: ['쵸', '초'] },
    { char: 'にゃ', korean: ['냐'] }, { char: 'にゅ', korean: ['뉴'] }, { char: 'にょ', korean: ['뇨'] },
    { char: 'ひゃ', korean: ['햐'] }, { char: 'ひゅ', korean: ['휴'] }, { char: 'ひょ', korean: ['효'] },
    { char: 'みゃ', korean: ['먀'] }, { char: 'みゅ', korean: ['뮤'] }, { char: 'みょ', korean: ['묘'] },
    { char: 'りゃ', korean: ['랴'] }, { char: 'りゅ', korean: ['류'] }, { char: 'りょ', korean: ['료'] },
    // Voiced yōon
    { char: 'ぎゃ', korean: ['갸'] }, { char: 'ぎゅ', korean: ['규'] }, { char: 'ぎょ', korean: ['교'] },
    { char: 'じゃ', korean: ['쟈', '자'] }, { char: 'じゅ', korean: ['쥬', '주'] }, { char: 'じょ', korean: ['죠', '조'] },
    { char: 'びゃ', korean: ['뱌'] }, { char: 'びゅ', korean: ['뷰'] }, { char: 'びょ', korean: ['뵤'] },
    { char: 'ぴゃ', korean: ['퍄'] }, { char: 'ぴゅ', korean: ['퓨'] }, { char: 'ぴょ', korean: ['표'] },
];

// Yōon katakana — 33 characters
const YOUON_KATAKANA = [
    // Basic yōon
    { char: 'キャ', korean: ['캬'] }, { char: 'キュ', korean: ['큐'] }, { char: 'キョ', korean: ['쿄'] },
    { char: 'シャ', korean: ['샤'] }, { char: 'シュ', korean: ['슈'] }, { char: 'ショ', korean: ['쇼'] },
    { char: 'チャ', korean: ['챠', '차'] }, { char: 'チュ', korean: ['츄', '추'] }, { char: 'チョ', korean: ['쵸', '초'] },
    { char: 'ニャ', korean: ['냐'] }, { char: 'ニュ', korean: ['뉴'] }, { char: 'ニョ', korean: ['뇨'] },
    { char: 'ヒャ', korean: ['햐'] }, { char: 'ヒュ', korean: ['휴'] }, { char: 'ヒョ', korean: ['효'] },
    { char: 'ミャ', korean: ['먀'] }, { char: 'ミュ', korean: ['뮤'] }, { char: 'ミョ', korean: ['묘'] },
    { char: 'リャ', korean: ['랴'] }, { char: 'リュ', korean: ['류'] }, { char: 'リョ', korean: ['료'] },
    // Voiced yōon
    { char: 'ギャ', korean: ['갸'] }, { char: 'ギュ', korean: ['규'] }, { char: 'ギョ', korean: ['교'] },
    { char: 'ジャ', korean: ['쟈', '자'] }, { char: 'ジュ', korean: ['쥬', '주'] }, { char: 'ジョ', korean: ['죠', '조'] },
    { char: 'ビャ', korean: ['뱌'] }, { char: 'ビュ', korean: ['뷰'] }, { char: 'ビョ', korean: ['뵤'] },
    { char: 'ピャ', korean: ['퍄'] }, { char: 'ピュ', korean: ['퓨'] }, { char: 'ピョ', korean: ['표'] },
];

// ── App State ──────────────────────────────────────────────────────
const state = {
    charType: 'hiragana',
    from: 1,
    to: 20,
    liveMode: true,
    extras: { dakuten: false, youon: false },
    dakutenFrom: 1, dakutenTo: 25,
    youonFrom: 1,   youonTo: 33,
    testCount: 0,          // 0 = all
    selectedChars: [],
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

function buildPool() {
    const start = state.from - 1;
    const end   = state.to;
    let pool = [];

    // Basic range
    if (state.charType === 'hiragana' || state.charType === 'both')
        pool = pool.concat(HIRAGANA.slice(start, end));
    if (state.charType === 'katakana' || state.charType === 'both')
        pool = pool.concat(KATAKANA.slice(start, end));

    // Dakuten / handakuten
    if (state.extras.dakuten) {
        const ds = state.dakutenFrom - 1, de = state.dakutenTo;
        if (state.charType === 'hiragana' || state.charType === 'both')
            pool = pool.concat(DAKUTEN_HIRAGANA.slice(ds, de));
        if (state.charType === 'katakana' || state.charType === 'both')
            pool = pool.concat(DAKUTEN_KATAKANA.slice(ds, de));
    }

    // Yōon (basic + voiced compounds)
    if (state.extras.youon) {
        const ys = state.youonFrom - 1, ye = state.youonTo;
        if (state.charType === 'hiragana' || state.charType === 'both')
            pool = pool.concat(YOUON_HIRAGANA.slice(ys, ye));
        if (state.charType === 'katakana' || state.charType === 'both')
            pool = pool.concat(YOUON_KATAKANA.slice(ys, ye));
    }

    const shuffled = shuffle(pool);
    // If a specific test count is set, randomly pick that many from the full pool
    if (state.testCount > 0 && state.testCount < shuffled.length) {
        return shuffled.slice(0, state.testCount);
    }
    return shuffled;
}

function isCorrect(item, typedChar) {
    return item.korean.includes(typedChar);
}

// ── Screen Helper ──────────────────────────────────────────────────
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ── Setup Screen ───────────────────────────────────────────────────
function updateRangePreview() {
    const from  = parseInt(document.getElementById('range-from').value) || 1;
    const to    = parseInt(document.getElementById('range-to').value)   || 1;
    const multi = state.charType === 'both' ? 2 : 1;
    const el    = document.getElementById('range-preview');

    if (from > to || from < 1 || to > 46) {
        el.textContent = '⚠ 올바른 범위를 입력해 주세요 (1–46, 시작 ≤ 끝)';
        el.style.color = '#ef4444';
        // Update test-count max to 1 as a safe fallback
        document.getElementById('test-count').max = 1;
        return;
    }

    let total = (to - from + 1) * multi;
    if (state.extras.dakuten) {
        const df = parseInt(document.getElementById('dakuten-from').value) || 1;
        const dt = parseInt(document.getElementById('dakuten-to').value)   || 1;
        total += Math.max(0, dt - df + 1) * multi;
    }
    if (state.extras.youon) {
        const yf = parseInt(document.getElementById('youon-from').value) || 1;
        const yt = parseInt(document.getElementById('youon-to').value)   || 1;
        total += Math.max(0, yt - yf + 1) * multi;
    }

    // Keep test-count max in sync
    const tcInput = document.getElementById('test-count');
    tcInput.max = total;

    const tc = parseInt(tcInput.value) || 0;
    if (tc > 0 && tc < total) {
        el.textContent = `총 ${total}개 중 ${tc}개 무작위 출제`;
    } else {
        el.textContent = `총 ${total}개 문자 연습`;
    }
    el.style.color = '';
}

// Character type (radio)
document.querySelectorAll('.toggle-btn[data-type]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn[data-type]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.charType = btn.dataset.type;
        updateRangePreview();
    });
});

// Live mode (radio)
document.querySelectorAll('.toggle-btn[data-live]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn[data-live]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.liveMode = btn.dataset.live === 'on';
    });
});

// Extra characters (multi-select — each toggles independently)
document.querySelectorAll('.extra-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const extra = btn.dataset.extra;
        state.extras[extra] = btn.classList.contains('active');
        document.getElementById(`${extra}-range`).classList.toggle('visible', state.extras[extra]);
        updateRangePreview();
    });
});

['range-from', 'range-to', 'test-count', 'dakuten-from', 'dakuten-to', 'youon-from', 'youon-to'].forEach(id =>
    document.getElementById(id).addEventListener('input', updateRangePreview)
);

document.getElementById('start-btn').addEventListener('click', () => {
    const from = parseInt(document.getElementById('range-from').value);
    const to   = parseInt(document.getElementById('range-to').value);
    if (isNaN(from) || isNaN(to) || from < 1 || to > 46 || from > to) {
        alert('올바른 범위를 입력해 주세요 (1–46, 시작 ≤ 끝)');
        return;
    }
    if (state.extras.dakuten) {
        const df = parseInt(document.getElementById('dakuten-from').value);
        const dt = parseInt(document.getElementById('dakuten-to').value);
        if (isNaN(df) || isNaN(dt) || df < 1 || dt > 25 || df > dt) {
            alert('올바른 탁음 범위를 입력해 주세요 (1–25, 시작 ≤ 끝)');
            return;
        }
        state.dakutenFrom = df;
        state.dakutenTo   = dt;
    }
    if (state.extras.youon) {
        const yf = parseInt(document.getElementById('youon-from').value);
        const yt = parseInt(document.getElementById('youon-to').value);
        if (isNaN(yf) || isNaN(yt) || yf < 1 || yt > 33 || yf > yt) {
            alert('올바른 요음 범위를 입력해 주세요 (1–33, 시작 ≤ 끝)');
            return;
        }
        state.youonFrom = yf;
        state.youonTo   = yt;
    }
    state.from      = from;
    state.to        = to;
    state.testCount = parseInt(document.getElementById('test-count').value) || 0;
    startPractice();
});

// ── Practice Screen ────────────────────────────────────────────────
function buildPracticeCard(item) {
    const card = document.createElement('div');
    // compound characters (yōon) need smaller font
    card.className = item.char.length > 1 ? 'char-card compound' : 'char-card';

    const charEl = document.createElement('div');
    charEl.className = 'japanese-char';
    charEl.textContent = item.char;

    const typedEl = document.createElement('div');
    typedEl.className = 'typed-char';

    card.appendChild(charEl);
    card.appendChild(typedEl);
    return card;
}

function renderPracticeCards() {
    const row = document.getElementById('chars-row');
    row.innerHTML = '';
    state.selectedChars.forEach(item => row.appendChild(buildPracticeCard(item)));
    updateCardHighlights('');
}

// Update card colours based on what's been typed.
// composing = true means IME is mid-syllable → don't finalise the last position yet.
function updateCardHighlights(value, composing = false) {
    const cards  = document.querySelectorAll('#chars-row .char-card');
    const len    = value.length;
    const active = composing ? len - 1 : len;

    cards.forEach((card, i) => {
        const typedEl = card.querySelector('.typed-char');
        // keep compound class, reset state classes
        card.classList.remove('active', 'correct', 'incorrect', 'pending');

        if (i < len && !(composing && i === len - 1)) {
            const typed   = value[i];
            const correct = isCorrect(state.selectedChars[i], typed);
            card.classList.add(state.liveMode ? (correct ? 'correct' : 'incorrect') : 'pending');
            typedEl.textContent = typed;
        } else if (i === active) {
            card.classList.add('active');
            typedEl.textContent = (composing && i === len - 1) ? value[i] : '';
        } else {
            card.classList.add('pending');
            typedEl.textContent = '';
        }
    });
}

function startPractice() {
    state.selectedChars = buildPool();
    renderPracticeCards();

    const typeLabels = { hiragana: '히라가나', katakana: '가타카나', both: '히라가나 + 가타카나' };
    const extras = [];
    if (state.extras.dakuten) extras.push('탁음');
    if (state.extras.youon)   extras.push('요음');
    const extraStr = extras.length ? ` + ${extras.join(' + ')}` : '';
    document.getElementById('practice-title').textContent = typeLabels[state.charType] + extraStr;
    const base = `기본 ${state.from}~${state.to}번`;
    const subset = state.testCount > 0
        ? `${state.selectedChars.length}개 무작위 출제`
        : `${state.selectedChars.length}개 · ${base}`;
    document.getElementById('char-count').textContent = subset;

    const input = document.getElementById('typing-input');
    input.value = '';
    showScreen('practice-screen');
    input.focus();
}

// IME composition tracking
let composing = false;
const typingInput = document.getElementById('typing-input');

typingInput.addEventListener('compositionstart', () => { composing = true; });

typingInput.addEventListener('compositionend', () => {
    composing = false;
    if (typingInput.value.length > state.selectedChars.length)
        typingInput.value = typingInput.value.slice(0, state.selectedChars.length);
    updateCardHighlights(typingInput.value, false);
});

typingInput.addEventListener('input', () => {
    if (!composing && typingInput.value.length > state.selectedChars.length)
        typingInput.value = typingInput.value.slice(0, state.selectedChars.length);
    updateCardHighlights(typingInput.value, composing);
});

typingInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('check-btn').click();
});

document.getElementById('back-btn').addEventListener('click', () => showScreen('setup-screen'));

document.getElementById('reshuffle-btn').addEventListener('click', () => {
    state.selectedChars = shuffle(state.selectedChars);
    renderPracticeCards();
    typingInput.value = '';
    typingInput.focus();
});

document.getElementById('check-btn').addEventListener('click', () => {
    showResults(typingInput.value);
});

// ── Results Screen ─────────────────────────────────────────────────
function buildResultCard(item, typedChar) {
    const correct = isCorrect(item, typedChar);

    const card = document.createElement('div');
    card.className = `char-card ${item.char.length > 1 ? 'compound ' : ''}${correct ? 'correct' : 'incorrect'}`;

    const charEl = document.createElement('div');
    charEl.className = 'japanese-char';
    charEl.textContent = item.char;

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.className = `char-input ${correct ? 'correct-input' : 'incorrect-input'}`;
    answerInput.value = typedChar || '–';
    answerInput.readOnly = true;

    const hint = document.createElement('div');
    hint.className = 'correct-answer';
    hint.textContent = `정답: ${item.korean[0]}`;

    card.appendChild(charEl);
    card.appendChild(answerInput);
    card.appendChild(hint);
    return card;
}

function showResults(typedValue) {
    let correct = 0;
    const grid = document.getElementById('results-grid');
    grid.innerHTML = '';

    state.selectedChars.forEach((item, i) => {
        const ch = typedValue[i] || '';
        if (isCorrect(item, ch)) correct++;
        grid.appendChild(buildResultCard(item, ch));
    });

    const total = state.selectedChars.length;
    const pct   = Math.round((correct / total) * 100);
    document.getElementById('score-display').innerHTML =
        `<span class="score">${correct} / ${total}</span>&nbsp;(${pct}%)`;

    showScreen('results-screen');
}

document.getElementById('retry-btn').addEventListener('click', () => {
    state.selectedChars = shuffle(state.selectedChars);
    renderPracticeCards();
    typingInput.value = '';
    showScreen('practice-screen');
    typingInput.focus();
});

document.getElementById('new-round-btn').addEventListener('click', () => showScreen('setup-screen'));

// ── Init ───────────────────────────────────────────────────────────
updateRangePreview();
