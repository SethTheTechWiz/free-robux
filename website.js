let onDownload;

window.addEventListener("load", () => {
  onDownload = function() {
    let main = document.getElementById("main");

    let downloadButton = document.getElementById("download-button");
    downloadButton.remove();

    let mainText = document.getElementById("main-text");
    mainText.innerText = "april fools";

    setTimeout(() => {
      window.close();
    }, 1500);
  }
});
