document.addEventListener('DOMContentLoaded', function() {
    const statBtn = document.getElementById('statBtn');
    const statInfo = document.getElementById('statInfo');

    // Função para alternar a visibilidade do conteúdo
    statBtn.addEventListener('click', function() {
        if (statInfo.style.display === "none" || statInfo.style.display === "") {
            statInfo.style.display = "block"; // Mostrar conteúdo
        } else {
            statInfo.style.display = "none";  // Ocultar conteúdo
        }
    });
});
