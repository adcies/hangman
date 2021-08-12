import '../sass/Game.scss';
import '../sass/Phrase.scss';
import '../sass/Board.scss';
import '../sass/Statistics.scss';

import data from '../../data/phrases.json';

export default class Game {
  constructor() {
    this.form = document.querySelector('form');
    this.select = document.querySelector('select');
    this.alphabetBoard = document.querySelector('.board');
    this.phraseContainer = document.querySelector('.phrase');
    this.attemptsContainer = document.querySelector('.game__attempts');
    this.numberOfAttempts = null;
    this.phrase = null;
  }

  #setNumberOfAttempts(numberOfAttempts) {
    this.numberOfAttempts = numberOfAttempts;
    this.attemptsContainer.textContent = this.numberOfAttempts;
  }

  #enableButtons() {
    const buttons = document.querySelectorAll('.board__letter');
    buttons.forEach((button) => (button.disabled = false));
  }

  #createLetter(className) {
    const letter = document.createElement('div');
    className.forEach((singleClassName) => {
      letter.classList.add(singleClassName);
    });

    this.phraseContainer.appendChild(letter);
  }

  #renderPhrase() {
    const arrayOfPhrase = [...this.phrase];
    const space = ' ';
    this.phraseContainer.textContent = null;
    arrayOfPhrase.forEach((letter) => {
      const className =
        letter === space
          ? ['phrase__letter', 'phrase__letter-space']
          : ['phrase__letter'];
      this.#createLetter(className);
    });
  }

  #drawPhrase(phrases) {
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  }

  #getPhrasesList() {
    const category = this.select.value;
    return data[category];
  }

  #setPhrase() {
    const phrases = this.#getPhrasesList();
    const phrase = this.#drawPhrase(phrases);
    this.phrase = phrase;
  }

  #play(e) {
    e.preventDefault();
    this.#setPhrase();
    this.#renderPhrase();
    this.#enableButtons();
    this.#setNumberOfAttempts(5);
  }

  #createBoardButton(text, isButtonDisabled) {
    const btn = document.createElement('button');
    btn.classList.add('board__letter');
    btn.textContent = text;
    btn.disabled = isButtonDisabled;
    this.alphabetBoard.appendChild(btn);
  }

  #createAlphabetBoard() {
    // ascii from 65 to 90: A to Z
    for (let i = 65; i <= 90; i++) {
      const text = String.fromCharCode(i);
      this.#createBoardButton(text, true);
    }
  }

  #handleButtonsClick(e) {
    e.target.disabled = true;
  }

  #addEventListenerToButtons() {
    const buttons = document.querySelectorAll('.board__letter');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        this.#handleButtonsClick(e);
      });
    });
  }

  #addEventListeners() {
    this.form.addEventListener('submit', (e) => {
      this.#play(e);
    });
    this.#addEventListenerToButtons();
  }

  init() {
    this.#createAlphabetBoard();
    this.#addEventListeners();
  }
}
