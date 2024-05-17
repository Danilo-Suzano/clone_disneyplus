document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button){ //adicionar um evento de click
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllAbs();
            tab.classList.add('shows__list--is-active'); //adiciona a classe qaundo o botão for selecionado
            removeActiveButton(); //chamando a função
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

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