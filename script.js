// Get all DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const questionCard = document.getElementById('questionCard');
const celebration = document.getElementById('celebration');
const heartsBackground = document.getElementById('heartsBackground');
const confettiContainer = document.getElementById('confettiContainer');
const celebrationHearts = document.getElementById('celebrationHearts');

// Track how many times "No" has been clicked
let noClickCount = 0;

// Playful messages that change each time "No" is clicked
const noMessages = [
    "Wait wait… don’t rush! 😳",
    "Maybe try the other button? 👉👈",
    "This is a risky decision… 😬",
    "Are you absolutely, completely sure? 🤔",
    "My heart can’t take this 😖",
    "Double check that choice 😅",
    "That button doesn’t look right… 👀",
    "You sure you wanna do that? 😶",
    "Plot twist: you meant Yes 😏",
    "System recommends ‘Yes’ 💘",
    "Warning: Sadness level rising 📉",
    "Oops… I think you misclicked 😬",
    "Confidence check failed 💭",
    "Romance probability dropping 💔",
    "This is getting dramatic 🎭",
    "Even Cupid is shocked 🏹",
    "Are we playing hard to get now? 😏",
    "My playlist just turned sad 🎶",
    "Heartbeat slowing… 💓",
    "This feels illegal on Valentine’s Day 🚨",
    "Recalculating feelings… 💘",
    "Emotional damage loading… ⏳",
    "But the Yes button looks so nice 🥰",
    "You’re testing my love now 😤❤️",
    "Tiny button, big consequences 😳",
    "You still have time to fix this ⏰",
    "Even the hearts are worried 💞",
    "Destiny says press Yes ✨",
    "You’re stronger than this… press Yes 💪❤️",
    "Okay but… imagine the celebration 🎉"
];

// Initial button sizes
let yesBtnSize = 1;
let noBtnSize = 1;

// Create floating hearts in background
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = ['💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartsBackground.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Generate background hearts continuously
setInterval(createFloatingHeart, 800);

// Initial hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createFloatingHeart, i * 300);
}

// Handle "No" button click
noBtn.addEventListener('click', function() {
    noClickCount++;
    
    // Shrink the "No" button
    noBtnSize = Math.max(0.3, noBtnSize - 0.15);
    noBtn.style.transform = `scale(${noBtnSize})`;
    
    // Grow the "Yes" button
    yesBtnSize += 0.2;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
    
    // Update message with playful text
    if (noClickCount <= noMessages.length) {
        message.textContent = noMessages[noClickCount - 1];
        message.style.color = '#ff4757';
        message.style.fontWeight = 'bold';
        
        // Add a shake animation to the message
        message.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            message.style.animation = '';
        }, 500);
    }
    
    // Make "No" button harder to click when very small
    if (noBtnSize < 0.5) {
        noBtn.style.cursor = 'pointer';
        noBtn.textContent = '🙈 No';
    }
    
    // Add extra wiggle to Yes button to draw attention
    yesBtn.style.animation = 'wiggle 0.5s ease-in-out';
    setTimeout(() => {
        yesBtn.style.animation = 'pulse 2s ease-in-out infinite';
    }, 500);
});

// Handle "Yes" button click - CELEBRATION TIME!
yesBtn.addEventListener('click', function() {
    // Hide the question card
    questionCard.style.animation = 'fadeOut 0.5s ease-out';
    setTimeout(() => {
        questionCard.style.display = 'none';
    }, 500);
    
    // Show celebration screen
    setTimeout(() => {
        celebration.classList.add('active');
        startCelebration();
    }, 600);
});

// Fade out animation for card
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// Start the celebration with confetti and hearts
function startCelebration() {
    // Create confetti
    createConfetti();
    
    // Create celebration hearts
    createCelebrationHearts();
    
    // Play a celebratory sound (optional - using Web Audio API)
    playCelebrationSound();
}

// Create confetti pieces
function createConfetti() {
    const colors = ['#ff6b9d', '#ffc3a0', '#ff9a9e', '#ffafbd', '#ffc0cb', '#ff69b4'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            // Random shapes
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// Create celebration hearts
function createCelebrationHearts() {
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'celebration-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            
            celebrationHearts.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
    
    // Keep creating hearts for continuous effect
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'celebration-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        celebrationHearts.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}

// Play a simple celebration sound using Web Audio API
function playCelebrationSound() {
    try {
        // Create audio context
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Play a cheerful melody
        const notes = [523.25, 587.33, 659.25, 783.99, 880.00]; // C, D, E, G, A
        
        notes.forEach((frequency, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            const startTime = audioContext.currentTime + (index * 0.15);
            const duration = 0.2;
            
            gainNode.gain.setValueAtTime(0.3, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + duration);
        });
    } catch (error) {
        // If audio fails, just continue without sound
        console.log('Audio not available');
    }
}

// Add hover effects with JavaScript for extra interactivity
yesBtn.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 10px 30px rgba(255, 71, 87, 0.5)';
});

yesBtn.addEventListener('mouseleave', function() {
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
});

noBtn.addEventListener('mouseenter', function() {
    if (noClickCount > 3) {
        // Make the button try to "escape" when hovered after several clicks
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        this.style.transform = `scale(${noBtnSize}) translate(${randomX}px, ${randomY}px)`;
    }
});

noBtn.addEventListener('mouseleave', function() {
    this.style.transform = `scale(${noBtnSize})`;
});