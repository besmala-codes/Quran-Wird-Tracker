// used to change between arabic and english
var Today = "Today";
var Hijri = "Hijri";

const quranQuotes = [
`وَٱتْلُ مَا أُوحِىَ إِلَيْكَ مِن كِتَـٰبِ رَبِّكَ\nRecite what has been revealed to you of the Book of your Lord. (18:27)`,

`إِنَّهُۥ لَقُرْءَانٌ كَرِيمٌ * فِى كِتَـٰبٍۢ مَّكْنُونٍ\nIndeed, it is a noble Qur’an * in a protected Book. (56:77–78)`,

`اللهم اجعل القرآن ربيع قلبي\nO Allah, make the Qur’an the spring of my heart.`,

`القرآن جليس لا يُمل، وصاحب لا يُخون\nThe Qur’an is a companion who never bores you, and a friend who never betrays.`,

`من أراد الدنيا فعليه بالقرآن، ومن أراد الآخرة فعليه بالقرآن\nWhoever wants this life or the hereafter, let them hold on to the Qur’an.`,

`القرآن نزل ليُغيرنا لا ليُزين مجالسنا\nThe Qur’an was revealed to change us — not just to decorate our gatherings.`,

`القرآن هو الحديث اليومي بينك وبين الله\nThe Qur’an is your daily conversation with Allah.`,

`من جعل القرآن قائده، قاده إلى الجنة\nWhoever lets the Qur’an lead them, it will guide them to Paradise.`,

`أنفاسك التي تذهب لا تعود، فاجعل منها ما يُتلى\nThe breaths you lose never come back — make them include Qur’an recitation.`,

`كل يوم يمر دون أن تفتح فيه المصحف هو يوم ناقص\nAny day that passes without opening the Mushaf is an incomplete day.`,

`خيركم من تعلم القرآن وعلمه\nThe best of you are those who learn the Qur’an and teach it. (Hadith)`,

`وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌۭ وَرَحْمَةٌۭ لِّلْمُؤْمِنِينَ\nAnd We send down the Qur’an as a healing and mercy for the believers. (17:82)`,

`وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا\nAnd recite the Qur’an with measured recitation. (73:4)`,

`القرآن لا يُهجر، لأن فيه حياتك\nNever abandon the Qur’an — your life is in it.`,

`إذا أردت أن يُكلمك الله، فاقرأ القرآن\nIf you want Allah to speak to you, read the Qur’an.`,

`إن هذا القرآن يهدي للتي هي أقوم\nIndeed, this Qur’an guides to that which is most upright. (17:9)`,

`اقْرَأْ بِاسْمِ رَبِّكَ ٱلَّذِي خَلَقَ\nRead in the name of your Lord who created. (96:1)`,

`القرآن شفاء للقلوب قبل الأجساد\nThe Qur’an is a healing for hearts before bodies.`,

`من شُغل بالقرآن عن دعائي، أعطيته أفضل مما أعطي السائلين\nWhoever is too busy with the Qur’an to ask Me, I will give them better than what I give to those who ask. (Hadith Qudsi)`,

`القرآن أنيس في الوحدة، ونور في الظلمة\nThe Qur’an is your companion in loneliness, and your light in darkness.`,

`احمل القرآن في قلبك، ليحملك في آخرتك\nCarry the Qur’an in your heart, so it may carry you in your Hereafter.`
];


function showRandomQuote() {
  const quote = quranQuotes[Math.floor(Math.random() * quranQuotes.length)];
  document.getElementById("quote").textContent = quote;
}

// show a quote immediatly
showRandomQuote();

// change every 10 seconds
setInterval(showRandomQuote, 10000);

function updateDateText() {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const hijriParts = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).formatToParts(today);

  let hijriDay = hijriParts.find(p => p.type === 'day').value;
  let hijriMonth = hijriParts.find(p => p.type === 'month').value;
  let hijriYear = hijriParts.find(p => p.type === 'year').value;

  const hijriFormatted = `${hijriYear}/${hijriMonth}/${hijriDay}`;

  document.getElementById("date").textContent = `💭 ${Today}: ${formattedDate} | 🕌 ${Hijri}: ${hijriFormatted}`;
}
  
  updateDateText();

  const modeBtn = document.getElementById('mode-toggle');
  const langBtn = document.getElementById('lang-toggle')
  const body = document.body;

  // start with light mode
  body.classList.add('light-mode');

  modeBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      modeBtn.textContent = '☀️'; // sun for light
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      modeBtn.textContent = '🌙'; // moon for dark
    }
  });
  
  // language switcher
  const question = document.getElementById("question");
  const checkSentence = document.getElementById("checkSentence");

  langBtn.addEventListener('click', () => {
    if (langBtn.textContent === "عربي؟") {
      langBtn.textContent = "english?";
      question.textContent = "هل قرأت وردك اليوم ؟ 💌"
      checkSentence.textContent = "قرأت القرآن اليوم 🤍"
      Today = "اليوم";
      Hijri = "هجري";
      updateDateText();
    } else {
      langBtn.textContent = "عربي؟";
      question.textContent = "Did you read your Wird today? 💌"
      checkSentence.textContent = "I read Quran today 🤍"
      Today = "Today";
      Hijri = "Hijri";
      updateDateText();
    }
  });


