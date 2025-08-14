let texto, bloco, linha, title, giro, azul, arrow, p, lingua;
p = '#7d7d7d';
texto = "aboutMeNavBar";
bloco = "aboutMeBlock";
linha = "aboutMeUnderLine";
title = "aboutMeTitle";
giro = 0;
azul = '#4772ff';
preto = 'black';
arrow = 'blueArrow';
lingua = 0;
doc = document.getElementById;

window.onload = function() {
    setTimeout(viadagem, 2500);
};

function viadagem() {
    document.getElementById('aboutMeBlock').style.opacity = "100%";
    document.getElementById('aboutMeBlock').style.animationDelay = "0ms";
}

function aboutMePageCall() {
    normal();
    texto = "aboutMeNavBar";
    bloco = "aboutMeBlock";
    linha = "aboutMeUnderLine";
    title = "aboutMeTitle";
    grid = 0;
    selecionado();
}

function resumePageCall() {
    normal();
    texto = "resumeNavBar";
    bloco = "resumeBlock";
    linha = "resumeUnderLine";
    title = "resumeTitle";
    grid = 0;
    selecionado();
}

function portfolioPageCall() {
    normal();
    texto = "portfolioNavBar";
    bloco = "portfolioBlock";
    linha = "portfolioUnderLine";
    title = "portfolioTitle";
    grid = 1;
    selecionado();
}

function contactPageCall() {
    normal();
    texto = "contactNavBar";
    bloco = "contactBlock";
    linha = "contactUnderLine";
    title = "contactTitle";
    grid = 0;
    selecionado();
}

function selecionado() {
    document.getElementById(texto).style.color = azul;
    document.getElementById(texto).style.borderBottomColor = azul;
    document.getElementById(texto).style.fontWeight = "bolder";
    if (grid == 1) {
        document.getElementById(bloco).style.display = "grid";
    } else {
        document.getElementById(bloco).style.display = "block";
    }
    document.getElementById(bloco).style.animationName = "selectedRightBlockContentAppearing";
    document.getElementById(linha).style.animationName = "selectedRightBlockContentAppearing";
    document.getElementById(linha).style.display = "block";
    document.getElementById(title).style.animationName = "selectedRightBlockContentAppearing";
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


function openAndCloseMobileHeader() {
    if (giro == 0){
        document.getElementById('blueArrow').style.opacity = "100%";
        document.getElementById('yellowArrow').style.opacity = "100%";
        document.getElementById(arrow).style.animationDelay = "0ms";
        document.getElementById('blueArrow').style.animationName = "encolher";
        document.getElementById('yellowArrow').style.animationName = "encolher";
        document.getElementById('leftBlock').style.animationName = "diminuir";
        document.getElementById('rightBlock').style.animationName = "elevar";
        document.getElementById('blank').style.animationName = "elevar";
        document.getElementById('options').style.animationDelay = "0ms";
        document.getElementById('options').style.borderBottom = "1px solid #696969";
        document.getElementById('options').style.animationDuration = "1000ms";
        document.getElementById('options').style.height = "7.5%";
        document.getElementById('options').style.animationName = "doiselevar";
        document.getElementById('imageCircle').style.animationDuration = '750ms';
        document.getElementById('headerTextBlock').style.animationDuration = '550ms';
        document.getElementById('headerTextBlock').style.animationName = 'oi';
        document.getElementById('imageCircle').style.animationName = 'oi';
        document.getElementById('language').style.display = "none";
        document.getElementById('study').style.display = "none";
        giro = 1;
    } else if (giro == 1) {
        document.getElementById('blueArrow').style.animationName = "desencolher";
        document.getElementById('yellowArrow').style.animationName = "desencolher";
        document.getElementById('leftBlock').style.animationName = "aumentar";
        document.getElementById('rightBlock').style.animationName = "deselevar";
        document.getElementById('blank').style.animationName = "deselevar";
        document.getElementById('options').style.animationName = "doisdeselevar";
        document.getElementById('headerTextBlock').style.animationDuration = '950ms';
        document.getElementById('headerTextBlock').style.animationName = 'desoi';
        document.getElementById('imageCircle').style.animationName = 'desoi';
        document.getElementById('language').style.display = "block";
        document.getElementById('study').style.display = "block";
        giro = 0;
    }
}

function dark() {
    azul = '#ffe224';
    preto = '#696969';
    arrow = 'yellowArrow';
    document.getElementById(arrow).style.animationDelay = "0ms";
    document.getElementById('blueArrow').style.display = "none";
    document.getElementById('yellowArrow').style.display = "block";
    document.getElementById('aboutMeNavBar').style.color = p;
    document.getElementById('resumeNavBar').style.color = p;
    document.getElementById('portfolioNavBar').style.color = p;
    document.getElementById('contactNavBar').style.color = p;
    document.getElementById('aboutMeNavBar').style.borderBottomColor = p;
    document.getElementById('resumeNavBar').style.borderBottomColor = p;
    document.getElementById('portfolioNavBar').style.borderBottomColor = p;
    document.getElementById('contactNavBar').style.borderBottomColor = p;
    document.getElementById(texto).style.borderBottomColor = "#ffe224";
    document.getElementById(texto).style.color = '#ffe224';
    document.getElementById('blackMoon').style.display = "none";
    document.getElementById('blueSun').style.display = "none";
    document.getElementById('yellowMoon').style.display = "block";
    document.getElementById('whiteSun').style.display = "block";
    document.documentElement.style.setProperty("--fundo", "#212121");
    document.documentElement.style.setProperty("--corpo", "#272727");
    document.documentElement.style.setProperty("--borda", p);
    document.documentElement.style.setProperty("--azul", "#ffe224");
    document.documentElement.style.setProperty("--piscada", "#c9b012ff");
    document.documentElement.style.setProperty("--sombra", "#101010");
    document.documentElement.style.setProperty("--texto", p);
    document.documentElement.style.setProperty("--celular", "#212121");
    document.getElementById('yellowXSymbol').style.display = "block";
    document.getElementById('blackXSymbol').style.display = "none";
}

function white() {
    azul = '#4772ff';
    preto = 'black';
    arrow = 'blueArrow';
    document.getElementById(arrow).style.animationDelay = "0ms";
    document.getElementById('yellowArrow').style.display = "none";
    document.getElementById('blueArrow').style.display = "block";
    document.getElementById('aboutMeNavBar').style.color = "black";
    document.getElementById('resumeNavBar').style.color = "black";
    document.getElementById('portfolioNavBar').style.color = "black";
    document.getElementById('contactNavBar').style.color = "black";
    document.getElementById('aboutMeNavBar').style.borderBottomColor = "black";
    document.getElementById('resumeNavBar').style.borderBottomColor = "black";
    document.getElementById('portfolioNavBar').style.borderBottomColor = "black";
    document.getElementById('contactNavBar').style.borderBottomColor = "black";
    document.getElementById(texto).style.borderBottomColor = "#4772ff";
    document.getElementById(texto).style.color = '#4772ff'
    document.getElementById('blackMoon').style.display = "block";
    document.getElementById('blueSun').style.display = "block";
    document.getElementById('yellowMoon').style.display = "none";
    document.getElementById('whiteSun').style.display = "none";
    document.documentElement.style.setProperty("--fundo", "snow");
    document.documentElement.style.setProperty("--corpo", "white");
    document.documentElement.style.setProperty("--borda", p);
    document.documentElement.style.setProperty("--azul", "#4772ff");
    document.documentElement.style.setProperty("--piscada", "#2447bb");
    document.documentElement.style.setProperty("--sombra", p);
    document.documentElement.style.setProperty("--texto", "black");
    document.documentElement.style.setProperty("--celular", "#fffdfd");
    document.getElementById('yellowXSymbol').style.display = "none";
    document.getElementById('blackXSymbol').style.display = "block";
}

function english() {
    if (lingua == 0) {
        document.getElementById('pt').style.color = "var(--texto)";
        document.getElementById('en').style.color = "var(--azul)";
        document.documentElement.lang = 'en-US';
        document.getElementById('aboutMeTitle').innerHTML = "About me";
        document.getElementById('aboutMeNavBar').innerHTML = "About me";
        document.getElementById('resumeNavBar').innerHTML = "Resume";
        document.getElementById('resumeTitle').innerHTML = "Resume";
        document.getElementById('contactNavBar').innerHTML = "Contact";
        document.getElementById('contactTitle').innerHTML = "Contact";
        document.getElementById('age').innerHTML = "-> 18 years";
        document.getElementById('graduation').innerHTML = "-> Studying Computer Engineering";
        document.getElementById('study').innerHTML = "-> Study at Universidade São Judas Tadeu";
        document.getElementById('brazil').innerHTML = "São Paulo, Brazil";
        document.getElementById('phone').innerHTML = "Phone and E-mail";
        document.getElementById('cellphoneNumber').innerHTML = "Phone: +55 (13) 99185-9107";
        document.getElementById('address').innerHTML = "Address";
        document.getElementById('soft').innerHTML = "Programs/Softwares";
        document.getElementById('word').innerHTML = "Word<br>(Advanced)";
        document.getElementById('excel').innerHTML = "Excel (Intermediate)";
        document.getElementById('powerpoint').innerHTML = "Power Point (Intermediate)";
        document.getElementById('photoshop').innerHTML = "Photoshop (Intermediate)";
        document.getElementById('knowledgeEnglish').innerHTML = "English";
        document.getElementById('knowledgeTitle').innerHTML = "Knowledge";
        document.getElementById('intermediate').innerHTML = "(Intermediate High)";
        document.getElementById('graduationTitle').innerHTML = "Education Background";
        document.getElementById('highSchoolTime').innerHTML = "Start - 2022 | 2024 End";
        document.getElementById('ADSTime').innerHTML = "Start - 2022 | 2024 End";
        document.getElementById('universityTime').innerHTML = "Start - 2025 | 2029 End";
        document.getElementById('highSchoolText').innerHTML = "High School - E. E. Canadá";
        document.getElementById('ADSText').innerHTML = "Systems Development and Analysis - Novotec";
        document.getElementById('universityText').innerHTML = "Computer engineering - USJT";
        document.getElementById('introductionText').innerHTML = "My name is Nicholas Lagareiro, I'm 18 years old, and I'm currently studying Computer Engineering at São Judas Tadeu University (Santos).<br>I was enrolled in NovoTec (a technical course integrated with high school) and studied Systems Development and Analysis, graduating in 2024. I'm currently looking for a permanent job in programming/development, whether front-end, back-end, or full-stack.<br>I have several projects of my own, which can be viewed in the Portfolio tab above, and several others still in development.<br>I'm also part of a band (@purplehaze_banda) as the lead guitarist, backing vocalist, and founder. I manage their social media and organize events with other bands.";
        document.getElementById('objectiveText').innerHTML = "My current goal is to get a job to enter the job market in this area and gain experience, since my only work in this area has been freelance.";
        document.getElementById('objectiveTitle').innerHTML = "Objective";
        document.getElementById('introductionTitle').innerHTML = "Introduction";
    }
    lingua = 1;
}

function portuguese() {
    if (lingua == 1) {
        document.getElementById('pt').style.color = "var(--azul)";
        document.getElementById('en').style.color = "var(--texto)";
        document.documentElement.lang = 'pt-BR ';
        document.getElementById('aboutMeTitle').innerHTML = "Sobre mim";
        document.getElementById('aboutMeNavBar').innerHTML = "Sobre mim";
        document.getElementById('resumeNavBar').innerHTML = "Resumo";
        document.getElementById('resumeTitle').innerHTML = "Resumo";
        document.getElementById('contactNavBar').innerHTML = "Contato";
        document.getElementById('contactTitle').innerHTML = "Contato";
        document.getElementById('age').innerHTML = "-> 18 anos";
        document.getElementById('graduation').innerHTML = "-> Cursando Engenharia da Computação na USJT";
        document.getElementById('study').innerHTML = "-> Estuda na Universidade São Judas Tadeu (2° semestre)";
        document.getElementById('brazil').innnerHTML = "São Paulo, Brasil";
        document.getElementById('phone').innerHTML = "Telefone & E-mail";
        document.getElementById('cellphoneNumber').innerHTML = "Telefone: +55 (13) 99185-9107";
        document.getElementById('address').innerHTML = "Endereço";
        document.getElementById('soft').innerHTML = "Ferramentas/Softwares";
        document.getElementById('word').innerHTML = "Word<br>(Avançado)";
        document.getElementById('excel').innerHTML = "Excel (Intermediário)";
        document.getElementById('powerpoint').innerHTML = "Power Point (Intermediário)";
        document.getElementById('photoshop').innerHTML = "Photoshop (Intermediário)";
        document.getElementById('knowledgeEnglish').innerHTML = "English";
        document.getElementById('knowledgeTitle').innerHTML = "Conhecimentos";
        document.getElementById('intermediate').innerHTML = "(Intermediário avançado)";
        document.getElementById('graduationTitle').innerHTML = "Formação";
        document.getElementById('highSchoolTime').innerHTML = "Início - 2022 | 2024 Término";
        document.getElementById('ADSTime').innerHTML = "Início - 2022 | 2024 Término";
        document.getElementById('universityTime').innerHTML = "Início - 2025 | Término";
        document.getElementById('highSchoolText').innerHTML = "Ensino Médio - E. E. Canadá";
        document.getElementById('ADSText').innerHTML = "Desenvolvimento e Análise de Sistemas - Novotec";
        document.getElementById('universityText').innerHTML = "Engenharia de Computação - USJT";
        document.getElementById('introductionText').innerHTML = 'Me chamo Nicholas Lagareiro, tenho 18 anos, e atualmente estudo na Universidade São Judas Tadeu (Santos) cursando o 2° semestre de Engenharia de Computação.<br>Fiz parte do NovoTec (curso técnico integrado ao ensino médio) cursando Desenvolvimento e Análise de Sistemas, com término em 2024. Atualmente estou à procura de um emprego fixo na área da programação/desenvolvimento seja front-end, back-end ou full stack.<br>Possuo alguns projetos de minha autoria que podem ser visualizados na aba de Portfólio acima, e alguns outros projetos ainda em desenvolvimento.<br>Faço parte também de uma banda (<a class="purpleMention">@purplehaze_banda</a>) como guitarrista lead, backing vocal e fundador, nela, gerencio as mídias sociais e organizo também eventos com outras bandas.';
        document.getElementById('objectiveText').innerHTML = "Possuo como objetivo atual, um emprego para me inserir no mercado de trabalho da área e adquirir experiência, visto que meus únicos trabalhos na área foram freelance.";
        document.getElementById('objectiveTitle').innerHTML = "Objetivo";
        document.getElementById('introductionTitle').innerHTML = "Apresentação";
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

function closeModal() {
    document.getElementById('modalBackground').style.display = "none";
}

function openModal() {
    document.getElementById('modalBackground').style.display = "block";
}