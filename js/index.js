const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  let timerId = null;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const refBody = document.body;

  const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
  };
  
  function changeColor () {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.background = color;
  };

  function handleClickStart (){
      timerId = setInterval(changeColor, 500);
      ref.startBtn.disabled = true;
  };

  function handleClickStop (){
    clearInterval(timerId);
};

  refs.startBtn.addEventListener('click', handleClickStart);
  refs.stopBtn.addEventListener('click', handleClickStop);