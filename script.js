document.addEventListener('DOMContentLoaded', function() {
    // Aplicar tema do personagem selecionado
    applyCharacterTheme();
    
    // Adicionar ícone do personagem na navbar
    addCharacterIconToNavbar();
});

function applyCharacterTheme() {
    const savedCharacter = localStorage.getItem('selectedCharacter');
    
    if (savedCharacter) {
        const character = JSON.parse(savedCharacter);
        document.body.classList.add(`${character.name}-theme`);
    }
}

function addCharacterIconToNavbar() {
    const savedCharacter = localStorage.getItem('selectedCharacter');
    const navbar = document.querySelector('.navbar');
    
    if (savedCharacter && navbar) {
        const character = JSON.parse(savedCharacter);
        const characterIcon = document.createElement('img');
        characterIcon.src = character.image;
        characterIcon.classList.add('selected-character-icon');
        characterIcon.alt = character.name;
        
        // Adiciona o ícone após o logo
        const brand = document.querySelector('.navbar-brand');
        if (brand) {
            brand.insertAdjacentElement('afterend', characterIcon);
        }
    }
}