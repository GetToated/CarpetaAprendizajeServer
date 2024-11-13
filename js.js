document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.btn');
    const body = document.body;

    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = '¡Bienvenido a la Carpeta de Aprendizaje!';
    welcomeMessage.style.position = 'absolute';
    welcomeMessage.style.top = '20px';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translateX(-50%)';
    welcomeMessage.style.backgroundColor = '#FF6347';
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.padding = '10px 20px';
    welcomeMessage.style.borderRadius = '5px';
    body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.transition = 'opacity 1s ease-in-out';
        welcomeMessage.style.opacity = '0';
        setTimeout(() => {
            body.removeChild(welcomeMessage);
        }, 1000);
    }, 3000);

  
    link.addEventListener('click', function(event) {
        alert('Estás a punto de abrir el PDF.');
        body.style.backgroundColor = getRandomColor();
    });


});
