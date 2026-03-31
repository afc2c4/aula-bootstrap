# CSS3 (na construção do visual custom)

Fundamentos de sintaxe:
Seletores por classe, seletor de tag, seletor combinado (ex.: elemento + classe), descendente.
Pseudo-classes: hover, focus, focus-visible.
Uso de comentários e organização por blocos.
Layout e posicionamento:
Grid Layout (cards e faixas de tópicos).
Positioning com fixed e absolute.
Alinhamento e espaçamento com técnicas de layout responsivo.
Estilização visual:
Variáveis CSS em :root.
Cores em hexadecimal e rgba.
Gradientes lineares e radiais.
Bordas arredondadas e sombras (box-shadow).
Tipografia com famílias de fonte customizadas.
Interação e acessibilidade visual:
Estados de foco visível para links, botões e campos.
Skip link para navegação por teclado.
Responsividade:
Media queries para adaptar o grid em diferentes larguras.


# Bootstrap (na versão framework)

Sistema de grid:
container, row, col-md-4, col-lg-4, col-sm-6 para responsividade.
Utilitários de layout e espaçamento:
d-flex, flex-wrap, justify-content-between, align-items-center.
gap-, p-, px-, py-, mt-, mb-.
Componentes:
Nav (nav, nav-item, nav-link).
Card (card, card-body, card-footer).
Badge.
Buttons (btn, btn-warning, btn-outline-light).
Formulários:
form-label, form-control, form-select.
Estética pronta + customização:
rounded-*, border, border-light-subtle, text-light, text-light-emphasis, sticky-top, shadow-lg.
Sobrescrita/tema próprio para identidade visual com CSS complementar.

# Para escrever esses codigos com framwworks a gente tem q pesquisar em suas bibliotecas e depois inserir



Fluxo mais correto para trabalhar com framework:

1. Ver na documentação oficial quais componentes/classes existem e como usar.
2. Copiar a estrutura base do componente (HTML/classes/tags).
3. Inserir no seu projeto e adaptar ao seu layout.
4. Criar CSS próprio só para identidade visual e ajustes finos.
5. Adicionar JavaScript para comportamento quando o framework não cobre tudo sozinho.
6. Testar responsividade e acessibilidade.

Regra prática:
- Primeiro reutiliza o que a biblioteca já oferece.
- Depois complementa com código próprio.
- Evita “inventar” classe/componente que o framework já resolve. 
