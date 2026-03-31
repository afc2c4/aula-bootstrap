const body = document.body;
const drawer = document.getElementById("drawer");
const menuButton = document.getElementById("menuButton");
const snackbar = document.getElementById("globalSnackbar");

function showSnackbar(message) {
  if (!snackbar) return;
  const headline = snackbar.querySelector('[slot="headline"]');
  if (headline) headline.textContent = message;
  snackbar.open = true;
}

function attachPageTransitions() {
  const links = document.querySelectorAll("a[data-transition]");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      event.preventDefault();
      body.classList.add("is-leaving");
      window.setTimeout(() => {
        window.location.href = href;
      }, 170);
    });
  });
}

function initDrawerState() {
  if (!menuButton || !drawer) return;

  menuButton.addEventListener("click", () => {
    drawer.classList.toggle("is-open");
  });

  document.addEventListener("click", (event) => {
    const clickedInsideDrawer = drawer.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);
    if (!clickedInsideDrawer && !clickedMenuButton) {
      drawer.classList.remove("is-open");
    }
  });
}

function initHomePage() {
  const chips = document.querySelectorAll(".chip");
  const cards = document.querySelectorAll(".article-card");
  const fab = document.getElementById("newPostFab");

  let selectedTag = "all";

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      selectedTag = chip.dataset.tag || "all";
      chips.forEach((item) => {
        item.selected = item === chip;
      });

      cards.forEach((card) => {
        const cardTag = card.dataset.tag;
        const visible = selectedTag === "all" || selectedTag === cardTag;
        card.hidden = !visible;
      });
    });
  });

  if (fab) {
    fab.addEventListener("click", () => {
      showSnackbar("Rascunho de novo post criado.");
    });
  }
}

function initArticlePage() {
  const saveActionBtn = document.getElementById("saveActionBtn");
  const saveArticleBtn = document.getElementById("saveArticleBtn");

  const save = () => showSnackbar("Artigo salvo com sucesso.");

  if (saveActionBtn) {
    saveActionBtn.addEventListener("click", save);
  }

  if (saveArticleBtn) {
    saveArticleBtn.addEventListener("click", save);
  }
}

attachPageTransitions();
initDrawerState();

if (body.dataset.page === "home") {
  initHomePage();
}

if (body.dataset.page === "article") {
  initArticlePage();
}
