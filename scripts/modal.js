document.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloses = document.querySelectorAll('[data-modal-close]');

  modalTriggers.forEach(trigger => {
    const modalId = trigger.dataset.modalTarget;
    const modal = document.getElementById(modalId);

    trigger.addEventListener('click', () => {
      if (modal) {
        modal.classList.remove('modal-fade-out');
        modal.style.display = 'flex';
        requestAnimationFrame(() => {
          modal.classList.add('modal-fade-in');
        });
      }
    });

    // Optional close on outside click (only for aboutModal)
    if (modalId === 'aboutModal') {
      modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  function closeModal(modal) {
    modal.classList.remove('modal-fade-in');
    modal.classList.add('modal-fade-out');

    modal.addEventListener('animationend', () => {
      if (modal.classList.contains('modal-fade-out')) {
        modal.style.display = 'none';
        modal.classList.remove('modal-fade-out');

        // 🛠️ Reset zoom or transform in case they were affected
        document.body.style.transform = 'none';
        document.body.style.zoom = '100%';
        document.documentElement.style.transform = 'none';
        document.documentElement.style.zoom = '100%';
      }
    }, { once: true });
  }
});
