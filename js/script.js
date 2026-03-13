document.addEventListener("DOMContentLoaded", () => {

    // 1. Intersection Observer for Scroll Animations
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

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 2. 3D Tilt Effect (Disabled on mobile to prevent touch-screen glitches)
    const tiltElements = document.querySelectorAll('.tilt-element');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            // Only apply on screens wider than 768px (Laptops/Desktops)
            if (window.innerWidth > 768) {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xRotation = -((y - rect.height / 2) / rect.height) * 10;
                const yRotation = ((x - rect.width / 2) / rect.width) * 10;

                element.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            }
        });

        element.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                element.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.transform = 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)';
            }
        });

        element.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                element.style.transition = 'none'; // Instant mouse tracking
            }
        });
    });
    // 3. Typing Animation for Hero Section
    const typingTextElement = document.querySelector('.typing-text');

    // Only run this if the element exists (prevents errors on other pages)
    if (typingTextElement) {
        const textToType = "Mohar Gorai";
        let index = 0;

        function typewriter() {
            if (index < textToType.length) {
                typingTextElement.textContent += textToType.charAt(index);
                index++;
                // 120ms delay between each letter typed
                setTimeout(typewriter, 120);
            }
        }

        // Start the typing effect after 800ms (waits for the fade-up animation)
        setTimeout(typewriter, 800);
    }
});