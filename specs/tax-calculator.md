SPEC-001: Calculadora de Equivalência de Renda Fixa

1. Objetivo
Criar uma página estática que ajude o investidor a comparar taxas prefixadas brutas vs. líquidas, aplicando a regressiva do IR baseada no prazo selecionado.

2. Stack Tecnológica SugeridaLinguagem: HTML5, Tailwind CSS, JavaScript (Vanilla).Hospedagem: Estática (Vercel, Netlify ou GitHub Pages).

3. Regras de Negócio (Lógica do IR). O sistema deve aplicar a alíquota baseada no prazo escolhido no dropdown:

- < 6 meses: 22,5%
- 6 meses a 1 ano: 20%
- 1 ano a 2 anos: 17,5%
- > 2 anos: 15%
- sem IR (0%)

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


SPEC-002: Calculadora de Equivalência de Renda Fixa CDI

1. Objetivo
Criar uma nova página estática que ajude o investidor a comparar taxas prefixadas brutas vs. líquidas, aplicando a regressiva do IR baseada no prazo selecionado.

2. Interface (UI/UX)
- Header: Título "Conversor de Taxas Prefixadas".
- Input Area:
  - Um Dropdown (Select) com as 4 faixas de tempo.
  - Um campo numérico para a "Taxa Bruta Anual (%)". Default 100%
  - Um campo com o valor do CDI 100% com o valor atual de 14,4%
- Output Area (Tabela): Uma tabela com 4 colunas: 
  1. CDI (Ano): O valor digitado mais 10 variações de 1% decrescentes e 10 variações crescentes em 1%.
  2. CDI Bruto %: A conversão para CDI exemplo 100% CDI = 14,4.
  3. Taxa LCA: Valor da convertida. (Bruto * (1 - IR)). Ex: 100% CDI = 85% LCA se o IR = 15. 
  4. LCA Líquido: O resultado final (CDI Bruto * (1 - IR)).
  5. A tabela deve ter 15 linhas ao total, 7 com taxas decrescendo em 1% do que a informada, desde que seja maior que 0 a menor delas. E deve ter 7 com taxas acrescidas em 1% da informada. 
  6. Destaque a linha da tabela com o valor informado.
  7. Exemplo de tabela: 
CDI	CDI BRUTO %	Taxa LCA %	LCA LIQUIDO  %
100,00	14,4	85,00	12,24
103,00	14,832	87,55	12,61
104,00	14,976	88,40	12,73
105,00	15,12	89,25	12,85
120,00	17,28	102,00	14,69
106,00	15,264	90,10	12,97
105,00	15,12	89,25	12,85
108,00	15,552	91,80	13,22
180,00	25,92	153,00	22,03
190,00	27,36	161,50	23,26
200,00	28,8	170,00	24,48
210,00	30,24	178,50	25,70
220,00	31,68	187,00	26,93
230,00	33,12	195,50	28,15
300,00	43,2	255,00	36,72

5. Critérios de Aceite
- A tabela deve atualizar automaticamente ao mudar o dropdown ou a taxa ou o cdi atual.
- O layout deve ser responsivo (funcionar no mobile).
- Valores numéricos devem ter 2 casas decimais.
- Como ja foi feita a spec 1, deverá ter um menu para mudar para essa página e voltar para principal também.
