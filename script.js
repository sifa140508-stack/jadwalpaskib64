// --- KONFIGURASI TAILWIND ---
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ["Plus Jakarta Sans", "sans-serif"] },
      colors: {
        "merah-indo": "#D00000",
        "putih-tulang": "#F9FAFB",
        gelap: "#18181b",
      },
      animation: {
        "indo-flow": "gradientFlow 15s ease infinite",
        "pulse-red": "pulseRed 3s infinite",
      },
      keyframes: {
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(208, 0, 0, 0.4)" },
          "50%": { boxShadow: "0 0 20px 0 rgba(208, 0, 0, 0.2)" },
        },
      },
    },
  },
};

// --- DATA JADWAL LENGKAP ---
const scheduleData = [
  // MINGGU 1
  {
    date: "Rabu, 04 Mar",
    textDate: "2026-03-04",
    pickup: "Orchidt Valentina",
    raise: ["Faiz Azzam", "Dinda Faitul", "Muhammad Wahyu"],
    lower: ["Mia Putri", "Junaedy Bernares", "Tsania Nisa'i"],
    return: "Nazril Arriyan Nauval",
  },
  {
    date: "Kamis, 05 Mar",
    textDate: "2026-03-05",
    pickup: "Dewi Juniar",
    raise: ["Okta Sugi", "Siti Fatonah", "Alvian Irhamsyah"],
    lower: ["Dewi Sekarsari", "Zianka Gading", "Najla Aulia"],
    return: "Muhammad Dannys Anwar",
  },
  {
    date: "Jumat, 06 Mar",
    textDate: "2026-03-06",
    pickup: "Alisa Naya Elvani",
    raise: ["Rifki Fakhrudin", "Freya Anindya", "Nazril Arriyan"],
    lower: ["Melanie Aiko", "M. Khaizuran", "Laila Nabila"],
    return: "Abimasyah An Nafi",
  },
  // MINGGU 2
  {
    date: "Senin, 09 Mar",
    textDate: "2026-03-09",
    pickup: "Tsania Nisa'i W.",
    raise: ["Dzikri Ramadhan", "Nadya Devi", "Junaedy Bernares"],
    lower: ["Alvian Irhamsyah", "Riani Novianti", "Faiz Azzam"],
    return: "Okta Sugi Perwira",
  },
  {
    date: "Selasa, 10 Mar",
    textDate: "2026-03-10",
    pickup: "Mia Putri Maharani",
    raise: ["Muhammad Dannys", "Dewi Sekarsari", "Zianka Gading"],
    lower: ["Orchidt Valentina", "Muhammad Wahyu", "Siti Fatonah"],
    return: "Rifki Fakhrudin",
  },
  {
    date: "Rabu, 11 Mar",
    textDate: "2026-03-11",
    pickup: "Nadya Devi Rusadi",
    raise: ["M. Khaizuran", "Nayshila Lutfia", "Abimasyah"],
    lower: ["Dinda Faitul", "Nazril Arriyan", "Dewi Juniar"],
    return: "Zianka Gading Putra",
  },
  {
    date: "Kamis, 12 Mar",
    textDate: "2026-03-12",
    pickup: "Laila Nabila Syafa",
    raise: ["Alvian Irhamsyah", "Melanie Aiko", "Faiz Azzam"],
    lower: ["Freya Anindya", "Dzikri Ramadhan", "Alisa Naya"],
    return: "M. Khaizuran Annadhif",
  },
  {
    date: "Jumat, 13 Mar",
    textDate: "2026-03-13",
    pickup: "Riani Novianti",
    raise: ["Junaedy Bernares", "Najla Aulia", "Okta Sugi"],
    lower: ["Mia Putri", "Muhammad Dannys", "Tsania Nisa'i"],
    return: "Muhammad Wahyu S.",
  },
  // MINGGU 3
  {
    date: "Senin, 16 Mar",
    textDate: "2026-03-16",
    pickup: "Siti Fatonah",
    raise: ["Nazril Arriyan", "Dewi Juniar", "Muhammad Wahyu"],
    lower: ["Nadya Devi", "Abimasyah An Nafi", "Orchidt Valentina"],
    return: "Faiz Azzam Zakaria",
  },
  {
    date: "Selasa, 17 Mar",
    textDate: "2026-03-17",
    pickup: "Dinda Faitul Fajri",
    raise: ["Zianka Gading", "Alisa Naya", "Rifki Fakhrudin"],
    lower: ["Siti Fatonah", "Junaedy Bernares", "Dewi Sekarsari"],
    return: "Alvian Irhamsyah",
  },
  {
    date: "Rabu, 18 Mar",
    textDate: "2026-03-18",
    pickup: "Freya Anindya Nabigha",
    raise: ["M. Khaizuran", "Riani Novianti", "Dzikri Ramadhan"],
    lower: ["Nayshila Lutfia", "Okta Sugi", "Mia Putri"],
    return: "Muhammad Dannys Anwar",
  },
  {
    date: "Kamis, 19 Mar",
    textDate: "2026-03-19",
    pickup: "Melanie Aiko Viwi",
    raise: ["Abimasyah", "Laila Nabila", "Nazril Arriyan"],
    lower: ["Dinda Faitul", "Muhammad Wahyu", "Najla Aulia"],
    return: "Junaedy Bernares V.",
  },
  {
    date: "Jumat, 20 Mar",
    textDate: "2026-03-20",
    pickup: "Nayshila Lutfia",
    raise: ["Muhammad Dannys", "Tsania Nisa'i", "Zianka Gading"],
    lower: ["Melanie Aiko", "Rifki Fakhrudin", "Freya Anindya"],
    return: "Dzikri Ramadhan M.",
  },
  // MINGGU 4
  {
    date: "Senin, 23 Mar",
    textDate: "2026-03-23",
    pickup: "Najla Aulia Rahmad",
    raise: ["Faiz Azzam", "Orchidt Valentina", "Alvian Irhamsyah"],
    lower: ["Dewi Juniar", "M. Khaizuran", "Alisa Naya"],
    return: "Okta Sugi Perwira",
  },
  {
    date: "Selasa, 24 Mar",
    textDate: "2026-03-24",
    pickup: "Dewi Sekarsari",
    raise: ["Okta Sugi", "Nadya Devi", "Junaedy Bernares"],
    lower: ["Riani Novianti", "Dzikri Ramadhan", "Siti Fatonah"],
    return: "Abimasyah An Nafi",
  },
  {
    date: "Rabu, 25 Mar",
    textDate: "2026-03-25",
    pickup: "Orchidt Valentina",
    raise: ["Muhammad Wahyu", "Mia Putri", "Nazril Arriyan"],
    lower: ["Laila Nabila", "Zianka Gading", "Dinda Faitul"],
    return: "Rifki Fakhrudin",
  },
  {
    date: "Kamis, 26 Mar",
    textDate: "2026-03-26",
    pickup: "Alisa Naya Elvani",
    raise: ["Rifki Fakhrudin", "Dewi Sekarsari", "Muhammad Dannys"],
    lower: ["Tsania Nisa'i", "Abimasyah", "Nayshila Lutfia"],
    return: "Muhammad Wahyu S.",
  },
  {
    date: "Jumat, 27 Mar",
    textDate: "2026-03-27",
    pickup: "Dewi Juniar",
    raise: ["Dzikri Ramadhan", "Najla Aulia", "M. Khaizuran"],
    lower: ["Orchidt Valentina", "Faiz Azzam", "Nadya Devi"],
    return: "Zianka Gading Putra",
  },
  // MINGGU 5
  {
    date: "Senin, 30 Mar",
    textDate: "2026-03-30",
    pickup: "Mia Putri Maharani",
    raise: ["Junaedy Bernares", "Freya Anindya", "Okta Sugi"],
    lower: ["Alisa Naya", "Muhammad Dannys", "Melanie Aiko"],
    return: "Nazril Arriyan Nauval",
  },
  {
    date: "Selasa, 31 Mar",
    textDate: "2026-03-31",
    pickup: "Tsania Nisa'i W.",
    raise: ["Zianka Gading", "Siti Fatonah", "Alvian Irhamsyah"],
    lower: ["Dewi Juniar", "Muhammad Wahyu", "Riani Novianti"],
    return: "M. Khaizuran Annadhif",
  },
  {
    date: "Rabu, 01 Apr",
    textDate: "2026-04-01",
    pickup: "Riani Novianti",
    raise: ["Abimasyah", "Dinda Faitul", "Faiz Azzam"],
    lower: ["Mia Putri", "Rifki Fakhrudin", "Laila Nabila"],
    return: "Junaedy Bernares V.",
  },
  {
    date: "Kamis, 02 Apr",
    textDate: "2026-04-02",
    pickup: "Siti Fatonah",
    raise: ["Muhammad Dannys", "Nayshila Lutfia", "Dzikri Ramadhan"],
    lower: ["Najla Aulia", "Okta Sugi", "Dewi Sekarsari"],
    return: "Alvian Irhamsyah",
  },
  {
    date: "Jumat, 03 Apr",
    textDate: "2026-04-03",
    pickup: "Dinda Faitul Fajri",
    raise: ["Nazril Arriyan", "Melanie Aiko", "M. Khaizuran"],
    lower: ["Tsania Nisa'i", "Zianka Gading", "Freya Anindya"],
    return: "Muhammad Dannys Anwar",
  },
  // MINGGU 6
  {
    date: "Senin, 06 Apr",
    textDate: "2026-04-06",
    pickup: "Laila Nabila Syafa",
    raise: ["Muhammad Wahyu", "Orchidt Valentina", "Junaedy Bernares"],
    lower: ["Nadya Devi", "Faiz Azzam", "Alisa Naya"],
    return: "Dzikri Ramadhan M.",
  },
  {
    date: "Selasa, 07 Apr",
    textDate: "2026-04-07",
    pickup: "Nayshila Lutfia",
    raise: ["Alvian Irhamsyah", "Dewi Juniar", "Rifki Fakhrudin"],
    lower: ["Siti Fatonah", "Abimasyah", "Riani Novianti"],
    return: "Okta Sugi Perwira",
  },
  {
    date: "Rabu, 08 Apr",
    textDate: "2026-04-08",
    pickup: "Nadya Devi Rusadi",
    raise: ["Okta Sugi", "Mia Putri", "Nazril Arriyan"],
    lower: ["Dinda Faitul", "M. Khaizuran", "Laila Nabila"],
    return: "Muhammad Wahyu S.",
  },
  {
    date: "Kamis, 09 Apr",
    textDate: "2026-04-09",
    pickup: "Freya Anindya Nabigha",
    raise: ["Dzikri Ramadhan", "Najla Aulia", "Zianka Gading"],
    lower: ["Melanie Aiko", "Muhammad Dannys", "Dewi Sekarsari"],
    return: "Faiz Azzam Zakaria",
  },
  {
    date: "Jumat, 10 Apr",
    textDate: "2026-04-10",
    pickup: "Melanie Aiko Viwi",
    raise: ["M. Khaizuran", "Tsania Nisa'i", "Muhammad Wahyu"],
    lower: ["Orchidt Valentina", "Junaedy Bernares", "Nayshila Lutfia"],
    return: "Rifki Fakhrudin",
  },
  // MINGGU 7
  {
    date: "Senin, 13 Apr",
    textDate: "2026-04-13",
    pickup: "Najla Aulia Rahmad",
    raise: ["Faiz Azzam", "Freya Anindya", "Abimasyah"],
    lower: ["Alisa Naya", "Alvian Irhamsyah", "Mia Putri"],
    return: "Zianka Gading Putra",
  },
  {
    date: "Selasa, 14 Apr",
    textDate: "2026-04-14",
    pickup: "Dewi Sekarsari",
    raise: ["Rifki Fakhrudin", "Riani Novianti", "Okta Sugi"],
    lower: ["Dewi Juniar", "Nazril Arriyan", "Siti Fatonah"],
    return: "M. Khaizuran Annadhif",
  },
  {
    date: "Rabu, 15 Apr",
    textDate: "2026-04-15",
    pickup: "Orchidt Valentina",
    raise: ["Junaedy Bernares", "Dinda Faitul", "Dzikri Ramadhan"],
    lower: ["Nadya Devi", "Muhammad Wahyu", "Tsania Nisa'i"],
    return: "Abimasyah An Nafi",
  },
  {
    date: "Kamis, 16 Apr",
    textDate: "2026-04-16",
    pickup: "Alisa Naya Elvani",
    raise: ["Zianka Gading", "Laila Nabila", "Muhammad Dannys"],
    lower: ["Najla Aulia", "Faiz Azzam", "Melanie Aiko"],
    return: "Nazril Arriyan Nauval",
  },
  {
    date: "Jumat, 17 Apr",
    textDate: "2026-04-17",
    pickup: "Dewi Juniar",
    raise: ["Nazril Arriyan", "Dewi Sekarsari", "M. Khaizuran"],
    lower: ["Nayshila Lutfia", "Rifki Fakhrudin", "Orchidt Valentina"],
    return: "Junaedy Bernares V.",
  },
  // MINGGU 8
  {
    date: "Senin, 20 Apr",
    textDate: "2026-04-20",
    pickup: "Mia Putri Maharani",
    raise: ["Muhammad Wahyu", "Siti Fatonah", "Alvian Irhamsyah"],
    lower: ["Freya Anindya", "Okta Sugi", "Dinda Faitul"],
    return: "Muhammad Dannys Anwar",
  },
  {
    date: "Selasa, 21 Apr",
    textDate: "2026-04-21",
    pickup: "Tsania Nisa'i W.",
    raise: ["Abimasyah", "Melanie Aiko", "Junaedy Bernares"],
    lower: ["Riani Novianti", "Zianka Gading", "Alisa Naya"],
    return: "Dzikri Ramadhan M.",
  },
  {
    date: "Rabu, 22 Apr",
    textDate: "2026-04-22",
    pickup: "Riani Novianti",
    raise: ["Muhammad Dannys", "Nadya Devi", "Faiz Azzam"],
    lower: ["Mia Putri", "M. Khaizuran", "Dewi Juniar"],
    return: "Alvian Irhamsyah",
  },
  {
    date: "Kamis, 23 Apr",
    textDate: "2026-04-23",
    pickup: "Siti Fatonah",
    raise: ["Okta Sugi", "Najla Aulia", "Rifki Fakhrudin"],
    lower: ["Laila Nabila", "Dzikri Ramadhan", "Orchidt Valentina"],
    return: "Muhammad Wahyu S.",
  },
  {
    date: "Jumat, 24 Apr",
    textDate: "2026-04-24",
    pickup: "Dinda Faitul Fajri",
    raise: ["M. Khaizuran", "Alisa Naya", "Nazril Arriyan"],
    lower: ["Dewi Sekarsari", "Abimasyah", "Tsania Nisa'i"],
    return: "Okta Sugi Perwira",
  },
  // MINGGU 9
  {
    date: "Senin, 27 Apr",
    textDate: "2026-04-27",
    pickup: "Laila Nabila Syafa",
    raise: ["Dzikri Ramadhan", "Nayshila Lutfia", "Muhammad Wahyu"],
    lower: ["Siti Fatonah", "Junaedy Bernares", "Freya Anindya"],
    return: "Faiz Azzam Zakaria",
  },
  {
    date: "Selasa, 28 Apr",
    textDate: "2026-04-28",
    pickup: "Nayshila Lutfia",
    raise: ["Alvian Irhamsyah", "Dinda Faitul", "Zianka Gading"],
    lower: ["Melanie Aiko", "Muhammad Dannys", "Nadya Devi"],
    return: "Rifki Fakhrudin",
  },
  {
    date: "Rabu, 29 Apr",
    textDate: "2026-04-29",
    pickup: "Nadya Devi Rusadi",
    raise: ["Faiz Azzam", "Riani Novianti", "M. Khaizuran"],
    lower: ["Najla Aulia", "Okta Sugi", "Mia Putri"],
    return: "Zianka Gading Putra",
  },
  {
    date: "Kamis, 30 Apr",
    textDate: "2026-04-30",
    pickup: "Freya Anindya Nabigha",
    raise: ["Junaedy Bernares", "Dewi Sekarsari", "Rifki Fakhrudin"],
    lower: ["Alisa Naya", "Nazril Arriyan", "Laila Nabila"],
    return: "M. Khaizuran Annadhif",
  },
  // MINGGU 10
  {
    date: "Jumat, 01 Mei",
    textDate: "2026-05-01",
    pickup: "Melanie Aiko Viwi",
    raise: ["Nazril Arriyan", "Orchidt Valentina", "Abimasyah"],
    lower: ["Dewi Juniar", "Dzikri Ramadhan", "Nayshila Lutfia"],
    return: "Abimasyah An Nafi",
  },
  {
    date: "Senin, 04 Mei",
    textDate: "2026-05-04",
    pickup: "Najla Aulia Rahmad",
    raise: ["Zianka Gading", "Tsania Nisa'i", "Muhammad Dannys"],
    lower: ["Siti Fatonah", "Muhammad Wahyu", "Riani Novianti"],
    return: "Junaedy Bernares V.",
  },
  {
    date: "Selasa, 05 Mei",
    textDate: "2026-05-05",
    pickup: "Dewi Sekarsari",
    raise: ["Muhammad Wahyu", "Mia Putri", "Faiz Azzam"],
    lower: ["Dinda Faitul", "Alvian Irhamsyah", "Melanie Aiko"],
    return: "Nazril Arriyan Nauval",
  },
  {
    date: "Rabu, 06 Mei",
    textDate: "2026-05-06",
    pickup: "Orchidt Valentina",
    raise: ["Okta Sugi", "Alisa Naya", "M. Khaizuran"],
    lower: ["Freya Anindya", "Junaedy Bernares", "Dewi Sekarsari"],
    return: "Muhammad Dannys Anwar",
  },
  {
    date: "Kamis, 07 Mei",
    textDate: "2026-05-07",
    pickup: "Alisa Naya Elvani",
    raise: ["Abimasyah", "Laila Nabila", "Dzikri Ramadhan"],
    lower: ["Nadya Devi", "Rifki Fakhrudin", "Orchidt Valentina"],
    return: "Muhammad Wahyu S.",
  },
  {
    date: "Jumat, 08 Mei",
    textDate: "2026-05-08",
    pickup: "Dewi Juniar",
    raise: ["Rifki Fakhrudin", "Najla Aulia", "Nazril Arriyan"],
    lower: ["Mia Putri", "Zianka Gading", "Tsania Nisa'i"],
    return: "Dzikri Ramadhan M.",
  },
  // MINGGU 11
  {
    date: "Senin, 11 Mei",
    textDate: "2026-05-11",
    pickup: "Mia Putri Maharani",
    raise: ["M. Khaizuran", "Dewi Juniar", "Okta Sugi"],
    lower: ["Alisa Naya", "Faiz Azzam", "Siti Fatonah"],
    return: "Alvian Irhamsyah",
  },
  {
    date: "Selasa, 12 Mei",
    textDate: "2026-05-12",
    pickup: "Tsania Nisa'i W.",
    raise: ["Junaedy Bernares", "Nayshila Lutfia", "Muhammad Dannys"],
    lower: ["Riani Novianti", "Abimasyah", "Najla Aulia"],
    return: "Okta Sugi Perwira",
  },
  {
    date: "Rabu, 13 Mei",
    textDate: "2026-05-13",
    pickup: "Riani Novianti",
    raise: ["Dzikri Ramadhan", "Melanie Aiko", "Muhammad Wahyu"],
    lower: ["Laila Nabila", "Nazril Arriyan", "Dinda Faitul"],
    return: "Faiz Azzam Zakaria",
  },
  {
    date: "Kamis, 14 Mei",
    textDate: "2026-05-14",
    pickup: "Siti Fatonah",
    raise: ["Alvian Irhamsyah", "Nadya Devi", "Zianka Gading"],
    lower: ["Dewi Sekarsari", "M. Khaizuran", "Freya Anindya"],
    return: "Rifki Fakhrudin",
  },
  {
    date: "Jumat, 15 Mei",
    textDate: "2026-05-15",
    pickup: "Dinda Faitul Fajri",
    raise: ["Muhammad Dannys", "Orchidt Valentina", "Junaedy Bernares"],
    lower: ["Melanie Aiko", "Okta Sugi", "Mia Putri"],
    return: "Zianka Gading Putra",
  },
  // MINGGU 12
  {
    date: "Senin, 18 Mei",
    textDate: "2026-05-18",
    pickup: "Laila Nabila Syafa",
    raise: ["Faiz Azzam", "Siti Fatonah", "Rifki Fakhrudin"],
    lower: ["Tsania Nisa'i", "Dzikri Ramadhan", "Dewi Juniar"],
    return: "M. Khaizuran Annadhif",
  },
  {
    date: "Selasa, 19 Mei",
    textDate: "2026-05-19",
    pickup: "Nayshila Lutfia",
    raise: ["Nazril Arriyan", "Alisa Naya", "Abimasyah"],
    lower: ["Nadya Devi", "Muhammad Wahyu", "Riani Novianti"],
    return: "Abimasyah An Nafi",
  },
];

// --- HELPER FUNCTION: GET WIB DATE ---
function getWIBDate() {
  const date = new Date();
  return new Date(date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
}

function getWIBDateString() {
  const wib = getWIBDate();
  const year = wib.getFullYear();
  const month = String(wib.getMonth() + 1).padStart(2, "0");
  const day = String(wib.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateClock() {
  const wib = getWIBDate();
  const timeStr = wib.toLocaleTimeString("id-ID", { hour12: false });
  const dateStr = wib.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const clockEl = document.getElementById("wibClock");
  if (clockEl) {
    clockEl.innerHTML = `
      ${timeStr} WIB<br>
      <span class="text-[10px] text-gray-500 font-normal">${dateStr}</span>
    `;
  }
}
setInterval(updateClock, 1000);
updateClock();

// --- FUNGSI RENDER (MENAMPILKAN DATA) ---
const container = document.getElementById("scheduleGrid");
const searchInput = document.getElementById("searchInput");
const roleFilter = document.getElementById("roleFilter");

function render(data) {
  // Pastikan container ada sebelum diisi
  if (!container) return;

  container.innerHTML = "";

  // Jika data kosong (tidak ada yang cocok saat search)
  if (data.length === 0) {
    container.innerHTML = `
          <div class="col-span-1 md:col-span-3 text-center py-20 flex flex-col items-center opacity-60">
              <i data-lucide="file-x" class="w-12 h-12 text-gray-400 mb-3"></i>
              <h3 class="font-bold text-gray-800">Data Tidak Ditemukan</h3>
          </div>
      `;
    lucide.createIcons();
    return;
  }

  const todayStr = getWIBDateString();

  data.forEach((item) => {
    const isToday = item.textDate === todayStr;

    // Formatter List Nama (Penaikan)
    const raiseList = item.raise
      .map(
        (n) =>
          `<div class="flex items-center gap-2 text-xs text-gray-600 font-medium py-0.5 border-l-2 border-transparent hover:border-merah-indo pl-2 transition-all">
          ${n}
       </div>`,
      )
      .join("");

    // Formatter List Nama (Penurunan)
    const lowerList = item.lower
      .map(
        (n) =>
          `<div class="flex items-center gap-2 text-xs text-gray-600 font-medium py-0.5 border-l-2 border-transparent hover:border-merah-indo pl-2 transition-all">
          ${n}
       </div>`,
      )
      .join("");

    // HTML Kartu
    const cardHtml = `
      <div class="schedule-card-wrapper opacity-0 translate-y-8" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.1">
          <div class="glass-card rounded-2xl p-0 h-full overflow-hidden relative transition-all duration-300 ${
            isToday ? "card-active" : "hover:border-red-200"
          }">
              
              ${
                isToday
                  ? `
                  <div class="absolute top-0 right-0 left-0 bg-merah-indo text-white text-[10px] font-bold py-1.5 z-20 flex justify-center items-center gap-2 animate-pulse-red shadow-lg">
                      <i data-lucide="flag" class="w-3 h-3 fill-current"></i> BERTUGAS HARI INI
                  </div>
              `
                  : ""
              }

              <!-- Header Kartu -->
              <div class="p-5 border-b border-gray-100 ${
                isToday ? "pt-10" : ""
              } relative overflow-hidden">
                  <!-- Dekorasi Bulat Halus -->
                  <div class="absolute -right-6 -top-6 w-24 h-24 bg-red-50 rounded-full opacity-50 z-0"></div>
                  
                  <div class="relative z-10 flex justify-between items-center">
                      <div>
                          <span class="text-[10px] font-bold uppercase tracking-widest ${
                            isToday ? "text-merah-indo" : "text-gray-400"
                          }">
                              ${item.date.split(",")[0]}
                          </span>
                          <h3 class="text-2xl font-extrabold text-gray-800 leading-none mt-1">
                              ${item.date.split(",")[1]}
                          </h3>
                      </div>
                      <div class="w-10 h-10 rounded-full flex items-center justify-center ${
                        isToday
                          ? "bg-red-100 text-merah-indo"
                          : "bg-gray-100 text-gray-400"
                      } icon-bg transition-colors">
                          <i data-lucide="${
                            isToday ? "shield-check" : "calendar"
                          }" class="w-5 h-5"></i>
                      </div>
                  </div>
              </div>

              <!-- Body Kartu -->
              <div class="p-5 relative">
                  <!-- Garis Timeline Merah -->
                  <div class="timeline-line"></div>

                  <!-- PAGI -->
                  <div class="relative pl-10 mb-6 group/item">
                      <div class="absolute left-0 top-1 w-11 h-11 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center z-10 shadow-sm group-hover/item:border-merah-indo transition-colors">
                          <i data-lucide="sun" class="w-5 h-5 text-merah-indo"></i>
                      </div>
                      
                      <div class="flex justify-between items-center mb-2">
                          <span class="text-xs font-bold text-white bg-merah-indo px-2 py-0.5 rounded shadow-sm">06:15</span>
                          <span class="text-[10px] font-bold text-gray-400 uppercase">Penaikan</span>
                      </div>
                      
                      <div class="bg-gray-50/50 rounded-lg p-2 border border-gray-100">
                          <div class="mb-2">
                              <p class="text-[10px] text-gray-400 font-bold uppercase">Pengambil Bendera</p>
                              <p class="text-sm font-bold text-gray-800 truncate">${
                                item.pickup
                              }</p>
                          </div>
                          <div>
                              <p class="text-[10px] text-gray-400 font-bold uppercase mb-1">Pasukan 3</p>
                              ${raiseList}
                          </div>
                      </div>
                  </div>

                  <!-- SORE -->
                  <div class="relative pl-10 group/item">
                      <div class="absolute left-0 top-1 w-11 h-11 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center z-10 shadow-sm group-hover/item:border-gray-400 transition-colors">
                          <i data-lucide="moon" class="w-5 h-5 text-gray-600"></i>
                      </div>

                       <div class="flex justify-between items-center mb-2">
                          <span class="text-xs font-bold text-white bg-gray-700 px-2 py-0.5 rounded shadow-sm">15:00</span>
                          <span class="text-[10px] font-bold text-gray-400 uppercase">Penurunan</span>
                      </div>

                      <div class="bg-gray-50/50 rounded-lg p-2 border border-gray-100">
                          <div class="mb-2">
                              <p class="text-[10px] text-gray-400 font-bold uppercase mb-1">Pasukan 3</p>
                              ${lowerList}
                          </div>
                          <div class="border-t border-dashed border-gray-200 pt-1 mt-1">
                              <p class="text-[10px] text-gray-400 font-bold uppercase">Pengembali Bendera</p>
                              <p class="text-sm font-bold text-gray-800 truncate">${
                                item.return
                              }</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="px-5 pb-5 mt-2">
              <a href="${generateGoogleCalendarLink(item)}" target="_blank" class="btn-calendar w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider group cursor-pointer">
                  <i data-lucide="calendar-plus" class="w-4 h-4 transition-transform group-hover:scale-110"></i>
                  Ingatkan Saya
              </a>
          </div>
          </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHtml);
  });

  // Re-init Icons & Animation
  lucide.createIcons();

  gsap.to(".schedule-card-wrapper", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
  });

  VanillaTilt.init(document.querySelectorAll(".schedule-card-wrapper"), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
    scale: 1.01,
  });

  // Auto Scroll ke Hari Ini
  const activeCard = document.querySelector(".card-active");
  if (activeCard) {
    setTimeout(() => {
      activeCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 1000);
  }
}

// --- FUNGSI FILTER ---
function filterSchedule() {
  const keyword = searchInput.value.toLowerCase();
  const role = roleFilter.value;

  const filtered = scheduleData.filter((item) => {
    let isMatch = false;

    // Logika Filter
    if (role === "all") {
      const fullText =
        `${item.date} ${item.pickup} ${item.raise.join(" ")} ${item.lower.join(" ")} ${item.return}`.toLowerCase();
      isMatch = fullText.includes(keyword);
    } else if (role === "pickup") {
      isMatch = item.pickup.toLowerCase().includes(keyword);
    } else if (role === "return") {
      isMatch = item.return.toLowerCase().includes(keyword);
    } else if (role === "raise") {
      isMatch = item.raise.some((nama) => nama.toLowerCase().includes(keyword));
    } else if (role === "lower") {
      isMatch = item.lower.some((nama) => nama.toLowerCase().includes(keyword));
    }

    return isMatch;
  });

  render(filtered);
}

if (searchInput && roleFilter) {
  searchInput.addEventListener("input", filterSchedule);
  roleFilter.addEventListener("change", filterSchedule);
}

// --- FUNGSI COUNTDOWN ---
function initCountdown() {
  const container = document.getElementById("countdownContainer");
  if (!container) return;

  const now = new Date();

  // Cari tugas berikutnya yang belum lewat
  const nextTask = scheduleData.find((item) => {
    const taskTime = new Date(`${item.textDate}T06:30:00`);
    return taskTime > now;
  });

  if (!nextTask) {
    container.innerHTML = `
      <div class="countdown-box">
        <h3 class="text-lg font-bold text-gray-800">Semua Tugas Selesai 🇮🇩</h3>
        <p class="text-sm text-gray-500">Sampai jumpa di periode berikutnya.</p>
      </div>
    `;
    container.classList.remove("hidden");
    gsap.to(container, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });
    return;
  }

  const targetDate = new Date(`${nextTask.textDate}T06:30:00`);

  // Interval Update
  setInterval(() => {
    const currentTime = new Date();
    const diff = targetDate - currentTime;

    const timerDisplay = document.getElementById("timerDisplay");

    if (diff <= 0) {
      if (timerDisplay) timerDisplay.innerHTML = "SEDANG BERTUGAS!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (timerDisplay) {
      timerDisplay.innerHTML = `
          <span class="text-3xl md:text-4xl timer-digit">${days}</span><span class="text-xs text-gray-400 uppercase mr-2 md:mr-4">Hari</span>
          <span class="text-3xl md:text-4xl timer-digit">${hours}</span><span class="text-xs text-gray-400 uppercase mr-2 md:mr-4">Jam</span>
          <span class="text-3xl md:text-4xl timer-digit">${minutes}</span><span class="text-xs text-gray-400 uppercase mr-2 md:mr-4">Mnt</span>
          <span class="text-3xl md:text-4xl timer-digit">${seconds}</span><span class="text-xs text-gray-400 uppercase">Dtk</span>
        `;
    }
  }, 1000);

  // Render Konten Awal Countdown
  container.innerHTML = `
    <div class="countdown-box">
      <div class="countdown-progress"></div>
      <div class="flex items-center gap-2 mb-1">
        <span class="animate-pulse w-2 h-2 bg-merah-indo rounded-full"></span>
        <span class="text-xs font-bold text-merah-indo uppercase tracking-widest">Jadwal Berikutnya</span>
      </div>
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">
        ${nextTask.date} <span class="font-normal text-gray-500">| Tim ${nextTask.pickup.split(" ")[0]}</span>
      </h3>
      <div id="timerDisplay" class="flex flex-wrap justify-center items-baseline gap-1">
        <span class="text-sm text-gray-400">Memuat waktu...</span>
      </div>
    </div>
  `;

  container.classList.remove("hidden");
  gsap.to(container, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.8,
  });
}

// --- FITUR 7: LOGIKA PRELOADER ---

function startPreloader() {
  // 1. Kunci Scroll Body
  document.body.classList.add("loading");

  // 2. Animasi Bendera Naik (GSAP)
  // Durasi 2.5 detik untuk naik dari bawah (bottom: 0) ke puncak (bottom: 70%)
  gsap.to("#movingFlag", {
    bottom: "65%",
    duration: 2.5,
    ease: "power2.inOut",
    onComplete: finishPreloader,
  });
}

function finishPreloader() {
  const preloader = document.getElementById("flagPreloader");
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("headerText");

  // 3. Hilangkan Preloader (Fade Out ke Atas)
  gsap.to(preloader, {
    yPercent: -100, // Geser ke atas layar
    duration: 1,
    ease: "expo.inOut",
    onComplete: () => {
      preloader.style.display = "none";
      document.body.classList.remove("loading");

      // 4. Trigger Animasi Masuk Konten Utama (Yang kode lama)
      // Kita panggil ulang animasi navbar & header biar pas timingnya
      gsap.fromTo(
        navbar,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      );
      gsap.fromTo(
        header,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      );
    },
  });
}

// Jalankan Preloader saat script dimuat
startPreloader();

// --- INISIALISASI HALAMAN ---
// Jalankan Render Awal
render(scheduleData);
initCountdown();

// // Animasi Header
// gsap.from("#navbar", { y: -80, opacity: 0, duration: 1, ease: "power3.out" });
// gsap.from("#headerText", {
//   scale: 0.9,
//   opacity: 0,
//   duration: 1,
//   delay: 0.3,
//   ease: "back.out(1.7)",
// });

setTimeout(() => render(scheduleData), 500);

// --- FITUR 4: PROGRESS BAR MINGGU BERJALAN ---

function initProgressBar() {
  // 1. Tentukan Tanggal Mulai & Selesai
  const startDate = new Date("2026-03-04T00:00:00");
  const endDate = new Date("2026-05-19T23:59:59");

  // 2. Ambil Waktu Sekarang (WIB)
  const now = getWIBDate();

  // 3. Hitung Durasi Total & Durasi Terlewat (dalam milidetik)
  const totalDuration = endDate - startDate;
  const timeElapsed = now - startDate;

  // 4. Hitung Persentase
  let percentage = (timeElapsed / totalDuration) * 100;

  // 5. Validasi Batas (Agar tidak minus atau lebih dari 100)
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  // 6. Update Tampilan (Dengan sedikit delay biar ada animasi)
  setTimeout(() => {
    const bar = document.getElementById("progressBar");
    const label = document.getElementById("progressLabel");

    if (bar && label) {
      bar.style.width = `${percentage}%`;
      label.innerText = `${Math.round(percentage)}% Perjalanan`;
    }
  }, 500);
}

// Panggil fungsi ini saat website dimuat
initProgressBar();

// --- HELPER FITUR 9: GENERATE LINK KALENDER ---
function generateGoogleCalendarLink(item) {
  // 1. Siapkan Data
  const title = encodeURIComponent(
    `🇮🇩 Piket Paskibra: Tim ${item.pickup.split(" ")[0]}`,
  );

  // Detail berisi daftar nama teman bertugas
  const details = encodeURIComponent(
    `Petugas Hari Ini:\n- Pengambil: ${item.pickup}\n- Naik: ${item.raise.join(", ")}\n- Turun: ${item.lower.join(", ")}\n- Kembali: ${item.return}\n\n*Jangan lupa atribut lengkap & datang tepat waktu!*`,
  );

  const location = encodeURIComponent("Lapangan Upacara Sekolah");

  // 2. Format Tanggal (YYYYMMDD)
  // item.textDate formatnya "2026-03-04" -> jadi "20260304"
  const dateClean = item.textDate.replace(/-/g, "");

  // 3. Set Jam (06:00 pagi sampai 18:00 sore)
  // Format Google: YYYYMMDDTHHmmss
  const startDate = `${dateClean}T060000`;
  const endDate = `${dateClean}T180000`;

  // 4. Susun Link Lengkap
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}&ctz=Asia/Jakarta`;
}

// --- FITUR 6: WIDGET CUACA REAL-TIME (JAKARTA TIMUR) ---

// --- FITUR 6: WIDGET CUACA REAL-TIME (JAKARTA PUSAT/UMUM) ---

async function initWeather() {
  const widget = document.getElementById("weatherWidget");
  const iconWrap = document.getElementById("weatherIconWrapper");
  const tempEl = document.getElementById("weatherTemp");
  const descEl = document.getElementById("weatherDesc");

  // Koordinat Jakarta Pusat (Monas)
  // Ini titik tengah yang biasa dipakai Google untuk "Cuaca Jakarta"
  const lat = -6.175;
  const lon = 106.865;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );
    const data = await response.json();
    const weather = data.current_weather;
    const code = weather.weathercode;
    const temp = Math.round(weather.temperature);

    let status = "Cerah";
    let isRain = false;
    let iconName = "sun";

    // Menerjemahkan Kode WMO (Standar BMKG/Internasional)
    // 0: Langit Cerah
    // 1-3: Berawan / Mendung
    // 45-48: Kabut
    // 51-55: Gerimis
    // 61-65: Hujan
    // 80-99: Hujan Lebat / Badai

    if (code === 0) {
      status = "Cerah";
      iconName = "sun";
    } else if (code >= 1 && code <= 3) {
      status = "Berawan";
      iconName = "cloud-sun"; // Ikon mendung dikit
    } else if (code >= 45 && code <= 48) {
      status = "Berkabut";
      iconName = "cloud-fog";
    } else if (code >= 51) {
      status = "⚠️ POTENSI HUJAN";
      isRain = true;
      iconName = "cloud-rain";
      if (code >= 95) status = "⛈️ BADAI PETIR";
    }

    // --- HAPUS SKELETON CLASS ---
    tempEl.classList.remove("skeleton", "w-16", "h-3", "mb-1");
    descEl.classList.remove("skeleton", "w-24", "h-2");

    // --- UPDATE DATA (Label jadi 'Jakarta' saja) ---
    tempEl.innerText = `${temp}°C Jakarta`;

    if (isRain) {
      widget.className =
        "mx-auto mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 weather-rain";
      descEl.innerText = `${status} - Sedia Jas Hujan!`;
    } else {
      widget.className =
        "mx-auto mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 weather-clear";
      descEl.innerText = `${status} - Kondusif`;
    }

    iconWrap.innerHTML = `<i data-lucide="${iconName}" class="w-5 h-5 icon-box"></i>`;
    lucide.createIcons();
  } catch (error) {
    console.log("Gagal memuat cuaca", error);
    tempEl.classList.remove("skeleton");
    tempEl.innerText = "Offline";
  }
}

// Panggil fungsi
initWeather();

// --- FITUR 10: QUOTES PAHLAWAN HARIAN ---

const heroQuotes = [
  {
    text: "Berikan aku 1000 orang tua, niscaya akan kucabut semeru dari akarnya. Berikan aku 10 pemuda niscaya akan kuguncangkan dunia.",
    author: "Ir. Soekarno",
  },
  {
    text: "Kurang cerdas dapat diperbaiki dengan belajar. Kurang cakap dapat dihilangkan dengan pengalaman. Namun tidak jujur itu sulit diperbaiki.",
    author: "Moh. Hatta",
  },
  {
    text: "Robek-robeklah badanku, potong-potonglah jasadku, tetapi jiwaku dilindungi benteng merah putih. Akan tetap hidup, tetap menuntut bela, siapapun lawan yang aku hadapi.",
    author: "Jendral Sudirman",
  },
  {
    text: "Cita-cita persatuan Indonesia itu bukan omong kosong, tetapi benar-benar didukung oleh kekuatan-kekuatan yang timbul pada akar sejarah bangsa kita sendiri.",
    author: "Moh. Yamin",
  },
  {
    text: "Pahlawan yang setia itu berkorban, bukan buat dikenal namanya, tetapi semata-mata membela cita-cita.",
    author: "Moh. Hatta",
  },
  {
    text: "Jangan memperbanyak lawan, tetapi perbanyaklah kawan.",
    author: "Bung Tomo",
  },
  {
    text: "Kemerdekaan hanyalah didapat dan dimiliki oleh bangsa yang jiwanya membara dengan tekad 'Merdeka, merdeka atau mati'!",
    author: "Ir. Soekarno",
  },
  {
    text: "Percaya dan yakinlah bahwa kemerdekaan satu negara yang didirikan di atas timbunan runtuhan ribuan jiwa, harta benda dari rakyat dan bangsanya tidak akan dapat dilenyapkan oleh manusia, siapa pun juga.",
    author: "Jendral Sudirman",
  },
];

function initQuote() {
  const container = document.getElementById("heroQuoteContainer");

  // Pilih quote secara acak setiap kali refresh
  const randomQuote = heroQuotes[Math.floor(Math.random() * heroQuotes.length)];

  container.innerHTML = `
    <div class="quote-card">
      <p class="text-gray-700 italic font-medium text-sm md:text-base leading-relaxed">
        "${randomQuote.text}"
      </p>
      <span class="quote-author">
        — ${randomQuote.author}
      </span>
    </div>
  `;

  // Animasi Muncul (Scroll Trigger sederhana)
  // Kita pakai timeout biar munculnya belakangan setelah jadwal
  setTimeout(() => {
    container.classList.remove("opacity-0", "translate-y-4");
  }, 1500);
}

// Panggil fungsi
initQuote();

// --- FITUR 11: THE COACH COMMANDER (AUTO-ACTIVE) ---

// Database Kalimat "Pedas" & Tegas Coach
const coachQuotes = [
  "Hei kamu! Iya kamu! Jangan Sampai Lari Dari Tugas!",
  "Ayo, jangan malas! Bendera itu berat, bukan buat main-main!",
  "Jangan main HP terus! Sudah Selesaikan Tugasnya?",
  "Semangat SPISIXFO! Kita bukan cuma jaga bendera, tapi juga nama baik tim!",
  "Siapa yang suruh istirahat?!",
  "Selalu Fokus Sama Bendera, Jangan Sampai Terkena Hujan!",
  "SIAPA YANG LARI DARI TUGAS?!!",
  "Anak Paskibra itu disiplin, bukan santai-santai!",
  "Disiplin adalah harga mati!",
  "Cek jadwal besok! Jangan sampai telat!",
  "Bendera itu sakral! Jangan sampai kotor atau rusak!",
  "Ingat, satu salah, semua menanggung!",
  "Selalu siap sedia, jangan sampai lengah!",
  "Hormat bendera itu pakai rasa, bukan asal nempel!",
  "Senyum! Paskibra harus ramah tapi tegas!",
];

// Elemen
const bubble = document.getElementById("coachBubble");
const textEl = document.getElementById("coachText");
const coachIcon = document.getElementById("coachIcon");
let autoLoop; // Variabel untuk interval otomatis

// Fungsi Utama Memunculkan Notif
function showCoachMessage() {
  // 1. Pilih Kata Acak
  const randomText =
    coachQuotes[Math.floor(Math.random() * coachQuotes.length)];
  textEl.innerText = randomText;

  // 2. Animasi Masuk (Bubble Pop + Icon Shake)
  bubble.classList.add("bubble-visible");
  coachIcon.classList.add("shake-active"); // Icon bergetar marah

  // Hapus kelas getar setelah animasi selesai biar bisa dipake lagi
  setTimeout(() => {
    coachIcon.classList.remove("shake-active");
  }, 500);

  // 3. Suara Notif "Pop" Halus (Opsional, visual aja udah cukup berisik)
  // const audio = new Audio('pop.mp3'); audio.play();

  // 4. Hilangkan otomatis setelah 5 detik
  setTimeout(() => {
    bubble.classList.remove("bubble-visible");
  }, 5000);
}

// Fungsi Loop Otomatis (Muncul terus-terusan secara acak)
function startCoachLoop() {
  // Waktu acak antara 10.000ms (10 detik) sampai 25.000ms (25 detik)
  // Biar gak terlalu spamming tapi tetep kerasa "diawasi"
  const randomInterval = Math.floor(
    Math.random() * (25000 - 10000 + 1) + 10000,
  );

  autoLoop = setTimeout(() => {
    showCoachMessage();
    startCoachLoop(); // Panggil diri sendiri lagi (Recursion)
  }, randomInterval);
}

// Trigger Manual (Kalau diklik user)
function forceTriggerCoach() {
  clearTimeout(autoLoop); // Reset timer otomatis biar gak tabrakan
  showCoachMessage();
  startCoachLoop(); // Jalankan lagi timer otomatisnya
}

// Mulai Loop saat web dibuka (Delay awal 3 detik)
setTimeout(() => {
  textEl.innerText = "Selamat datang di Web Digital SPISIXFO";
  bubble.classList.add("bubble-visible");

  // Refresh icon Lucide di dalam bubble baru
  lucide.createIcons();

  setTimeout(() => {
    bubble.classList.remove("bubble-visible");
    startCoachLoop(); // Mulai teror otomatis
  }, 4000);
}, 2000);
