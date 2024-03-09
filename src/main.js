import { nanoid } from 'nanoid';

const passwordButtonElement = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordButtonElement.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordElement.innerHTML = randomPassword;
});