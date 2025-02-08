function openHeart() {
    const container = document.querySelector('.container');
    container.classList.add('open');
    container.removeEventListener('click', openHeart);
}

// Adding the event listener to the container
document.querySelector('.container').addEventListener('click', openHeart);
