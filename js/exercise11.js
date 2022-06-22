export default function webcamContaint() {
  if (navigator.mediaDevices.getUserMedia) {
    let webcam = navigator.mediaDevices.getUserMedia({
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      }
    })

    webcam.then(function (mediaStream) {
      let $video = document.createElement("video")
      $video.srcObject = mediaStream
      $video.play()
      document.body.querySelector(".video").insertAdjacentElement("afterbegin", $video)
    });

    webcam.catch((err) => {
      const $error = document.createElement("p")
      $error.textContent = "Ocurrió un Error"
      document.body.querySelector(".video").insertAdjacentElement("afterend", $error)
    })
  }
}