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

### Vercel

1. Faça login no [Vercel](https://vercel.com).
2. Clique em "New Project".
3. Conecte seu repositório GitHub.
4. Selecione o diretório raiz do projeto.
5. Clique em "Deploy".

### Netlify

1. Faça login no [Netlify](https://netlify.com).
2. Clique em "Sites" > "Deploy manually".
3. Arraste e solte os arquivos do projeto (index.html, etc.).
4. Ou conecte seu repositório GitHub para deploy automático.

### GitHub Pages

1. Vá para as configurações do repositório no GitHub.
2. Role para "Pages" na seção "Code and automation".
3. Selecione "Deploy from a branch" e escolha a branch main.
4. Clique em "Save".
5. O site será hospedado em `https://<username>.github.io/<repo-name>/`.

## Desenvolvimento

Para desenvolvimento local, abra `index.html` diretamente no navegador ou use um servidor local como:

```bash
python -m http.server 8000
```

Acesse em `http://localhost:8000`.
