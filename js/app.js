const form = document.getElementById("generate_form")
const qr = document.getElementById('qrcode');


const generateSubmit = (event) => {
  event.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  const colorL = document.getElementById("colorLight")
  const colorD = document.getElementById('colorDark')

  hideResult();

  if (url === '') {
    console.log('invalid input')
    hideResult();
  }else {
    setTimeout(() => {

      showResult();
      generateQr(url, size);

      setTimeout(() => {

        const getUrl = qr.querySelector('img').src;

        downloadLink(getUrl);
      }, 50);
    }, 100);
  };
};

const generateQr = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
};

const hideResult = () => {
  qr.innerHTML = '';

  const btn = document.getElementById('downloadBtn');
  const arrow = document.getElementById('Arrow')

  btn.style.display = 'none';
  arrow.style.display = 'none';
};

const showResult = () => {
  const btn = document.getElementById('downloadBtn');
  const arrow = document.getElementById('Arrow')

  btn.style.display = 'block';
  arrow.style.display = 'block';
}


const downloadLink = (getUrl) => {

  const link = document.getElementById('downloadBtn');

  link.href = getUrl;
  link.download = 'qrcode';
};

hideResult();

form.addEventListener('submit', generateSubmit);
