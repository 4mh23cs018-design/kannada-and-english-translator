document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Language Swap Logic
    const swapBtn = document.querySelector('.swap-icon');
    const langs = document.querySelectorAll('.lang');

    if (swapBtn) {
        swapBtn.addEventListener('click', () => {
            // Visual swap of text
            const firstLang = langs[0].textContent;
            langs[0].textContent = langs[1].textContent;
            langs[1].textContent = firstLang;

            // Toggle active class mostly for visual if needed, but here simple text swap works
            // Rotate animation is handled by CSS hover/click, but we can add a class for click
            swapBtn.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                swapBtn.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }

    // Mock Translation Logic
    const translateBtn = document.querySelector('.btn-translate');
    const inputArea = document.querySelector('.input-area'); // mocked as div, but acts as input container
    const outputArea = document.querySelector('.output-area p');

    // Replace input-area mock content with a real textarea for better interaction feel
    const inputContainer = document.querySelector('.input-area');
    inputContainer.innerHTML = '<textarea placeholder="Enter text to translate..." style="width:100%; height:100%; background:transparent; border:none; color:inherit; font-family:inherit; resize:none; outline:none;"></textarea>';

    const textarea = inputContainer.querySelector('textarea');

    if (translateBtn) {
        translateBtn.addEventListener('click', () => {
            const text = textarea.value.trim();
            if (!text) return;

            outputArea.textContent = 'Translating...';

            // Simulate network delay
            setTimeout(() => {
                // Simple mock responses based on input or generic Kannada text
                if (text.toLowerCase().includes('hello')) {
                    outputArea.textContent = 'ನಮಸ್ಕಾರ (Namaskāra)';
                } else if (text.toLowerCase().includes('how are you')) {
                    outputArea.textContent = 'ನೀವು ಹೇಗಿದ್ದೀರಿ? (Nīvu hēgiddīri?)';
                } else {
                    // Generic filler for unknown text to show functionality
                    outputArea.textContent = 'ಅನುವಾದಿತ ಪಠ್ಯ ಇಲ್ಲಿದೆ... (Translated text here...)';
                }
            }, 1000);
        });
    }

    // Intersection Observer for Active Nav Link
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});
