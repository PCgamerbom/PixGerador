const payloadAleatoria = "00020101021126800014br.gov.bcb.pix01365bd3964c-554a-47f3-a192-2b66c86402ce0218Aleatorio opcional5204000053039865802BR5918EMANOEL R DA SILVA6004MAGE62070503***63046547";

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
