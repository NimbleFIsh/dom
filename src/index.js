import './style.css';

window.onload = () => {
  let game,
      gamePole,
      lastPos = null,
      pos,
      missing = 0;

  function clkListen(e){
    if (e.target.classList.contains('goblin')) {
      document.getElementById('count').textContent = Number(document.getElementById('count').textContent) + 1;
      document.getElementById('count').style.color = '#' + Math.floor(Math.random() * 2048).toString(16);
      gamePole[pos].classList.remove('goblin');
    }
  }

  const gameOver = () => { clearInterval(game); alert('Вы проиграли!'); }

  game = setInterval(() => {
    document.getElementById('miss').innerText = missing;
    if (missing === 5) gameOver();
    gamePole = document.getElementById('pole_container').children;
    gamePole.forEach((pole, index) => {
      pole.removeEventListener('click', clkListen);
      if (pole.classList.contains('goblin')) {
        missing++;
        pole.classList.remove('goblin');
        lastPos = index;
      }
    });
    do pos = Math.floor(Math.random() * gamePole.length);
    while (pos === lastPos);
    gamePole[pos].classList.add('goblin');
    gamePole[pos].addEventListener('click', clkListen);
  }, 800);
};
