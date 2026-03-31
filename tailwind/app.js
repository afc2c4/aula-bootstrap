const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const priceRange = document.getElementById('priceRange');
const priceLabel = document.getElementById('priceLabel');
const categoryFilters = Array.from(document.querySelectorAll('.category-filter'));
const sortSelect = document.getElementById('sortSelect');
const clearFilters = document.getElementById('clearFilters');
const loadMoreButton = document.getElementById('loadMore');
const resultsLabel = document.getElementById('resultsLabel');
const noResults = document.getElementById('noResults');
const cartCountElement = document.getElementById('cartCount');
const addButtons = Array.from(document.querySelectorAll('.add-to-cart'));
const toast = document.getElementById('toast');
const thumbButtons = Array.from(document.querySelectorAll('.thumb-btn'));
const mainProductImage = document.getElementById('mainProductImage');

const productCards = Array.from(document.querySelectorAll('.product-card'));
let cartCount = 0;
let visibleCount = 8;
const visibleStep = 4;

function getSelectedCategories() {
  return categoryFilters.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
}

function sortProducts(cards, mode) {
  const sorted = [...cards];

  if (mode === 'price-asc') {
    sorted.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
  } else if (mode === 'price-desc') {
    sorted.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
  } else if (mode === 'name') {
    sorted.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name, 'pt-BR'));
  }

  return sorted;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-2');

  window.setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
  }, 1400);
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const maxPrice = Number(priceRange.value);
  const selectedCategories = getSelectedCategories();

  const filtered = productCards.filter((card) => {
    const name = card.dataset.name.toLowerCase();
    const price = Number(card.dataset.price);
    const category = card.dataset.category;

    const matchName = name.includes(query);
    const matchPrice = price <= maxPrice;
    const matchCategory = selectedCategories.includes(category);

    return matchName && matchPrice && matchCategory;
  });

  const ordered = sortProducts(filtered, sortSelect.value);

  productCards.forEach((card) => {
    card.classList.add('hidden');
  });

  ordered.forEach((card, index) => {
    if (index < visibleCount) {
      card.classList.remove('hidden');
    }
    productGrid.appendChild(card);
  });

  const shown = Math.min(visibleCount, ordered.length);
  resultsLabel.textContent = `Exibindo ${shown} de ${ordered.length} produtos`;

  noResults.classList.toggle('hidden', ordered.length !== 0);
  loadMoreButton.classList.toggle('hidden', shown >= ordered.length || ordered.length === 0);
}

searchInput.addEventListener('input', () => {
  visibleCount = 8;
  applyFilters();
});

priceRange.addEventListener('input', () => {
  priceLabel.textContent = `R$ ${priceRange.value}`;
  visibleCount = 8;
  applyFilters();
});

categoryFilters.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    visibleCount = 8;
    applyFilters();
  });
});

sortSelect.addEventListener('change', () => {
  visibleCount = 8;
  applyFilters();
});

clearFilters.addEventListener('click', () => {
  searchInput.value = '';
  priceRange.value = 1500;
  priceLabel.textContent = 'R$ 1500';
  categoryFilters.forEach((checkbox) => {
    checkbox.checked = true;
  });
  sortSelect.value = 'featured';
  visibleCount = 8;
  applyFilters();
});

loadMoreButton.addEventListener('click', () => {
  visibleCount += visibleStep;
  applyFilters();
});

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartCountElement.textContent = String(cartCount);
    showToast('Item adicionado ao carrinho.');
  });
});

thumbButtons.forEach((button) => {
  button.addEventListener('click', () => {
    thumbButtons.forEach((thumb) => thumb.classList.remove('border-brand-500'));
    thumbButtons.forEach((thumb) => thumb.classList.add('border-transparent'));

    button.classList.remove('border-transparent');
    button.classList.add('border-brand-500');
    mainProductImage.src = button.dataset.image;
  });
});

applyFilters();
