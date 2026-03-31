const burgerButtons = document.querySelectorAll('.navbar-burger');

burgerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const menu = document.getElementById(targetId);

    button.classList.toggle('is-active');
    if (menu) {
      menu.classList.toggle('is-active');
    }
  });
});

const dropdown = document.getElementById('statusDropdown');
if (dropdown) {
  const trigger = dropdown.querySelector('.dropdown-trigger .button');

  if (trigger) {
    trigger.addEventListener('click', () => {
      dropdown.classList.toggle('is-active');
    });
  }

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('is-active');
    }
  });
}

const modal = document.getElementById('alertModal');
const openModalButton = document.getElementById('openModalButton');

const closeModal = () => {
  if (!modal) {
    return;
  }

  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
};

if (modal && openModalButton) {
  openModalButton.addEventListener('click', () => {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
  });

  modal.querySelectorAll('[data-close-modal]').forEach((element) => {
    element.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

const fileInput = document.getElementById('anexo');
const fileName = document.getElementById('fileName');

if (fileInput && fileName) {
  fileInput.addEventListener('change', () => {
    if (fileInput.files && fileInput.files.length > 0) {
      fileName.textContent = fileInput.files[0].name;
    } else {
      fileName.textContent = 'Nenhum arquivo selecionado';
    }
  });
}
