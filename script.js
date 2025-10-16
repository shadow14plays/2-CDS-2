// script.js

const banner = document.querySelector('.banner1');

// Usamos setTimeout para garantir que o navegador "veja" o estado inicial
setTimeout(() => {
    // Remove a classe "oculta"
    banner.classList.remove('banner1-oculto');
    // Adiciona a classe que aplica a animação/transição
    banner.classList.add('banner1-animado');
}, 100); // Um pequeno atraso