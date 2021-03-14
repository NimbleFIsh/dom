import './style.css';

window.onload = () => {
  let gamePole, lastPos = null, pos;

  function randomColor() {
    let letters = '0123456789ABCDEF', color = '#';
    do for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]; while(color === '#646464');
    return color;
  }

  setInterval(() => {
    gamePole = document.getElementById('pole_container').children;
    gamePole.forEach((pole, index) => {
      pole.removeEventListener('click', () => {});
      if (pole.classList.contains('goblin')) {
        pole.classList.remove('goblin')
        lastPos = index;
      }
    });
    do pos = Math.floor(Math.random() * Math.floor(gamePole.length)); while (pos === lastPos);
    gamePole[pos].classList.add('goblin');
    gamePole[pos].addEventListener('click', (e) => {
      console.log(e.target.classList);
      if (e.target.classList.contains('goblin')) {
        document.getElementById('count').textContent = Number(document.getElementById('count').textContent) + 1;
        document.getElementById('count').style.color = randomColor();
        gamePole[pos].classList.remove('goblin');
      }
    });
  }, 800);
}