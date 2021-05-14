import FontFaceObserver from 'fontfaceobserver';

const Fonts = (): void => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Archivo:300,400,500,700&display=swap';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const archivo = new FontFaceObserver('Archivo');

  archivo.load().then(() => {
    document.documentElement.classList.add('archivo');
  });
};

export default Fonts;