document.getElementById('yr').textContent = new Date().getFullYear();

const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));

const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending...';
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.reset();
      status.textContent = "Thanks! Scott will be in touch shortly.";
    } else {
      status.textContent = 'Something went wrong. Please try again.';
    }
  } catch (err) {
    status.textContent = 'Network error. Please try again.';
  }
});
