// Tab switching for the wireframe boards
(function () {
  const tabs = document.querySelectorAll('#tabs .tab');
  const boards = document.querySelectorAll('#boards .board');
  function select(name) {
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
    boards.forEach((b) => b.setAttribute('data-active', String(b.dataset.tab === name)));
  }
  tabs.forEach((t) => t.addEventListener('click', () => select(t.dataset.tab)));
})();
