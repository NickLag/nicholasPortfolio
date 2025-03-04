let texto, bloco, linha, title, giro, azul, porra, p, lingua;
p = '#7d7d7d';
texto = "testeum";
bloco = "blocoum";
linha = "linhaum";
title = "titleum";
giro = 0;
azul = '#4772ff';
preto = 'black';
porra = 'porraazul';
lingua = 0;
doc = document.getElementById;

window.onload = function() {
    setTimeout(viadagem, 2500);
};

function viadagem() {
    document.getElementById('blocoum').style.opacity = "100%";
    document.getElementById('blocoum').style.animationDelay = "0ms";
}

function ladoum() {
    normal();
    texto = "testeum";
    bloco = "blocoum";
    linha = "linhaum";
    title = "titleum";
    selecionado();
}

function ladodois() {
    normal();
    texto = "testedois";
    bloco = "blocodois";
    linha = "linhadois";
    title = "titledois";
    selecionado();
}

function ladotres() {
    normal();
    texto = "testetres";
    bloco = "blocotres";
    linha = "linhatres";
    title = "titletres";
    selecionado();
}

function ladoquatro() {
    normal();
    texto = "testequatro";
    bloco = "blocoquatro";
    linha = "linhaquatro";
    title = "titlequatro";
    selecionado();
}

function selecionado() {
    document.getElementById(texto).style.color = azul;
    document.getElementById(texto).style.borderBottomColor = azul;
    document.getElementById(texto).style.fontWeight = "bolder";
    document.getElementById(bloco).style.display = "block";
    document.getElementById(bloco).style.animationName = "aparecer";
    document.getElementById(linha).style.animationName = "aparecer";
    document.getElementById(linha).style.display = "block";
    document.getElementById(title).style.animationName = "aparecer";
    document.getElementById(title).style.display = "block";
}

function normal() {
    document.getElementById(texto).style.color = preto;
    document.getElementById(texto).style.borderBottomColor = preto;
    document.getElementById(texto).style.fontWeight = "normal";
    document.getElementById(bloco).style.display = "none";
    document.getElementById(bloco).style.animationName = "none";
    document.getElementById(linha).style.animationName = "none";
    document.getElementById(linha).style.display = "none";
    document.getElementById(title).style.animationName = "none";
    document.getElementById(title).style.display = "none";
}


function porra2() {
    if (giro == 0){
        document.getElementById('porraazul').style.opacity = "100%";
        document.getElementById('porraamarela').style.opacity = "100%";
        document.getElementById(porra).style.animationDelay = "0ms";
        document.getElementById('porraazul').style.animationName = "encolher";
        document.getElementById('porraamarela').style.animationName = "encolher";
        document.getElementById('esquerda').style.animationName = "diminuir";
        document.getElementById('direita').style.animationName = "elevar";
        document.getElementById('blank').style.animationName = "elevar";
        document.getElementById('options').style.animationDelay = "0ms";
        document.getElementById('options').style.borderBottom = "1px solid #696969";
        document.getElementById('options').style.animationDuration = "1000ms";
        document.getElementById('options').style.height = "7.5%";
        document.getElementById('options').style.animationName = "doiselevar";
        document.getElementById('circulo').style.animationDuration = '750ms';
        document.getElementById('textos').style.animationDuration = '550ms';
        document.getElementById('textos').style.animationName = 'oi';
        document.getElementById('circulo').style.animationName = 'oi';
        document.getElementById('linguas').style.display = "none";
        document.getElementById('estudos').style.display = "none";
        giro = 1;
    } else if (giro == 1) {
        document.getElementById('porraazul').style.animationName = "desencolher";
        document.getElementById('porraamarela').style.animationName = "desencolher";
        document.getElementById('esquerda').style.animationName = "aumentar";
        document.getElementById('direita').style.animationName = "deselevar";
        document.getElementById('blank').style.animationName = "deselevar";
        document.getElementById('options').style.animationName = "doisdeselevar";
        document.getElementById('textos').style.animationDuration = '950ms';
        document.getElementById('textos').style.animationName = 'desoi';
        document.getElementById('circulo').style.animationName = 'desoi';
        document.getElementById('linguas').style.display = "block";
        document.getElementById('estudos').style.display = "block";
        giro = 0;
    }
}

function escuro() {
    azul = '#ffe224';
    preto = '#696969';
    porra = 'porraamarela';
    document.getElementById(porra).style.animationDelay = "0ms";
    document.getElementById('porraazul').style.display = "none";
    document.getElementById('porraamarela').style.display = "block";
    document.getElementById('testeum').style.color = p;
    document.getElementById('testedois').style.color = p;
    document.getElementById('testetres').style.color = p;
    document.getElementById('testequatro').style.color = p;
    document.getElementById('testeum').style.borderBottomColor = p;
    document.getElementById('testedois').style.borderBottomColor = p;
    document.getElementById('testetres').style.borderBottomColor = p;
    document.getElementById('testequatro').style.borderBottomColor = p;
    document.getElementById(texto).style.borderBottomColor = "#ffe224";
    document.getElementById(texto).style.color = '#ffe224';
    document.getElementById('luapreta').style.display = "none";
    document.getElementById('solazul').style.display = "none";
    document.getElementById('luaamarela').style.display = "block";
    document.getElementById('solbranco').style.display = "block";
    document.documentElement.style.setProperty("--fundo", "#212121");
    document.documentElement.style.setProperty("--corpo", "#272727");
    document.documentElement.style.setProperty("--borda", p);
    document.documentElement.style.setProperty("--azul", "#ffe224");
    document.documentElement.style.setProperty("--sombra", "#101010");
    document.documentElement.style.setProperty("--texto", p);
    document.documentElement.style.setProperty("--celular", "#212121");
}

function claro() {
    azul = '#4772ff';
    preto = 'black';
    porra = 'porraazul';
    document.getElementById(porra).style.animationDelay = "0ms";
    document.getElementById('porraamarela').style.display = "none";
    document.getElementById('porraazul').style.display = "block";
    document.getElementById('testeum').style.color = "black";
    document.getElementById('testedois').style.color = "black";
    document.getElementById('testetres').style.color = "black";
    document.getElementById('testequatro').style.color = "black";
    document.getElementById('testeum').style.borderBottomColor = "black";
    document.getElementById('testedois').style.borderBottomColor = "black";
    document.getElementById('testetres').style.borderBottomColor = "black";
    document.getElementById('testequatro').style.borderBottomColor = "black";
    document.getElementById(texto).style.borderBottomColor = "#4772ff";
    document.getElementById(texto).style.color = '#4772ff'
    document.getElementById('luapreta').style.display = "block";
    document.getElementById('solazul').style.display = "block";
    document.getElementById('luaamarela').style.display = "none";
    document.getElementById('solbranco').style.display = "none";
    document.documentElement.style.setProperty("--fundo", "snow");
    document.documentElement.style.setProperty("--corpo", "white");
    document.documentElement.style.setProperty("--borda", p);
    document.documentElement.style.setProperty("--azul", "#4772ff");
    document.documentElement.style.setProperty("--sombra", p);
    document.documentElement.style.setProperty("--texto", "black");
    document.documentElement.style.setProperty("--celular", "#fffdfd");
}

function ingles() {
    if (lingua == 0) {
        document.getElementById('pt').style.color = "var(--texto)";
        document.getElementById('en').style.color = "var(--azul)";
        document.documentElement.lang = 'en-US';
        document.getElementById('titleum').innerHTML = "About me";
        document.getElementById('testeum').innerHTML = "About me";
        document.getElementById('testedois').innerHTML = "Resume";
        document.getElementById('titledois').innerHTML = "Resume";
        document.getElementById('testequatro').innerHTML = "Contact";
        document.getElementById('titlequatro').innerHTML = "Contact";
        document.getElementById('dezessete').innerHTML = "-> 17 years";
        document.getElementById('curso').innerHTML = "-> Studying Systems Development at Novotec";
        document.getElementById('estudos').innerHTML = "-> Study at E. E. Canadá (High School)";
        document.getElementById('brazil').innerHTML = "São Paulo, Brazil";
        document.getElementById('phone').innerHTML = "Phone and E-mail";
        document.getElementById('tchau').innerHTML = "Phone: +55 (13) 99185-9107";
        document.getElementById('address').innerHTML = "Address";
        document.getElementById('soft').innerHTML = "Programs/Softwares";
        document.getElementById('word').innerHTML = "Word<br>(Advanced)";
        document.getElementById('excel').innerHTML = "Excel (Intermediate)";
        document.getElementById('powerpoint').innerHTML = "Power Point (Intermediate)";
        document.getElementById('photoshop').innerHTML = "Photoshop (Intermediate)";
        document.getElementById('bold').innerHTML = "English";
        document.getElementById('intermediate').innerHTML = "(Intermediate High)";
        document.getElementById('formacao').innerHTML = "Education Background";
        document.getElementById('inicioum').innerHTML = "Start - 2022 | 2024 End";
        document.getElementById('iniciodois').innerHTML = "Start - 2022 | 2024 End";
        document.getElementById('iniciotres').innerHTML = "Start - 2025";
        document.getElementById('em').innerHTML = "High School - E. E. Canadá";
        document.getElementById('nvtc').innerHTML = "Systems Development and Analysis - Novotec";
        document.getElementById('eng').innerHTML = "Software engineering";
        document.getElementById('conteudoum').innerHTML = "My name is Nicholas Lagareiro, I'm 17 years old, and I currently study at E. E. Canada (Santos) in the 3rd year of high school.<br>I also study at NovoTec (technical course integrated into high school) doing Systems Development and Analysis, ending in 2024. I currently have a temporary job as a Sound Operator/DJ at a buffet, but I'm open and looking for something permanent or freelance.<br>As a DJ, I operate light and sound equipment (soundboard and microphones) and also control the music and ambience of the place.<br>I'm also part of a band (<a class='perdido'>@purplehaze_banda</a>) as a bassist, backing vocalist and founder, I manage social media and also organize events with other bands.";
        document.getElementById('conteudodois').innerHTML = "My main objective is to graduate and start a Software Engineering college in the first semester of 2025. I also intend to go further in my field, and continue to always learn new languages.";
        document.getElementById('objj').innerHTML = "Objective";
        document.getElementById('apresentacao').innerHTML = "Introduction";
    }
    lingua = 1;
}

function portugues() {
    if (lingua == 1) {
        document.getElementById('pt').style.color = "var(--azul)";
        document.getElementById('en').style.color = "var(--texto)";
        document.documentElement.lang = 'pt-BR ';
        document.getElementById('titleum').innerHTML = "Sobre mim";
        document.getElementById('testeum').innerHTML = "Sobre mim";
        document.getElementById('testedois').innerHTML = "Resumo";
        document.getElementById('titledois').innerHTML = "Resumo";
        document.getElementById('testequatro').innerHTML = "Contato";
        document.getElementById('titlequatro').innerHTML = "Contato";
        document.getElementById('dezessete').innerHTML = "-> 17 anos";
        document.getElementById('curso').innerHTML = "-> Cursando Desenvolvimento de Sistemas no Novotec";
        document.getElementById('estudos').innerHTML = "-> Estuda na E. E. Canadá (3° Ano do Ensino Médio)";
        document.getElementById('brazil').innnerHTML = "São Paulo, Brasil";
        document.getElementById('phone').innerHTML = "Telefone & E-mail";
        document.getElementById('tchau').innerHTML = "Telefone: +55 (13) 99185-9107";
        document.getElementById('address').innerHTML = "Endereço";
        document.getElementById('soft').innerHTML = "Ferramentas/Softwares";
        document.getElementById('word').innerHTML = "Word<br>(Avançado)";
        document.getElementById('excel').innerHTML = "Excel (Intermediário)";
        document.getElementById('powerpoint').innerHTML = "Power Point (Intermediário)";
        document.getElementById('photoshop').innerHTML = "Photoshop (Intermediário)";
        document.getElementById('bold').innerHTML = "English";
        document.getElementById('intermediate').innerHTML = "(Intermediário avançado)";
        document.getElementById('formacao').innerHTML = "Formação";
        document.getElementById('inicioum').innerHTML = "Início - 2022 | 2024 Fim";
        document.getElementById('iniciodois').innerHTML = "Início - 2022 | 2024 Fim";
        document.getElementById('iniciotres').innerHTML = "Início - 2025";
        document.getElementById('em').innerHTML = "Ensino Médio - E. E. Canadá";
        document.getElementById('nvtc').innerHTML = "Desenvolvimento e Análise de Sistemas - Novotec";
        document.getElementById('eng').innerHTML = "Engenharia de Software";
        document.getElementById('conteudoum').innerHTML = 'Me chamo Nicholas Lagareiro, tenho 17 anos, e atualmente estudo na E. E. Canadá (Santos) cursando o 3° ano do Ensino Médio.<br>Faço parte do NovoTec (curso técnico integrado ao ensino médio) e curso Desenvolvimento e Análise de Sistemas, com término em 2024. Atualmente possuo um emprego temporário como Operador de som/DJ em um buffet, mas estou aberto e à procura de algo fixo.<br>No meu cargo de DJ, opero aparelhos de luz e som (mesa de som e microfones) e também controlo a música e ambientação do local.<br>Faço parte também de uma banda (<a class="perdido">@purplehaze_banda</a>) como baixista, backing vocal e fundador, nela, gerencio as mídias sociais e organizo também eventos com outras bandas.';
        document.getElementById('conteudodois').innerHTML = "Possuo como objetivo principal me formar e iniciar uma faculdade de Engenharia de Software no primeiro semestre de 2025. Pretendo também ir mais além na minha área, e continuar indo atrás de aprender novas linguagens sempre.";
        document.getElementById('objj').innerHTML = "Objetivo";
        document.getElementById('apresentacao').innerHTML = "Apresentação";
    }
    lingua = 0;
}

function github() {
    window.open('https://github.com/NickLag');
}

function instagram() {
    window.open('https://www.instagram.com/tortoruuu');
}

function linkedin() {
    window.open('https://www.linkedin.com/in/nicholaslagareiro/');
}