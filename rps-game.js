  let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  lose:0,
  ties:0

    };
  updatescore();

    function updatescore(){
      document.querySelector('.js-score').innerHTML=`wins:${score.wins}
  lose:${score.lose}
  ties:${score.ties}`;
    }
  function play(){

  const randomnum=Math.random();
  let computermove='';
  if(randomnum>=0&&randomnum<1/3){
  computermove='rock';

  }
  else if(randomnum>=1/3&&randomnum<2/3){
  computermove='paper';
  }
  else if(randomnum>=2/3&&randomnum<1){
  computermove='scissor';
  }
  return computermove;
  }
  function move(player){
  const computermove=play();
  let out='';
  if(player==='rock'){
  if(computermove==='rock'){
  out= 'the game tied';
  }
  else if(computermove==='paper'){
  out='you lose';
  }
  else if (computermove==='scissor'){
    out='you win';
  }

  }
  else if(player==='paper'){
  if(computermove==='rock'){
  out='you win';
  }
  else if(computermove==='paper'){
  out='the game tied'
  }
  else if(computermove==='scissor'){
  out='you lose'
  }

  }
  else if(player==='scissor'){
  if(computermove==='rock'){
    out='you lose';
  }
  else if(computermove==='paper'){
    out='you win';
  }
  else if(computermove==='scissor'){
    out='the game tied';
  }
  }
  if(out==='you win'){
  score.wins+=1;
  }
  else if(out==='you lose'){
  score.lose+=1;
  }
  else if(out==='the game tied'){
  score.ties+=1;
  }
  function view(){
    document.querySelector('.results').innerHTML=`${out}`; 
      document.querySelector('.js-view ').innerHTML=`you picked <img src="${player}-emoji.png"> computerpicked <img src="${computermove}-emoji.png"> `;
  }


  localStorage.setItem('score',JSON.stringify(score));
    
  updatescore();
  view();

  }
