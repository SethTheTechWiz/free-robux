let onDownload;

window.addEventListener("load", () => {
  onDownload = function() {
    let main = document.getElementById("main");

    let downloadButton = document.getElementById("download-button");
    downloadButton.remove();

    let mainText = document.getElementById("main-text");
    mainText.innerText = "april fools";

    setTimeout(() => {
      let options =
      "width=" + String(Math.floor(screen.width / 2)) +
      ",height=" + String(Math.floor(screen.height / 2)) +
      ",left=" + String(Math.floor(screen.width / 4)) +
      ",top=" + String(Math.floor(screen.height / 4));

      let specialVideo = window.open("special_video.mp4", "_blank", options);
    }, 1500);
  }
});
