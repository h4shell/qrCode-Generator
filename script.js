const textArea = document.querySelector("#textarea")

function qr(link) {
  var qrcode = new QRCode(document.querySelector("#qrcode"), {
    text: link,
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  })
}

textArea.addEventListener("input", () => {
  setTimeout(() => {
    try {
      document.querySelector('canvas').remove()
      document.querySelector('img').remove()
    } catch (error) {
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }

    if (textArea.value === "") {
      textArea.value = window.location.href
    }

    qr(textArea.value);

  }, 500);


})

window.addEventListener("load", () => {
  textArea.value = window.location.href
  qr(textArea.value)
})