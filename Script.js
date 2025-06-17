const container = document.querySelector('.container');
const response = document.getElementById('response');
const dinoGameContainer = document.getElementById('dino-game-container');

document.getElementById('yesBtn').addEventListener('click', function() {
    response.innerText = "¡Gracias Bere! Ya los espero con ansias 😋";
    launchConfetti();
    showDinoGame();
});

document.getElementById('noBtn').addEventListener('click', function() {
    response.innerText = "";
    showSecondQuestion();
});

function showSecondQuestion() {
    response.innerText = "Ándale, Bere, piensa en el hambriado dr tu hijo mats";

    // Crear botones adicionales de "Sí" y "No"
    const yesBtn2 = document.createElement('button');
    yesBtn2.innerText = "Sí";
    yesBtn2.addEventListener('click', () => {
        response.innerText = "¡traaaais todo RISITOOOS🏳️‍⚧️ ";
        launchConfetti();
        showDinoGame();
        clearButtons();
    });

    const noBtn2 = document.createElement('button');
    noBtn2.innerText = "No";
    noBtn2.addEventListener('click', () => {
        response.innerText = "";
        showFinalOption();
    });

    // Añadir los nuevos botones
    container.appendChild(yesBtn2);
    container.appendChild(noBtn2);
}

function showFinalOption() {
    response.innerText = " bereee andale si o si";

    // Crear botón final de "Sí o sí"
    const finalYesBtn = document.createElement('button');
    finalYesBtn.innerText = "Sí o Si bere RISITOS🏳️‍⚧️";
    finalYesBtn.addEventListener('click', () => {
        response.innerText = "¡traiiis todo bereee los esparmamos con ansias";
        launchConfetti();
        showDinoGame();
        clearButtons();
    });

    // Añadir el botón "Sí o sí" al contenedor
    container.appendChild(finalYesBtn);
}

function launchConfetti() {
    // Configuración del confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6bcb', '#ff8ed1', '#ffe0f0']
    });
}

function showDinoGame() {
    // Mostrar el contenedor del juego del dinosaurio
    dinoGameContainer.style.display = 'block';
}

function clearButtons() {
    // Elimina todos los botones excepto los originales
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id !== 'yesBtn' && button.id !== 'noBtn') {
            container.removeChild(button);
        }
    });
}
