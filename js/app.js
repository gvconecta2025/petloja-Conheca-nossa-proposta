function startJourney(){
    let btnHero = document.querySelector('.hero .btn');
    if(btnHero) {
        btnHero.style.display = 'none';
    }
    
    let wrap = document.getElementById('progressWrap');
    if(wrap) wrap.classList.remove('hidden');
    
    let s1 = document.getElementById('s1');
    if(s1) {
        s1.classList.remove('hidden');
        s1.scrollIntoView({behavior:'smooth'});
    }
    
    update(1);

    if(typeof gtag !== 'undefined') {
        gtag('event', 'funil_iniciado', {
            'event_category': 'Diagnostico',
            'event_label': 'Passo 1'
        });
    }
}

function showStep(n){
    let btnAnterior = document.querySelector('#s' + (n - 1) + ' .btn');
    if(btnAnterior) {
        btnAnterior.style.display = 'none';
    }

    let sNext = document.getElementById('s'+n);
    if(sNext) {
        sNext.classList.remove('hidden');
        sNext.scrollIntoView({behavior:'smooth'});
    }
    
    update(n);

    if(typeof gtag !== 'undefined') {
        gtag('event', 'etapa_concluida', {
            'event_category': 'Diagnostico',
            'event_label': 'Passo ' + n,
            'valor_etapa': n
        });
    }
}

function update(n){
    let txt = document.getElementById('progressText');
    if(txt) txt.innerText = n + ' de 5 etapas';
    
    let bar = document.getElementById('bar');
    if(bar) bar.style.width = (n * 20) + '%';
}

document.addEventListener("DOMContentLoaded", function() {
    let fontBtn = document.getElementById("fontToggle");
    if(fontBtn) {
        fontBtn.addEventListener("click", function(){
            document.body.classList.toggle("large");
        });
    }
});
