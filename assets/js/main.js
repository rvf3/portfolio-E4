<script>
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            body.removeAttribute('data-theme');
            themeToggleButton.textContent = 'Mode Clair';
        } else {
            body.setAttribute('data-theme', 'light');
            themeToggleButton.textContent = 'Mode Sombre';
        }
    });
</script>
