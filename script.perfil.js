document.addEventListener('DOMContentLoaded', function() {
    const characters = document.querySelectorAll('.character-item');
    
    characters.forEach(character => {
        character.addEventListener('click', function() {
            const characterName = this.getAttribute('data-character');
            const characterColor = this.getAttribute('data-color');
            const characterImage = this.querySelector('img').src;
            
            // Salva a seleção no localStorage
            localStorage.setItem('selectedCharacter', JSON.stringify({
                name: characterName,
                color: characterColor,
                image: characterImage
            }));
            
            // Redireciona para a página inicial
            window.location.href = 'index.html';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const characterItems = document.querySelectorAll('.character-item');
    
    characterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os itens
            characterItems.forEach(i => i.classList.remove('selected'));
            
            // Adiciona a classe 'selected' apenas ao item clicado
            this.classList.add('selected');
            
            // Obtém a cor do atributo data-color
            const color = this.getAttribute('data-color');
            
            // Define a cor como variável CSS
            document.documentElement.style.setProperty('--selected-color', color);
        });
    });
});