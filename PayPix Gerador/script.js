const payloadAleatoria = "SUA CHAVE PIX AQUI";

let qrInstance;

function gerarQRCode() {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.classList.add('expanded');
  qrContainer.innerHTML = "";
  qrInstance = new QRCode(qrContainer, {
    text: payloadAleatoria,
    width: 220,
    height: 220,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H,
  });

  const pixcodeDiv = document.getElementById("pixcode");
  pixcodeDiv.textContent = payloadAleatoria;
  pixcodeDiv.classList.add('visible');
}

function copiarCodigo() {
  const pixcodeDiv = document.getElementById("pixcode");
  if (!pixcodeDiv.textContent) return;
  navigator.clipboard.writeText(pixcodeDiv.textContent).then(() => {
    alert("Código PIX copiado para a área de transferência!");
  });
}
