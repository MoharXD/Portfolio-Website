/**
 * ==========================================================================
 * MOHAR GORAI PORTFOLIO - MAIN JAVASCRIPT
 * Description: Handles UI interactions, scroll reveal animations, 
 * 3D tilt effects, typing animations, and the custom cursor trail.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. SCROLL REVEAL (INTERSECTION OBSERVER)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    // ==========================================
    // 2. 3D TILT EFFECT (HARDWARE ACCELERATED)
    // ==========================================
    // UPDATE: Only apply on devices with a fine pointer (mouse/trackpad), ignores touchscreens
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const tiltElements = document.querySelectorAll('.tilt-element');

    if (isFinePointer) {
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xRotation = -((y - rect.height / 2) / rect.height) * 10;
                const yRotation = ((x - rect.width / 2) / rect.width) * 10;

                element.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.transform = 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)';
            });

            element.addEventListener('mouseenter', () => {
                element.style.transition = 'none';
            });
        });
    }


    // ==========================================
    // 3. DYNAMIC TYPING ANIMATION
    // ==========================================
    const typingTextElement = document.querySelector('.typing-text');
    // Accessibility check: disable animation if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typingTextElement && !prefersReducedMotion) {
        const textToType = typingTextElement.getAttribute('data-text') || "";
        
        // UPDATE: Clear the hardcoded HTML fallback text before starting the animation
        typingTextElement.textContent = ""; 
        
        let index = 0;

        const typewriter = () => {
            if (index < textToType.length) {
                typingTextElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typewriter, 120);
            }
        };

        setTimeout(typewriter, 800);
    }


    // ==========================================
    // 4. GLASSMORPHIC CURSOR TRAIL ANIMATION
    // ==========================================
    // UPDATE: Restrict to fine pointer devices to prevent bugs on iPads/touch-laptops
    if (isFinePointer) {
        let lastX = 0;
        let lastY = 0;
        const MIN_DISTANCE_PX = 15;
        let isTicking = false;

        const createTrailPart = (x, y) => {
            const part = document.createElement('div');
            part.className = 'cursor-trail-part';
            part.style.left = `${x}px`;
            part.style.top = `${y}px`;

            document.body.appendChild(part);

            window.requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    part.classList.add('fade');
                });
            });

            setTimeout(() => {
                part.remove();
            }, 600);
        };

        window.addEventListener('mousemove', (e) => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    const deltaX = Math.abs(e.clientX - lastX);
                    const deltaY = Math.abs(e.clientY - lastY);
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                    if (distance > MIN_DISTANCE_PX) {
                        createTrailPart(e.clientX, e.clientY);
                        lastX = e.clientX;
                        lastY = e.clientY;
                    }
                    isTicking = false;
                });
                isTicking = true;
            }
        }, { passive: true });
    }
});
