// Formatação de porcentagem
function formatPercent(value) {
    return value.toFixed(2) + '%';
}

// Alternar Dark Mode
function toggleDarkMode() {
    const html = document.documentElement;
    const icon = document.getElementById('dark-icon');
    const isDark = html.classList.toggle('dark');
    icon.innerText = isDark ? '☀️' : '🌙';
}

// Inicializar Dark Mode baseado nas preferências do sistema
function initDarkMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        document.getElementById('dark-icon').innerText = '☀️';
    }
}
