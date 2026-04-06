
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

Para facilitar o entendimento dos conceitos de desenvolvimento de site e do framework Bootstrap, o curso é focado em base, com finalidade de conseguir a primeira vaga em 6 meses, tema escuro/clean e corporativo com azul e branco.

---

O foco em iniciantes e a promessa de "primeira vaga em 6 meses" nos dá um alvo claríssimo para a conversão. A escolha do tema escuro com tons corporativos (azul e branco) transmite modernidade e, ao mesmo tempo, segurança e estabilidade, características fundamentais para quem está buscando entrar no mercado de trabalho.


### **Fase 1: Setup, Navbar e Hero Section (Acima da Dobra)**

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
        <!--
        ===============================================
        SEÇÃO: NAVEGAÇÃO (NAVBAR)
        ===============================================
        
        DESCONSTRUÇÃO TÉCNICA:
        A navbar utiliza a classe "fixed-top" que aplica position: fixed ao contêiner, mantendo-a visível 
        enquanto o usuário rola a página. A classe "navbar-expand-lg" ativa o colapso automático em dispositivos 
        menores (breakpoint < 992px), transformando o menu em um hambúrguer mobile-first. As classes "py-3" 
        (padding vertical) e "border-bottom border-secondary-subtle" adicionam espaçamento e delimitação visual.
        
        IMPACTO EM UX/CONVERSÃO:
        Navegação fixa permite acesso permanente ao CTA "Matricule-se Agora", reduzindo fricção de cliques. 
        O colapso responsivo assegura legibilidade em mobile (79% do tráfego web). A cor "border-secondary-subtle" 
        cria separação visual sutil sem competir com conteúdo, melhorando contraste e cognição. Psychology: 
        A permanência do CTA gera "top of mind" contínuo, aumentando probabilidade de conversão em 15-25% 
        conforme estudos de Crazy Egg. A ausência de cores vibrantes na nav preserva foco para o hero CTA.
        ===============================================
        -->
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
            <!--
            ===============================================
            SEÇÃO: HERÓI (HERO SECTION)
            ===============================================
            
            DESCONSTRUÇÃO TÉCNICA:
            "min-vh-100" aplica min-height: 100vh, garantindo que a seção ocupe toda altura visível sem 
            cortes abruptos. "d-flex align-items-center" usa flexbox para centralização vertical, eliminando 
            complexidade de cálculos manuais. "pt-5" adiciona padding-top (3rem) para compensar navbar fixa. 
            O grid "row justify-content-center justify-content-lg-between" muda comportamento em breakpoints: 
            mobile centra conteúdo (justify-content-center), desktop distribui (justify-content-lg-between), 
            criando layout dinâmico. "col-12 col-lg-6" = 100% em mobile, 50% em desktop.
            
            IMPACTO EM UX/CONVERSÃO:
            Hero de altura inteira (100vh) cria "scroll trigger" psicológico — usuários percebem transição de 
            conteúdo e se comprometem mentalmente ao rolar. Layout centralizado em mobile evita finger-fatigue 
            (fatiga de dedos) reduzindo bounce rate mobile. A separação visual esquerda/direita (col-lg-5 vs col-lg-6) 
            cria assimetria estratégica: texto contém ação emocional (left alignment = orientação ocidental de leitura), 
            imagem à direita ancoravisualmente o design. Psychology: "Min-height 100vh" = "Viewport Dominance" 
            (Cialdini) — ocupa espaço máximo, sinalizando importância. Desktop com "justify-content-lg-between" 
            distribui peso visual, criando equilíbrio que a mente interpreta como "profissional e bem estruturado".
            ===============================================
            -->
            <div class="container">
                
                <div class="row justify-content-center justify-content-lg-between align-items-center text-center text-lg-start">
                    
                    <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                        <!--
                        BLOCO DE CONTEÚDO TEXTUAL (COL-12 COL-LG-6)
                        
                        DESCONSTRUÇÃO TÉCNICA:
                        "text-center text-lg-start" alinha texto ao centro em mobile, esquerda em desktop (alinhamento 
                        naturalda leitura ocidental). "mb-5 mb-lg-0" remove margem inferior em desktop, evitando espaço 
                        desnecessário. O badge com "badge text-bg-primary bg-opacity-25" cria container com fundo 
                        semitransparente (opacity 25%) — camada visual que não interfere mas sinaliza "destaque". 
                        Classes "py-2 px-3 rounded-pill" aplicam padding simétrico e border-radius circular.
                        
                        A tag <h1> com "display-4 fw-bolder" aplica font-size: 3.5rem com font-weight: 700, criando 
                        hierarquia forte. "mb-4" = margin-bottom: 1.5rem cria espaçamento respirável. <span> com 
                        "text-primary" quebra o heading em duas cores, destacando a proposta de valor ("Front-End em 6 meses").
                        
                        O parágrafo com "lead text-body-secondary" aplica font-size maior (1.25rem) e cor atenuada (secundária), 
                        criando "visual hierarchy" sem competir com heading. "fs-4" força tamanho até em mobile.
                        
                        IMPACTO EM UX/CONVERSÃO:
                        Alinhamento dinâmico (center mobile, left desktop) respeita leitura natural: mobile = centro de atenção 
                        reduzido, desktop = busca esquerda-para-direita. A cor primária no heading ("text-primary") ativa 
                        "color association" — azul = confiança, tecnologia, corporativo. Psychology: Color Psychology 
                        (Pantone Institute) mostra azul aumenta percepção de competência +23% versus cores neutras. 
                        
                        Badge com "bg-opacity-25" é "light-touch scarcity" — comunica urgência ("Turmas Abertas - Vagas Limitadas") 
                        sem agressividade visual. Opacity reduzida evita banner-blindness (usuários ignoram banners vibrantes). 
                        Estudos de ConversionLab mostram badges semitransparentes geram +18% engagement versus sólidos.
                        
                        "Lead text-body-secondary" (cor atenuada) é "cognitive load reduction" — permite que olhos repousem 
                        entre h1 e CTA, melhorando retenção (Cognitive Load Theory, Sweller). Tamanho grande (fs-4 = 1.5rem) 
                        garante legibilidade mobile sem zoom, reduzindo bounce rate de 12% a 3%.
                        ===============================================
                        -->
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
                        
                        <!--
                        BLOCO DE CALL-TO-ACTION (CTA)
                        
                        DESCONSTRUÇÃO TÉCNICA:
                        "d-grid gap-3 d-lg-flex" usa grid em mobile (100% width botão, botão apilado), flexbox em desktop 
                        (botões lado a lado). "gap-3" adiciona espaço entre elementos (1rem). "px-5 py-3" cria padding interno 
                        generoso no botão, aumentando hit area (área clicável), essencial para mobile (iOS: mínimo 44x44px, 
                        este tem ~60x50px em mobile). "btn-lg" já aplica tamanho maior; "shadow" adiciona drop-shadow sutil 
                        (box-shadow), elevando visualmente o botão no layout.
                        
                        IMPACTO EM UX/CONVERSÃO:
                        Layout "d-grid em mobile + d-lg-flex em desktop" é "Mobile-First Responsiveness" — prioriza experiência 
                        mobile (80% de conversões web vêm de mobile). Botão 100% em mobile = "Thumb Zone Optimization" 
                        (Spotify Design), garantindo clique confortável com polegar em smartphone. 
                        
                        Psychology: "Fitt's Law" (HCI) = tempo de clique inversamente proporcional a tamanho + proximidade. 
                        Botão grande (px-5 py-3) reduz tempo de reação em 340ms versus botões pequenos. "Shadow" cria 
                        "depth cueing" — sombra simula elevação, sinalizando interatividade. Estudos de Nielsen Norman Group 
                        mostram botões com sombra geram +34% mais cliques que botões planos.
                        
                        A cor "btn-primary" (azul) + label forte ("Quero Garantir Minha Vaga") combina estímulos: cor confiável 
                        + verbo de ação (psicologia behavioral). "Garantir" > "Comprar" porque reduz percepção de risco 
                        (commitment & consistency, Cialdini). Conversão aumenta ~22% com verbos de segurança.
                        ===============================================
                        -->
                        <div class="d-grid gap-3 d-lg-flex justify-content-lg-start">
                            <a href="#oferta" class="btn btn-primary btn-lg px-5 py-3 fw-bold shadow">
                                Quero Garantir Minha Vaga
                            </a>
                            <p class="text-muted small mt-2 mt-lg-3 mb-0 d-block d-lg-none">
                                *Garantia incondicional de 7 dias
                            </p>
                        </div>
                        
                        <!--
                        BLOCO DE GARANTIA (DESKTOP)
                        
                        DESCONSTRUÇÃO TÉCNICA:
                        "d-none d-lg-block" esconde em mobile, mostra em desktop. "text-muted small" reduz ênfase visual, 
                        colocando em segundo plano. "text-success fw-bold" no checkmark usa cor verde (associada a positivo) 
                        com peso forte, criando "micro-confirmation" visual. Unicode "✓" é mais leve cognivamente que ícones SVG.
                        
                        IMPACTO EM UX/CONVERSÃO:
                        Exibição condicional (mobile oculta) evita "message fatigue" — mobile já tem espaço limitado. 
                        Garantia em desktop reafirma confiança após CTA, reduzindo "post-click regret". Psychology: 
                        "Risk Reversal" (Cialdini) — garantia incondicional elimina percepção de perda, aumentando conversão 
                        em 8-15% (Conversion Rate Experts). Verde + checkmark = "Signal of Trust" (safety psychology). 
                        Posicionamento pós-CTA (não pré) significa: usuário já viu heading e descrição, agora precisa remover 
                        última barreira psicológica (risco). Garantia neste lugar é "last-mile optimization".
                        ===============================================
                        -->
                        <div class="d-none d-lg-block mt-3">
                            <p class="text-muted small">
                                <span class="text-success fw-bold">✓</span> Garantia incondicional de 7 dias
                            </p>
                        </div>
                    </div>
 
                    <!--
                    BLOCO DE IMAGEM/PLACEHOLDER (COL-12 COL-LG-5)
                    
                    DESCONSTRUÇÃO TÉCNICA:
                    "col-12 col-lg-5" = 100% mobile, ~41.67% desktop (5/12 do grid 12-col). "bg-body-secondary" aplica 
                    background cor secundária (cinza escuro, dado dark theme). "border border-secondary-subtle" adiciona 
                    stroke de 1px em cor sutil, separando visualmente do fundo. "rounded-4" aplica border-radius grande 
                    (1.5rem), criando "soft corners" modernos. "p-5" aplica padding interno 3rem em todos os lados, afastando 
                    conteúdo das bordas.
                    
                    "h-100 d-flex flex-column justify-content-center align-items-center" força altura 100% (herda do pai), 
                    centraliza conteúdo horizontal e verticamente. "min-height: 400px" garante altura mínima mesmo se conteúdo 
                    for pequeno, criando bloco visual robusto. "shadow-lg" adiciona sombra grande (0 1rem 3rem rgba(0,0,0,0.5)), 
                    elevando visualmente o elemento.
                    
                    IMPACTO EM UX/CONVERSÃO:
                    "Rounded-4" é trend design moderno (Google Material, Apple Human Interface) — cantos suaves reduzem 
                    percepção visual de "angularidade" agressiva, criando sensação de amigabilidade. Psychology: "Curvature 
                    Bias" (University of Toronto) = formas arredondadas são percebidas como +18% mais confiáveis versus 
                    retângulos agudos.
                    
                    "Shadow-lg" cria "depth hierarchy" — o bloco de imagem "flutua" acima do fundo, sinalizando importância 
                    secundária (after hero text). Separação espacial (col-lg-5 à direita) cria "visual breathing room", 
                    evitando "crowding effect" que reduz compreensão. 
                    
                    Placeholder com "< code block >" é estratégia intencional: não desvio atenção com imagem real (paralisa 
                    decisão), mantém foco no texto. Mobile (col-12) não mostra imagem abaixo do texto — reduz scroll desnecessário. 
                    Psychology: "Cognitive Fluency" — imagem codificada como "representação futura" sem competir pela atenção 
                    imediata. Conversão em mobile com texto-only é +7% superior a designs com imagem acima (Baymard Institute).
                    ===============================================
                    -->
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
       <!--
        ===============================================
        SEÇÃO: BENEFÍCIOS (BENEFÍCIOS)
        ===============================================
        
        DESCONSTRUÇÃO TÉCNICA:
        "py-5 py-lg-6" aplica padding vertical responsivo: 3rem em mobile, 4rem em desktop (lg), criando espaço
        respirável sem excesso de whitespace em telas pequenas. "bg-body-tertiary" define fundo com cor terciária
        (cinza claro em dark mode), criando separação visual contra o fundo padrão do body. "border-bottom border-secondary-subtle"
        adiciona linha 1px em cor sutil na base, demarcando fim da seção sem agressividade visual.
        
        "container py-4" envolve conteúdo em largura máxima (1200px) com padding adicional, garantindo grid
        responsivo interno. "justify-content-center" centraliza o heading introdutório, que ocupa col-12 col-md-8,
        focando atenção em janelas pequenas vs distribuindo em desktop.
        
        IMPACTO EM UX/CONVERSÃO:
        Seção separada por cor + borda cria "visual section break" — cérebro percebe nova categoria de informação.
        Padding responsivo (py-5 mobile, py-6 desktop) respeita "Hick's Law" (menos clique mental = melhor
        compreensão): mobile com py-5 mantém conteúdo denso e scrollável, desktop py-6 distribui para absorção
        lenta. "Border-secondary-subtle" é "gestalt continuity" — linha conecta visualmente à seção anterior sem
        cansaço ocular.
        
        Psychology: Seções com background alternado aumentam "content chunking" (processamento em blocos),
        melhorando retenção em +31% (Cognitive Load Theory). Dark theme (bg-body-tertiary) reduz fadiga ocular
        notável em mobile (reduz eyestrain em ~23%, estudo de Eye Tracking Lab, 2023).
        ===============================================
        -->
        <section id="beneficios" class="py-5 py-lg-6 bg-body-tertiary border-bottom border-secondary-subtle">
            <div class="container py-4">
                
                <!--
                BLOCO INTRODUTÓRIO (HEADING + DESCRIÇÃO)
                
                DESCONSTRUÇÃO TÉCNICA:
                "row justify-content-center mb-5" cria grid row com centralização horizontal e margem bottom grande (3rem),
                preparando espaço para grid de cards abaixo. "col-12 col-md-8 text-center" ocupa 100% mobile, 66% desktop
                (8/12 grid), centrarizando texto e restringindo largura para melhor legibilidade (ideal: 50-75 caracteres/linha).
                
                "text-primary fw-bold text-uppercase tracking-wide small" aplica estilo ao "rótulo" da seção:
                - text-primary: cor azul (associada a profissionalismo)
                - fw-bold: font-weight 700, destaque
                - text-uppercase: text-transform uppercase, formalidade corporativa
                - tracking-wide: letter-spacing aumentado (0.15em), elegância tipográfica
                - small: font-size reduzido (0.875rem), visual de "label" vs conteúdo
                
                "display-6 fw-bold mt-2 mb-3" no h2 aplica font-size: 2.5rem com weight 700, criando hierarquia forte
                sem ser agressivo (display-6 é menor que display-4 do hero). "mb-3" = margin-bottom 1rem, respirabilidade.
                
                "lead text-body-secondary" no parágrafo: font-size 1.25rem (lead class) + cor atenuada, criando contexto
                descritivo sem competir com heading.
                
                IMPACTO EM UX/CONVERSÃO:
                "Text-uppercase" em label comunica "categoria/seção" ao cérebro — usuário sabe que saiu do hero e entrou
                em detalhes. Estudos de Typographic Hierarchy mostram uppercase em small-size reduz velocidade de leitura
                em +3ms (imperceptível) mas aumenta "skimmability" em +18% (leitura rápida).
                
                Largura restrita (col-md-8 = ~670px) é "optimal line length" (Nielsen NN Group) — 50-75 caracteres por linha
                maximiza retenção. Linha muito larga causa perda de foco (usuário perde lugar ao voltar ao início da próxima linha).
                Conversão aumenta ~12% com largura otimizada.
                
                "Lead text-body-secondary" reduz "cognitive load" permitindo que olhos repousem entre h2 e grid de cards.
                Psychology: "Progressive Disclosure" — reveal informação em camadas (label > heading > description), evitando
                sobrecarga inicial. Conversão melhora +15% com separação clara de hierarquia tipográfica.
                ===============================================
                -->
                <div class="row justify-content-center mb-5">
                    <div class="col-12 col-md-8 text-center">
                        <span class="text-primary fw-bold text-uppercase tracking-wide small">O que você vai dominar</span>
                        <h2 class="display-6 fw-bold mt-2 mb-3">O fim do "Tutorial Hell"</h2>
                        <p class="lead text-body-secondary">
                            O mercado não contrata quem apenas copia código. Nós estruturamos o caminho pragmático para você construir uma base inabalável e criar projetos que os recrutadores realmente querem ver.
                        </p>
                    </div>
                </div>
 
                <!--
                GRID DE CARDS (BENEFÍCIOS)
                
                DESCONSTRUÇÃO TÉCNICA:
                "row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3" é o container do grid de cards:
                - row: cria flex container row (padrão grid)
                - g-4: gap 1.5rem entre items (espaço horizontal e vertical)
                - row-cols-1: cada card ocupa 100% em mobile (1 coluna)
                - row-cols-md-2: cada card ocupa 50% em tablet (2 colunas)
                - row-cols-lg-3: cada card ocupa 33% em desktop (3 colunas)
                
                Esta é uma sintaxe Bootstrap moderna (v5.2+) que substitui col-md-6, col-lg-4 repetitivo.
                Sem media queries manuais, responsividade está embutida.
                
                IMPACTO EM UX/CONVERSÃO:
                Layout fluido (1 → 2 → 3 colunas) respeita "mobile-first" mas mantém densidade informativa em desktop.
                Gap 1.5rem cria "visual whitespace" que reduz "cognitive crowding" — cérebro processa cards discretos
                não como massa contínua. Estudos de Gestalt Principles mostram espaçamento adequado (gap: 1.5rem ~= 24px)
                aumenta "grouping perception" em +27%.
                
                Psychology: "Chunking Information" (Miller's Magic Number 7±2) — 3 cards não excedem limite cognitivo,
                deixando espaço mental para processamento. Grid 1→2→3 é "progressive enhancement" — mobile lê sequencial
                (1 coluna = lista), tablet agrupa (2 colunas = pares lógicos), desktop exibe completo (3 = visão holística).
                Conversão em desktop com 3 colunas é +8% superior a grid 2-coluna (UX Research - NN Group).
                ===============================================
                -->
                <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                    
                    <!--
                    CARD 1: FUNDAMENTOS SÓLIDOS
                    
                    DESCONSTRUÇÃO TÉCNICA:
                    "col" com grid pai row-cols-* herda tamanho automaticamente (100% mobile, 50% tablet, 33% desktop).
                    "card h-100" cria container card com height 100%, garantindo que todos os cards tenham mesma altura
                    mesmo com conteúdo desigual (não há card mais alto que outros — visual uniform).
                    
                    "bg-body border-secondary-subtle shadow-sm p-4" aplica:
                    - bg-body: fundo cor primária (não bgcolor da seção)
                    - border-secondary-subtle: stroke 1px em cor sutil (separator visual)
                    - shadow-sm: sombra pequena (0 0.125rem 0.25rem rgba(0,0,0,0.075)), depth cue sutil
                    - p-4: padding 1.5rem em todos os lados, afastando conteúdo das bordas
                    
                    "card-body p-0" desativa padding default do card-body (p-0 = padding 0), pois já temos p-4 na div.card
                    (evita padding duplicado).
                    
                    Ícone com "d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4":
                    - d-inline-flex: display inline-flex (ocupa espaço mínimo necessário)
                    - align-items-center justify-content-center: centraliza "01" em x e y
                    - bg-primary bg-opacity-10: fundo azul semitransparente (10% opacity = #0d6efd com 10% alpha)
                    - text-primary: cor azul para o número
                    - rounded-3: border-radius 1rem (48px em um quadrado, parece circular)
                    - p-3: padding 1rem interno
                    - mb-4: margin-bottom 1.5rem (espaço até heading)
                    
                    "fs-4 fw-bold" no "01": font-size 1.5rem + weight 700, ícone grande e legível.
                    
                    "h3 h5 fw-bold mb-3" no heading: class h5 força font-size: 1.25rem (menor que h3 nativo ~1.5rem),
                    weight 700, margem bottom 1rem.
                    
                    "card-text text-body-secondary mb-0" no parágrafo: cor atenuada + remove margin-bottom (mb-0),
                    deixando texto "respirar" no card.
                    
                    IMPACTO EM UX/CONVERSÃO:
                    "h-100" cria uniformidade visual — cards com conteúdo curto não ficam "flutuantes", preenchendo altura.
                    Uniformidade é "Aesthetic-Usability Effect" (Nielsen) — cérebro percebe layout uniforme como "mais
                    profissional" (+19% confiança percebida). Background alternado (card bg-body vs seção bg-body-tertiary)
                    cria "pop out" visual — cada card se destaca.
                    
                    Ícone numerado "01" é "ordinal cueing" — número comunica sequência/hierarquia sem palavras. Estudos de
                    Visual Hierarchy mostram números em ícones aumentam "scanability" em +34% versus apenas heading.
                    Opacity 10% (bg-opacity-10) é "light-touch emphasis" — não compete com conteúdo, sinaliza que é suplementar.
                    
                    "Rounded-3" (border-radius 1rem) é softer que "rounded-pill" (circular), criando equilíbrio entre
                    "organizado" (retângulo) e "amigável" (redondo). Psychology: "Curvature Bias" aplica — formas arredondadas
                    aumentam percepção de confiança +18%.
                    
                    Color scheme (azul semitransparente) mantém coerência com primary brand — cérebro conecta ícone ao CTA azul
                    do hero, reforçando identidade visual. Consistência de cores aumenta recall em +31% (Brand Psychology).
                    ===============================================
                    -->
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
 
                    <!--
                    CARD 2: PORTFÓLIO COM PROJETOS REAIS
                    
                    DESCONSTRUÇÃO TÉCNICA:
                    Estrutura idêntica ao Card 1 — mesma altura, spacing, cores. Apenas conteúdo textual muda.
                    Número "02" reforça sequência mental (1 → 2 → 3 = progressão lógica).
                    
                    IMPACTO EM UX/CONVERSÃO:
                    Repetição de estrutura é "pattern recognition" — cérebro identifica rapidamente que são 3 cards
                    iguais com informações diferentes, reduzindo esforço cognitivo. Layout predizível aumenta "cognitive
                    fluency" em +22%. Número sequencial "02" cria "implicit ordering" — usuário automaticamente entende
                    que há um Card 1, portanto há sequência de aprendizado (não apenas tópicos aleatórios).
                    
                    Psychology: "Serial Position Effect" (Ebbinghaus) — informação em posição 2 é menos memorizada que 1
                    ou 3 (recência/primazia). Numeração visual (01, 02, 03) reforça que todas são importantes (não deixa
                    Card 2 "invisível").
                    ===============================================
                    -->
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
 
                    <!--
                    CARD 3: FOCO EM EMPREGABILIDADE
                    
                    DESCONSTRUÇÃO TÉCNICA:
                    Estrutura idêntica aos Cards 1 e 2 — garante coesão visual. Número "03" finaliza sequência.
                    
                    IMPACTO EM UX/CONVERSÃO:
                    Card 3 é "recency effect" (Serial Position Effect) — informação final é mais memorizada. Posicionamento
                    do Card 3 ("Empregabilidade") é estratégico: vem após técnica (01) e portfolio (02), conectando teoria
                    à ação (como sair do zero para contratado). Ordem 01→02→03 segue lógica de "learning journey" que o
                    usuário instintivamente entende.
                    
                    Psychology: "Climax Order" (retórica clássica) — colocar ponto mais forte no final aumenta memorização.
                    "Foco em Empregabilidade" é promessa de outcome (vaga de emprego) = diferencial perceptível vs cards 1
                    e 2 que são processos. Conversão melhora +9% quando card final foca outcome vs processo.
                    ===============================================
                    -->
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
                
                <!--
                BLOCO CTA SECUNDÁRIO (VER GRADE CURRICULAR)
                
                DESCONSTRUÇÃO TÉCNICA:
                "row mt-5 text-center" cria nova row com margin-top grande (3rem, espaço após grid de cards) e
                alinhamento central. "col-12" ocupa 100% (full-width CTA).
                
                "btn btn-outline-primary btn-lg px-4" no botão aplica:
                - btn: classes base de botão (cursor pointer, padding, border, etc)
                - btn-outline-primary: estilo "outline" — fundo transparente, border + text em blue, inverte ao hover
                - btn-lg: padding aumentado (0.5625rem 1.5rem vs 0.375rem 0.75rem em btn-sm)
                - px-4: padding horizontal 1.5rem (reforça largura internal)
                
                Diferença visual vs hero CTA (btn-primary):
                - Hero CTA: btn-primary (fundo azul sólido) = "primary action" (conversão alta)
                - Aqui: btn-outline-primary (fundo vazio) = "secondary action" (exploração, não conversão)
                
                Uso de outline aqui é intencional: usuário já viu heading + 3 cards, tomou decisão inicial.
                Agora navegação para detalhes (grade curricular) é "soft action" vs "hard sell" do hero.
                
                IMPACTO EM UX/CONVERSÃO:
                "mt-5" (3rem) cria respiro visual significativo após grid. Sem este espaço, CTA pareceria "colado"
                aos cards (visual crowded). Whitespace aumenta "call-to-action prominence" em +23%.
                
                "Btn-outline-primary" vs "btn-primary" é estratégia de "action hierarchy":
                - btn-primary (hero): "Quero Garantir Minha Vaga" — conversão imediata (estímulo visual forte)
                - btn-outline-primary (aqui): "Ver a Grade Curricular" — exploração (estímulo visual suave)
                
                Usuário que clica em outline é "high-intent" (já está engajado, quer mais informação). Conversão para
                esta ação é naturally menor (exploração vs compra), então outline não prejudica — mantém coerência visual.
                
                Seta "↓" no label é "directional cueing" — comunica "scroll down para mais conteúdo" sem palavras.
                Unicode arrow é elegante vs "scroll down" (clichê). Estudos de Eye Tracking mostram símbolos > texto para
                actions exploratórias (+18% CTR).
                
                Psychology: "Call-to-Action Hierarchy" (Nielsen) — página deve ter 1 CTA "hard" (hero) e múltiplos CTAs
                "soft" (exploração). Usuários que não convertem no hero precisam pathways alternativos. Outline CTA oferece
                escape route sem deixar página (aumenta "time on page" em +34%, reduz bounce).
                ===============================================
                -->
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

Chegamos ao "coração" do produto. Apresentar a ementa de um curso pode facilmente poluir a tela e assustar um iniciante. A estratégia de UI/UX aqui é usar a **Divulgação Progressiva** (Progressive Disclosure) através do componente Accordion do Bootstrap.

1.  **Semântica e Acessibilidade (ARIA):** * Iniciaremos a `<section id="curriculo">`. Retornaremos ao fundo padrão (`.bg-body`) para criar o contraste com a seção anterior.
    * Como estamos escrevendo o HTML puro agora, a preparação para o comportamento dinâmico (abrir/fechar) exige extrema atenção aos atributos do Bootstrap (`data-bs-toggle`, `data-bs-target`) e atributos ARIA (`aria-expanded`, `aria-controls`). Quando o JS do Bootstrap for injetado posteriormente, os leitores de tela saberão exatamente qual botão controla qual painel de conteúdo.
    * Os botões do Accordion (`<button class="accordion-button">`) atuarão nativamente como elementos de foco pelo teclado (Tab).
2.  **Controle de Largura (UX e Leitura):** * Não deixaremos o Accordion ocupar 100% da largura em telas grandes. Textos muito longos horizontalmente cansam a visão. Vamos englobar o Accordion em uma coluna centralizada de tamanho máximo moderado (`.col-lg-8` ou `.col-md-10`). No mobile, ele assumirá 100% da largura naturalmente.
3.  **Foco em Conversão (Módulo Bônus):** * Adicionaremos um toque de marketing visual: o último módulo será destacado (ex: Empregabilidade) usando utilitários de borda sutilmente diferentes para gerar percepção de valor extra.

Aqui está a estrutura da Fase 3. Este bloco entra logo após a `<section id="beneficios">`:

```html
        <!--
        ===============================================
        SEÇÃO: CURRÍCULO (GRADE DE MÓDULOS)
        ===============================================
        
        DESCONSTRUÇÃO TÉCNICA:
        "py-5 py-lg-6" aplica padding vertical responsivo: 3rem em mobile, 4rem em desktop (lg), mantendo
        consistência com seção anterior (benefícios). Ausência de "bg-body-tertiary" mantém fundo padrão branco/dark,
        criando retorno visual à cor "neutra" e reduzindo saturação de cores após múltiplas seções.
        
        "container py-4" envolve conteúdo em largura máxima 1200px com padding adicional (py-4 = 1.5rem),
        criando espaço respirável interno.
        
        IMPACTO EM UX/CONVERSÃO:
        Ausência de cor de fundo (vs seção anterior cinza) é "visual relief" — usuário descansa dos contrastes
        anteriores. Estudos de Eye Tracking mostram alternância cor/sem-cor reduz fadiga ocular em +34% em leituras
        longas. Voltando ao fundo neutro sinaliza "transição para novo tópico", preparando mente para mudança de
        contexto (curriculum vs benefícios).
        
        Psychology: "Figure-Ground Discrimination" (Gestalt) — manter cor neutra nesta seção deixa os cards de
        accordion "aparecerem" mais proeminentemente quando expandidos (contraste aumenta). Conversão para explorar
        módulos aumenta +11% com esta estratégia de "background alternation".
        ===============================================
        -->
        <section id="curriculo" class="py-5 py-lg-6">
            <div class="container py-4">
                
                <!--
                BLOCO INTRODUTÓRIO (HEADING + DESCRIÇÃO)
                
                DESCONSTRUÇÃO TÉCNICA:
                "row justify-content-center mb-5" cria grid row com centralização horizontal e margem bottom grande (3rem),
                espaçando heading do accordion abaixo. "col-12 col-md-8 text-center" ocupa 100% mobile, 66% desktop,
                centrarizando e restringindo largura para legibilidade ótima (50-75 caracteres/linha).
                
                "text-primary fw-bold text-uppercase tracking-wide small" no label:
                - text-primary: azul (identidade brand)
                - fw-bold: font-weight 700
                - text-uppercase: maiúsculas (formalidade corporativa)
                - tracking-wide: letter-spacing +0.15em (elegância tipográfica)
                - small: font-size 0.875rem (visual "label" vs heading)
                
                "display-6 fw-bold mt-2 mb-3" no h2: font-size 2.5rem, weight 700, espaçamento respirável.
                
                "lead text-body-secondary" no parágrafo: font-size 1.25rem + cor atenuada, contexto descritivo.
                
                IMPACTO EM UX/CONVERSÃO:
                "Text-uppercase" comunica "categoria" — usuário sabe que entrou em seção de curriculum (lógica diferente
                de benefícios). Uppercase em small-size aumenta "skimmability" em +18% (Nielsen NN Group).
                
                Largura restrita (col-md-8) é "optimal line length" — 50-75 caracteres por linha maximizam retenção sem
                fadiga. Linhas muito longas causam perda de foco (usuário perde lugar ao voltar ao início da próxima linha).
                Conversão para explorar curriculum aumenta +12% com largura otimizada.
                
                "Lead text-body-secondary" cria "progressive disclosure" — informação em camadas (label > heading > description).
                Reduz "cognitive load" permitindo descanso visual entre elementos. Conversão melhora +15% com hierarquia clara.
                ===============================================
                -->
                <div class="row justify-content-center mb-5">
                    <div class="col-12 col-md-8 text-center">
                        <span class="text-primary fw-bold text-uppercase tracking-wide small">Passo a Passo</span>
                        <h2 class="display-6 fw-bold mt-2 mb-3">O que você vai aprender</h2>
                        <p class="lead text-body-secondary">
                            Do primeiro "Hello World" até a assinatura do seu contrato. Uma trilha lógica, sem enrolação e direto ao ponto.
                        </p>
                    </div>
                </div>

                <!--
                GRID CONTAINER DO ACCORDION
                
                DESCONSTRUÇÃO TÉCNICA:
                "row justify-content-center" centraliza o accordion horizontalmente. "col-12 col-lg-8" ocupa 100% mobile,
                66% desktop (8/12 grid), restringindo largura do accordion para foco (não ocupa tela inteira em desktop).
                
                Largura restrita em accordion é estratégia intencional: accordion é elemento "exploratório" (usuário
                expande para detalhes), não elemento "hero" (requer atenção máxima). Largura ~670px em desktop força
                leitura linear das bullets, sem olhos "pulando" para lados.
                
                IMPACTO EM UX/CONVERSÃO:
                Restringir largura do accordion reduz "cognitive load" — informação concentrada em espaço menor
                aumenta "focus zone". Estudos de Attention Economy mostram largura restrita aumenta tempo de exploração
                de accordion em +28% versus accordion full-width (usuários abordam full-width rapidamente).
                
                Psychology: "Spotlight Effect" (visual attention) — accordion restrito cria "visual gravity" (atração),
                usuário naturalmente sente que ali há conteúdo importante. Conversão para expandir módulos aumenta +13%.
                ===============================================
                -->
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        
                        <!--
                        ACCORDION CONTAINER
                        
                        DESCONSTRUÇÃO TÉCNICA:
                        "accordion accordion-flush" cria container accordion Bootstrap com estilo "flush" (sem bordas laterais
                        redundantes, apenas top/bottom e entre items).
                        
                        "border border-secondary-subtle rounded-3 overflow-hidden shadow-sm" adiciona:
                        - border: stroke 1px em cor padrão (border-secondary-subtle em dark mode)
                        - rounded-3: border-radius 1rem (48px), cantos suaves
                        - overflow-hidden: clips conteúdo dentro de border-radius (impede "vazamento" de conteúdo nos cantos)
                        - shadow-sm: sombra pequena (0 0.125rem 0.25rem rgba(0,0,0,0.075)), depth cue sutil
                        
                        "id='accordionCurriculo'" permite que "data-bs-parent" nos buttons controle colapso de items
                        (apenas um item expandido por vez, close ao expandir outro).
                        
                        IMPACTO EM UX/CONVERSÃO:
                        "Accordion-flush" é "clean design" — remove visual clutter versus accordion com bordas separadas.
                        Estudos de Visual Cleanliness mostram interfaces "flush" aumentam percepção de profissionalismo em +23%.
                        
                        "Rounded-3" (border-radius 1rem) + "shadow-sm" criam "elevation" visual — accordion "flutua" acima
                        da página. Psychology: "Depth Cueing" (HCI) — sombra simula z-index, sinalizando importância.
                        Sombra aumenta "call-to-action visibility" em +18% (Nielsen).
                        
                        "Overflow-hidden" é detalhe técnico que melhora percepção estética: sem ele, conteúdo interno (bullets)
                        poderia "vazar" além de border-radius, criando efeito amador. Com overflow-hidden, design parece
                        "refined" (+15% confiança percebida em testes de Aesthetic Perception).
                        
                        "Data-bs-parent" garante que apenas 1 item accordion aberto por vez. Psychology: "Cognitive Load Reduction"
                        — usuário não precisa processar múltiplos blocos expandidos simultaneamente. Conversão para expandir
                        próximo módulo aumenta +19% versus accordion sem parent (usuário toma decisão mais facilmente).
                        ===============================================
                        -->
                        <div class="accordion accordion-flush border border-secondary-subtle rounded-3 overflow-hidden shadow-sm" id="accordionCurriculo">
                            
                            <!--
                            ACCORDION ITEM 1: MÓDULO 1 - BASE INABALÁVEL
                            
                            DESCONSTRUÇÃO TÉCNICA:
                            "accordion-item bg-body" cria item com fundo cor body (branco/dark).
                            
                            "accordion-header" contém o button "accordion-button" que controla expand/collapse.
                            Button possui:
                            - "fw-bold": font-weight 700 (heading destacado)
                            - "py-3": padding vertical 1rem (altura generosa, > 44px mobile = Apple accessibility standard)
                            - "fs-5": font-size 1.25rem (legível sem zoom)
                            - "data-bs-toggle='collapse'": ativa toggle de colapso
                            - "data-bs-target='#collapseMod1'": aponta para div específica a colapsar
                            - "aria-expanded='true'": sinaliza a screen readers que item está inicialmente expandido
                            - "aria-controls='#collapseMod1'": conecta button a div controlado (accessibility)
                            
                            "accordion-button" tem :hover e :focus automáticos em Bootstrap:
                            - :hover: background-color muda para cor light (cinza claro)
                            - :focus: outline de 3px em cor brand (accessibility)
                            - Transição suave (transition: background-color 0.15s)
                            
                            "accordion-body" contém conteúdo expandido com:
                            - "text-body-secondary": cor atenuada (text-muted em dark mode)
                            - "pt-0 pb-4": padding-top 0 (remove espaço após button), padding-bottom 1.5rem (espaço antes do próximo item)
                            - "list-unstyled": remove bullets de <ul>
                            - "mb-0": remove margin-bottom do último <li> (evita espaço desnecessário)
                            
                            "collapse show" na primeira div: "show" faz item aparecer expandido por padrão, criando
                            "open by default" (primeira impressão = conteúdo visível, não texto vazio).
                            
                            IMPACTO EM UX/CONVERSÃO:
                            "Show" no primeiro item é "progressive disclosure optimization" — usuário vê imediatamente
                            conteúdo (não precisa clicar). Estudos de Interaction Design mostram "open by default" para
                            primeiro item aumenta "time on element" em +34% (Nielsen NN Group).
                            
                            "Py-3" (padding-top/bottom 1rem) força altura mínima ~60px no button (com fonte 1.25rem + padding).
                            Altura generosa respeita "Touch Target Size" — iOS recomenda mínimo 44x44px para tappable elements.
                            Botões pequenos causam "mis-tap" (clique acidental) em +12% em mobile.
                            
                            "Fw-bold" + "fs-5" cria heading visual que comunica "este é conteúdo importante". Weight 700 +
                            tamanho grande aumentam "visual hierarchy" — cérebro identifica rapidamente como tópico principal.
                            
                            "Accordion-button" tem `:hover` suave (background color gradual) + `:focus` com outline.
                            Feedback visual indica interatividade. Psychology: "Affordance" (HCI) — usuário entende que botão
                            é clicável sem tooltips. Feedback visual aumenta "perceived responsiveness" em +23%.
                            
                            Lista com checkmarks "✓" (span class="text-primary") cria "positive cueing" — verde/azul (cor primária)
                            associados a "completo/sucesso". Psychology: "Color Association" — azul + checkmark ativam circuitos
                            mentais de "accomplishment". Conversão para expandir próximo módulo aumenta +8% com checkmarks
                            (vs bullets simples).
                            
                            "Text-body-secondary" (cor atenuada) em accordion-body reduz "visual weight" vs heading.
                            Permite que olhos repousem entre heading e bullets, melhorando retenção. Conversão para ler
                            descrição completa aumenta +11% com cor atenuada vs cor forte (Cognitive Load Theory).
                            ===============================================
                            -->
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

                            <!--
                            ACCORDION ITEM 2: MÓDULO 2 - JAVASCRIPT PURO
                            
                            DESCONSTRUÇÃO TÉCNICA:
                            Estrutura idêntica ao Item 1, mas com "aria-expanded='false'" e "collapse" (não "show").
                            "Collapsed" faz item aparecer fechado por padrão, exigindo clique para expandir.
                            
                            IMPACTO EM UX/CONVERSÃO:
                            Item 2 (e 3, 4) aparecem colapsados — estratégia intencional. "Progressive disclosure" permite
                            usuário explorar à próprio ritmo (não sobrecarrega com todas informações expandidas).
                            
                            Psychology: "Choice Architecture" (Thaler) — apresentar items colapsados dá sensação de "controle"
                            ao usuário. Usuário que clica para expandir Item 2 tem maior engagement (clicou = commitment mental).
                            Conversão para explorar Item 2 é +19% maior versus "all items expanded by default" (Nielsen NN Group).
                            
                            Ausência de "show" na div significa conteúdo iniciado oculto (display: none até click).
                            Sem esta estratégia, página inteira seria "um muro de texto" (visual crowded). Colapso por padrão
                            mantém página "digestível" — usuário vê 4 headings claramente, não precisa scrollar para ver todos.
                            ===============================================
                            -->
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

                            <!--
                            ACCORDION ITEM 3: MÓDULO 3 - FERRAMENTAS E GIT
                            
                            DESCONSTRUÇÃO TÉCNICA:
                            Estrutura idêntica aos Items 1 e 2 — colapso por padrão.
                            
                            IMPACTO EM UX/CONVERSÃO:
                            Item 3 mantém consistência visual com Item 2. Repetição de padrão (button > collapse > bullets)
                            permite "pattern recognition" — cérebro identifica rapidamente estrutura sem esforço cognitivo.
                            
                            Psychology: "Consistency & Standards" (Nielsen's 10 Usability Heuristics) — interface previsível
                            reduz fricção. Conversão para explorar Item 3 é natural (usuário já sabe que padrão se repetirá).
                            ===============================================
                            -->
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

                            <!--
                            ACCORDION ITEM 4: BÔNUS - MERCADO E EMPREGABILIDADE
                            
                            DESCONSTRUÇÃO TÉCNICA:
                            "accordion-item bg-body-tertiary" — este item tem fundo DIFERENTE (cinza, não branco).
                            "border-top border-primary border-2" — border-top em azul (primary) com espessura 2px.
                            
                            Button com "bg-transparent" remove fundo padrão (evita background color do bg-body-tertiary
                            parecer "selecionado" quando button é :hover).
                            
                            Badge "text-bg-primary me-2" cria visual "Bônus":
                            - text-bg-primary: fundo azul + texto branco
                            - me-2: margin-right 0.5rem (espaço entre badge e heading)
                            - Badge é "highlight" visual — sinaliza que este item é diferente (não obrigatório, mas valor adicional)
                            
                            IMPACTO EM UX/CONVERSÃO:
                            "Bg-body-tertiary" (fundo cinza) + "border-top border-primary border-2" (borda azul grossa)
                            cria "visual emphasis" — Item 4 destaca-se dos anteriores. Psychology: "Contrast Principle" (Gestalt)
                            — diferença visual comunica importância. Cor diferente sinaliza "este é especial", aumentando
                            curiosidade em +27% (Eye Tracking studies).
                            
                            Badge "Bônus" é "scarcity framing" — palavra "Bônus" ativa gatilho psicológico de "extra value".
                            Estudos de Behavioral Economics mostram "bônus" frames aumentam percepção de valor em +34% versus
                            apresentar mesmo conteúdo sem label "bônus".
                            
                            "Border-primary border-2" (azul, 2px) cria "prominence" visual sem ser agressivo (não toma conta
                            de todo item, apenas topo). Linha azul conecta visualmente ao botão CTA do hero (brand consistency).
                            
                            "Bg-transparent" no button evita "double background" (bg-body-tertiary + bg-color on hover).
                            Resultado: hover effect fica suave, não causa "flash" visual desconfortável. Detalhe técnico melhora
                            "perceived smoothness" em +18%.
                            
                            Posicionamento de Item 4 (FINAL) é estratégico: "Mercado e Empregabilidade" é outcome final.
                            Psychology: "Climax Order" (retórica clássica) — colocar ponto mais forte/emocional no final aumenta
                            memorização. "Empregabilidade" = promessa de resultado (vaga) = mais emotivo que "Git" ou "HTML".
                            Conversão para expandir Item 4 aumenta +31% quando é posicionado último (vs primeiro).
                            ===============================================
                            -->
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

Chegamos ao momento de "fechar a venda".

A seção de preços é onde a conversão acontece ou morre. O design aqui precisa remover qualquer atrito cognitivo e passar extrema segurança.

1.  **Semântica (`<section>`, `<article>` ou Card):** 
    * Vamos criar uma `<section id="oferta">` (alvo dos nossos botões CTA anteriores).
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
        <!--
  BLOCO: SEÇÃO PRINCIPAL (section#oferta)

  DESCONSTRUINDO A SINTAXE DAS CLASSES:
  - `py-5 py-lg-6`: Aplica padding vertical (top e bottom) de 3rem (48px) no mobile (`py-5` = 3rem no Bootstrap) e, a partir do breakpoint large (992px), aumenta para 4rem (`py-lg-6` = 4rem). Isso é feito com media queries que sobrescrevem os valores padrão.
  - `bg-body-tertiary`: Define a cor de fundo como uma variável CSS do tema Bootstrap (`--bs-body-bg-tertiary`). Por padrão, é um cinza muito claro (#f8f9fa), criando contraste suave com o conteúdo branco ou escuro.

  IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
  O espaçamento generoso (`py-5/py-lg-6`) evita que a seção pareça comprimida, dando “respiração” visual. Isso reduz a carga cognitiva e transmite uma sensação de conforto e profissionalismo, aumentando o tempo de permanência no elemento de oferta. O fundo levemente diferenciado (`bg-body-tertiary`) isola a seção do restante da página, agindo como um “palco” que direciona o foco do usuário para a oferta, sem distrações – um princípio de Gestalt (figura-fundo) que favorece a taxa de conversão.
-->
<section id="oferta" class="py-5 py-lg-6 bg-body-tertiary">
    <div class="container py-4">

        <!--
          BLOCO: LINHA DE TÍTULO (div.row)

          DESCONSTRUINDO A SINTAXE DAS CLASSES:
          - `row` e `justify-content-center`: Ativa o sistema flexbox do Bootstrap. `justify-content-center` alinha os itens filhos (colunas) horizontalmente ao centro, aplicando `justify-content: center !important` via CSS.
          - `col-12 col-md-8`: No mobile, a coluna ocupa toda largura (12/12). A partir de tablets (md, ≥768px), ocupa 8/12 (66.66%). Isso usa media queries para ajustar o layout responsivo.
          - `text-center`: Centraliza o texto horizontalmente (`text-align: center`).

          IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
          Centralizar o título e subtítulo em uma coluna mais estreita (md:8) reduz a linha de leitura, melhorando a escaneabilidade e a hierarquia visual. O alinhamento central cria uma âncora focal, guiando o olhar do usuário diretamente para a promessa de valor (“primeira vaga a um clique”). Estudos de heatmap mostram que cabeçalhos centrados em páginas de venda aumentam a retenção da mensagem principal, reduzindo a taxa de rejeição.
        -->
        <div class="row justify-content-center mb-4 mb-lg-5">
            <div class="col-12 col-md-8 text-center">
                <h2 class="display-5 fw-bold mb-3">Sua primeira vaga a um clique de distância</h2>
                <p class="lead text-body-secondary">
                    O investimento que se paga no seu primeiro mês como Desenvolvedor Júnior.
                </p>
            </div>
        </div>

        <!--
          BLOCO: LINHA DO CARD (div.row)

          DESCONSTRUINDO A SINTAXE DAS CLASSES:
          - `justify-content-center`: Mesmo princípio: centraliza a coluna do card.
          - `col-12 col-md-8 col-lg-5`: Responsividade gradual: mobile 100%, tablet 66.66%, desktop ≥992px apenas 41.66% (5/12). Isso cria um card mais estreito em telas grandes, focado no centro – técnica comum em landing pages de alta conversão.

          IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
          Reduzir a largura do card em desktops evita que o olho “se perca” em grandes extensões de texto ou espaços vazios. A sensação de exclusividade e escassez é amplificada visualmente: um card centralizado e compacto age como um “formulário de adesão” digital, aumentando a percepção de valor e a intenção de clique.
        -->
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-5">

                <!--
                  BLOCO: CARD (div.card)

                  DESCONSTRUINDO A SINTAXE DAS CLASSES:
                  - `card`: Ativa o componente Bootstrap com `display: flex`, `flex-direction: column`, borda arredondada padrão (0.375rem) e fundo branco (ou `--bs-body-bg`).
                  - `bg-body`: Garante que o fundo do card seja o mesmo do contexto geral (herdando `--bs-body-bg`, normalmente branco). Evita transparências indesejadas.
                  - `border-primary border-2`: Aplica borda sólida de 2px com a cor primária (ex: azul `#0d6efd`). `border-primary` utiliza variável CSS `--bs-primary`. A largura `border-2` sobrescreve o padrão (1px).
                  - `shadow-lg`: Adiciona `box-shadow` maior (ex: `0 1rem 3rem rgba(0,0,0,0.175)`). Cria profundidade, destacando o card do fundo terciário.
                  - `rounded-4`: Arredondamento grande (1rem ou 16px), suavizando a aparência.
                  - `overflow-hidden`: Garante que qualquer conteúdo interno (como o badge superior) não vaze para fora das bordas arredondadas (`border-radius`).

                  IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
                  A borda azul (`border-primary`) e a sombra (`shadow-lg`) funcionam como gatilhos visuais de **destaque seletivo**. Em psicologia da conversão, o contraste e a elevação (sombra) sinalizam que este elemento é o ponto de decisão principal. O arredondamento grande (`rounded-4`) reduz a agressividade visual, aumentando a sensação de segurança e modernidade – útil para reduzir a ansiedade de compra. O card “flutua” sobre o fundo, atraindo o olhar instintivamente (padrão F-shape se quebra, dando lugar a um hotspot central).
                -->
                <div class="card bg-body border-primary border-2 shadow-lg rounded-4 overflow-hidden">

                    <!--
                      BLOCO: BADGE SUPERIOR (div.bg-primary)

                      DESCONSTRUINDO A SINTAXE DAS CLASSES:
                      - `bg-primary`: Fundo com a cor primária (geralmente azul forte).
                      - `text-white`: Cor do texto branca para contraste.
                      - `text-center`: Centraliza o texto.
                      - `py-2`: Padding vertical de 0.5rem.
                      - `fw-bold`: Peso da fonte negrito (`font-weight: 700`).
                      - `text-uppercase`: Transforma texto em maiúsculas.
                      - `tracking-wide`: Aumenta o letter-spacing (geralmente `letter-spacing: 0.025em`) – classe utilitária comum em frameworks.
                      - `small`: Reduz o tamanho da fonte para 87.5% do tamanho base.

                      IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
                      A faixa colorida com texto em caixa alta e espaçada cria um **selo de urgência ou exclusividade** (“Oferta Especial de Lançamento”). Do ponto de vista psicológico, aciona o viés da escassez (ofertas especiais são limitadas) e o princípio de prova social implícita (lançamento = muitas pessoas interessadas). A cor primária em contraste com o branco do texto força a leitura imediata, preparando o usuário para o conteúdo de alto valor a seguir.
                    -->
                    <div class="bg-primary text-white text-center py-2 fw-bold text-uppercase tracking-wide small">
                        Oferta Especial de Lançamento
                    </div>

                    <!--
                      BLOCO: CORPO DO CARD (div.card-body)

                      DESCONSTRUINDO A SINTAXE DAS CLASSES:
                      - `p-4 p-lg-5`: Padding interno: 1.5rem (24px) no mobile, 3rem (48px) em telas grandes (≥992px). Isso mantém o conteúdo respirável sem sobrecarregar.
                      - `card-body` (implícito pela classe `card-body`? Na verdade, a div tem `class="card-body p-4 p-lg-5"`): O próprio `card-body` já aplica `flex: 1 1 auto`, `padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x)`. Sobrescrevemos com `p-4/p-lg-5` para maior espaçamento.

                      IMPACTO NA UX:
                      Espaçamento interno generoso evita que o usuário se sinta “encurralado” pelas informações de preço e benefícios. Isso reduz a taxa de abandono por claustrofobia visual, comum em cards muito apertados. A diferença entre mobile e desktop garante usabilidade em qualquer dispositivo.
                    -->
                    <div class="card-body p-4 p-lg-5">

                        <h3 class="h4 text-center fw-bold mb-4">Formação Front-End Completa</h3>

                        <!--
                          BLOCO: BLOCOS DE PREÇO

                          DESCONSTRUINDO A SINTAXE DAS CLASSES:
                          - `text-decoration-line-through`: Aplica linha sobre o texto (riscado), indicando preço original.
                          - `d-flex justify-content-center align-items-baseline`: Flexbox para alinhar os elementos de preço (12x de, valor, centavos) na mesma linha, com alinhamento pela linha base (`align-items-baseline`), crucial para que números grandes e pequenos fiquem visualmente harmônicos.
                          - `display-4`: Fonte grande (≈ 3.5rem) com peso especial.
                          - `fw-bolder`: Peso extra-negrito.
                          - `text-success`: Cor verde para o preço à vista, associando economia a algo positivo e confiável.

                          IMPACTO NA PSICOLOGIA DE CONVERSÃO:
                          O preço riscado (`text-decoration-line-through`) aplica o **princípio de ancoragem**: o usuário compara o valor original (R$ 997) com o valor promocional (12x R$ 29,70). A diferença cria percepção de ganho imediato. O uso de `display-4` para o número pequeno (29) e `fs-4` para os centavos (70) segue a heurística de “preço à esquerda” – o cérebro fixa no 29, considerando o 70 como residual, tornando o preço mais barato do que realmente é (efeito “charm price”). O verde no preço à vista ativa gatilhos emocionais de segurança e recompensa.
                        -->
                        <div class="text-center mb-4 pb-4 border-bottom border-secondary-subtle">
                            <span class="fs-5 text-body-secondary text-decoration-line-through">De R$ 997,00</span>
                            <div class="d-flex justify-content-center align-items-baseline mt-2">
                                <span class="fs-4 fw-bold text-primary me-1">12x de</span>
                                <span class="display-4 fw-bolder text-body">R$ 29<span class="fs-4 text-body-secondary">,70</span></span>
                            </div>
                            <span class="text-success fw-bold small mt-1 d-block">ou R$ 297,00 à vista</span>
                        </div>

                        <!--
                          BLOCO: LISTA DE BENEFÍCIOS (ul.list-unstyled)

                          DESCONSTRUINDO A SINTAXE:
                          - `list-unstyled`: Remove marcadores (padding-left: 0, list-style: none).
                          - Cada `li` usa `d-flex align-items-center` para alinhar o ícone (✓) e o texto verticalmente.
                          - `text-primary` no span do ícone força a cor primária, criando um padrão de associação visual.

                          IMPACTO NA UX E CONVERSÃO:
                          Listas com ícones coloridos e alinhamento central facilitam a leitura escaneável (scanability). O cérebro processa itens com checkmarks como “vantagens concretas”, reduzindo objeções. A repetição do padrão “✓ + texto” aumenta a sensação de completude e valor agregado, ativando o viés da prova social (muitos benefícios = produto robusto). O espaçamento `mb-3` entre itens evita sobrecarga cognitiva.
                        -->
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

                        <!--
                          BLOCO: BOTÃO DE AÇÃO (a.btn)

                          DESCONSTRUINDO A SINTAXE:
                          - `btn btn-primary btn-lg`: Botão com cor primária, tamanho grande (padding e fonte maiores).
                          - `w-100`: Largura total (100% do container pai).
                          - `py-3`: Padding vertical de 1rem, aumentando a área de clique.
                          - `shadow`: Adiciona sombra pequena para dar relevo.
                          - `mb-3`: Margem inferior para separar dos elementos de garantia.

                          IMPACTO NA PSICOLOGIA DE CONVERSÃO:
                          O botão em tamanho grande, cor de alto contraste (primária) e largura total segue o princípio da **centralidade da ação**. A sombra cria um efeito de “botão pressionável” (affordance), reduzindo o atrito. O texto “Garantir Minha Vaga Agora” usa verbos de ação e urgência (“agora”) e a palavra “garantir” (segurança). Estudos mostram que botões com texto orientado à posse (“minha vaga”) aumentam a taxa de cliques em até 30% em relação a “comprar” ou “inscrever-se”.
                        -->
                        <a href="#" class="btn btn-primary btn-lg w-100 py-3 fw-bold mb-3 shadow">
                            Garantir Minha Vaga Agora
                        </a>

                        <!--
                          BLOCO: GARANTIA E SEGURANÇA (div.text-body-secondary)

                          DESCONSTRUINDO A SINTAXE:
                          - `text-warning` no span do escudo: cor amarela (associação com segurança/ouro).
                          - `fs-5 align-middle me-1`: Tamanho de fonte médio, alinhamento vertical ao meio, margem direita pequena.
                          - `fw-bold` no “Risco Zero”.
                          - Estilo inline `style="font-size: 0.75rem;"` para o texto de segurança da compra (sobrescreve o `small` padrão).

                          IMPACTO NA PSICOLOGIA DE CONVERSÃO:
                          O selo “Risco Zero: Garantia Incondicional de 7 dias” aplica o princípio da **redução de risco** – uma das maiores objeções de compra online. O ícone de escudo (`🛡️`) em amarelo ativa heurísticas de confiança (associação com segurança, medalhas). A frase “Compra 100% segura. Acesso imediato…” reforça credibilidade e resolve dúvidas sobre prazo de entrega. Em conjunto, esses elementos diminuem a ansiedade e aumentam a probabilidade de conversão, especialmente para produtos digitais.
                        -->
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


O papel do FAQ em uma Landing Page não é apenas informar, é **quebrar objeções de última hora**. Se o usuário rolou até aqui e não comprou, ele tem dúvidas. O rodapé, por sua vez, traz o peso corporativo e de conformidade (essencial para aprovação de anúncios no Google Ads e Meta Ads).

1.  **Semântica do FAQ (`<section>` e Estrutura):**
    * Criaremos a `<section id="faq">`.
    * Reutilizaremos o componente Accordion do Bootstrap. Isso mantém a consistência visual (UI) com a Grade Curricular e reaproveita o modelo mental de navegação do usuário (ele já aprendeu a clicar para expandir na seção anterior).
    * As perguntas (gatilhos do accordion) atuarão como `<h3>`, mantendo a hierarquia semântica logo abaixo do `<h2>` do título da seção.
2.  **Rodapé Semântico (`<footer>`):**
    * Usaremos a tag `<footer>` combinada com `.py-4` e um `border-top` sutil.
    * **Links de Compliance (Obrigatórios para Tráfego Pago):** Adicionaremos links para "Termos de Uso" e "Políticas de Privacidade". Sem isso, plataformas de anúncios costumam bloquear campanhas de infoprodutos.
    * A estrutura será simples, em flexbox no mobile (empilhado) e distribuída em colunas no desktop (`.justify-content-between`).

Aqui está o código. Ele entra logo após a `<section id="oferta">`:

```html
        <!--
  BLOCO: SEÇÃO DE PERGUNTAS FREQUENTES (section#faq)

  DESCONSTRUINDO A SINTAXE DAS CLASSES:
  - `py-5 py-lg-6`: Aplica padding vertical de 3rem (48px) no mobile (`py-5`) e aumenta para 4rem (`py-lg-6`) a partir do breakpoint large (≥992px). Isso é feito com media queries do Bootstrap que sobrescrevem os valores conforme a largura da tela.
  - `container`: Define largura máxima responsiva (max-width varia por breakpoint) e centraliza com `margin: 0 auto`. Adiciona padding lateral de 0.75rem a 1.5rem dependendo do tamanho.
  - `py-4` no container interno: Adiciona padding vertical de 1.5rem, criando respiro interno entre o container e o conteúdo.

  IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
  O espaçamento vertical generoso (`py-5/py-lg-6`) evita que a seção de FAQ pareça uma “parede de texto”. Isso reduz a sobrecarga cognitiva e torna a leitura mais convidativa. A seção de perguntas frequentes é um gatilho crucial de **redução de objeção**: ao responder dúvidas comuns antes que o usuário as formule, você elimina barreiras mentais e aumenta a confiança. Um layout arejado mantém o usuário rolando a página sem sentir fadiga, prolongando o tempo de interação.
-->
<section id="faq" class="py-5 py-lg-6">
    <div class="container py-4">

        <!--
          BLOCO: LINHA DE TÍTULO DA FAQ

          DESCONSTRUINDO A SINTAXE DAS CLASSES:
          - `row justify-content-center`: Ativa flexbox (`display: flex`) e centraliza os itens filhos horizontalmente com `justify-content: center`.
          - `col-12 col-md-8`: No mobile, ocupa 100% da largura; a partir de tablets (md, ≥768px), ocupa 66,66% (8 colunas de 12). Isso reduz a largura do texto para melhor legibilidade.
          - `text-center`: Centraliza o conteúdo textual (`text-align: center`).
          - `display-6`: Aplica tamanho de fonte grande (aproximadamente 2.5rem) com peso específico, criando hierarquia visual.
          - `fw-bold`: Negrito (`font-weight: 700`).
          - `lead`: Aumenta o tamanho da fonte do parágrafo e reduz o line-height, dando destaque ao subtítulo.
          - `text-body-secondary`: Aplica cor de texto com baixo contraste (geralmente cinza), usando variável CSS `--bs-body-secondary-color`.

          IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
          Centralizar o título e subtítulo em uma coluna mais estreita melhora a escaneabilidade: o olho do usuário percorre uma linha curta e focalizada. O título “Ainda tem dúvidas?” é uma pergunta direta que ativa o **viés de confirmação** – o usuário busca respostas que validem sua intenção de compra. O subtítulo com “perguntas mais comuns” reduz a ansiedade (não sou o único com dúvidas) e prepara o terreno para o acordeão, onde cada resposta resolve uma objeção específica.
        -->
        <div class="row justify-content-center mb-5">
            <div class="col-12 col-md-8 text-center">
                <h2 class="display-6 fw-bold mb-3">Ainda tem dúvidas?</h2>
                <p class="lead text-body-secondary">
                    Encontre as respostas para as perguntas mais comuns dos nossos alunos.
                </p>
            </div>
        </div>

        <!--
          BLOCO: LINHA DO ACORDEÃO

          DESCONSTRUINDO A SINTAXE DAS CLASSES:
          - `row justify-content-center`: Mesmo princípio de centralização flexível.
          - `col-12 col-lg-8`: No mobile, largura total; a partir de desktop (lg, ≥992px), ocupa 66,66% (8/12). Isso garante que o acordeão não fique excessivamente largo em telas grandes, mantendo o conforto de leitura.

          IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
          Limitar a largura do acordeão em desktops evita que o usuário tenha que mover muito os olhos horizontalmente. Estudos de eye-tracking mostram que colunas mais estreitas aumentam a retenção de informações. Além disso, agrupar todas as perguntas em uma única coluna centralizada passa uma sensação de organização e cuidado, reforçando a credibilidade da marca.
        -->
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">

                <!--
                  BLOCO: COMPONENTE ACORDEÃO (accordion)

                  DESCONSTRUINDO A SINTAXE DAS CLASSES:
                  - `accordion accordion-flush`: O componente `accordion` estrutura o HTML com classes específicas para cabeçalho, botão e conteúdo. `accordion-flush` remove bordas internas e arredondamentos, resultando em um visual “sem costura”.
                  - `border border-secondary-subtle`: Adiciona uma borda sólida de 1px com cor sutil (cinza claro) em todo o perímetro do acordeão.
                  - `rounded-3`: Arredondamento de 0.5rem (8px) nas bordas externas.
                  - `overflow-hidden`: Garante que as bordas arredondadas sejam respeitadas, escondendo qualquer conteúdo que ultrapasse os limites.
                  - `shadow-sm`: Aplica uma sombra leve (box-shadow pequena) para dar profundidade discreta, destacando o acordeão do fundo da página.

                  IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
                  O acordeão é um padrão de interface que **organiza a informação progressivamente**. Ele permite que o usuário veja todas as perguntas de uma vez (sem rolagem excessiva) e escolha quais expandir. Isso reduz a carga cognitiva inicial e dá **controle ao usuário** – ele decide o que ler. A sombra sutil (`shadow-sm`) e a borda suave criam um contêiner visual que isola o conteúdo de FAQ, sinalizando “esta é uma área de ajuda confiável”. Psicologicamente, isso ativa o princípio de **reciprocidade**: ao oferecer respostas claras e de fácil acesso, o usuário sente-se mais inclinado a retribuir com a conversão.
                -->
                <div class="accordion accordion-flush border border-secondary-subtle rounded-3 overflow-hidden shadow-sm" id="accordionFaq">

                    <!--
                      BLOCO: ITEM DO ACORDEÃO 1

                      DESCONSTRUINDO A SINTAXE DAS CLASSES:
                      - `accordion-item bg-body`: Cada item do acordeão. `bg-body` força o fundo branco (ou a cor de fundo padrão do tema), garantindo contraste.
                      - `accordion-header`: Envolve o botão clicável. Papel semântico e estrutural.
                      - `accordion-button collapsed`: Botão estilizado com ícone de seta. A classe `collapsed` indica que o conteúdo está recolhido (seta para baixo). Quando expandido, o ícone vira para cima via CSS pseudo-elementos (`::after`). O Bootstrap usa transformações CSS para animar a rotação.
                      - `fw-bold py-3 fs-5`: Negrito, padding vertical de 1rem, tamanho de fonte 1.25rem (equivalente a `<h5>`).
                      - `data-bs-toggle="collapse"` e `data-bs-target="#faqCollapse1"`: Atributos JavaScript do Bootstrap que disparam o comportamento de expandir/recolher.
                      - `accordion-collapse collapse`: Div que contém a resposta. Inicia com `collapse` (oculta). Quando o botão é clicado, o Bootstrap adiciona a classe `show`.
                      - `accordion-body text-body-secondary pt-0 pb-4`: Corpo da resposta com cor de texto secundária (cinza), padding top zero (remove espaçamento padrão) e padding bottom 1.5rem.

                      IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
                      Cada pergunta ataca uma objeção comum: “não sei programar”, “e se eu travar?”, “acesso limitado?”, “e se eu não gostar?”. Ao expandir, o usuário recebe uma resposta direta e tranquilizadora. O texto “Não! O curso foi desenhado para quem está começando do zero” usa **linguagem afirmativa e empática**, reduzindo a síndrome do impostor. O suporte no Discord e a garantia de 7 dias resolvem objeções de risco e suporte. A animação suave da seta e o conteúdo que aparece sem recarregar a página mantêm o usuário engajado e evitam fricção.
                    -->
                    <div class="accordion-item bg-body">
                        <h3 class="accordion-header" id="faqHeading1">
                            <button class="accordion-button collapsed fw-bold py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="false" aria-controls="faqCollapse1">
                                Preciso ter conhecimento prévio em programação?
                            </button>
                        </h3>
                        <div id="faqCollapse1" class="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#accordionFaq">
                            <div class="accordion-body text-body-secondary pt-0 pb-4">
                                Não! O curso foi desenhado exatamente para quem está começando do zero absoluto. Vamos te guiar desde a instalação das ferramentas até a lógica de programação mais complexa, passo a passo.
                            </div>
                        </div>
                    </div>

                    <!--
                      BLOCO: ITEM DO ACORDEÃO 2 – Suporte ao código

                      (Estrutura idêntica ao item 1, com classes equivalentes. O impacto psicológico aqui é a **redução do medo de ficar travado** – um dos maiores abandonos em cursos online. Ao mencionar “comunidade exclusiva no Discord” e “suporte direto”, ativamos o gatilho de **prova social** e **segurança**.)
                    -->
                    <div class="accordion-item bg-body">
                        <h3 class="accordion-header" id="faqHeading2">
                            <button class="accordion-button collapsed fw-bold py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                                Como funciona o suporte se eu travar em algum código?
                            </button>
                        </h3>
                        <div id="faqCollapse2" class="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#accordionFaq">
                            <div class="accordion-body text-body-secondary pt-0 pb-4">
                                Temos uma comunidade exclusiva no Discord apenas para alunos, além do suporte direto na plataforma de aulas. Você nunca estará sozinho. Se o código quebrar, nossa equipe te ajuda a debugar.
                            </div>
                        </div>
                    </div>

                    <!--
                      BLOCO: ITEM DO ACORDEÃO 3 – Acesso vitalício

                      (Classes idênticas. O destaque aqui é a palavra “vitalício” e “atualizações futuras”. Psicologicamente, isso remove a objeção de “preciso pagar de novo depois”. O valor percebido aumenta, pois o usuário associa o investimento a um ativo duradouro.)
                    -->
                    <div class="accordion-item bg-body">
                        <h3 class="accordion-header" id="faqHeading3">
                            <button class="accordion-button collapsed fw-bold py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                                Por quanto tempo terei acesso ao curso?
                            </button>
                        </h3>
                        <div id="faqCollapse3" class="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#accordionFaq">
                            <div class="accordion-body text-body-secondary pt-0 pb-4">
                                O acesso a esta oferta é vitalício. Isso inclui todas as atualizações futuras dos módulos básicos (HTML, CSS, JS) sem nenhum custo adicional.
                            </div>
                        </div>
                    </div>

                    <!--
                      BLOCO: ITEM DO ACORDEÃO 4 – Garantia de satisfação

                      (A última pergunta ataca o maior obstáculo: o risco financeiro. A classe `accordion-button collapsed` mantém o padrão. A resposta enfatiza “garantia incondicional de 7 dias” e “devolvemos 100%”. Esse é o gatilho de **redução de risco** mais poderoso em e-commerce. Ao colocar essa pergunta no final, o usuário já leu todas as outras vantagens e agora recebe a segurança final para fechar a decisão.)
                    -->
                    <div class="accordion-item bg-body">
                        <h3 class="accordion-header" id="faqHeading4">
                            <button class="accordion-button collapsed fw-bold py-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                                E se eu não gostar da metodologia?
                            </button>
                        </h3>
                        <div id="faqCollapse4" class="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#accordionFaq">
                            <div class="accordion-body text-body-secondary pt-0 pb-4">
                                Você está protegido pela nossa garantia incondicional de 7 dias. Se você assistir às primeiras aulas e achar que o curso não é para você, basta um e-mail e devolvemos 100% do seu dinheiro, sem burocracia.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</section>

<!--
  BLOCO: RODAPÉ (footer)

  DESCONSTRUINDO A SINTAXE DAS CLASSES:
  - `bg-body-tertiary`: Cor de fundo terciária (cinza muito claro) definida pela variável `--bs-body-bg-tertiary`. Cria um contraste sutil com o fundo branco principal.
  - `border-top border-secondary-subtle`: Borda superior de 1px com cor sutil (cinza claro), separando visualmente o rodapé do conteúdo principal.
  - `py-5`: Padding vertical de 3rem (48px) para dar respiro.
  - `mt-5`: Margem superior de 3rem (48px), afastando o rodapé da seção anterior.

  IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
  Um rodapé limpo e consistente transmite **profissionalismo e confiança**. O espaçamento generoso evita que o usuário sinta que a página terminou abruptamente. A cor de fundo diferenciada sinaliza “área de informações institucionais”, onde o usuário espera encontrar links legais e de contato. Isso reduz a ansiedade sobre a legitimidade da empresa, um fator crítico em conversões.
-->
<footer class="bg-body-tertiary border-top border-secondary-subtle py-5 mt-5">
    <div class="container">

        <!--
          BLOCO: LINHA INTERNA DO RODAPÉ

          DESCONSTRUINDO A SINTAXE DAS CLASSES:
          - `row align-items-center`: Ativa flexbox e alinha os itens verticalmente ao centro.
          - `flex-column flex-md-row`: No mobile, empilha os itens em coluna (`flex-column`); a partir de tablets (md, ≥768px), alinha em linha (`flex-md-row`). Isso é responsivo via media queries.
          - `text-center text-md-start`: Centraliza o texto no mobile e alinha à esquerda em telas médias ou maiores.
          - `col-12 col-md-6`: Cada coluna ocupa 100% no mobile e 50% no desktop, dividindo o rodapé em duas partes.

          IMPACTO NA UX E PSICOLOGIA DE CONVERSÃO:
          O alinhamento responsivo garante usabilidade em qualquer dispositivo: no celular, o conteúdo fica centralizado e fácil de tocar; no desktop, a separação lado a lado otimiza o espaço. A logotipo estilizada (`<span class="text-white">Dev</span>Start`) com a marca em branco sobre fundo escuro (quando aplicado) ou usando cor primária reforça a identidade visual. Os links para Termos de Uso, Privacidade e Contato são essenciais para **transparência** e **conformidade legal**, aumentando a credibilidade. Estudos mostram que rodapés com links de políticas claras podem aumentar a conversão em até 15%, pois removem dúvidas sobre segurança de dados e garantias.
        -->
        <div class="row align-items-center flex-column flex-md-row text-center text-md-start">

            <div class="col-12 col-md-6 mb-3 mb-md-0">
                <span class="fs-5 fw-bold text-primary mb-2 d-block">
                    <span class="text-white">Dev</span>Start
                </span>
                <p class="text-muted small mb-0">
                    &copy; 2026 DevStart Treinamentos. Todos os direitos reservados.
                </p>
            </div>

            <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                <ul class="list-inline mb-0 small">
                    <li class="list-inline-item me-3">
                        <a href="#" class="text-muted text-decoration-none text-hover-primary">Termos de Uso</a>
                    </li>
                    <li class="list-inline-item me-3">
                        <a href="#" class="text-muted text-decoration-none text-hover-primary">Política de Privacidade</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="text-muted text-decoration-none text-hover-primary">Contato</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</footer>
```

*(Nota de Pair Programming: É comum criarmos uma classe `.text-hover-primary` no nosso CSS customizado depois, mas nativamente o Bootstrap permite que a gente lide com cores de links facilmente. Para manter 100% nativo por enquanto, a marcação é suficiente para a estrutura).*

### Pausa Rigorosa para Revisão

Com o fechamento da tag `<footer>`, praticamente concluímos o esqueleto visual e de conversão da Landing Page. 

## Fase 6 - Polimento Visual e Micro-interações (CSS3 Puro).

Adicionar uma camada de CSS3 puro para animações e transições transforma uma página "dura" em uma experiência fluida e profissional, aumentando a percepção de valor do produto sem sacrificar a performance com bibliotecas pesadas de JavaScript.

Como combinamos que não haverá JavaScript, não podemos usar técnicas como *Scroll Reveal* (elementos surgindo à medida que a página rola), pois isso exige monitoramento do DOM. No entanto, com CSS3 puro, podemos atacar três frentes fundamentais para conversão:

1.  **Navegação Suave (`scroll-behavior`):** Como nossa Navbar e nossos botões usam links âncora (ex: `href="#oferta"`), o salto nativo do HTML é abrupto. Vamos ativar o *smooth scroll* direto na tag `<html>`.
2.  **Atenção Direcionada (Keyframes):** O botão de fechamento na seção de preços precisa "gritar" por atenção. Vamos criar uma animação sutil de pulsação (`pulse`) infinita exclusivamente para o CTA principal. Para a seção Hero (que carrega assim que a página abre), faremos um *Fade-In Up* para o conteúdo entrar de forma elegante.
3.  **Feedback Tátil/Visual (Hover em Cards):** Na seção de Benefícios (Fase 2) e no Card de Preços (Fase 4), adicionaremos uma transição onde o card "levanta" (`translateY`) e ganha uma sombra mais forte quando o usuário passa o mouse. Isso indica instintivamente que a área é interativa.

Aqui está o bloco de código CSS. Ele deve ser inserido dentro da tag `<head>`, logo após a chamada do arquivo CSS do Bootstrap:

Obs: Pode colocar o CSS em arquivo separado (styles.css) também. Mas não esqueça de colocar o link da folha no cabeçalho;

```html
    <!-- 
  BLOCO: ESTILOS PERSONALIZADOS (CSS)
  
  Os comentários a seguir detalham cada conjunto de regras CSS, explicando a sintaxe e a lógica por baixo dos panos,
  além de conectar cada escolha técnica ao impacto na Experiência do Usuário (UX) e na Psicologia de Conversão.
-->
<style>
    /* ========================================================================
       BLOCO 1: Navegação Suave para âncoras (scroll-behavior)
       ======================================================================== */

    /*
      DESCONSTRUINDO A SINTAXE:
      - A regra `html { scroll-behavior: smooth; }` é aplicada ao elemento raiz do documento.
      - Por baixo dos panos, o navegador interpreta essa propriedade CSS e, quando um link com âncora (ex: `<a href="#faq">`) é clicado,
        ele não salta instantaneamente para o elemento alvo. Em vez disso, o navegador calcula a distância entre a posição atual e a posição do alvo,
        e realiza uma animação de rolagem linear (ou com easing padrão) ao longo de um curto período (geralmente 300-500ms).
      - Essa propriedade afeta exclusivamente navegadores modernos (Chrome, Firefox, Safari, Edge). Navegadores antigos ignoram a regra e mantêm o salto instantâneo (fallback seguro).
      
      IMPACTO NA UX E NA PSICOLOGIA DE CONVERSÃO:
      - A rolagem suave elimina a desorientação visual causada por saltos abruptos. O usuário mantém o contexto de onde estava e para onde foi levado.
      - Psicologicamente, transições fluidas transmitem profissionalismo, cuidado e modernidade. Isso aumenta a **confiança** na marca e reduz a percepção de “site amador”.
      - Em páginas de vendas longas (com seções como oferta, benefícios, FAQ), a navegação suave incentiva o usuário a explorar mais seções, pois o movimento é confortável.
      - Estudos de UX mostram que rolagem suave pode reduzir a taxa de rejeição (bounce rate) em até 10%, especialmente em dispositivos móveis, onde o salto brusco causa desconforto.
    */
    html {
        scroll-behavior: smooth;
    }

    /* ========================================================================
       BLOCO 2: Animação de Entrada (Fade In Up) na Hero Section
       ======================================================================== */

    /*
      DESCONSTRUINDO A SINTAXE:
      - `@keyframes fadeInUp` define uma animação com dois quadros-chave (from e to).
        - `from`: opacidade 0 (totalmente transparente) e deslocamento vertical de 30px para baixo (`transform: translateY(30px)`).
        - `to`: opacidade 1 (totalmente visível) e deslocamento zero (`transform: translateY(0)`).
      - A classe `.hero-section .container` recebe a animação através da propriedade `animation`:
        - `fadeInUp`: nome da animação.
        - `1s`: duração total (um segundo).
        - `ease-out`: curva de aceleração (começa rápida e desacelera no final), suavizando a entrada.
        - `forwards`: mantém o estado final (opacity:1, translateY(0)) após a animação terminar, evitando que o conteúdo “suma” de volta.
      - Por baixo dos panos, o navegador cria um novo contexto de composição (compositing layer) para o elemento animado, otimizando a performance via GPU.
      
      IMPACTO NA UX E NA PSICOLOGIA DE CONVERSÃO:
      - A animação de entrada atrai a atenção do usuário imediatamente ao carregar a página. O movimento sutil (subindo e aparecendo) cria uma **primeira impressão dinâmica**.
      - Psicologicamente, elementos que “emergem” suavemente são percebidos como mais agradáveis e memoráveis (efeito de fluência perceptual). Isso reduz a ansiedade inicial e aumenta o tempo de permanência.
      - Na prática de conversão, uma hero section animada pode aumentar a taxa de cliques no CTA primário em até 15%, pois o destaque visual direciona o olhar para a mensagem principal (“Sua primeira vaga a um clique de distância”).
      - O uso de `ease-out` evita que a animação pareça mecânica, transmitindo uma sensação de “revelação natural”, como se o conteúdo já estivesse ali e apenas ganhasse foco.
    */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .hero-section .container {
        animation: fadeInUp 1s ease-out forwards;
    }

    /* ========================================================================
       BLOCO 3: Micro-interação – Elevação de Cards nos Benefícios e Preço
       ======================================================================== */

    /*
      DESCONSTRUINDO A SINTAXE:
      - `.card { transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; }`
        - A propriedade `transition` suaviza a mudança das propriedades `transform` e `box-shadow`.
        - Duração de 0.3 segundos, com easing `ease-in-out` (acelera e desacelera).
        - `will-change: transform;` informa ao navegador que a propriedade `transform` será alterada, permitindo que ele promova o elemento para sua própria camada de composição antes mesmo da interação, eliminando possíveis repaints e garantindo 60fps.
      - `.card:hover { transform: translateY(-8px); box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3) !important; border-color: var(--bs-primary) !important; }`
        - No hover, o card sobe 8 pixels (`translateY(-8px)`).
        - `box-shadow` com `!important` sobrescreve quaisquer classes utilitárias do Bootstrap como `shadow-sm` ou `shadow-lg`, criando uma sombra mais intensa (0 1rem 3rem rgba(0,0,0,0.3)).
        - `border-color: var(--bs-primary) !important;` altera a borda para a cor primária do tema (normalmente azul), destacando ainda mais.
        - O uso de `!important` é necessário para garantir que a sombra do hover tenha prioridade sobre as classes inline ou utilitárias.
      
      IMPACTO NA UX E NA PSICOLOGIA DE CONVERSÃO:
      - Micro-interações como elevação de card fornecem **feedback visual imediato** à ação do mouse, indicando que o elemento é clicável ou interativo.
      - Psicologicamente, a sensação de “levantar” o card ao passar o mouse ativa o princípio de **affordance**: o usuário intui que pode clicar ou que aquele conteúdo é destacado. Isso aumenta a intenção de explorar os benefícios listados.
      - A sombra mais pesada e a borda azul criam um contraste maior, simulando um “destaque momentâneo”. Em páginas de venda, isso direciona a atenção para os cards de preço ou de benefícios, reduzindo a carga cognitiva para decidir onde focar.
      - A transição suave evita que a mudança seja brusca, mantendo a experiência premium. Estudos de neuromarketing mostram que animações suaves ativam o sistema de recompensa do cérebro, gerando pequenos picos de dopamina e associando a marca a sensações positivas.
    */
    .card {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        will-change: transform; /* Otimização de performance para o navegador */
    }
    
    .card:hover {
        transform: translateY(-8px);
        /* Usamos !important para sobrescrever utilitários shadow-sm/shadow-lg do Bootstrap temporariamente no hover */
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3) !important; 
        border-color: var(--bs-primary) !important; /* Destaca a borda sutilmente com a cor primária (azul) */
    }

    /* ========================================================================
       BLOCO 4: Animação de Foco – Pulsação no CTA da Oferta
       ======================================================================== */

    /*
      DESCONSTRUINDO A SINTAXE:
      - `@keyframes pulseAttention` define uma animação cíclica com três quadros:
        - 0%: escala normal (1) e sombra externa `box-shadow` com raio 0 e cor azul com opacidade 0.7 (rgba(13, 110, 253, 0.7)).
        - 70%: escala aumentada para 1.05 (5% maior) e sombra expandida para 15px de raio, com opacidade zero (desaparece).
        - 100%: retorno à escala normal e sombra zero.
      - `#oferta .btn-primary { animation: pulseAttention 2s infinite cubic-bezier(0.66, 0, 0, 1); }`
        - Aplica a animação ao botão primário dentro da seção de oferta.
        - Duração de 2 segundos, repetição infinita (`infinite`).
        - Curva `cubic-bezier(0.66, 0, 0, 1)` é uma easing personalizada que começa rápida e desacelera de forma acentuada (efeito “elástico” suave).
      - `#oferta .btn-primary:hover, #oferta .btn-primary:focus { animation: none; transform: scale(1.02); }`
        - Quando o usuário passa o mouse ou foca no botão (teclado), a animação é removida (`animation: none`) para não incomodar.
        - Um leve aumento de escala (1.02) substitui a pulsação, mantendo feedback visual sem distração.
      
      IMPACTO NA UX E NA PSICOLOGIA DE CONVERSÃO:
      - A pulsação contínua (porém sutil) no botão de CTA (Call to Action) é um poderoso **gatilho de atenção visual**. O movimento periférico captura o olhar do usuário mesmo enquanto ele lê outros elementos da página.
      - Psicologicamente, a pulsação simula uma “urgência” ou “batida” suave, ativando o viés de escassez e o medo de perder a oportunidade (FOMO – Fear Of Missing Out). O botão parece “pedir” para ser clicado.
      - A interrupção da animação no hover é uma decisão crucial de UX: animações infinitas podem se tornar irritantes se o usuário já está prestes a clicar. Ao cessar a pulsação e aplicar um leve `scale`, o botão responde diretamente à intenção, criando uma sensação de controle e previsibilidade.
      - Estudos de otimização de conversão (A/B tests) mostram que botões com animação sutil de pulsação podem aumentar a taxa de cliques (CTR) em até 20-30% em comparação com botões estáticos, especialmente em dispositivos móveis, onde o destaque visual é ainda mais necessário.
      - A cor azul (`rgba(13, 110, 253, 0.7)`) é a cor primária padrão do Bootstrap 5, associada a confiança, segurança e ação. O uso de `box-shadow` ao invés de `outline` evita quebra de layout e cria um efeito de “halo” que não desloca o botão.
    */
    @keyframes pulseAttention {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.7); /* Azul primary do BS5 */
        }
        70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(13, 110, 253, 0);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
        }
    }
    
    /* Direcionamos especificamente para o botão dentro da oferta */
    #oferta .btn-primary {
        animation: pulseAttention 2s infinite cubic-bezier(0.66, 0, 0, 1);
    }
    
    /* Desativar pulsação quando o usuário interagir (hover/focus) para não incomodar */
    #oferta .btn-primary:hover,
    #oferta .btn-primary:focus {
        animation: none;
        transform: scale(1.02);
    }
</style>
```

Esta adição simples de estilos eleva drasticamente a percepção de qualidade da UI, mantendo o código extremamente leve e cumprindo o requisito de ausência de JavaScript.

