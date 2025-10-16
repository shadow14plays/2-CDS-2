// script.js

const banner = document.querySelector('.banner1');

// Usamos setTimeout para garantir que o navegador "veja" o estado inicial
setTimeout(() => {
    // Remove a classe "oculta"
    banner.classList.remove('banner1-oculto');
    // Adiciona a classe que aplica a animação/transição
    banner.classList.add('banner1-animado');
}, 100); // Um pequeno atraso

// script.js

const cardsEstudantes = document.querySelectorAll('.estudante-div');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Se o elemento estiver visível (intersectando o viewport)
        if (entry.isIntersecting) {
            // Adiciona a classe 'visivel' que aplica o efeito
            entry.target.classList.add('visivel');
            // Opcional: Para de observar após a animação
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2 // Dispara quando 20% do elemento estiver visível
});

// Inicia a observação de todos os cards
cardsEstudantes.forEach(card => {
    observer.observe(card);
});