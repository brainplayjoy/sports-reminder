const cards = document.querySelectorAll('.team-card');
const removeAllBtn = document.getElementById('removeAllBtn');

cards.forEach(card => {

card.addEventListener('click',()=>{

card.classList.toggle('selected');

});

});

removeAllBtn.addEventListener('click',()=>{

document.querySelectorAll('.team-card').forEach(card=>{

card.classList.remove('selected');

});

});

const toggleBtn = document.getElementById('toggleTeams');
const extraTeams = document.getElementById('extraTeams');

toggleBtn.addEventListener('click',()=>{

if(extraTeams.style.display === 'grid'){

extraTeams.style.display='none';
toggleBtn.textContent='+ Show All Teams';

}else{

extraTeams.style.display='grid';
toggleBtn.textContent='− Hide Teams';

}

});
