let onDownload;

window.addEventListener("load", () => {
  onDownload = function() {
    let main = document.getElementById("main");

    let downloadButton = document.getElementById("download-button");
    downloadButton.remove();

    let mainText = document.getElementById("main-text");
    mainText.innerText = "april fools";

    setTimeout(() => {
      mainText.remove();

      document.body.style.backgroundColor = "rgb(0, 0, 0)";
      document.title = "Rickroll ;)";

      let specialVideo = document.createElement("VIDEO");
      specialVideo.autoplay = true;
      specialVideo.style.width = "100%";
      specialVideo.style.height = "100%";
      let specialVideoSource = document.createElement("SOURCE");
      specialVideoSource.src = "special_video.mp4";
      specialVideoSource.type = "video/mp4";
      specialVideo.appendChild(specialVideoSource);
      specialVideo.onended = () => {
        window.close();
      };


      main.appendChild(specialVideo);
    }, 1500);
  }
});
