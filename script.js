
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

function openMap() {
    window.open("https://www.google.com/maps?q=Bandhadia,+Odisha+-+755005", "_blank");
}

function sendEmail() {
    window.location.href = "mailto:example@gmail.com";
}

function makeCall() {
    window.location.href = "tel:+1234567890";
}

// teacher
document.getElementById("toggle-button").addEventListener("click", function () {
    const hiddenCards = document.querySelector(".hidden-cards");
    const button = this;

    if (hiddenCards.classList.contains("show")) {
        hiddenCards.style.maxHeight = "0";
        hiddenCards.style.opacity = "0";
        hiddenCards.classList.remove("show");
        button.textContent = "Show More";
    } else {
        hiddenCards.style.maxHeight = hiddenCards.scrollHeight + "px";
        hiddenCards.style.opacity = "1";
        hiddenCards.classList.add("show");
        button.textContent = "Show Less";
    }
});


// galley
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-gallery');
    const hiddenImages = document.querySelectorAll('.gallery-container .hidden');

    // Initially hide all hidden images (set to CSS display: none)
    hiddenImages.forEach(image => {
        image.style.display = 'none';
    });

    toggleButton.addEventListener('click', () => {
        const areHidden = hiddenImages[0].style.display === 'none';

        hiddenImages.forEach(image => {
            if (areHidden) {
                image.style.display = 'block'; // Show the element first for transition
                requestAnimationFrame(() => {
                    image.classList.add('show'); // Apply the transition class
                });
            } else {
                image.classList.remove('show'); // Remove transition class
                setTimeout(() => {
                    image.style.display = 'none'; // Hide after transition ends
                }, 500); // Match the CSS transition duration
            }
        });

        // Update button text
        toggleButton.textContent = areHidden ? 'Show Less' : 'Show More';
    });
});



