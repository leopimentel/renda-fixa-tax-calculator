# renda-fixa-tax-calculator

Calculadora de Equivalência de Renda Fixa - Compare rendimentos brutos vs. líquidos aplicando a regressiva do IR.

## Páginas

- **index.html**: Conversor de Taxas Prefixadas (SPEC-001)
- **cdi-calculator.html**: Conversor de Taxas CDI (SPEC-002)

## Stack Tecnológica

- **Linguagem**: HTML5, Tailwind CSS, JavaScript (Vanilla)
- **Hospedagem**: Estática (Vercel, Netlify ou GitHub Pages)

## Stack Tecnológica

- **Linguagem**: HTML5, Tailwind CSS, JavaScript (Vanilla)
- **Hospedagem**: Estática (Vercel, Netlify ou GitHub Pages)

## Como Usar

1. Abra o arquivo `index.html` em um navegador web.
2. Digite a taxa bruta anual no campo de entrada.
3. A tabela será atualizada automaticamente mostrando as taxas líquidas para diferentes prazos de IR.

## Funcionalidades

- Suporte a Dark Mode baseado nas preferências do sistema ou toggle manual.
- Tabela com 15 linhas variando a taxa bruta em ±0,5%.
- Destaque na linha da taxa informada.
- Layout responsivo.

## Deploy

### GitHub Pages

1. Vá para as configurações do repositório no GitHub.
2. Role para "Pages" na seção "Code and automation".
3. Selecione "Deploy from a branch" e escolha a branch main.
4. Clique em "Save".
5. O site será hospedado em `https://<username>.github.io/<repo-name>/`.
https://leopimentel.github.io/renda-fixa-tax-calculator/cdi-calculator.html

## Desenvolvimento

Para desenvolvimento local, abra `index.html` diretamente no navegador ou use um servidor local como:

```bash
python -m http.server 8000
```

Acesse em `http://localhost:8000`.
