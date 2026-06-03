function startJourney(){
    // Ocultar botão inicial para não haver duplicação de cliques
    let btnHero = document.querySelector('.hero .btn');
    if(btnHero) {
        btnHero.style.display = 'none';
    }
    
    document.getElementById('progressWrap').classList.remove('hidden');
    document.getElementById('s1').classList.remove('hidden');
    document.getElementById('s1').scrollIntoView({behavior:'smooth'});
    update(1);
}

function showStep(n){
    // Esconde o botão do passo anterior para evitar cliques duplos
    let btnAnterior = document.querySelector('#s' + (n - 1) + ' .btn');
    if(btnAnterior) {
        btnAnterior.style.display = 'none';
    }

    document.getElementById('s'+n).classList.remove('hidden');
    document.getElementById('s'+n).scrollIntoView({behavior:'smooth'});
    update(n);
}

function update(n){
    document.getElementById('progressText').innerText = n + ' de 5 etapas';
    document.getElementById('bar').style.width = (n * 20) + '%';
}

document.getElementById("fontToggle").addEventListener("click", function(){
    document.body.classList.toggle("large");
});
