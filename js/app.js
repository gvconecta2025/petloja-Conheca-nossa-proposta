
function startJourney(){
 document.getElementById('progressWrap').classList.remove('hidden');
 document.getElementById('s1').classList.remove('hidden');
 document.getElementById('s1').scrollIntoView({behavior:'smooth'});
 update(1);
}
function showStep(n){
 document.getElementById('s'+n).classList.remove('hidden');
 document.getElementById('s'+n).scrollIntoView({behavior:'smooth'});
 update(n);
}
function update(n){
 document.getElementById('progressText').innerText=n+' de 5 etapas';
 document.getElementById('bar').style.width=(n*20)+'%';
}

