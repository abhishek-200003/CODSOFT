// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple fade-in animation when scrolling into section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            section.classList.add('fade-in');
        }
    });
});
window.addEventListener('scroll', function() {
    var skillsSection = document.querySelector('#skills');
    var skillsPosition = skillsSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition) {
        skillsSection.classList.add('scroll-animate');
    }
});