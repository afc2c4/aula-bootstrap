
### Visão Geral

Antes de tocarmos em qualquer código, é fundamental alinharmos nossa filosofia de desenvolvimento, especialmente porque estamos limitando nossa stack ao HTML5 puro e Bootstrap 5.3+.

1.  **Semântica HTML5 e SEO:** Nossa principal arma para SEO on-page e acessibilidade será o uso rigoroso de *landmark tags* (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`). Os robôs do Google e os leitores de tela não enxergam o design; eles leem a estrutura. Garantiremos que haja apenas um `<h1>` por página (a promessa principal) e que a hierarquia de `<h2>` e `<h3>` não seja "pulada". Isso melhora o rastreamento e a navegação por teclado.
2.  **Bootstrap 5.3 (Mobile-First e Utilitários):** Não vamos usar o Bootstrap apenas para copiar componentes prontos. Vamos utilizá-lo como um *Design System*. 
    * O uso de `.container` será preferido em relação ao `.container-fluid` na maioria das seções para limitar o *line-length* (comprimento da linha) do texto, otimizando a legibilidade em monitores ultrawide. 
    * O grid (`.row`, `.col-*`) e os utilitários de flexbox (`.d-flex`, `.justify-content-*`) serão aplicados pensando primariamente no celular (classes base) e escalando para desktop (classes `-md`, `-lg`), evitando quebras de layout indesejadas em tabelas de preços ou grades curriculares.
    * **Conversão:** CTAs (Call to Actions) usarão utilitários de contraste extremo (ex: `.btn-primary` com cores quentes ou alto contraste sobre fundos escuros) e tamanhos adequados para *touch targets* no mobile (`.btn-lg`, `.w-100` em telas pequenas).

---

### Fase 0: Contextualização do Produto

Para que as nossas escolhas de classes visuais, pesos de tipografia e estrutura de conversão façam sentido, preciso que você me passe o briefing. Por favor, responda a estas 3 perguntas curtas:

1.  **Público-alvo:** O curso é focado na base (HTML/CSS/JS puro para iniciantes) ou em uma stack avançada (ex: arquitetura em React/Vue/Angular, micro-frontends)?
2.  **A Promessa Principal (Transformação):** Qual é a grande dor que este curso resolve? (ex: "Conseguir a primeira vaga em 6 meses", "Dominar o front-end moderno sem depender de tutoriais", "Aumentar a renda com freelas de automação e UI").
3.  **Identidade Visual:** Qual é a *vibe* desejada para a página? (ex: Tema escuro/Cyberpunk com tons de neon, ou Tema claro/Clean e corporativo com azul e branco?).

---
O curso é focado em base, para conseguir a primeira vaga em 6 meses, tema escuro/clean e corporativo com azul e branco

---

Excelente direcionamento. O foco em iniciantes e a promessa de "primeira vaga em 6 meses" nos dá um alvo claríssimo para a conversão. A escolha do tema escuro com tons corporativos (azul e branco) transmite modernidade e, ao mesmo tempo, segurança e estabilidade, características fundamentais para quem está buscando entrar no mercado de trabalho.

Vamos iniciar a **Fase 1: Setup, Navbar e Hero Section (Acima da Dobra)**.

### Defesa Arquitetural e Semântica (Fase 1)

1.  **Setup e Tema Nativo (Bootstrap 5.3):** No HTML5, usaremos o atributo `data-bs-theme="dark"` direto na tag `<html>`. Isso aproveita o sistema de cores nativo da versão 5.3 para o tema escuro, garantindo fundos escuros e textos com contraste adequado (branco/cinza claro) sem precisarmos escrever CSS customizado nesta etapa.
2.  **Semântica de Cabeçalho (`<header>` e `<nav>`):** O menu de navegação ficará dentro de um `<header>` semântico. Usaremos a classe `.fixed-top` na Navbar. *Por que?* Em Landing Pages longas, o CTA principal deve estar sempre a um clique de distância. Ter um botão "Garantir Vaga" no menu fixo aumenta drasticamente a taxa de conversão.
3.  **A Seção Hero (`<main>` e `<section>`):** * Abriremos a tag `<main>` logo após o header, indicando aos motores de busca onde o conteúdo principal começa.
    * **A Promessa (SEO e Conversão):** A tag `<h1>` conterá a promessa principal ("Conquiste sua primeira vaga em 6 meses"). Esta é a tag mais importante da página para o Google. Usaremos a classe `.display-4` e `.fw-bold` para dar peso visual de título primário.
    * **Contraste e Foco (UX):** Destacaremos palavras-chave com a cor azul (`.text-primary`). O botão principal (CTA) usará `.btn-primary` e `.btn-lg`. 
    * **Mobile-First (Grid e Flexbox):** No celular, o layout da Hero será em uma única coluna com texto centralizado (`.text-center` na classe base do container/row). No desktop, ele quebra para a esquerda (`.text-lg-start`), deixando espaço na direita para uma futura imagem, gráfico ou formulário. O CTA ocupará 100% da largura da tela no mobile (utilizando um wrapper com `.d-grid`), facilitando o clique com o polegar, mas voltará ao tamanho normal em telas maiores (`.d-lg-block`).

Aqui está o código inicial e a estrutura da Fase 1:

```html
<!DOCTYPE html>
<html lang="pt-BR" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso Front-End: Sua Primeira Vaga em 6 Meses</title>
    <meta name="description" content="Domine a base do HTML, CSS e JavaScript. O método validado para você conquistar sua primeira vaga de Desenvolvedor Front-End em até 6 meses.">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <header>
        <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary border-bottom border-secondary-subtle py-3">
            <div class="container">
                <a class="navbar-brand fw-bold text-primary" href="#">
                    <span class="text-white">Dev</span>Start
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav align-items-center gap-3">
                        <li class="nav-item">
                            <a class="nav-link" href="#beneficios">O Método</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#curriculo">Módulos</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-outline-primary px-4" href="#oferta">Matricule-se Agora</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero-section min-vh-100 d-flex align-items-center pt-5">
            <div class="container">
                <div class="row justify-content-center justify-content-lg-between align-items-center text-center text-lg-start">
                    
                    <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                        <span class="badge text-bg-primary bg-opacity-25 text-primary mb-3 py-2 px-3 rounded-pill border border-primary">
                            Turmas Abertas - Vagas Limitadas
                        </span>
                        
                        <h1 class="display-4 fw-bolder mb-4">
                            Conquiste sua primeira vaga <br>
                            <span class="text-primary">Front-End em 6 meses</span>
                        </h1>
                        
                        <p class="lead text-body-secondary mb-4 mb-lg-5 fs-4">
                            Domine a base sólida do HTML, CSS e JavaScript. Um método corporativo e pragmático para iniciantes saírem do zero à contratação, sem depender de tutoriais infinitos.
                        </p>
                        
                        <div class="d-grid gap-3 d-lg-flex justify-content-lg-start">
                            <a href="#oferta" class="btn btn-primary btn-lg px-5 py-3 fw-bold shadow">
                                Quero Garantir Minha Vaga
                            </a>
                            <p class="text-muted small mt-2 mt-lg-3 mb-0 d-block d-lg-none">
                                *Garantia incondicional de 7 dias
                            </p>
                        </div>
                        
                        <div class="d-none d-lg-block mt-3">
                            <p class="text-muted small">
                                <span class="text-success fw-bold">✓</span> Garantia incondicional de 7 dias
                            </p>
                        </div>
                    </div>

                    <div class="col-12 col-lg-5">
                        <div class="bg-body-secondary border border-secondary-subtle rounded-4 p-5 text-center shadow-lg h-100 d-flex flex-column justify-content-center align-items-center" style="min-height: 400px;">
                            <h2 class="h4 text-muted border-bottom pb-3 mb-3 w-100">{'< code block >'}</h2>
                            <p class="text-muted small">Aqui vai uma imagem clean e corporativa mostrando um código organizado ou o painel de um desenvolvedor empregado.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
    </main>

</body>
</html>
```

### **Fase 2 (Dores e Benefícios)**

Perfeito. Vamos avançar para a **Fase 2: Seção de Dores/Benefícios (Prova de Valor)**. 

### Defesa Arquitetural e Semântica (Fase 2)

Agora que prendemos a atenção do usuário na Hero com a promessa, precisamos gerar conexão e mostrar que entendemos o problema dele. Para um iniciante querendo a primeira vaga em 6 meses, a maior dor costuma ser o "Tutorial Hell" (ficar preso copiando tutoriais sem entender a base) e a falta de um portfólio real.

1.  **Semântica (`<section>`, `<h2>`, `<h3>`):** * Iniciaremos uma nova `<section id="beneficios">`. O `id` é crucial aqui para que a âncora do menu que criamos na Fase 1 funcione perfeitamente.
    * A hierarquia de títulos desce logicamente para um `<h2>` (Título da Seção) e `<h3>` (Títulos dos Cards). Isso cria uma árvore de acessibilidade impecável para leitores de tela.
2.  **Contraste Visual e Separação (UX):**
    * Usaremos a classe `.bg-body-tertiary` nesta seção. No tema escuro nativo do Bootstrap 5.3, isso aplicará um tom de cinza sutilmente diferente do fundo da Hero (`.bg-body`), criando uma quebra visual elegante sem precisarmos de CSS extra.
3.  **Grid Automático e Mobile-First (`.row-cols-*`):**
    * Para os cards de benefícios, usaremos o sistema de colunas utilitárias `.row-cols-1 .row-cols-md-2 .row-cols-lg-3`. Essa é a forma mais pragmática de lidar com grids em Landing Pages:
        * No mobile (telas pequenas): Tudo empilha em 1 coluna, exigindo rolagem (ideal para o polegar).
        * No tablet (`-md`): Quebra em 2 colunas.
        * No desktop (`-lg`): Alinha perfeitamente em 3 colunas, ocupando toda a tela com respiro.
4.  **Cards Simplificados:** Não usaremos bordas pesadas. Vamos usar `.border-secondary-subtle` e `.shadow-sm` para dar uma leve elevação aos blocos, mantendo o aspecto corporativo e *clean*.

Aqui está o código. Ele deve ser inserido logo após o fechamento da `<section class="hero-section">` e antes do fechamento da tag `</main>`:

```html
        <section id="beneficios" class="py-5 py-lg-6 bg-body-tertiary border-bottom border-secondary-subtle">
            <div class="container py-4">
                
                <div class="row justify-content-center mb-5">
                    <div class="col-12 col-md-8 text-center">
                        <span class="text-primary fw-bold text-uppercase tracking-wide small">O que você vai dominar</span>
                        <h2 class="display-6 fw-bold mt-2 mb-3">O fim do "Tutorial Hell"</h2>
                        <p class="lead text-body-secondary">
                            O mercado não contrata quem apenas copia código. Nós estruturamos o caminho pragmático para você construir uma base inabalável e criar projetos que os recrutadores realmente querem ver.
                        </p>
                    </div>
                </div>

                <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                    
                    <div class="col">
                        <div class="card h-100 bg-body border-secondary-subtle shadow-sm p-4">
                            <div class="card-body p-0">
                                <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                                    <span class="fs-4 fw-bold">01</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Fundamentos Sólidos</h3>
                                <p class="card-text text-body-secondary mb-0">
                                    Aprenda como a web funciona por baixo dos panos. HTML semântico, CSS avançado (Flexbox/Grid) e o motor do JavaScript puro antes de pular para frameworks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 bg-body border-secondary-subtle shadow-sm p-4">
                            <div class="card-body p-0">
                                <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                                    <span class="fs-4 fw-bold">02</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Portfólio com Projetos Reais</h3>
                                <p class="card-text text-body-secondary mb-0">
                                    Construa aplicações do zero. Desde interfaces responsivas até consumo de APIs externas. Código de verdade que você vai se orgulhar de exibir no GitHub.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 bg-body border-secondary-subtle shadow-sm p-4">
                            <div class="card-body p-0">
                                <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                                    <span class="fs-4 fw-bold">03</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Foco em Empregabilidade</h3>
                                <p class="card-text text-body-secondary mb-0">
                                    Não é só código. Incluímos módulos sobre como estruturar seu LinkedIn, passar em testes técnicos e se portar na sua primeira entrevista para Dev Júnior.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="row mt-5 text-center">
                    <div class="col-12">
                        <a href="#curriculo" class="btn btn-outline-primary btn-lg px-4">
                            Ver a Grade Curricular Completa ↓
                        </a>
                    </div>
                </div>

            </div>
        </section>
```

### **Fase 3: Grade Curricular (O Conteúdo)**

Excelente. Chegamos ao "coração" do produto: **Fase 3: Grade Curricular (O Conteúdo)**.

### Defesa Arquitetural e Semântica (Fase 3)

Apresentar a ementa de um curso pode facilmente poluir a tela e assustar um iniciante. A estratégia de UI/UX aqui é usar a **Divulgação Progressiva** (Progressive Disclosure) através do componente Accordion do Bootstrap.

1.  **Semântica e Acessibilidade (ARIA):** * Iniciaremos a `<section id="curriculo">`. Retornaremos ao fundo padrão (`.bg-body`) para criar o contraste com a seção anterior.
    * Como estamos escrevendo o HTML puro agora, a preparação para o comportamento dinâmico (abrir/fechar) exige extrema atenção aos atributos do Bootstrap (`data-bs-toggle`, `data-bs-target`) e atributos ARIA (`aria-expanded`, `aria-controls`). Quando o JS do Bootstrap for injetado posteriormente, os leitores de tela saberão exatamente qual botão controla qual painel de conteúdo.
    * Os botões do Accordion (`<button class="accordion-button">`) atuarão nativamente como elementos de foco pelo teclado (Tab).
2.  **Controle de Largura (UX e Leitura):** * Não deixaremos o Accordion ocupar 100% da largura em telas grandes. Textos muito longos horizontalmente cansam a visão. Vamos englobar o Accordion em uma coluna centralizada de tamanho máximo moderado (`.col-lg-8` ou `.col-md-10`). No mobile, ele assumirá 100% da largura naturalmente.
3.  **Foco em Conversão (Módulo Bônus):** * Adicionaremos um toque de marketing visual: o último módulo será destacado (ex: Empregabilidade) usando utilitários de borda sutilmente diferentes para gerar percepção de valor extra.

Aqui está a estrutura da Fase 3. Este bloco entra logo após a `<section id="beneficios">`:

```html
        <section id="curriculo" class="py-5 py-lg-6">
            <div class="container py-4">
                
                <div class="row justify-content-center mb-5">
                    <div class="col-12 col-md-8 text-center">
                        <span class="text-primary fw-bold text-uppercase tracking-wide small">Passo a Passo</span>
                        <h2 class="display-6 fw-bold mt-2 mb-3">O que você vai aprender</h2>
                        <p class="lead text-body-secondary">
                            Do primeiro "Hello World" até a assinatura do seu contrato. Uma trilha lógica, sem enrolação e direto ao ponto.
                        </p>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        
                        <div class="accordion accordion-flush border border-secondary-subtle rounded-3 overflow-hidden shadow-sm" id="accordionCurriculo">
                            
                            <div class="accordion-item bg-body">
                                <h3 class="accordion-header" id="headingMod1">
                                    <button class="accordion-button fw-bold py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMod1" aria-expanded="true" aria-controls="collapseMod1">
                                        Módulo 1: A Base Inabalável da Web
                                    </button>
                                </h3>
                                <div id="collapseMod1" class="accordion-collapse collapse show" aria-labelledby="headingMod1" data-bs-parent="#accordionCurriculo">
                                    <div class="accordion-body text-body-secondary pt-0 pb-4">
                                        <ul class="mb-0 list-unstyled">
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Como a internet e os navegadores funcionam.</li>
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> HTML5 Semântico para SEO e Acessibilidade.</li>
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> CSS3 Moderno: Flexbox, Grid e variáveis.</li>
                                            <li><span class="text-primary me-2">✓</span> <strong>Projeto:</strong> Construindo sua primeira Landing Page responsiva do zero.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item bg-body">
                                <h3 class="accordion-header" id="headingMod2">
                                    <button class="accordion-button collapsed fw-bold py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMod2" aria-expanded="false" aria-controls="collapseMod2">
                                        Módulo 2: O Poder do JavaScript Puro
                                    </button>
                                </h3>
                                <div id="collapseMod2" class="accordion-collapse collapse" aria-labelledby="headingMod2" data-bs-parent="#accordionCurriculo">
                                    <div class="accordion-body text-body-secondary pt-0 pb-4">
                                        <ul class="mb-0 list-unstyled">
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Lógica de programação aplicada (não apenas teoria).</li>
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Manipulação do DOM e Eventos reais de UI.</li>
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Consumo de APIs (Fetch, Promises e Async/Await).</li>
                                            <li><span class="text-primary me-2">✓</span> <strong>Projeto:</strong> App de Previsão do Tempo consumindo API externa.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item bg-body">
                                <h3 class="accordion-header" id="headingMod3">
                                    <button class="accordion-button collapsed fw-bold py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMod3" aria-expanded="false" aria-controls="collapseMod3">
                                        Módulo 3: Ferramentas Profissionais e Git
                                    </button>
                                </h3>
                                <div id="collapseMod3" class="accordion-collapse collapse" aria-labelledby="headingMod3" data-bs-parent="#accordionCurriculo">
                                    <div class="accordion-body text-body-secondary pt-0 pb-4">
                                        <ul class="mb-0 list-unstyled">
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Versionamento de código com Git.</li>
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Construindo seu perfil no GitHub.</li>
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Boas práticas de Clean Code no Front-End.</li>
                                            <li><span class="text-primary me-2">✓</span> <strong>Projeto:</strong> Hospedando seu portfólio online (Deploy).</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item bg-body-tertiary border-top border-primary border-2">
                                <h3 class="accordion-header" id="headingMod4">
                                    <button class="accordion-button collapsed fw-bold py-3 fs-5 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMod4" aria-expanded="false" aria-controls="collapseMod4">
                                        <span class="badge text-bg-primary me-2">Bônus</span> Mercado e Empregabilidade
                                    </button>
                                </h3>
                                <div id="collapseMod4" class="accordion-collapse collapse" aria-labelledby="headingMod4" data-bs-parent="#accordionCurriculo">
                                    <div class="accordion-body text-body-secondary pt-0 pb-4">
                                        <ul class="mb-0 list-unstyled">
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Como otimizar seu LinkedIn para Recrutadores de TI.</li>
                                            <li class="mb-2"><span class="text-primary me-2">✓</span> Preparação para entrevistas e testes técnicos para Dev Júnior.</li>
                                            <li><span class="text-primary me-2">✓</span> Estratégias para conseguir a primeira vaga em até 6 meses.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
```

A estrutura de conteúdo baseada no componente Accordion `.accordion-flush` empacota a grade de maneira limpa, pronta para receber interatividade via JavaScript posteriormente (mais tarde).

### **Fase 4: Oferta, Pricing e Garantia (Fechamento)**

Excelente. Chegamos ao momento de "fechar a venda": **Fase 4: Oferta, Pricing e Garantia**.

### Defesa Arquitetural e Semântica (Fase 4)

A seção de preços é onde a conversão acontece ou morre. O design aqui precisa remover qualquer atrito cognitivo e passar extrema segurança.

1.  **Semântica (`<section>`, `<article>` ou Card):** * Vamos criar uma `<section id="oferta">` (alvo dos nossos botões CTA anteriores).
    * O elemento do preço em si será construído usando a estrutura de `.card` do Bootstrap, que semanticamente agrupa a oferta.
2.  **Contraste Absoluto (Foco Visual):**
    * Aplicaremos um fundo levemente mais escuro ou usaremos um utilitário de gradiente/sombra intensa no card para destacá-lo do resto da página. O card receberá a classe `.border-primary` para mostrar que é a ação principal.
3.  **Âncora de Valor (Pricing Psychology):**
    * Usaremos a tag `<s>` (ou a classe `.text-decoration-line-through`) para mostrar o preço original (o valor percebido) e uma tipografia gigante (`.display-5`, `.fw-bold`) para o preço com desconto (o valor pago). Isso é o feijão com arroz da alta conversão.
4.  **Botão de CTA Primário:**
    * O botão de compra deve ser o elemento mais visível da tela. Usaremos `.btn-primary`, `.btn-lg`, `.w-100` (ocupando toda a largura do card, excelente para clique no mobile), e `.py-3` para deixá-lo mais alto.
5.  **Garantia e Redução de Risco:**
    * Imediatamente abaixo do botão, colocaremos o aviso da Garantia Incondicional de 7 dias, usando ícones de verificação e texto menor (`.small`, `.text-muted`) para passar tranquilidade sem roubar o foco do botão.

Aqui está o código. Ele entra logo após a `<section id="curriculo">`:

```html
        <section id="oferta" class="py-5 py-lg-6 bg-body-tertiary">
            <div class="container py-4">
                
                <div class="row justify-content-center mb-4 mb-lg-5">
                    <div class="col-12 col-md-8 text-center">
                        <h2 class="display-5 fw-bold mb-3">Sua primeira vaga a um clique de distância</h2>
                        <p class="lead text-body-secondary">
                            O investimento que se paga no seu primeiro mês como Desenvolvedor Júnior.
                        </p>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-5">
                        
                        <div class="card bg-body border-primary border-2 shadow-lg rounded-4 overflow-hidden">
                            
                            <div class="bg-primary text-white text-center py-2 fw-bold text-uppercase tracking-wide small">
                                Oferta Especial de Lançamento
                            </div>
                            
                            <div class="card-body p-4 p-lg-5">
                                
                                <h3 class="h4 text-center fw-bold mb-4">Formação Front-End Completa</h3>
                                
                                <div class="text-center mb-4 pb-4 border-bottom border-secondary-subtle">
                                    <span class="fs-5 text-body-secondary text-decoration-line-through">De R$ 997,00</span>
                                    <div class="d-flex justify-content-center align-items-baseline mt-2">
                                        <span class="fs-4 fw-bold text-primary me-1">12x de</span>
                                        <span class="display-4 fw-bolder text-body">R$ 29<span class="fs-4 text-body-secondary">,70</span></span>
                                    </div>
                                    <span class="text-success fw-bold small mt-1 d-block">ou R$ 297,00 à vista</span>
                                </div>
                                
                                <ul class="list-unstyled mb-4">
                                    <li class="mb-3 d-flex align-items-center">
                                        <span class="text-primary me-3 fs-5">✓</span> Acesso completo a todos os módulos
                                    </li>
                                    <li class="mb-3 d-flex align-items-center">
                                        <span class="text-primary me-3 fs-5">✓</span> Projetos práticos para portfólio
                                    </li>
                                    <li class="mb-3 d-flex align-items-center">
                                        <span class="text-primary me-3 fs-5">✓</span> Módulo bônus: Empregabilidade
                                    </li>
                                    <li class="mb-3 d-flex align-items-center">
                                        <span class="text-primary me-3 fs-5">✓</span> Acesso vitalício e atualizações
                                    </li>
                                </ul>

                                <a href="#" class="btn btn-primary btn-lg w-100 py-3 fw-bold mb-3 shadow">
                                    Garantir Minha Vaga Agora
                                </a>

                                <div class="text-center text-body-secondary small">
                                    <p class="mb-1">
                                        <span class="text-warning fs-5 align-middle me-1">🛡️</span> 
                                        <strong>Risco Zero:</strong> Garantia Incondicional de 7 dias.
                                    </p>
                                    <p class="mb-0" style="font-size: 0.75rem;">
                                        Compra 100% segura. Acesso imediato após aprovação.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
```

### Pausa Rigorosa para Revisão

Note como o card foi restrito a `col-lg-5` para não ficar absurdamente largo no desktop, mas ocupará `col-12` no mobile. O botão `.w-100` garante que no celular seja muito fácil clicar para comprar. A âncora de valor (De R$ 997 por R$ 297) é um clássico de infoprodutos.

### **Fase 5: FAQ e Footer** 

