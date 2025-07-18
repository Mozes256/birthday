function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // between 2–5 seconds
  heart.style.fontSize = Math.random() * 20 + 10 + "px"; // 10px – 30px

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Start hearts falling when page loads
setInterval(createHeart, 300);
s