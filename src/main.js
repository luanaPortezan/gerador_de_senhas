import { nanoid } from 'nanoid';
import { copy } from 'clipboard-copy';
import './style.css';

const passwordButtonElement = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordButtonElement.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordElement.innerHTML = randomPassword;
});

displayPasswordElement.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});