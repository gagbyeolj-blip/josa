'use strict';

const categories = [
  { name: '주격 조사', emoji: '🔵', hint: '예: 꽃이 핀다, 친구가 웃는다' },
  { name: '목적격 조사', emoji: '🟢', hint: '예: 책을 읽는다, 사과를 먹는다' },
  { name: '보격 조사', emoji: '🟣', hint: '예: 학생이 아니다, 학교가 아니다' },
  { name: '관형격 조사', emoji: '📘', hint: '예: 친구의 가방' },
  { name: '부사격 조사', emoji: '🟠', hint: '예: 학교에 간다, 집에서 공부한다' },
  { name: '호격 조사', emoji: '🩷', hint: '예: 철수야, 영희아' },
  { name: '서술격 조사', emoji: '🟤', hint: '예: 나는 학생이다' },
  { name: '보조사', emoji: '⭐', hint: '예: 오늘은, 나도, 너만' },
  { name: '접속 조사', emoji: '🔗', hint: '예: 엄마와 아빠, 책과 연필' }
];

// 문제를 추가하거나 수정하려면 이 배열만 바꾸면 됩니다.
// word: 화면에 표시할 조사 / example: 조사 포함 예문 / cat: 아래 조사 종류의 번호(0~8)
// 총 200문제. 같은 조사라도 예문에 따라 분류가 다를 수 있습니다.
const questions = [
  // 0: 주격 조사
  { word: "이", example: "꽃이 핀다", cat: 0 },
  { word: "이", example: "바람이 분다", cat: 0 },
  { word: "이", example: "달이 밝다", cat: 0 },
  { word: "이", example: "별이 반짝인다", cat: 0 },
  { word: "이", example: "봄이 왔다", cat: 0 },
  { word: "이", example: "문이 열린다", cat: 0 },
  { word: "이", example: "종이 울린다", cat: 0 },
  { word: "이", example: "구름이 흐른다", cat: 0 },
  { word: "가", example: "친구가 웃는다", cat: 0 },
  { word: "가", example: "엄마가 부른다", cat: 0 },
  { word: "가", example: "새가 날아간다", cat: 0 },
  { word: "가", example: "아이가 달린다", cat: 0 },
  { word: "가", example: "학교가 보인다", cat: 0 },
  { word: "가", example: "기차가 온다", cat: 0 },
  { word: "가", example: "나무가 자란다", cat: 0 },
  { word: "가", example: "노래가 들린다", cat: 0 },
  { word: "가", example: "해가 뜬다", cat: 0 },
  { word: "께서", example: "선생님께서 오신다", cat: 0 },
  { word: "께서", example: "할머니께서 웃으신다", cat: 0 },
  { word: "께서", example: "아버지께서 말씀하신다", cat: 0 },
  { word: "께서", example: "교수님께서 질문하신다", cat: 0 },
  { word: "께서", example: "할아버지께서 쉬신다", cat: 0 },
  // 1: 목적격 조사
  { word: "을", example: "책을 읽는다", cat: 1 },
  { word: "을", example: "물을 마신다", cat: 1 },
  { word: "을", example: "밥을 먹는다", cat: 1 },
  { word: "을", example: "길을 건넌다", cat: 1 },
  { word: "을", example: "문을 닫는다", cat: 1 },
  { word: "을", example: "옷을 입는다", cat: 1 },
  { word: "을", example: "산을 오른다", cat: 1 },
  { word: "을", example: "공을 던진다", cat: 1 },
  { word: "을", example: "손을 씻는다", cat: 1 },
  { word: "을", example: "꽃을 심는다", cat: 1 },
  { word: "를", example: "사과를 먹는다", cat: 1 },
  { word: "를", example: "친구를 만난다", cat: 1 },
  { word: "를", example: "숙제를 끝낸다", cat: 1 },
  { word: "를", example: "노래를 부른다", cat: 1 },
  { word: "를", example: "버스를 탄다", cat: 1 },
  { word: "를", example: "피자를 주문한다", cat: 1 },
  { word: "를", example: "우유를 마신다", cat: 1 },
  { word: "를", example: "편지를 쓴다", cat: 1 },
  { word: "를", example: "문제를 푼다", cat: 1 },
  { word: "를", example: "축구를 한다", cat: 1 },
  // 2: 보격 조사
  { word: "이", example: "그는 학생이 아니다", cat: 2 },
  { word: "이", example: "저것은 책이 아니다", cat: 2 },
  { word: "이", example: "여기는 집이 아니다", cat: 2 },
  { word: "이", example: "그 사람은 선생님이 아니다", cat: 2 },
  { word: "이", example: "이곳은 공원이 아니다", cat: 2 },
  { word: "이", example: "그건 내 물건이 아니다", cat: 2 },
  { word: "이", example: "이 동물은 사슴이 아니다", cat: 2 },
  { word: "이", example: "그녀는 의사 선생님이 아니다", cat: 2 },
  { word: "가", example: "여기가 학교가 아니다", cat: 2 },
  { word: "가", example: "저기는 바다가 아니다", cat: 2 },
  { word: "가", example: "그곳은 회사가 아니다", cat: 2 },
  { word: "가", example: "이것은 사과가 아니다", cat: 2 },
  { word: "가", example: "그 아이는 가수가 아니다", cat: 2 },
  { word: "가", example: "저것은 의자가 아니다", cat: 2 },
  // 3: 관형격 조사
  { word: "의", example: "친구의 가방", cat: 3 },
  { word: "의", example: "동생의 연필", cat: 3 },
  { word: "의", example: "학교의 역사", cat: 3 },
  { word: "의", example: "나라의 미래", cat: 3 },
  { word: "의", example: "가족의 사랑", cat: 3 },
  { word: "의", example: "나무의 잎", cat: 3 },
  { word: "의", example: "바다의 색", cat: 3 },
  { word: "의", example: "별의 빛", cat: 3 },
  { word: "의", example: "겨울의 밤", cat: 3 },
  { word: "의", example: "우리의 약속", cat: 3 },
  { word: "의", example: "서울의 거리", cat: 3 },
  { word: "의", example: "아이의 꿈", cat: 3 },
  { word: "의", example: "작가의 작품", cat: 3 },
  { word: "의", example: "마을의 축제", cat: 3 },
  { word: "의", example: "오늘의 날씨", cat: 3 },
  { word: "의", example: "도시의 풍경", cat: 3 },
  { word: "의", example: "고양이의 발자국", cat: 3 },
  { word: "의", example: "선생님의 책", cat: 3 },
  { word: "의", example: "강의 물결", cat: 3 },
  { word: "의", example: "봄의 향기", cat: 3 },
  { word: "의", example: "아버지의 안경", cat: 3 },
  { word: "의", example: "어머니의 편지", cat: 3 },
  // 4: 부사격 조사
  { word: "에", example: "학교에 간다", cat: 4 },
  { word: "에", example: "집에 돌아온다", cat: 4 },
  { word: "에", example: "책상에 놓는다", cat: 4 },
  { word: "에", example: "오후에 만난다", cat: 4 },
  { word: "에", example: "가을에 여행한다", cat: 4 },
  { word: "에", example: "벽에 붙인다", cat: 4 },
  { word: "에서", example: "집에서 공부한다", cat: 4 },
  { word: "에서", example: "운동장에서 달린다", cat: 4 },
  { word: "에서", example: "도서관에서 읽는다", cat: 4 },
  { word: "에서", example: "서울에서 산다", cat: 4 },
  { word: "에서", example: "회사에서 일한다", cat: 4 },
  { word: "에서", example: "공원에서 논다", cat: 4 },
  { word: "에게", example: "동생에게 준다", cat: 4 },
  { word: "에게", example: "친구에게 보낸다", cat: 4 },
  { word: "에게", example: "아이에게 가르친다", cat: 4 },
  { word: "에게", example: "학생에게 설명한다", cat: 4 },
  { word: "께", example: "할머니께 드린다", cat: 4 },
  { word: "께", example: "선생님께 여쭙는다", cat: 4 },
  { word: "께", example: "아버지께 편지를 쓴다", cat: 4 },
  { word: "로", example: "버스로 간다", cat: 4 },
  { word: "로", example: "연필로 쓴다", cat: 4 },
  { word: "로", example: "오른쪽으로 돈다", cat: 4 },
  { word: "로", example: "바닷가로 향한다", cat: 4 },
  { word: "으로", example: "산으로 간다", cat: 4 },
  { word: "으로", example: "손으로 만든다", cat: 4 },
  { word: "으로", example: "마음으로 응원한다", cat: 4 },
  { word: "와", example: "친구와 함께 간다", cat: 4 },
  { word: "와", example: "엄마와 함께 걷는다", cat: 4 },
  { word: "과", example: "형과 함께 일한다", cat: 4 },
  { word: "과", example: "선생님과 이야기한다", cat: 4 },
  { word: "부터", example: "아침부터 기다린다", cat: 4 },
  { word: "부터", example: "여기부터 출발한다", cat: 4 },
  { word: "까지", example: "서울까지 달린다", cat: 4 },
  { word: "까지", example: "밤까지 일한다", cat: 4 },
  { word: "처럼", example: "새처럼 날고 싶다", cat: 4 },
  { word: "처럼", example: "구름처럼 가볍다", cat: 4 },
  { word: "보다", example: "어제보다 춥다", cat: 4 },
  { word: "보다", example: "나보다 키가 크다", cat: 4 },
  // 5: 호격 조사
  { word: "야", example: "철수야, 이리 와!", cat: 5 },
  { word: "야", example: "민수야, 잠깐 봐!", cat: 5 },
  { word: "야", example: "지우야, 안녕!", cat: 5 },
  { word: "야", example: "유나야, 들어 봐!", cat: 5 },
  { word: "야", example: "수아야, 고마워!", cat: 5 },
  { word: "아", example: "정민아, 여기 앉아!", cat: 5 },
  { word: "아", example: "현준아, 같이 가자!", cat: 5 },
  { word: "아", example: "지훈아, 이쪽이야!", cat: 5 },
  { word: "아", example: "민준아, 준비됐니?", cat: 5 },
  { word: "이여", example: "조국이여, 영원하라!", cat: 5 },
  { word: "이여", example: "청춘이여, 빛나라!", cat: 5 },
  { word: "이여", example: "사랑이여, 함께하라!", cat: 5 },
  { word: "여", example: "그대여, 들으소서!", cat: 5 },
  { word: "여", example: "친구여, 힘을 내라!", cat: 5 },
  { word: "여", example: "바다여, 대답해 줘!", cat: 5 },
  { word: "여", example: "하늘이여, 도와주소서!", cat: 5 },
  // 6: 서술격 조사
  { word: "이다", example: "나는 학생이다", cat: 6 },
  { word: "이다", example: "그는 의사이다", cat: 6 },
  { word: "이다", example: "이것은 사과이다", cat: 6 },
  { word: "이다", example: "우리의 목표는 우승이다", cat: 6 },
  { word: "이다", example: "저 사람은 작가이다", cat: 6 },
  { word: "이다", example: "오늘은 휴일이다", cat: 6 },
  { word: "이다", example: "내 꿈은 개발자이다", cat: 6 },
  { word: "이다", example: "저곳은 도서관이다", cat: 6 },
  { word: "입니다", example: "저는 학생입니다", cat: 6 },
  { word: "입니다", example: "이것은 책입니다", cat: 6 },
  { word: "입니다", example: "그분은 선생님입니다", cat: 6 },
  { word: "입니다", example: "여기는 박물관입니다", cat: 6 },
  { word: "입니다", example: "제 취미는 독서입니다", cat: 6 },
  { word: "입니다", example: "오늘은 월요일입니다", cat: 6 },
  { word: "이었다", example: "어제는 휴일이었다", cat: 6 },
  { word: "이었다", example: "그는 예전에 선수이었다", cat: 6 },
  { word: "였다", example: "그날은 축제였다", cat: 6 },
  { word: "였다", example: "그는 작년에 가수였다", cat: 6 },
  // 7: 보조사
  { word: "은", example: "오늘은 맑다", cat: 7 },
  { word: "은", example: "책은 여기 있다", cat: 7 },
  { word: "은", example: "봄은 따뜻하다", cat: 7 },
  { word: "은", example: "이것은 내 것이다", cat: 7 },
  { word: "는", example: "나는 학생이다", cat: 7 },
  { word: "는", example: "친구는 늦었다", cat: 7 },
  { word: "는", example: "우리는 함께한다", cat: 7 },
  { word: "는", example: "사과는 맛있다", cat: 7 },
  { word: "는", example: "고양이는 귀엽다", cat: 7 },
  { word: "도", example: "나도 간다", cat: 7 },
  { word: "도", example: "친구도 온다", cat: 7 },
  { word: "도", example: "오늘도 공부한다", cat: 7 },
  { word: "도", example: "강아지도 잔다", cat: 7 },
  { word: "도", example: "이것도 좋다", cat: 7 },
  { word: "만", example: "너만 좋아", cat: 7 },
  { word: "만", example: "나만 남았다", cat: 7 },
  { word: "만", example: "물만 마신다", cat: 7 },
  { word: "만", example: "오늘만 쉰다", cat: 7 },
  { word: "만", example: "이것만 가져가", cat: 7 },
  { word: "까지", example: "너까지 왔구나", cat: 7 },
  { word: "까지", example: "나까지 불렀다", cat: 7 },
  { word: "까지", example: "그것까지 샀다", cat: 7 },
  { word: "까지", example: "동생까지 웃었다", cat: 7 },
  { word: "조차", example: "이름조차 모른다", cat: 7 },
  { word: "조차", example: "그것조차 어렵다", cat: 7 },
  { word: "조차", example: "친구조차 몰랐다", cat: 7 },
  { word: "마저", example: "마지막 희망마저 사라졌다", cat: 7 },
  { word: "마저", example: "친구마저 떠났다", cat: 7 },
  { word: "마저", example: "물마저 떨어졌다", cat: 7 },
  { word: "밖에", example: "물밖에 없다", cat: 7 },
  { word: "밖에", example: "나밖에 모른다", cat: 7 },
  { word: "밖에", example: "하나밖에 안 남았다", cat: 7 },
  { word: "뿐", example: "너뿐이다", cat: 7 },
  { word: "뿐", example: "기다릴 뿐이다", cat: 7 },
  { word: "뿐", example: "웃을 뿐이다", cat: 7 },
  { word: "이나", example: "사과나 먹자", cat: 7 },
  // 8: 접속 조사
  { word: "와", example: "엄마와 아빠", cat: 8 },
  { word: "와", example: "사과와 배", cat: 8 },
  { word: "와", example: "친구와 동생", cat: 8 },
  { word: "와", example: "고양이와 강아지", cat: 8 },
  { word: "과", example: "책과 연필", cat: 8 },
  { word: "과", example: "하늘과 땅", cat: 8 },
  { word: "과", example: "봄과 가을", cat: 8 },
  { word: "과", example: "산과 바다", cat: 8 },
  { word: "과", example: "형과 누나", cat: 8 },
  { word: "하고", example: "철수하고 영희", cat: 8 },
  { word: "하고", example: "엄마하고 아빠", cat: 8 },
  { word: "하고", example: "사과하고 배", cat: 8 },
  { word: "하고", example: "책하고 공책", cat: 8 },
  { word: "랑", example: "친구랑 동생", cat: 8 }
];

const $ = (selector) => document.querySelector(selector);
const scoreEl = $('#score');
const livesEl = $('#lives');
const bestEl = $('#best');
const messageEl = $('#message');
const gameArea = $('#gameArea');
const emptyState = $('#emptyState');
const startBtn = $('#startBtn');
const pauseBtn = $('#pauseBtn');
const dropZonesWrap = $('#dropZones');

let score = 0;
let lives = 3;
let best = Number(localStorage.getItem('josa-drag-best') || 0);
let playing = false;
let paused = false;
let animationId = null;
let lastTime = 0;
let spawnTimer = 0;
let nextId = 1;
let items = [];
let activeDrag = null;

bestEl.textContent = String(best);

categories.forEach((category, index) => {
  const zone = document.createElement('div');
  zone.className = 'drop-zone';
  zone.dataset.index = String(index);
  zone.innerHTML = `
    <span class="zone-emoji">${category.emoji}</span>
    <h3>${category.name}</h3>
    <p>${category.hint}</p>
  `;
  dropZonesWrap.appendChild(zone);
});

const zoneElements = [...document.querySelectorAll('.drop-zone')];

function updateHud() {
  scoreEl.textContent = String(score);
  livesEl.textContent = '❤️'.repeat(lives) + '🖤'.repeat(3 - lives);
  bestEl.textContent = String(best);
}

function setMessage(text) {
  messageEl.textContent = text;
}

function clearItems() {
  items.forEach(item => item.el.remove());
  items = [];
}

function startGame() {
  score = 0;
  lives = 3;
  playing = true;
  paused = false;
  spawnTimer = 0.6;
  nextId = 1;
  clearItems();
  emptyState.classList.add('hidden');
  startBtn.textContent = '다시 시작하기';
  pauseBtn.disabled = false;
  pauseBtn.textContent = '일시정지';
  updateHud();
  setMessage('떨어지는 조사를 드래그해서 맞는 조사 상자에 넣어 봐!');
  lastTime = performance.now();
  if (animationId) cancelAnimationFrame(animationId);
  animationId = requestAnimationFrame(gameLoop);
}

function endGame() {
  playing = false;
  paused = false;
  pauseBtn.disabled = true;
  pauseBtn.textContent = '일시정지';
  emptyState.classList.remove('hidden');
  setMessage(`게임 종료! 최종 점수 ${score}점 · 다시 시작해 볼래?`);
}

function togglePause() {
  if (!playing) return;
  paused = !paused;
  pauseBtn.textContent = paused ? '계속하기' : '일시정지';
  setMessage(paused ? '일시정지 중이야.' : '게임 재개!');
  lastTime = performance.now();
}

function spawnItem() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  const el = document.createElement('div');
  el.className = 'falling-item';
  el.innerHTML = `<span class="token">${q.word}</span><span class="example">${q.example}</span>`;
  gameArea.appendChild(el);

  const areaWidth = gameArea.clientWidth;
  const width = 96;
  const x = 20 + Math.random() * Math.max(40, areaWidth - width - 40);

  const item = {
    id: nextId++,
    q,
    el,
    x,
    y: -92,
    width,
    height: 92,
    vy: 72 + Math.min(score * 0.45, 110),
    dragging: false,
    pointerId: null,
    offsetX: 0,
    offsetY: 0,
  };

  positionItem(item);
  bindDrag(item);
  items.push(item);
}

function positionItem(item) {
  item.el.style.transform = `translate(${item.x}px, ${item.y}px)`;
}

function bindDrag(item) {
  item.el.addEventListener('pointerdown', (event) => {
    if (!playing || paused) return;
    item.dragging = true;
    activeDrag = item;
    item.pointerId = event.pointerId;
    const rect = item.el.getBoundingClientRect();
    item.el.style.transform = 'none';
    item.el.style.position = 'fixed';
    item.el.style.left = `${rect.left}px`;
    item.el.style.top = `${rect.top}px`;
    item.el.style.zIndex = '1000';
    document.body.appendChild(item.el);
    item.el.setPointerCapture(event.pointerId);
    item.el.classList.add('dragging');
    item.offsetX = event.clientX - rect.left;
    item.offsetY = event.clientY - rect.top;
    highlightZones(event.clientX, event.clientY);
  });

  item.el.addEventListener('pointermove', (event) => {
    if (!item.dragging || paused) return;
    item.el.style.left = `${event.clientX - item.offsetX}px`;
    item.el.style.top = `${event.clientY - item.offsetY}px`;
    highlightZones(event.clientX, event.clientY);
  });

  const release = (event) => {
    if (!item.dragging) return;
    item.dragging = false;
    item.el.classList.remove('dragging');
    item.el.releasePointerCapture?.(item.pointerId);
    handleDrop(item, event.clientX, event.clientY);
    if (items.includes(item)) restoreItem(item);
    clearZoneHighlights();
    activeDrag = null;
  };

  item.el.addEventListener('pointerup', release);
  item.el.addEventListener('pointercancel', () => {
    if (!item.dragging) return;
    item.dragging = false;
    item.el.classList.remove('dragging');
    restoreItem(item);
    clearZoneHighlights();
    activeDrag = null;
  });
}

function restoreItem(item) {
  const area = gameArea.getBoundingClientRect();
  const box = item.el.getBoundingClientRect();
  item.x = Math.max(0, Math.min(area.width - item.width, box.left - area.left));
  item.y = Math.max(0, Math.min(area.height - item.height, box.top - area.top));
  item.el.style.position = 'absolute';
  item.el.style.left = '0';
  item.el.style.top = '0';
  item.el.style.zIndex = '';
  gameArea.appendChild(item.el);
  positionItem(item);
}

function clampItemToArea(item) {
  const maxX = gameArea.clientWidth - item.width - 10;
  const maxY = gameArea.clientHeight - item.height - 10;
  item.x = Math.max(10, Math.min(maxX, item.x));
  item.y = Math.max(0, Math.min(maxY, item.y));
}

function highlightZones(clientX, clientY) {
  zoneElements.forEach(zone => {
    const rect = zone.getBoundingClientRect();
    const over = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    zone.classList.toggle('over', over);
  });
}

function clearZoneHighlights() {
  zoneElements.forEach(zone => zone.classList.remove('over'));
}

function flashZone(zone, className) {
  zone.classList.remove('correct-flash', 'wrong-flash');
  void zone.offsetWidth;
  zone.classList.add(className);
  setTimeout(() => zone.classList.remove(className), 420);
}

function removeItem(item) {
  item.el.remove();
  items = items.filter(candidate => candidate.id !== item.id);
}

function loseLife(reasonText) {
  lives -= 1;
  updateHud();
  setMessage(reasonText);
  if (lives <= 0) {
    endGame();
  }
}

function handleDrop(item, clientX, clientY) {
  const targetZone = zoneElements.find(zone => {
    const rect = zone.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });

  if (!targetZone) {
    return;
  }

  const zoneIndex = Number(targetZone.dataset.index);
  const correct = zoneIndex === item.q.cat;

  removeItem(item);

  if (correct) {
    score += 10;
    if (score > best) {
      best = score;
      localStorage.setItem('josa-drag-best', String(best));
    }
    updateHud();
    flashZone(targetZone, 'correct-flash');
    setMessage(`정답! “${item.q.word}” → ${categories[item.q.cat].name} (+10점)`);
  } else {
    flashZone(targetZone, 'wrong-flash');
    loseLife(`오답! “${item.q.word}”는 ${categories[item.q.cat].name} 이야.`);
  }
}

function missItem(item) {
  removeItem(item);
  loseLife(`놓쳤어! “${item.q.word}”는 ${categories[item.q.cat].name} 용례였어.`);
}

function updateItems(dt) {
  for (let i = items.length - 1; i >= 0; i -= 1) {
    const item = items[i];
    if (item.dragging) continue;

    item.y += item.vy * dt;
    positionItem(item);

    if (item.y >= gameArea.clientHeight - item.height) {
      missItem(item);
    }
  }
}

function gameLoop(now) {
  if (!playing) {
    animationId = null;
    return;
  }

  const dt = Math.min((now - lastTime) / 1000, 0.033);
  lastTime = now;

  if (!paused) {
    spawnTimer -= dt;
    if (spawnTimer <= 0) {
      spawnItem();
      spawnTimer = Math.max(1.2, 2.3 - score / 120);
    }
    updateItems(dt);
  }

  animationId = requestAnimationFrame(gameLoop);
}

startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', togglePause);

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    togglePause();
  }
});

window.addEventListener('blur', () => {
  if (playing && !paused) {
    togglePause();
  }
});

updateHud();
