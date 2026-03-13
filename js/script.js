/**
 * @fileoverview Main Portfolio Interactions Script
 * @author Mohar Gorai
 * @description Handles Scroll Reveals, 3D Hardware Accelerated Hover Effects, 
 * Typing Animations, and the Custom Glassmorphic Cursor Trail.
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. Scroll Reveal Intersection Observer
    // ==========================================
    /**
     * Observers DOM elements and triggers a CSS fade-up animation 
     * once they enter the viewport to create a dynamic loading experience.
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Unobserve after animation runs once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    // ==========================================
    // 2. 3D Tilt Effect (Hardware Accelerated)
    // ==========================================
    /**
     * Applies a 3D perspective tilt to elements with the `.tilt-element` class
     * based on the user's cursor position relative to the element's center.
     */
    const tiltElements = document.querySelectorAll('.tilt-element');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            // Disable tilt on mobile/tablet to save performance
            if (window.innerWidth > 768) {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculate rotation degree mapping
                const xRotation = -((y - rect.height / 2) / rect.height) * 10;
                const yRotation = ((x - rect.width / 2) / rect.width) * 10;

                element.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            }
        });

        // Reset transform smoothly on mouse exit
        element.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                element.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.transform = 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)';
            }
        });

        // Remove CSS transition during active hover to prevent "laggy" follow
        element.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                element.style.transition = 'none';
            }
        });
    });


    // ==========================================
    // 3. Hero Section Typing Animation
    // ==========================================
    /**
     * Simulates a typewriter effect on the hero headline.
     */
    const typingTextElement = document.querySelector('.typing-text');

    if (typingTextElement) {
        const textToType = "Mohar Gorai";
        let index = 0;

        const typewriter = () => {
            if (index < textToType.length) {
                typingTextElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typewriter, 120);
            }
        };

        // Delay initialization to sync with the CSS fade-up animation timing
        setTimeout(typewriter, 800);
    }


    // ==========================================
    // 4. Glassmorphic Cursor Trail Animation
    // ==========================================
    if (window.innerWidth > 768) {
        let lastX = 0;
        let lastY = 0;
        // Throttle distance prevents overlapping DOM elements and optimizes performance.
        const MIN_DISTANCE_PX = 15;

        /**
         * Spawns a glassmorphic trail node at the specified coordinates.
         * Leverages double requestAnimationFrame for smooth CSS transition triggers.
         * * @param {number} x - The current viewport X coordinate of the mouse.
         * @param {number} y - The current viewport Y coordinate of the mouse.
         */
        const createTrailPart = (x, y) => {
            const part = document.createElement('div');
            part.className = 'cursor-trail-part';
            // Center the node directly under the cursor point
            part.style.left = `${x}px`;
            part.style.top = `${y}px`;

            document.body.appendChild(part);

            // Force browser repaint to ensure initial state registers 
            // before applying the 'fade' expansion transition.
            window.requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    part.classList.add('fade');
                });
            });

            // Garbage Collection: Destroy the DOM node after the transition completes
            // Timing must precisely match the CSS transition duration (0.6s)
            setTimeout(() => {
                part.remove();
            }, 600);
        };

        // Attach global mousemove listener
        window.addEventListener('mousemove', (e) => {
            // Calculate Euclidean distance since the last node spawn
            const deltaX = Math.abs(e.clientX - lastX);
            const deltaY = Math.abs(e.clientY - lastY);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Spawn conditional on throttling
            if (distance > MIN_DISTANCE_PX) {
                createTrailPart(e.clientX, e.clientY);
                lastX = e.clientX;
                lastY = e.clientY;
            }
        });
    }
});