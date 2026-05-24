const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
// Initialize theme setup
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️ Light';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌙 Dark';
}
// Handle button click toggle
themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️ Light';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'dark');
    }
});