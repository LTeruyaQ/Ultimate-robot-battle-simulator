window.addEventListener("load", function () {
const audio = this.document.querySelector('audio');
audio.volume = 0.5
audio.loop = true;
audio.play();
});