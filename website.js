let download;

window.addEventListener("load", () => {
  download = function() {
    let downloadButton = document.getElementById("download-button");
    downloadButton.remove();

    let mainText = document.getElementById("main-text");
    mainText.innerText = "april fools";

    setTimeout(() => {
      window.location.href = "https://bit.ly/3maC10B";
    }, 1500);
  }
})
