const toggleDarkMode = mode => {
  if (mode === 'dark') {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export default toggleDarkMode;
