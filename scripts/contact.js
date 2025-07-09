const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('button');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const websiteField = document.getElementById('website');
  if (websiteField.value) {
    console.warn("Spam bot detected (honeypot field filled).");
    return;
  }

  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span class="spinner"></span> Sending...`;

  try {
    const res = await fetch('https://contact-backend-bq1w.onrender.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
      })
    });

    if (res.ok) {
      alert("Thanks! We'll be in touch.");
      contactForm.reset();
      document.getElementById('contactModal').style.display = 'none';
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("Error sending message.");
  }

  submitBtn.disabled = false;
  submitBtn.textContent = originalText;
});

