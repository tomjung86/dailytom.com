const modal = document.getElementById('contactModal');
const contactLink = document.querySelector('a[href="#contact"]');
const closeModal = document.getElementById('closeModal');

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';

  const content = modal.querySelector('.modal-content');
  content.style.animation = 'none';
  void content.offsetWidth;
  content.style.animation = 'modalSlideUp 0.4s ease forwards';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    // Block clicking outside to close modal
    e.stopPropagation();
  }
});
