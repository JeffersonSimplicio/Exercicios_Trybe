window.onload = () => {
  function setBackgroundColor(color) {
    let body = document.querySelector('body');
    body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }

  function setFontColor(color) {
    let body = document.querySelector('body');
    body.style.color = color;
    localStorage.setItem('fontColor', color);
  }

  function setFontSize(size) {
    let body = document.querySelector('body');
    body.style.fontSize = size;
    localStorage.setItem('fontSize', size);
  }

  function setLineHeight(height) {
    let body = document.querySelector('body');
    body.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
  }

  function setFontFamily(family) {
    let body = document.querySelector('body');
    body.style.fontFamily = family;
    localStorage.setItem('fontFamily', family);
  }

  // Mudança de background-color
  let backgroundColorButton = document.querySelectorAll('#background-color>button');
  for (let i = 0; i < backgroundColorButton.length; i += 1) {
    backgroundColorButton[i].addEventListener('click', (event) => {
      setBackgroundColor(event.target.value);
    });
  }

  // Mudança da cor da fonte
  let fontColorButton = document.querySelectorAll('#font-colo>button');
  for (let i = 0; i < fontColorButton.length; i += 1) {
    fontColorButton[i].addEventListener('click', (event) => {
      setFontColor(event.target.value);
    });
  }

  // Mudança do tamanho da fonte
  let fontSizeButton = document.querySelectorAll('#font-size>button');
  for (let i = 0; i < fontSizeButton.length; i += 1) {
    fontSizeButton[i].addEventListener('click', (event) => {
      setFontSize(event.target.innerText);
    });
  }

  // Mudança do espaçamento entre linhas
  let lineHeightButton = document.querySelectorAll('#line-height>button');
  for (let i = 0; i < lineHeightButton.length; i += 1) {
    lineHeightButton[i].addEventListener('click', (event) => {
      setLineHeight(event.target.innerText);
    });
  }

  // Mudança na familia da fonte
  let fontFamilyButton = document.querySelectorAll('#font-family>button');
  for (let i = 0; i < fontFamilyButton.length; i += 1) {
    fontFamilyButton[i].addEventListener('click', (event) => {
      setFontFamily(event.target.innerText);
    });
  }

  // Coloca as cores ao reiniciar a pagina
  function startup() {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if(backgroundColor !== null) {
      setBackgroundColor(backgroundColor);
    }
    let fontColor = localStorage.getItem('fontColor');
    if(fontColor !== null) {
      setFontColor(fontColor);
    }
    let fontSize = localStorage.getItem('fontSize');
    if(fontSize !== null) {
      setFontSize(fontSize);
    }
    let lineHeight = localStorage.getItem('lineHeight')
    if (lineHeight !== null) {
      setLineHeight(lineHeight);
    }
    let fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily !== null) {
      setFontFamily(fontFamily);
    }
  }
  startup();
}