const palavradez = document.querySelector('#palavra-dez');
const palavranove = document.querySelector('#palavra-nove');
const palavraoito = document.querySelector('#palavra-oito');
const palavrasete = document.querySelector('#palavra-sete');
const palavraseis = document.querySelector('#palavra-seis');
const palavracinco = document.querySelector('#palavra-cinco');
const palavraquatro = document.querySelector('#palavra-quatro');
const palavratres = document.querySelector('#palavra-tres');
const palavradois = document.querySelector('#palavra-dois');
const palavraum = document.querySelector('#palavra-um');
let audioen = document.querySelector('.audio1');
let audiobr = document.querySelector('.audio2');
let palavraingles = document.querySelector('.palavra-ingles');
let descingles = document.querySelector('.desc-ingles');
let palavrabr = document.querySelector('.palavra-br');
let descbr = document.querySelector('.desc-br');
const frase = document.querySelector('.segunda-sessao');
const btn = document.querySelector('#botao');
const modal = document.querySelector('#modal');
let caixafrase = true;
const playen1 = new Audio ('./audio/Handkerchief.mp3');
const playbr1 = new Audio ('./audio/Lenço.mp3');
const playen2 = new Audio ('./audio/Consciousness.mp3');
const playbr2 = new Audio ('./audio/Consciência.mp3');
const playen3 = new Audio ('./audio/Lieutenent.mp3');
const playbr3 = new Audio ('./audio/Tenente.mp3');
const playen4 = new Audio ('./audio/Mischievous.mp3');
const playbr4 = new Audio ('./audio/Pernicioso.mp3');
const playen5 = new Audio ('./audio/Receipt.mp3');
const playbr5 = new Audio ('./audio/Recibo.mp3');
const playen6 = new Audio ('./audio/Worcestershire.mp3');
const playbr6 = new Audio ('./audio/Molho.mp3');
const playen7 = new Audio ('./audio/Wristwatch.mp3');
const playbr7 = new Audio ('./audio/Relógio de Pulso.mp3');
const playen8 = new Audio ('./audio/Synchronicity.mp3');
const playbr8 = new Audio ('./audio/Sincronicidade.mp3');
const playen9 = new Audio ('./audio/Discombobulate.mp3');
const playbr9 = new Audio ('./audio/Descombobular.mp3');
const playen10 = new Audio ('./audio/Ubiquitous.mp3');
const playbr10 = new Audio ('./audio/Onipresente.mp3');
let audioAtual = null;

function reproduzirAudio(audio){
    if (audioAtual !== null) {
        audioAtual.pause();
    }
    audio.load();
    audio.play();
    audioAtual = audio;
}

function FecharAbrirFrase(){
    if(caixafrase){
        frase.style.visibility = "visible";
        caixafrase = false;
    }
    else{
        frase.style.visibility = "hidden";
        caixafrase = true;
    }
}

btn.addEventListener('click', (o)=>{
    FecharAbrirFrase();
})

palavraum.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Handkerchief"
    descingles.textContent = 'A piece of paper or cloth used to clean your nose or eyes.'
    palavrabr.textContent = 'Lenço'
    descbr.textContent = 'Um pedaço de tecido ou pano usado para limpar o nariz e os olhos'
    frase.textContent = '“I have a handkerchief here if you need it.”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen1);
    })
    audioen.addEventListener('mouseout', function(){
        playen1.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr1);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr1.pause();
    })
})

palavradois.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Consciousness"
    descingles.textContent = 'Involuntary perception of the brain.'
    palavrabr.textContent = 'Consciência'
    descbr.textContent = 'Percepção involuntária do cérebro.'
    frase.textContent = '“I could feel my consciousness weighing down…”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen2);
    })
    audioen.addEventListener('mouseout', function(){
        playen2.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr2);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr2.pause();
    })
})

palavratres.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Lieutenant"
    descingles.textContent = 'someone who holds the place of authority for the person who really has it.'
    palavrabr.textContent = 'Tenente'
    descbr.textContent = 'alguém que ocupa o lugar de autoridade para quem realmente o possui.'
    frase.textContent = '“They immediately said: Of course, Lieutenant, Ill do whatever you want!”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen3);
    })
    audioen.addEventListener('mouseout', function(){
        playen3.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr3);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr3.pause();
    })
})

palavraquatro.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Mischievous"
    descingles.textContent = 'Someone bad.'
    palavrabr.textContent = 'Pernicioso(a)'
    descbr.textContent = 'Alguém mau.'
    frase.textContent = '"He was so mischievous."'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen4)
    })
    audioen.addEventListener('mouseout', function(){
        playen4.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr4);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr4.pause();
    })
})

palavracinco.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Receipt"
    descingles.textContent = 'Something you receive.'
    palavrabr.textContent = 'Recibo'
    descbr.textContent = 'Algo que você recebe.'
    frase.textContent = '“It looked like the old Japanese receipt…”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen5);
    })
    audioen.addEventListener('mouseout', function(){
        playen5.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr5);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr5.pause();
    })
})

palavraseis.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Worcestershire"
    descingles.textContent = 'Broth in which delicacies are sautéed, or which accompanies them.'
    palavrabr.textContent = 'Molho'
    descbr.textContent = 'Caldo em que se refogam iguarias, ou que as acompanha.'
    frase.textContent = '“It was like ordering a good Worcestershire on top of a plate full of food…”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen6);
    })
    audioen.addEventListener('mouseout', function(){
        playen6.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr6);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr6.pause();
    })
})

palavrasete.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Wristwatch"
    descingles.textContent = 'A watch that fits on the wrist.'
    palavrabr.textContent = 'Relógio de pulso'
    descbr.textContent = 'Um relógio que se coloca no pulso.'
    frase.textContent = '“I took out my wristwatch and looked at the time…”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen7);
    })
    audioen.addEventListener('mouseout', function(){
        playen7.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr7);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr7.pause();
    })
})

palavraoito.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Synchronicity"
    descingles.textContent = 'Two or more events happening simultaneously.'
    palavrabr.textContent = 'Sincronicidade'
    descbr.textContent = 'Dois ou mais eventos acontecendo simultaneamente.'
    frase.textContent = '“The other helmsman and I were in constant synchronicity…”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen8);
    })
    audioen.addEventListener('mouseout', function(){
        playen8.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr8);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr8.pause();
    })
})

palavranove.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Discombobulate"
    descingles.textContent = 'When someone is doing a series of wrong things.'
    palavrabr.textContent = 'Descombobular'
    descbr.textContent = 'Quando alguém está fazendo uma série de coisas erradas.'
    frase.textContent = '“The bomb was in the hands of Lucius, who is an extremely discombobulated guy…”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen9);
    })
    audioen.addEventListener('mouseout', function(){
        playen9.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr9);
    })
    audiobr.addEventListener('mouseout', function(){
        playbr9.pause();
    })
})

palavradez.addEventListener('click', (x)=>{
    modal.style.display = 'flex';
    palavraingles.textContent = "Ubiquitous"
    descingles.textContent = 'Something or a condition that is present everywhere.'
    palavrabr.textContent = 'Onipresente'
    descbr.textContent = 'Algo ou uma condição que está presente em todos os lugares.'
    frase.textContent = '“In fear, that creature seemed Ubiquitous…”'
    audioen.addEventListener('mouseover', function(){
        reproduzirAudio(playen10);
    })
    audioen.addEventListener('mouseout', function(){
        playen10.pause();
    })
    audiobr.addEventListener('mouseover', function(){
        reproduzirAudio(playbr10)
    })
    audiobr.addEventListener('mouseout', function(){
        playbr10.pause();
    })
})

modal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.style.display = 'none';
})