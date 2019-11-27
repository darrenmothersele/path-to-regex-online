import pathToRegex from 'path-to-regex';
window.addEventListener('load', () => {
  document.getElementById('path-input').addEventListener('input', e => {
    const parser = new pathToRegex(e.target.value);
    document.getElementById('output').innerText = parser.regexp.source;
  });
});
