import { nanoid } from 'nanoid';
import './style.css';

const passwordButtonElement = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordButtonElement.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordElement.innerHTML = randomPassword;
});