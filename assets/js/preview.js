const videoPreview = document.querySelector("#jsPreview video");

function handlePreview() {
  videoPreview.play();
  videoPreview.muted = true;
}

function handlePreview2() {
  videoPreview.pause();
  videoPreview.currentTime = 0;
}

function init() {
  videoPreview.addEventListener("mouseenter", handlePreview);
  videoPreview.addEventListener("mouseleave", handlePreview2);
}

init();
