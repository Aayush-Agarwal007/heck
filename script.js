// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// STAT COUNTERS (COUNT UP ANIMATION)
// ============================================
function startCountUp() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.dataset.target);
                let current = 0;
                const increment = target / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target.toLocaleString();
                        clearInterval(counter);
                    } else {
                        element.textContent = Math.floor(current).toLocaleString();
                    }
                }, 30);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(num => observer.observe(num));
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
let currentSlide = 0;

function nextSlide() {
    const cards = document.querySelectorAll('.testimonial-card');
    currentSlide = (currentSlide + 1) % cards.length;
    updateCarousel();
}

function prevSlide() {
    const cards = document.querySelectorAll('.testimonial-card');
    currentSlide = (currentSlide - 1 + cards.length) % cards.length;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        const offset = -currentSlide * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

// Auto rotate carousel every 5 seconds
setInterval(() => {
    if (document.visibilityState === 'visible') {
        nextSlide();
    }
}, 5000);

// ============================================
// FAQ ACCORDION
// ============================================
function toggleFAQ(questionElement) {
    const faqItem = questionElement.parentElement;
    faqItem.classList.toggle('open');
}

// Close other FAQs when one opens
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== this.parentElement) {
                item.classList.remove('open');
            }
        });
    });
});

// ============================================
// SMOOTH SCROLL TO SECTION
// ============================================
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Show notification
function showAlert(message) {
    const notification = document.getElementById('notification');
    
    // Handle both string and object messages
    if (typeof message === 'string') {
        notification.textContent = message;
    } else if (typeof message === 'object') {
        const messages = {
            emergency: '🚨 Emergency services are being contacted. Stay safe!',
            alerts: '📍 Finding nearby help centers in your area...'
        };
        notification.textContent = messages[message] || 'Action triggered!';
    }
    
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Call emergency number
function call(number) {
    showAlert('emergency');
    console.log('Calling: ' + number);
}

// Toggle safety tip cards
function toggleTip(card) {
    card.classList.toggle('expanded');
    card.style.transform = card.classList.contains('expanded') 
        ? 'scale(1.05)' 
        : 'scale(1)';
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        
        hamburger.querySelectorAll('span').forEach((span, index) => {
            if (index === 0) {
                span.style.transform = navMenu.style.display === 'flex' 
                    ? 'rotate(45deg) translate(10px, 10px)' 
                    : 'rotate(0)';
            } else if (index === 1) {
                span.style.opacity = navMenu.style.display === 'flex' ? '0' : '1';
            } else {
                span.style.transform = navMenu.style.display === 'flex' 
                    ? 'rotate(-45deg) translate(7px, -7px)' 
                    : 'rotate(0)';
            }
        });
    });
}

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Add subtle parallax to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
    
    // Add scroll animations
    const elements = document.querySelectorAll('.feature-card, .contact-card, .tip-card, .alert-item');
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// Initialize scroll animations
document.querySelectorAll('.feature-card, .contact-card, .tip-card, .alert-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
    }
});

// Count up animation for stats (if needed)
function animateCountUp(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Typing animation effect
function typeText(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// Intersection Observer for advanced animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .contact-card, .tip-card, .alert-item').forEach(el => {
    observer.observe(el);
});

// Ripple effect on button clicks
document.querySelectorAll('.btn, .contact-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple style dynamically
const style = document.createElement('style');
style.textContent = `
    .btn, .contact-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Help Nexus Interactive Page Loaded!');
    
    // Start stat counters
    setTimeout(startCountUp, 500);
    
    // Initialize new features
    initializeTicker();
    updateMapWidget();
    
    // You can add more interactive features here
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.style.display = 'none';
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transform = 'rotate(0)';
                span.style.opacity = '1';
            });
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const notification = document.getElementById('notification');
        if (notification && notification.style.display !== 'none') {
            notification.style.display = 'none';
        }
    }
});

// Add active state to navbar links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});
