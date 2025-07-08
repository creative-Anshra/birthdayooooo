function showVideo() {
  document.getElementById("videoSection").style.display = "block";
  document.getElementById("giftBtn").style.display = "inline-block";

  const video = document.getElementById("surpriseVideo");
  video.play();
}

function showMessage() {
  document.getElementById("giftMessage").style.display = "block";
}