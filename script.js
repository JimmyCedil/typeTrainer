/**
 * content.js — Practice text library
 * Each category contains pools of paragraphs (~250 chars each).
 * Pages are assembled by picking paragraphs until the char target is met.
 * One "page" ≈ 1,500 characters (roughly a printed page at 12pt).
 */
 
const CHARS_PER_PAGE = 1500;
 
const CONTENT = {
 
  /* ── General English ──────────────────────────────── */
  general: [
    "The art of writing well begins with patience. Before a single word is placed on the page, a writer must first learn to listen — to the rhythm of language, to the silence between ideas, to the weight that each syllable carries in the mind of the reader.",
    "Autumn arrives without announcement. One morning the air is simply different, carrying with it the scent of woodsmoke and the faint sweetness of fallen leaves. The trees, as if on some ancient signal, begin to turn their coats from green to gold.",
    "In a small workshop at the edge of town, a craftsman spent his mornings sharpening tools that had belonged to his father. Each blade held a story, and he believed that the care given to instruments was the care given to the work itself.",
    "Good habits are the quiet architecture of a meaningful life. They do not announce themselves with fanfare, but build, stone by stone, the structure within which every great ambition eventually finds its footing.",
    "The library was the one place in the city where time moved differently. Visitors arrived hurried and left somehow slower, as if the accumulated weight of all those words had pressed the urgency out of their schedules.",
    "Stars are patient teachers. They have been telling the same story for billions of years and do not mind if we are slow to understand. Each night they lay out the same lesson, and each night we have another chance to finally listen.",
    "She learned to bake bread from her grandmother, who had learned from hers. The recipe was never written down. It lived instead in the hands — in the way the dough should feel when the gluten has developed, in the color the crust turns just before it is ready.",
    "Mountains teach us about perspective. From the valley, they seem impossibly vast and permanent. From their peaks, the valley you came from looks small and manageable, and the horizon suddenly includes possibilities you could not see from below.",
    "Every morning the fisherman rose before the sun and walked the same path to the harbor. The ritual was not about fish. It was about being the kind of person who showed up, regardless of what the day might return.",
    "Language is the house we live in. Its rooms expand or contract depending on the words we know. To learn a new word is to discover a door that was always there but which, until now, we could not open.",
    "The mind, like a garden, produces what we tend to. Plant questions and you grow curiosity. Plant attention and you grow clarity. Leave it untended and thorns of distraction will fill every quiet space you might have used for thought.",
    "Rain on a tin roof is a sound most people do not forget. It belongs to a particular kind of afternoon — the kind where the sensible thing is to stay inside, and the world beyond the window looks freshly washed and soft.",
    "She kept a journal not to remember events, but to understand them. Writing forced her to slow down, to look twice at what had happened, to find the shape of things that feeling alone had left formless.",
    "The carpenter's most important tool was not any of the ones hanging on the wall of his shop. It was the pause before cutting — the moment of stillness in which he confirmed that the measurement was right and the wood was ready.",
    "Learning any new skill feels like being lost in a foreign city. Everything is confusing at first, and progress feels invisible. Then, one ordinary afternoon, you look up and realize you know exactly where you are.",
    "Kindness, given quietly and without expectation of return, has a way of accumulating in the world. We rarely see the effect of our small generous acts, but they do not disappear. They move forward in time, carried by those we treated well.",
  ],
 
  /* ── Books & Literature ──────────────────────────── */
  literature: [
    "It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.",
    "Call me Ishmael. Some years ago — never mind how long precisely — having little money in my pocket and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    "All happy families are alike; each unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue with a French girl.",
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families.",
    "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice. At that time Macondo was a village of twenty adobe houses, built on the bank of a river of clear water that ran along a bed of polished stones.",
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness.",
    "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'",
    "Mrs. Dalloway said she would buy the flowers herself. For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer's men were coming. And then, thought Clarissa Dalloway, what a morning — fresh as if issued to children on a beach.",
    "Lolita, light of my life, fire of my loins. Lo-lee-ta. She was Lo, plain Lo, in the morning, standing four feet ten in one sock. She was Lola in slacks. She was Dolly at school. She was Dolores on the dotted line.",
    "Happy families are all alike; every unhappy family is unhappy in its own way. Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed. A yellow dressinggown, ungirdled, was sustained gently behind him.",
    "There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating.",
    "The sky above the port was the color of television, tuned to a dead channel. 'It's not like I'm using it,' Case heard someone say, as he shouldered his way through the crowd around the door of the Chat. 'It's like my body's developed this massive drug deficiency.'",
  ],
 
  /* ── Coding Practice ─────────────────────────────── */
  coding: [
    `function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nconst result = fibonacci(10);\nconsole.log('Result:', result);`,
    `const fetchData = async (url) => {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) throw new Error('Network error');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Failed:', error.message);\n  }\n};`,
    `class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(item) { this.items.push(item); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}`,
    `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1`,
    `SELECT u.name, COUNT(o.id) AS order_count,\n       SUM(o.total) AS revenue\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE o.created_at >= '2024-01-01'\nGROUP BY u.id, u.name\nHAVING order_count > 5\nORDER BY revenue DESC;`,
    `const debounce = (fn, delay) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n};\n\nconst handleResize = debounce(() => {\n  console.log('Window resized');\n}, 300);`,
    `interface User {\n  id: number;\n  name: string;\n  email: string;\n  role: 'admin' | 'user' | 'guest';\n  createdAt: Date;\n}\n\ntype PartialUser = Partial<Pick<User, 'name' | 'email'>>;`,
    `public int[] mergeSort(int[] arr) {\n    if (arr.length <= 1) return arr;\n    int mid = arr.length / 2;\n    int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));\n    int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));\n    return merge(left, right);\n}`,
    `# List comprehension with filtering\nsquares = [x**2 for x in range(1, 21) if x % 2 == 0]\nprint(squares)\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in ['apple', 'banana', 'cherry']}\nprint(word_lengths)`,
    `const router = express.Router();\n\nrouter.get('/users/:id', authenticate, async (req, res) => {\n  const { id } = req.params;\n  const user = await User.findById(id).lean();\n  if (!user) return res.status(404).json({ error: 'Not found' });\n  res.json({ success: true, data: user });\n});`,
    `fn quicksort(mut arr: Vec<i32>) -> Vec<i32> {\n    if arr.len() <= 1 { return arr; }\n    let pivot = arr.remove(0);\n    let left: Vec<i32> = arr.iter().filter(|&&x| x <= pivot).cloned().collect();\n    let right: Vec<i32> = arr.iter().filter(|&&x| x > pivot).cloned().collect();\n    [quicksort(left), vec![pivot], quicksort(right)].concat()\n}`,
    `grid-template-areas:\n  "header header"\n  "sidebar main"\n  "footer footer";\ngrid-template-columns: 250px 1fr;\ngrid-template-rows: auto 1fr auto;\ngap: 1rem;`,
  ],
 
  /* ── Numbers & Data Entry ────────────────────────── */
  numbers: [
    "Invoice #INV-2024-00847: Unit price $142.50 × 36 units = $5,130.00. Discount: 7.5% (-$384.75). Subtotal: $4,745.25. Tax (8.25%): $391.48. Grand total: $5,136.73. Payment due: 2024-03-15.",
    "Coordinates: 40.7128° N, 74.0060° W (New York). Distance to Los Angeles (34.0522° N, 118.2437° W): 2,448.97 miles or 3,940.96 kilometers. Flight time at 575 mph: approximately 4 hours 15 minutes.",
    "Q3 Financial Summary: Revenue $12,847,320.00 (+18.3%). Expenses $9,102,448.75 (+11.2%). EBITDA $3,744,871.25. Margin: 29.15%. Employees: 847. Revenue per employee: $15,168.03.",
    "Server metrics (2024-01-15 09:00 UTC): CPU 47.3%, Memory 68.9% (22.4 GB / 32.5 GB), Disk I/O 124 MB/s read, 87 MB/s write. Network: 1.24 Gbps in, 0.87 Gbps out. Uptime: 99.97% (31 days, 14:22:07).",
    "Recipe scaling: Original serves 4. Scaling to 18. Flour: 2.25 cups × 4.5 = 10.125 cups. Sugar: 0.75 cup × 4.5 = 3.375 cups. Butter: 0.5 cup × 4.5 = 2.25 cups. Eggs: 3 × 4.5 = 13.5 (use 14). Bake at 350°F for 28-32 minutes.",
    "Population data: World 8,045,311,447. Asia 4,753,079,726 (59.1%). Africa 1,460,481,772 (18.2%). Americas 1,041,591,477 (13.0%). Europe 748,955,462 (9.3%). Oceania 43,219,954 (0.5%). Growth rate: +0.88% annually.",
    "Stock portfolio (EOD 2024-01-15): AAPL 185.92 (+1.23, +0.67%). MSFT 374.51 (-0.87, -0.23%). GOOGL 141.08 (+2.14, +1.54%). AMZN 172.37 (+0.52, +0.30%). META 387.65 (+5.88, +1.54%). Portfolio value: $247,831.40.",
    "Distance table (km): New York→London 5,570. London→Tokyo 9,559. Tokyo→Sydney 7,823. Sydney→Dubai 11,884. Dubai→New York 11,061. Total round trip: 45,897 km. At 900 km/h: 51 hours 0 minutes flight time.",
    "Chemical composition of dry air: Nitrogen (N₂) 78.084%. Oxygen (O₂) 20.946%. Argon (Ar) 0.934%. CO₂ 0.0412%. Neon 0.001818%. Helium 0.000524%. Methane 0.000187%. Krypton 0.000114%. Total trace gases: ~0.038%.",
  ],
 
  /* ── Spanish Practice ─────────────────────────────── */
  spanish: [
    "El sol se ponía lentamente detrás de las montañas, pintando el cielo con tonos de naranja y rosa. Los pájaros regresaban a sus nidos, y el pueblo comenzaba a despertar para la noche, con las luces encendiéndose una por una en las ventanas.",
    "Aprender un idioma nuevo es como descubrir un mundo paralelo. Las palabras no son simples traducciones; cada una lleva consigo la cultura, la historia y la manera de ver el mundo de quienes la hablan. Es una aventura sin fin.",
    "Mi abuela preparaba tamales cada diciembre. El proceso llevaba días: remojar las hojas de maíz, preparar la masa con manteca y caldo, rellenar con carne guisada. Era un ritual familiar, una manera de mantener viva la tradición.",
    "La biblioteca municipal tenía libros en diez idiomas diferentes. Entre sus estantes polvorientos se encontraban tesoros olvidados: novelas del siglo XIX, diccionarios de lenguas extintas, mapas de ciudades que ya no existían.",
    "En la Ciudad de México, el metro transporta millones de personas cada día. Las estaciones tienen símbolos además de nombres, diseñados originalmente para ayudar a los pasajeros que no sabían leer. Hoy son parte de la identidad de la ciudad.",
    "El flamenco no es simplemente una danza; es una conversación entre el bailarín, el guitarrista y el cantaor. Cada movimiento responde a un sonido, cada compás abre o cierra una emoción. Es un arte de escucha tanto como de expresión.",
    "Las palabras que usamos dan forma a nuestra realidad. En español existe 'madrugada' para describir las horas entre medianoche y el amanecer — un tiempo que en inglés requiere una explicación entera para describir lo que nosotros nombramos en una sola palabra.",
    "El mercado abrió sus puertas a las seis de la mañana. Los vendedores ya llevaban horas preparando sus puestos: frutas apiladas en pirámides coloridas, flores recién cortadas, especias en montañas pequeñas de rojo, amarillo y café.",
  ],
 
  /* ── Custom — handled dynamically ─────────────────── */
  custom: [],
 
  /* ── Weak keys — generated dynamically ─────────────── */
  'weak-keys': [],
};
 
/**
 * Build a text corpus for a session.
 * @param {string} category
 * @param {number} pages
 * @param {string[]} weakKeys — array of chars the user struggles with
 * @param {string} customText
 * @returns {string} The full practice text
 */
function buildText(category, pages, weakKeys = [], customText = '') {
  const targetChars = pages * CHARS_PER_PAGE;
 
  if (category === 'custom') {
    const text = (customText || '').trim();
    if (!text) return 'No custom text provided. Please go back and paste some text to practice.';
    // Repeat if needed to fill requested length
    let result = text;
    while (result.length < targetChars) result += '\n\n' + text;
    return result.slice(0, targetChars).trim();
  }
 
  if (category === 'weak-keys') {
    return buildWeakKeyText(weakKeys, targetChars);
  }
 
  const pool = CONTENT[category] || CONTENT.general;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
 
  let result = '';
  let i = 0;
  while (result.length < targetChars) {
    result += (result ? '\n\n' : '') + shuffled[i % shuffled.length];
    i++;
  }
  return result.slice(0, targetChars).trim();
}
 
/**
 * Generate targeted practice text for weak keys.
 * Creates sentences that heavily feature the troublesome characters.
 */
function buildWeakKeyText(weakKeys, targetChars) {
  if (!weakKeys || weakKeys.length === 0) {
    return buildText('general', Math.ceil(targetChars / CHARS_PER_PAGE));
  }
 
  // Words that contain each weak key (simple phonetic approximations)
  const wordBank = {
    'a': ['aptly', 'abstract', 'arrange', 'animal', 'alpha', 'annual', 'aware', 'adapt'],
    'b': ['bubble', 'brave', 'break', 'build', 'belong', 'balance', 'blood', 'bamboo'],
    'c': ['circle', 'catch', 'create', 'crown', 'careful', 'cosmic', 'classic', 'cycle'],
    'd': ['divide', 'dream', 'drink', 'drive', 'defined', 'dense', 'daily', 'deploy'],
    'e': ['element', 'entire', 'emerge', 'event', 'eleven', 'energy', 'every', 'enter'],
    'f': ['follow', 'figure', 'finite', 'filter', 'forest', 'future', 'found', 'first'],
    'g': ['gather', 'global', 'green', 'growth', 'golden', 'gentle', 'guide', 'grain'],
    'h': ['happen', 'height', 'health', 'hidden', 'hollow', 'human', 'house', 'harbor'],
    'i': ['inside', 'image', 'island', 'initial', 'invite', 'instinct', 'input', 'into'],
    'j': ['journey', 'justice', 'jungle', 'jasmine', 'junior', 'jolly', 'jigsaw', 'jump'],
    'k': ['kneel', 'kernel', 'kindle', 'kingdom', 'knight', 'kiosk', 'knock', 'kayak'],
    'l': ['listen', 'little', 'likely', 'label', 'lively', 'local', 'locate', 'level'],
    'm': ['moment', 'mirror', 'mountain', 'margin', 'method', 'master', 'middle', 'mobile'],
    'n': ['nature', 'narrow', 'number', 'normal', 'notion', 'novel', 'north', 'never'],
    'o': ['origin', 'outset', 'outcome', 'output', 'online', 'onward', 'often', 'order'],
    'p': ['pattern', 'pretty', 'plenty', 'perfect', 'planet', 'pocket', 'power', 'print'],
    'q': ['quite', 'query', 'quick', 'quiet', 'quota', 'quilt', 'quill', 'quality'],
    'r': ['rhythm', 'return', 'rather', 'reason', 'record', 'remind', 'render', 'right'],
    's': ['simple', 'sunset', 'stream', 'symbol', 'signal', 'system', 'source', 'sweet'],
    't': ['travel', 'truth', 'thread', 'through', 'talent', 'toward', 'thick', 'title'],
    'u': ['useful', 'under', 'unique', 'unless', 'until', 'update', 'upper', 'usual'],
    'v': ['valley', 'value', 'violet', 'visual', 'vivid', 'virtue', 'voyage', 'verify'],
    'w': ['winter', 'whole', 'while', 'write', 'world', 'water', 'width', 'within'],
    'x': ['exact', 'exist', 'extra', 'export', 'expand', 'expect', 'expert', 'exceed'],
    'y': ['yearly', 'yellow', 'young', 'yield', 'youth', 'yonder', 'yogurt', 'yardstick'],
    'z': ['zeal', 'zebra', 'zenith', 'zipper', 'zodiac', 'zero', 'zealot', 'zinc'],
  };
 
  const templates = [
    (w1, w2) => `The ${w1} and ${w2} are closely connected in practice.`,
    (w1, w2) => `A good ${w1} helps you build the ${w2} that you need.`,
    (w1, w2) => `Every ${w1} requires both ${w2} and careful attention.`,
    (w1, w2) => `Notice how the ${w1} connects naturally to the ${w2}.`,
    (w1, w2) => `Keep your fingers loose as you type ${w1} and ${w2} together.`,
  ];
 
  let result = `Focus on these keys: ${weakKeys.join(', ')}. Take your time.\n\n`;
 
  while (result.length < targetChars) {
    const key = weakKeys[Math.floor(Math.random() * weakKeys.length)].toLowerCase();
    const words = wordBank[key] || wordBank['a'];
    const w1 = words[Math.floor(Math.random() * words.length)];
    const w2 = words[Math.floor(Math.random() * words.length)];
    const template = templates[Math.floor(Math.random() * templates.length)];
    result += template(w1, w2) + ' ';
  }
 
  return result.trim().slice(0, targetChars);
}
 
// Export for use in app.js
window.CONTENT = CONTENT;
window.buildText = buildText;
window.CHARS_PER_PAGE = CHARS_PER_PAGE;
 

/**
 * storage.js — All localStorage interactions.
 * Keeps persistence logic separate from app logic.
 *
 * Keys:
 *   tc_sessions      — array of completed session objects
 *   tc_in_progress   — a single in-progress session (for resume)
 *   tc_weak_keys     — aggregated weak key data across sessions
 *   tc_theme         — 'light' | 'dark'
 */
 
const Storage = (() => {
  const KEYS = {
    sessions:    'tc_sessions',
    inProgress:  'tc_in_progress',
    weakKeys:    'tc_weak_keys',
    theme:       'tc_theme',
  };
 
  // ── Helpers ──────────────────────────────────────────
  function read(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }
 
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('Storage write failed:', e);
      return false;
    }
  }
 
  // ── Theme ────────────────────────────────────────────
  function getTheme() { return read(KEYS.theme) || 'light'; }
  function setTheme(t) { write(KEYS.theme, t); }
 
  // ── Completed Sessions ───────────────────────────────
  function getSessions() { return read(KEYS.sessions) || []; }
 
  function saveSession(session) {
    const sessions = getSessions();
    sessions.unshift({
      ...session,
      id: Date.now(),
      completedAt: new Date().toISOString(),
    });
    // Cap at 50 sessions
    write(KEYS.sessions, sessions.slice(0, 50));
  }
 
  function clearSessions() {
    write(KEYS.sessions, []);
    write(KEYS.weakKeys, {});
  }
 
  // ── In-Progress Session ──────────────────────────────
  function getInProgress() { return read(KEYS.inProgress); }
 
  /**
   * Save partial progress so the user can resume.
   * @param {object} state — { category, mode, pages, text, charIndex, errorMap, settings }
   */
  function saveInProgress(state) {
    write(KEYS.inProgress, { ...state, savedAt: Date.now() });
  }
 
  function clearInProgress() {
    localStorage.removeItem(KEYS.inProgress);
  }
 
  // ── Weak Keys ────────────────────────────────────────
  /**
   * Get aggregated weak key data (char → miss count).
   */
  function getWeakKeys() { return read(KEYS.weakKeys) || {}; }
 
  /**
   * Merge new error data from a session into the aggregate.
   * @param {object} errorMap — { char: count, ... }
   */
  function updateWeakKeys(errorMap) {
    const existing = getWeakKeys();
    for (const [char, count] of Object.entries(errorMap)) {
      existing[char] = (existing[char] || 0) + count;
    }
    write(KEYS.weakKeys, existing);
  }
 
  /**
   * Return the top N most-missed keys as an array of chars,
   * sorted by descending miss count.
   */
  function getTopWeakKeys(n = 8) {
    const data = getWeakKeys();
    return Object.entries(data)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([char]) => char);
  }
 
  return {
    getTheme, setTheme,
    getSessions, saveSession, clearSessions,
    getInProgress, saveInProgress, clearInProgress,
    getWeakKeys, updateWeakKeys, getTopWeakKeys,
  };
})();
 
window.Storage = Storage;
 

/**
 * app.js — Typecraft main application
 *
 * Architecture:
 *  - App state is held in a single `state` object.
 *  - Screens are shown/hidden with showScreen().
 *  - The practice engine renders the text as <span> chars,
 *    listens to a hidden <input>, and updates char classes.
 *  - No timers, WPM, or countdown anywhere in this file.
 */
 
/* ══════════════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════════════ */
const state = {
  // Setup choices
  category: 'general',
  mode: 'strict',      // 'strict' | 'free'
  pages: 1,
 
  // Practice text
  fullText: '',        // the complete text for this session
  chars: [],           // array of { char, status: 'pending'|'correct'|'error' }
  cursorIndex: 0,      // which char the user must type next
 
  // Error tracking — map from char → count
  errorMap: {},
 
  // Whether we are resuming
  resuming: false,
};
 
/* ══════════════════════════════════════════════════════
   ELEMENT REFERENCES
   ══════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
 
const screens = {
  setup:    $('screen-setup'),
  practice: $('screen-practice'),
  complete: $('screen-complete'),
  history:  $('screen-history'),
};
 
const els = {
  // Setup
  categoryGrid:    $('category-grid'),
  customArea:      $('custom-text-area'),
  customInput:     $('custom-text-input'),
  pagePicker:      $('page-picker'),
  modecards:       $('mode-cards'),
  resumeBanner:    $('resume-banner'),
  resumeDetail:    $('resume-detail'),
  btnResume:       $('btn-resume'),
  btnStart:        $('btn-start'),
  btnSessions:     $('btn-sessions'),
 
  // Practice
  bookText:        $('book-text'),
  bookPage:        $('book-page'),
  bookPageNum:     $('book-page-number'),
  progressBar:     $('progress-bar'),
  progressPageLbl: $('progress-page-label'),
  progressPctLbl:  $('progress-pct-label'),
  practiceHeader:  $('practice-header'),
  typingInput:     $('typing-input'),
  focusOverlay:    $('focus-overlay'),
  btnFullscreen:   $('btn-fullscreen'),
  btnQuit:         $('btn-quit'),
  btnRefocus:      $('btn-refocus'),
  practiceCatLbl:  $('practice-category-label'),
  practiceModeLbl: $('practice-mode-label'),
  bookStage:       $('book-stage'),
 
  // Complete
  completTitle:   $('complete-title'),
  completeSubtitle: $('complete-subtitle'),
  statChars:      $('stat-chars'),
  statErrors:     $('stat-errors'),
  statAccuracy:   $('stat-accuracy'),
  weakKeysList:   $('weak-keys-list'),
  weakKeysSection:$('weak-keys-section'),
  btnPracticeAgain: $('btn-practice-again'),
  btnWeakSession: $('btn-weak-keys-session'),
  btnHome:        $('btn-home'),
 
  // History
  historyList:    $('history-list'),
  btnHistoryBack: $('btn-history-back'),
  btnClearHist:   $('btn-clear-history'),
};
 
/* ══════════════════════════════════════════════════════
   THEME
   ══════════════════════════════════════════════════════ */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  Storage.setTheme(t);
}
 
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}
 
// Wire all theme buttons
document.querySelectorAll('#btn-theme, #btn-theme-practice, #btn-theme-complete').forEach(btn => {
  btn.addEventListener('click', toggleTheme);
});
 
/* ══════════════════════════════════════════════════════
   SCREEN MANAGEMENT
   ══════════════════════════════════════════════════════ */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
 
  // When showing practice, focus the hidden input
  if (name === 'practice') {
    setTimeout(() => els.typingInput.focus(), 50);
  }
}
 
/* ══════════════════════════════════════════════════════
   SETUP SCREEN — interactions
   ══════════════════════════════════════════════════════ */
 
// Category buttons
els.categoryGrid.addEventListener('click', e => {
  const btn = e.target.closest('.category-btn');
  if (!btn) return;
 
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.category = btn.dataset.category;
 
  // Show/hide custom textarea
  els.customArea.classList.toggle('hidden', state.category !== 'custom');
});
 
// Page buttons
els.pagePicker.addEventListener('click', e => {
  const btn = e.target.closest('.page-btn');
  if (!btn) return;
  document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.pages = parseInt(btn.dataset.pages, 10);
});
 
// Mode cards
els.modecards.addEventListener('click', e => {
  const card = e.target.closest('.mode-card');
  if (!card) return;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  const radio = card.querySelector('input[type=radio]');
  if (radio) {
    radio.checked = true;
    state.mode = radio.value;
  }
});
 
// Check for resumable session on load
function checkResume() {
  const saved = Storage.getInProgress();
  if (!saved) { els.resumeBanner.classList.add('hidden'); return; }
 
  const age = Math.round((Date.now() - saved.savedAt) / 60000);
  const label = `${saved.pages} page${saved.pages !== 1 ? 's' : ''} · ${CATEGORY_LABELS[saved.category] || saved.category} · ${age < 60 ? age + 'm' : Math.round(age/60) + 'h'} ago`;
  els.resumeDetail.textContent = label;
  els.resumeBanner.classList.remove('hidden');
}
 
// Resume button
els.btnResume.addEventListener('click', () => {
  const saved = Storage.getInProgress();
  if (!saved) return;
 
  // Restore state
  state.category   = saved.category;
  state.mode       = saved.mode;
  state.pages      = saved.pages;
  state.fullText   = saved.fullText;
  state.errorMap   = saved.errorMap || {};
  state.cursorIndex = saved.cursorIndex || 0;
  state.resuming   = true;
 
  startPractice();
});
 
// Start button
els.btnStart.addEventListener('click', () => {
  state.resuming = false;
  state.errorMap = {};
  state.cursorIndex = 0;
 
  const weakKeys = Storage.getTopWeakKeys(8);
  state.fullText = buildText(
    state.category,
    state.pages,
    weakKeys,
    els.customInput.value
  );
 
  startPractice();
});
 
// History button
els.btnSessions.addEventListener('click', () => {
  renderHistory();
  showScreen('history');
});
 
/* ══════════════════════════════════════════════════════
   PRACTICE ENGINE
   ══════════════════════════════════════════════════════ */
 
const CATEGORY_LABELS = {
  general: 'General English',
  literature: 'Books & Literature',
  coding: 'Coding Practice',
  numbers: 'Numbers & Data',
  spanish: 'Spanish Practice',
  custom: 'Custom Text',
  'weak-keys': 'Weak Key Practice',
};
 
/**
 * Initialise and show the practice screen.
 */
function startPractice() {
  // Build character array from the full text
  state.chars = state.fullText.split('').map(char => ({
    char,
    status: 'pending',
  }));
 
  // Mark already-typed chars if resuming
  if (state.resuming) {
    for (let i = 0; i < state.cursorIndex; i++) {
      // We don't know their exact correct/error status from saved data,
      // but we can use the errorMap to approximate — just mark as correct
      // since we stored errorMap counts separately
      state.chars[i].status = 'correct';
    }
  }
 
  // Update header labels
  els.practiceCatLbl.textContent  = CATEGORY_LABELS[state.category] || state.category;
  els.practiceModeLbl.textContent = state.mode === 'strict' ? 'Strict Mode' : 'Free Mode';
 
  // Render all char spans
  renderText();
 
  // Update progress
  updateProgress();
 
  showScreen('practice');
 
  // Focus hidden input
  els.typingInput.value = '';
  els.typingInput.focus();
}
 
/**
 * Render the full text as <span class="char"> elements.
 * Called once at start; individual chars are updated in updateChar().
 */
function renderText() {
  els.bookText.innerHTML = '';
  const fragment = document.createDocumentFragment();
 
  state.chars.forEach((c, i) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.dataset.index = i;
 
    // Preserve whitespace appearance
    if (c.char === ' ') {
      span.textContent = '\u00A0'; // non-breaking space for visual width
      span.classList.add('space-char');
    } else if (c.char === '\n') {
      span.textContent = '¶'; // subtle paragraph mark
      span.classList.add('newline-char');
      fragment.appendChild(span);
      fragment.appendChild(document.createElement('br'));
      return;
    } else {
      span.textContent = c.char;
    }
 
    fragment.appendChild(span);
  });
 
  els.bookText.appendChild(fragment);
  markCursor(state.cursorIndex);
}
 
/**
 * Mark the char at `index` as the active cursor position.
 */
function markCursor(index) {
  // Remove old cursor
  const old = els.bookText.querySelector('.cursor');
  if (old) old.classList.remove('cursor');
 
  const spans = els.bookText.querySelectorAll('.char');
  if (index < spans.length) {
    spans[index].classList.add('cursor');
    // Scroll cursor into view smoothly
    spans[index].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}
 
/**
 * Update a single character's visual state.
 */
function updateChar(index, status) {
  state.chars[index].status = status;
  const spans = els.bookText.querySelectorAll('.char');
  const span = spans[index];
  if (!span) return;
  span.classList.remove('correct', 'error', 'pending', 'cursor');
  span.classList.add(status);
}
 
/**
 * Update the progress bar and page label.
 */
function updateProgress() {
  const total = state.chars.length;
  const done  = state.cursorIndex;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
 
  // Update CSS variable for bar fill
  els.progressBar.style.setProperty('--pct', pct + '%');
  els.progressPctLbl.textContent = pct + '%';
 
  // Page label
  const currentPage = Math.floor(done / CHARS_PER_PAGE) + 1;
  const totalPages  = Math.ceil(total / CHARS_PER_PAGE);
  els.progressPageLbl.textContent = `Page ${currentPage} of ${totalPages}`;
  els.bookPageNum.textContent = `— ${currentPage} —`;
}
 
/* ── Keyboard handling ─────────────────────────────── */
 
// We intercept keydown on the document to route to our hidden input,
// and keydown on the hidden input for the actual logic.
document.addEventListener('keydown', e => {
  if (screens.practice.classList.contains('active')) {
    // Re-focus if they pressed a key while overlay is showing
    if (!els.focusOverlay.classList.contains('hidden')) {
      hideFocusOverlay();
    }
    els.typingInput.focus();
  }
});
 
els.typingInput.addEventListener('keydown', handleKeydown);
els.typingInput.addEventListener('blur', () => {
  // Show focus overlay after a small delay (so clicks on UI buttons don't trigger it)
  if (!screens.practice.classList.contains('active')) return;
  setTimeout(() => {
    if (document.activeElement !== els.typingInput && screens.practice.classList.contains('active')) {
      showFocusOverlay();
    }
  }, 150);
});
 
function handleKeydown(e) {
  // Ignore modifier-only keystrokes
  if (e.ctrlKey || e.metaKey || e.altKey) return;
 
  const total = state.chars.length;
 
  // Backspace
  if (e.key === 'Backspace') {
    e.preventDefault();
    if (state.cursorIndex > 0) {
      state.cursorIndex--;
      updateChar(state.cursorIndex, 'pending');
      markCursor(state.cursorIndex);
      updateProgress();
      autosaveProgress();
    }
    return;
  }
 
  // Map Enter → '\n' so paragraph breaks can be typed naturally
  const typedKey = e.key === 'Enter' ? '\n' : e.key;
 
  // Only process single printable characters (and our mapped newline)
  if (typedKey.length !== 1) return;
  e.preventDefault();
 
  // Are we at the end?
  if (state.cursorIndex >= total) return;
 
  const expected = state.chars[state.cursorIndex].char;
  const typed    = typedKey;
 
  if (typed === expected) {
    // ✓ Correct
    updateChar(state.cursorIndex, 'correct');
    state.cursorIndex++;
  } else {
    // ✗ Incorrect
    if (state.mode === 'strict') {
      // Flash error on cursor and do NOT advance
      flashError(state.cursorIndex);
      recordError(expected);
      return; // stay on same char
    } else {
      // Free mode: mark error, advance
      updateChar(state.cursorIndex, 'error');
      recordError(expected);
      state.cursorIndex++;
    }
  }
 
  if (state.cursorIndex >= total) {
    // Session complete!
    finishSession();
    return;
  }
 
  markCursor(state.cursorIndex);
  updateProgress();
  autosaveProgress();
}
 
/**
 * Briefly animate the cursor span to indicate wrong key in strict mode.
 */
function flashError(index) {
  const spans = els.bookText.querySelectorAll('.char');
  const span = spans[index];
  if (!span) return;
  span.classList.add('error');
  setTimeout(() => {
    if (state.chars[index].status !== 'error') {
      span.classList.remove('error');
    }
  }, 250);
}
 
/**
 * Record a missed key into the errorMap.
 */
function recordError(char) {
  // Normalise: lowercase, ignore whitespace chars for the weak-key tracker
  const key = char.toLowerCase();
  if (key.trim() === '') return;
  state.errorMap[key] = (state.errorMap[key] || 0) + 1;
}
 
/**
 * Autosave progress every 10 chars so the user can resume.
 */
let _autosaveCounter = 0;
function autosaveProgress() {
  _autosaveCounter++;
  if (_autosaveCounter % 10 !== 0) return;
  Storage.saveInProgress({
    category:    state.category,
    mode:        state.mode,
    pages:       state.pages,
    fullText:    state.fullText,
    cursorIndex: state.cursorIndex,
    errorMap:    state.errorMap,
  });
}
 
/* ── Focus overlay ─────────────────────────────────── */
function showFocusOverlay() {
  els.focusOverlay.classList.remove('hidden');
}
function hideFocusOverlay() {
  els.focusOverlay.classList.add('hidden');
  els.typingInput.focus();
}
 
els.focusOverlay.addEventListener('click', hideFocusOverlay);
els.btnRefocus.addEventListener('click', e => { e.stopPropagation(); hideFocusOverlay(); });
els.bookStage.addEventListener('click', () => {
  hideFocusOverlay();
  els.typingInput.focus();
});
 
/* ── Fullscreen ────────────────────────────────────── */
els.btnFullscreen.addEventListener('click', () => {
  document.body.classList.toggle('fullscreen');
  if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else if (document.exitFullscreen && document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
});
 
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    document.body.classList.remove('fullscreen');
  }
});
 
/* ── Quit ──────────────────────────────────────────── */
els.btnQuit.addEventListener('click', () => {
  Storage.saveInProgress({
    category:    state.category,
    mode:        state.mode,
    pages:       state.pages,
    fullText:    state.fullText,
    cursorIndex: state.cursorIndex,
    errorMap:    state.errorMap,
  });
  document.body.classList.remove('fullscreen');
  showScreen('setup');
  checkResume();
});
 
/* ══════════════════════════════════════════════════════
   SESSION COMPLETE
   ══════════════════════════════════════════════════════ */
function finishSession() {
  // Clear in-progress save
  Storage.clearInProgress();
 
  // Calculate stats
  const totalChars   = state.chars.length;
  const totalErrors  = Object.values(state.errorMap).reduce((s, n) => s + n, 0);
  const accuracy     = totalChars > 0 ? ((totalChars - totalErrors) / totalChars * 100) : 100;
  const accuracyPct  = Math.max(0, Math.round(accuracy * 10) / 10);
 
  // Sort mistyped keys by frequency, take top 8
  const topErrors = Object.entries(state.errorMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
 
  // Update aggregate weak keys
  Storage.updateWeakKeys(state.errorMap);
 
  // Save session
  Storage.saveSession({
    category:   state.category,
    mode:       state.mode,
    pages:      state.pages,
    totalChars,
    totalErrors,
    accuracy: accuracyPct,
    topErrors,
  });
 
  // Populate complete screen
  els.statChars.textContent    = totalChars.toLocaleString();
  els.statErrors.textContent   = totalErrors.toLocaleString();
  els.statAccuracy.textContent = accuracyPct + '%';
 
  // Title based on accuracy
  if (accuracyPct === 100) {
    els.completTitle.textContent   = 'Perfect!';
    els.completeSubtitle.textContent = 'Every character typed correctly. That is true precision.';
  } else if (accuracyPct >= 97) {
    els.completTitle.textContent   = 'Excellent.';
    els.completeSubtitle.textContent = 'Near-perfect accuracy. Your fingers know where to go.';
  } else if (accuracyPct >= 90) {
    els.completTitle.textContent   = 'Well done.';
    els.completeSubtitle.textContent = 'Good accuracy. A little more practice and those errors will fade.';
  } else {
    els.completTitle.textContent   = 'Keep going.';
    els.completeSubtitle.textContent = 'Every session builds muscle memory. Focus on the weak keys below.';
  }
 
  // Render weak key chips
  els.weakKeysList.innerHTML = '';
  if (topErrors.length === 0) {
    els.weakKeysSection.classList.add('hidden');
  } else {
    els.weakKeysSection.classList.remove('hidden');
    topErrors.forEach(([char, count]) => {
      const chip = document.createElement('div');
      chip.className = 'weak-key-chip';
      chip.innerHTML = `<span>${char === ' ' ? '␣' : char}</span><span class="count">${count}</span>`;
      els.weakKeysList.appendChild(chip);
    });
  }
 
  document.body.classList.remove('fullscreen');
  showScreen('complete');
}
 
/* ── Complete screen buttons ───────────────────────── */
els.btnPracticeAgain.addEventListener('click', () => {
  state.resuming = false;
  state.errorMap = {};
  state.cursorIndex = 0;
  state.fullText = buildText(state.category, state.pages, Storage.getTopWeakKeys(), els.customInput.value);
  startPractice();
});
 
els.btnWeakSession.addEventListener('click', () => {
  state.resuming = false;
  state.errorMap = {};
  state.cursorIndex = 0;
  state.category = 'weak-keys';
  state.fullText = buildText('weak-keys', state.pages, Storage.getTopWeakKeys());
  startPractice();
});
 
els.btnHome.addEventListener('click', () => {
  showScreen('setup');
  checkResume();
});
 
/* ══════════════════════════════════════════════════════
   HISTORY SCREEN
   ══════════════════════════════════════════════════════ */
function renderHistory() {
  const sessions = Storage.getSessions();
  els.historyList.innerHTML = '';
 
  if (sessions.length === 0) {
    els.historyList.innerHTML = '<p class="history-empty">No sessions yet. Complete a practice session to see it here.</p>';
    return;
  }
 
  sessions.forEach(s => {
    const date = new Date(s.completedAt);
    const dateStr = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
 
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <div>
        <div class="history-item-meta">${dateStr} at ${timeStr} · ${CATEGORY_LABELS[s.category] || s.category} · ${s.mode} mode</div>
        <div class="history-item-info">
          <div class="history-stat">
            <span class="val">${(s.totalChars || 0).toLocaleString()}</span>
            <span class="lbl">Characters</span>
          </div>
          <div class="history-stat">
            <span class="val">${(s.totalErrors || 0).toLocaleString()}</span>
            <span class="lbl">Errors</span>
          </div>
          <div class="history-stat">
            <span class="val">${s.pages}</span>
            <span class="lbl">Page${s.pages !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
      <div class="history-accuracy">${s.accuracy}%</div>
    `;
    els.historyList.appendChild(item);
  });
}
 
els.btnHistoryBack.addEventListener('click', () => showScreen('setup'));
 
els.btnClearHist.addEventListener('click', () => {
  if (confirm('Clear all session history? This cannot be undone.')) {
    Storage.clearSessions();
    renderHistory();
  }
});
 
/* ══════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════ */
(function init() {
  // Apply saved theme
  applyTheme(Storage.getTheme());
 
  // Check for resumable session
  checkResume();
 
  // Check if user has weak key data; if not, hide that category button
  const weakData = Storage.getWeakKeys();
  const hasWeakData = Object.keys(weakData).length > 0;
  const weakBtn = document.querySelector('.category-btn[data-category="weak-keys"]');
  if (weakBtn && !hasWeakData) {
    weakBtn.style.opacity = '0.4';
    weakBtn.title = 'Complete a few sessions first to unlock personalised weak-key practice';
  }
 
  showScreen('setup');
})();