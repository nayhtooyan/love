const startDate = new Date("2025-05-20");
const today = new Date();
const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

const notes = [
  { text: "Day 1: I love your smile more than sunshine 🌞" },
  { text: "Day 2: You make every day feel magical 💫" },
  { text: "Day 3: Your laugh is my favorite melody 🎶" },
  { text: "Day 4: With you, every moment becomes a memory ❤️" },
  { text: "Day 5: I still get butterflies just seeing you 😍" },
  { text: "Day 6: You are the dream I never want to wake up from 🌙" },
  { text: "Day 7: Loving you is the best decision I ever made 💍", gif: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" },
  {
    text: "💖 Surprise Final Note: I want to spend the rest of my life loving you. Will you be mine forever?",
    gif: "https://media.giphy.com/media/xT0GqeSlGSRQut4VOs/giphy.gif",
    surprise: true
  }
];

const notesContainer = document.getElementById("notes");

notes.forEach((note, index) => {
  const day = index + 1;
  const isUnlocked = diffDays >= index;

  const button = document.createElement("button");
  button.innerHTML = isUnlocked ? `Day ${day} 💌` : `Day ${day} 🔒`;
  button.disabled = !isUnlocked;

  if (isUnlocked) {
    button.addEventListener("click", () => showNote(note));
  }

  notesContainer.appendChild(button);
});

function showNote(note) {
  const noteText = document.getElementById("noteText");
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popupContent");

  noteText.innerHTML = `<p>${note.text}</p>`;

  if (note.gif) {
    noteText.innerHTML += `<img src="${note.gif}" alt="Love GIF"/>`;
  }

  if (note.surprise) {
    popupContent.classList.add("surprise");
  } else {
    popupContent.classList.remove("surprise");
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// Music Toggle
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "🔇 Pause Music";
  } else {
    music.pause();
    musicBtn.innerText = "🔊 Play Music";
  }
});

// ❤️ Floating Heart Animation
function spawnHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.querySelector(".heart-container").appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(spawnHeart, 500);

const countdownTimer = document.getElementById("countdownTimer");

function updateCountdown() {
  const startDate = new Date("2025-05-20");
  const now = new Date();
  const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  const nextDay = new Date(startDate.getTime() + (diffDays + 1) * 24 * 60 * 60 * 1000);
  const timeLeft = nextDay - now;

  if (timeLeft > 0) {
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    countdownTimer.innerText = `⏳ Next note unlocks in ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownTimer.innerText = "🎉 A new note is ready now!";
  }
}

updateCountdown();
setInterval(updateCountdown, 1000); // updates every second

