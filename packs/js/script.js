function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key=${e.code}]`);
  const key = this.document.querySelector(`div[data-key=${e.code}]`);
  if (!audio) return; //stop the function if key didn't match

  key.classList.add("playing");
  audio.currentTime = 0; //repeat the sound before it has played completely by setting currentTime 0
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
