for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%"; // Random top position
    star.style.left = Math.random() * 100 + "%"; // Random left position
    star.style.animationDelay = Math.random() * 2 + "s"; // Random animation delay
    document.body.appendChild(star);
}

function showPopup(message) {
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    audio.muted = false; // Unmute audio if allowed by the browser
});