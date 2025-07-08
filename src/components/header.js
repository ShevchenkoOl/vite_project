export function createHeader() {
  const header = document.createElement('header');

  const title = document.createElement('h1');
  title.textContent = 'Image Search';

  const form = document.createElement('form');
  form.id = 'search-form';

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search-input';
  input.placeholder = 'Search for images...';
  input.required = true;

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Search';

  form.append(input, button);
  header.append(title, form);

  return header;
}