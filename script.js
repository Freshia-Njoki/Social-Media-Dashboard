document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    };

    darkModeToggle.addEventListener('change', toggleDarkMode);
});
