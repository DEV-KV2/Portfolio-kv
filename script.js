// ===== Mode Toggle (Normal / Cleaned / Chaos) =====
const modeBtn = document.getElementById('mode-toggle');
const htmlElement = document.documentElement;
const modes = ['normal', 'cleaned', 'chaos'];
let currentMode = 0;

// Mode icons and labels
const modeConfig = {
    normal: { icon: '☕', label: 'Normal' },
    chaos: { icon: '🌪️', label: 'Chaos' },
    cleaned: { icon: '✨', label: 'Cleaned-up' }
};

// Check localStorage for mode preference
function initMode() {
    const savedMode = localStorage.getItem('portfolioMode') || 'normal';
    currentMode = modes.indexOf(savedMode);
    applyMode(modes[currentMode]);
}

function applyMode(mode) {
    // Remove all mode classes
    document.body.classList.remove('chaos-mode', 'cleaned-mode');
    
    // Apply selected mode
    if (mode === 'chaos') {
        document.body.classList.add('chaos-mode');
        htmlElement.style.background = '#000000';
        document.body.style.background = '#000000';
    } else if (mode === 'cleaned') {
        document.body.classList.add('cleaned-mode');
        htmlElement.style.background = '#fafafa';
        document.body.style.background = '#fafafa';
    } else {
        htmlElement.style.background = '#ffffff';
        document.body.style.background = '#ffffff';
    }
    
    // Update button
    const config = modeConfig[mode];
    modeBtn.innerHTML = `<span class="mode-icon">${config.icon}</span>`;
    modeBtn.title = `Mode: ${config.label}`;
    
    // Save preference
    localStorage.setItem('portfolioMode', mode);
}

modeBtn.addEventListener('click', () => {
    // Cycle through modes
    currentMode = (currentMode + 1) % modes.length;
    const newMode = modes[currentMode];
    
    // Add pulse animation
    modeBtn.style.animation = 'pulse-mode 0.6s ease-out';
    setTimeout(() => {
        modeBtn.style.animation = '';
    }, 600);
    
    applyMode(newMode);
});

// Add mode animation styles
const modeStyle = document.createElement('style');
modeStyle.textContent = `
    @keyframes pulse-mode {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    body.chaos-mode {
        transition: background 0.3s ease, color 0.3s ease;
    }
    
    body.chaos-mode .hero-name {
        text-shadow: 0 0 10px #ff1493;
    }
    
    body.chaos-mode .section-title {
        text-shadow: 0 0 8px #00ff00;
    }
    
    body.chaos-mode .project-item {
        border-left: 3px solid #ff1493;
        box-shadow: inset 0 0 20px rgba(255, 20, 147, 0.1);
    }
    
    body.chaos-mode .other-project {
        border: 2px solid #00ff00;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
    }
    
    body.cleaned-mode {
        transition: background 0.3s ease, color 0.3s ease;
    }
    
    body.cleaned-mode .hero-name,
    body.cleaned-mode .hero-role,
    body.cleaned-mode .hero-tagline,
    body.cleaned-mode .section-title {
        text-shadow: none;
    }
    
    body.cleaned-mode .hero-icons,
    body.cleaned-mode .character-badge,
    body.cleaned-mode .decoration {
        animation: none !important;
    }
`;
document.head.appendChild(modeStyle);

// Initialize mode on page load
window.addEventListener('load', initMode);

// ===== Smooth Scroll Behavior =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.project-item, .other-project, .about-content, .contact-link').forEach(el => {
    observer.observe(el);
});

// ===== Hover Effects for Project Items =====
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(15px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// ===== Other Project Cards Hover =====
document.querySelectorAll('.other-project').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Navigation Hover Effects =====
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Navbar Effects on Scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===== Parallax Movement for Floating Elements =====
document.addEventListener('mousemove', (e) => {
    const decorations = document.querySelectorAll('.decoration');
    const mouseX = (e.clientX / window.innerWidth) - 0.5;
    const mouseY = (e.clientY / window.innerHeight) - 0.5;
    
    decorations.forEach((dec, index) => {
        const speed = (index + 1) * 10;
        dec.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
});

// ===== Stagger Animation for Project Items =====
window.addEventListener('load', () => {
    document.querySelectorAll('.project-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.other-project').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===== Contact Link Effects =====
document.querySelectorAll('.contact-link').forEach((link, index) => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
        this.style.color = 'var(--text-dark)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.color = 'var(--accent)';
    });
});

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Animate hero elements
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.style.animation = 'card-float 3s ease-in-out infinite';
    }
});

console.log('Portfolio loaded successfully! ✨');

