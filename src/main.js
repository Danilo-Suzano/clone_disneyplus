document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    for(let i = 0; i < buttons.length; i++){ //mudar a aba selecionada
        buttons[i].addEventListener('click', function(button){ //adicionar um evento de click
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllAbs();
            tab.classList.add('shows__list--is-active'); //adiciona a classe qaundo o botão for selecionado
            removeActiveButton(); //chamando a função
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta) //criando evento de click quando clicar nas perguntas frequentes
    }
})

function abreOuFechaResposta(elemento){ //para os abrir e fechar os elementos das perguntas
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe) //adciona a classe acima quando clicado na pergunta frequente
}

function removeActiveButton(){ //remove a classe active do button no shows quando outro botão for selecionado 
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllAbs(){ //esconder as abas quando a uma outra aba for selecionada
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}