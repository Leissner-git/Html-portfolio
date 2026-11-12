const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Update button label on initial load
function updateButtonText() {
  const isDark = rootElement.getAttribute('data-theme') === 'dark';
  toggleButton.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

updateButtonText();

// Handle toggle click
toggleButton.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  rootElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButtonText();
});

// Listen for OS-level theme changes if the user hasn't set a manual override
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const systemTheme = e.matches ? 'dark' : 'light';
    rootElement.setAttribute('data-theme', systemTheme);
    updateButtonText();
  }
});