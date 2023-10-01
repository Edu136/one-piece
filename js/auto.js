// Espera até que o DOM (Document Object Model) esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleciona todos os elementos com a classe 'botao' dentro de um elemento com a classe 'butoes'
    const buttons = document.querySelectorAll('.butoes .botao');

    // Seleciona todos os elementos com a classe 'personagem'
    const characters = document.querySelectorAll('.personagem');

    // Itera sobre cada botão
    buttons.forEach((button, index) => {

        // Adiciona um ouvinte de evento de clique a cada botão
        button.addEventListener('click', function () {

            // Remove a classe 'selecionado' de todos os botões e personagens
            buttons.forEach(btn => btn.classList.remove('selecionado'));
            characters.forEach(char => char.classList.remove('selecionado'));

            // Adiciona a classe 'selecionado' ao botão clicado e ao personagem correspondente
            button.classList.add('selecionado');
            characters[index].classList.add('selecionado');
        });
    });
});