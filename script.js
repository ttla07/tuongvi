function checkLogin() {
  var user = document.getElementById("username").value.trim();
  var pass = document.getElementById("password").value.trim();
  if (user === "k24a1" && pass === "2025") {
    document.getElementById("login-container").style.display = "none";
    var videoContainer = document.getElementById("video-container");
    var video = document.getElementById("myVideo");
    var playButton = document.getElementById("play-button");
    var thumbnail = document.getElementById("thumbnail");

    videoContainer.style.display = "flex";
    video.muted = false;
    video.volume = 1.0;

    video.play().then(() => {
      playButton.style.display = "none";
      thumbnail.style.display = "none";
    }).catch(() => {
      playButton.style.display = "block";
    });

    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();

    video.onplay = () => thumbnail.style.display = "none";
    video.onended = () => videoContainer.style.display = "none";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
}

function playVideo() {
  var video = document.getElementById("myVideo");
  var thumbnail = document.getElementById("thumbnail");
  video.muted = false;
  video.volume = 1.0;
  video.play();
  thumbnail.style.display = "none";
  document.getElementById("play-button").style.display = "none";
}

/* ❤️ Hiệu ứng trái tim bay */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);
