let onDownload;

window.addEventListener("load", () => {
  onDownload = function() {
    let main = document.getElementById("main");

    let downloadButton = document.getElementById("download-button");
    downloadButton.remove();

    let mainText = document.getElementById("main-text");
    mainText.innerText = "april fools";

    setTimeout(() => {
      mainText.style.display = "none";

      document.body.style.backgroundColor = "rgb(0, 0, 0)";

      let video = document.createElement("VIDEO");
      video.autoplay = true;
      video.controls = true;
      video.style.width = "100%";
      video.style.height = "100%";
      let videoSource = document.createElement("SOURCE");
      videoSource.src = "special_video.mp4";
      videoSource.type = "video/mp4";

      video.onplay = () => {
        document.title = "Rickroll ;)";
      }

      video.onended = () => {
        video.remove();
        
        mainText.style.color = "rgb(255, 255, 255)";
        mainText.innerText = "sorry, not sorry.";
        mainText.style.display = "inline";
      }

      video.appendChild(videoSource);
      main.appendChild(video);
    }, 1500);
  }
});
