// landing_page.js

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('ctaButton');

    // Simple scroll to top or redirect for the CTA
    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            // You can replace '#' with the actual URL to your main SkillSprint app (e.g., 'index.html')
            // For now, it will just scroll to the top or if you have more sections below, it could scroll there.
            // window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth'
            // });

            // Example: Redirect to your main app page
            window.location.href = 'index.html'; // Assuming your main app is index.html
        });
    }

    // Optional: Add a subtle parallax effect on scroll for the background elements
    // This is more advanced and not strictly necessary for an MVP but adds polish.
    // window.addEventListener('scroll', () => {
    //     const heroBg = document.querySelector('.hero-bg');
    //     const scrollY = window.scrollY;
    //     heroBg.style.backgroundPositionY = -scrollY * 0.2 + 'px'; // Adjust parallax speed
    // });
});