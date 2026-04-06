// Dark mode toggle — persists across pages via localStorage
(function() {
  // Apply saved theme immediately (before paint)
  var saved = localStorage.getItem('poker-study-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Create toggle button
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.innerHTML = '<span class="icon-moon">&#9790;</span><span class="icon-sun">&#9788;</span>';
    btn.addEventListener('click', function() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('poker-study-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('poker-study-theme', 'dark');
      }
    });
    document.body.appendChild(btn);
  });
})();
