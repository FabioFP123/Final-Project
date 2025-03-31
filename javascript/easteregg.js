// Easter Egg Configuration
const EGG_CONFIG = {
    CLICKS_NEEDED: 3,
    CLICK_WINDOW: 500,
    GIF_DURATION: 2000,
    GIF_PATH: 'gifs/jumpscare.webp'
};

// State tracking
let eggState = {
    count: 0,
    timeout: null,
    isActive: false
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('request-btn');
    if (!button) {
        console.error("Button not found! Check ID 'request-btn'");
        return;
    }

    button.addEventListener('click', handleClick);
});

function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (eggState.isActive) return;

    // Reset count if clicks are too slow
    clearTimeout(eggState.timeout);
    eggState.timeout = setTimeout(() => {
        eggState.count = 0;
    }, EGG_CONFIG.CLICK_WINDOW);

    eggState.count++;
    console.log(`Clicks: ${eggState.count}/${EGG_CONFIG.CLICKS_NEEDED}`);

    if (eggState.count >= EGG_CONFIG.CLICKS_NEEDED) {
        showEasterEgg();
        eggState.count = 0; // Reset
    } else if (eggState.count === 1) {
        showThankYouMessage();
    }
}

function showThankYouMessage() {
    const msg = document.createElement('div');
    msg.textContent = 'Request received!';
    msg.style.cssText = `
        color: #00adee;
        font-family: 'Tomorrow', sans-serif;
        margin-top: 10px;
        animation: fadeOut 2s forwards;
    `;
    document.querySelector('.cb-cta-box').appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
}

function showEasterEgg() {
    eggState.isActive = true;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.95);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const gif = document.createElement('img');
    gif.src = EGG_CONFIG.GIF_PATH;
    gif.style.maxWidth = '90vw';
    gif.style.maxHeight = '90vh';
    gif.alt = 'Secret animation';

    // Error handling
    gif.onerror = () => {
        overlay.innerHTML = `
            <p style="color:#ff4d9e; font-family:'Silkscreen',sans-serif;">
                Easter egg unlocked! (GIF missing)
            </p>
        `;
        console.error(`GIF not found at: ${EGG_CONFIG.GIF_PATH}`);
    };

    overlay.appendChild(gif);
    document.body.appendChild(overlay);

    // Auto-close
    setTimeout(() => {
        overlay.remove();
        eggState.isActive = false;
    }, EGG_CONFIG.GIF_DURATION);
}