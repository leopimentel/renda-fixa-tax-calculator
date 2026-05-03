// Renderizar o layout completo da página
function renderLayout(config) {
    const { currentPage, title, subtitle, inputsHTML, tableHTML, maxWidth = 'max-w-2xl' } = config;
    
    const app = document.getElementById('app');
    if (!app) return;

    const navHTML = `
        <nav class="flex justify-center mb-4">
            <a href="index.html" class="px-4 py-2 ${currentPage === 'prefixada' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'} rounded-l-lg transition">Prefixada</a>
            <a href="cdi-calculator.html" class="px-4 py-2 ${currentPage === 'cdi' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'} rounded-r-lg transition">CDI</a>
        </nav>
    `;

    const darkModeToggle = `
        <div class="flex justify-end mb-4">
            <button onclick="toggleDarkMode()" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                <span id="dark-icon">🌙</span>
            </button>
        </div>
    `;

    const header = `
        <header class="mb-8 text-center">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white font-sans">${title}</h1>
            <p class="text-gray-500 dark:text-gray-400">${subtitle}</p>
        </header>
    `;

    const footer = `
        <footer class="mt-6 text-center text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            Spec-Driven Development
        </footer>
    `;

    app.innerHTML = `
        <div class="${maxWidth} w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-transparent dark:border-gray-700">
            ${navHTML}
            ${darkModeToggle}
            ${header}
            <div class="grid grid-cols-1 gap-6 mb-8">
                ${inputsHTML}
            </div>
            <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                ${tableHTML}
            </div>
            ${footer}
        </div>
    `;
}

// Gerar HTML dos inputs (genérico para reutilização)
function createInputHTML(type, id, label, value, attributes = '') {
    const baseClasses = 'w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-gray-50 dark:bg-gray-700 dark:text-white border';
    
    if (type === 'select') {
        return `
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">${label}</label>
                <select id="${id}" class="${baseClasses}">
                    ${attributes}
                </select>
            </div>
        `;
    }
    
    return `
        <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">${label}</label>
            <input type="${type}" id="${id}" value="${value}" ${attributes} class="${baseClasses}">
        </div>
    `;
}

// Gerar HTML da tabela
function createTableHTML(headers) {
    const headerHTML = headers.map(h => `<th class="px-4 py-3 ${h.highlight ? 'text-blue-600 dark:text-blue-400' : ''}">${h.text}</th>`).join('');
    return `
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-700">
                <tr>
                    ${headerHTML}
                </tr>
            </thead>
            <tbody id="resultado-corpo">
                <!-- Linhas geradas dinamicamente pelo JavaScript -->
            </tbody>
        </table>
    `;
}
