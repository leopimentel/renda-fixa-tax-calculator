// Formatação de porcentagem
function formatPercent(value) {
    return value.toFixed(2) + '%';
}

// Alternar Dark Mode e salvar preferência
function toggleDarkMode() {
    const html = document.documentElement;
    const icon = document.getElementById('dark-icon');
    const isDark = html.classList.toggle('dark');
    icon.innerText = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// Inicializar Dark Mode baseado nas preferências salvas ou do sistema
function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedMode !== null ? savedMode === 'true' : prefersDark;
    
    if (isDark) {
        document.documentElement.classList.add('dark');
        document.getElementById('dark-icon').innerText = '☀️';
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('dark-icon').innerText = '🌙';
    }
}

// Gerar classes de estilo para linha (destaque ou não)
function getRowClasses(destaque) {
    return {
        rowClass: destaque
            ? 'bg-blue-50 dark:bg-blue-900/20 border-b dark:border-blue-700'
            : 'bg-white dark:bg-gray-800 border-b dark:border-gray-700',
        textClass: destaque ? 'text-blue-800 dark:text-blue-200' : 'text-gray-900 dark:text-white'
    };
}

// Gerar linhas da tabela com iteração genérica -7 a +7
function gerarLinhasGenerico(valorBase, passo, callbackCriarLinha) {
    const linhas = [];
    for (let i = -7; i <= 7; i += 1) {
        const valorCalculado = +(valorBase + i * passo).toFixed(2);
        const valorExibido = valorCalculado > 0 ? valorCalculado : 0;
        const destaque = i === 0;
        linhas.push(callbackCriarLinha(valorExibido, destaque));
    }
    return linhas.join('');
}
