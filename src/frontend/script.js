// Rolagem suave para seções
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Exemplo simples: mensagem de boas-vindas
window.onload = () => {
    console.log("🍕 Bem-vindo à Pizzaria Vasco da Gama!");
};
