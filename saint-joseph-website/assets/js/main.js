(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-mobile-panel]');
  if(!btn || !panel) return;

  btn.addEventListener('click', () => {
    const open = panel.classList.toggle('show');
    btn.setAttribute('aria-expanded', String(open));
  });
})();