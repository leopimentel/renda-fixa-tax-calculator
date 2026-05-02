SPEC-001: Calculadora de Equivalência de Renda Fixa

1. Objetivo
Criar uma página estática que ajude o investidor a comparar taxas prefixadas brutas vs. líquidas, aplicando a regressiva do IR baseada no prazo selecionado.

2. Stack Tecnológica SugeridaLinguagem: HTML5, Tailwind CSS, JavaScript (Vanilla).Hospedagem: Estática (Vercel, Netlify ou GitHub Pages).

3. Regras de Negócio (Lógica do IR). O sistema deve aplicar a alíquota baseada no prazo escolhido no dropdown:

- < 6 meses: 22,5%
- 6 meses a 1 ano: 20%
- 1 ano a 2 anos: 17,5%
- > 2 anos: 15%

4. Interface (UI/UX)
- Header: Título "Conversor de Taxas Prefixadas".
- Input Area:
  - Um Dropdown (Select) com as 4 faixas de tempo.
  - Um campo numérico para a "Taxa Bruta Anual (%)".
- Output Area (Tabela): Uma tabela com 4 colunas: 
  1. Taxa Bruta (Ano): O valor digitado.
  2. Alíquota IR: A porcentagem de imposto correspondente ao prazo.
  3. Desconto IR: Valor da taxa que vai para o governo.
  4. Taxa Líquida (Ano): O resultado final (Bruto * (1 - IR)).
  5. A tabela deve ter 15 linhas ao total, 7 com taxas decrescendo em 0,5% do que a informada, desde que seja maior que 0 a menor delas. E deve ter 7 com taxas acrescidas em 0,5% da informada. 
  6. Destaque a linha da tabela com o valor informado.

5. Critérios de Aceite
- A tabela deve atualizar automaticamente ao mudar o dropdown ou a taxa.
- O layout deve ser responsivo (funcionar no mobile).
- Valores numéricos devem ter 2 casas decimais.


Requisito UI-02: Suporte nativo a Dark Mode baseado nas preferências do sistema operacional ou via toggle manual.