const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Format waktu untuk tampilan
function formatTime(elapsedTime) {
  const milliseconds = Math.floor(elapsedTime % 1000);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 99 ? milliseconds : (milliseconds > 9 ? "0" + milliseconds : "00" + milliseconds))
  );
}

// Memulai timer
function startTimer() {
  startTime = Date.now();
  elapsedTime = 0; // Reset waktu yang telah berlalu saat memulai

  timerInterval = setInterval(() => {
    elapsedTime += Date.now() - startTime; // Hitung waktu yang telah berlalu sejak interval terakhir
    startTime = Date.now(); // Reset waktu awal untuk interval berikutnya
    timerEl.textContent = formatTime(elapsedTime); // Perbarui tampilan timer
  }, 10); // Perbarui setiap 10 milidetik

  startButtonEl.disabled = true; // Nonaktifkan tombol Mulai
  stopButtonEl.disabled = false; // Aktifkan tombol Berhenti
}

// Menghentikan timer
function stopTimer() {
  clearInterval(timerInterval); // Hentikan interval timer
  startButtonEl.disabled = false; // Aktifkan tombol Mulai
  stopButtonEl.disabled = true; // Nonaktifkan tombol Berhenti
}

// Mengatur ulang timer
function resetTimer() {
  clearInterval(timerInterval); // Hentikan interval timer
  timerEl.textContent = "00:00:00"; // Reset tampilan timer
  elapsedTime = 0; // Reset waktu yang telah berlalu
  startButtonEl.disabled = false; // Aktifkan tombol Mulai
  stopButtonEl.disabled = true; // Nonaktifkan tombol Berhenti
}

// Menambahkan event listener ke tombol
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
