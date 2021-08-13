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

  #toggleButtonsDisable(buttonDisabled) {
    const buttons = document.querySelectorAll('.board__letter');
    buttons.forEach((button) => (button.disabled = buttonDisabled));
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
    this.#toggleButtonsDisable(false);
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

  #revealTheLetters(target) {
    const arrayOfPhrase = [...this.phrase];
    const phraseLetters = document.querySelectorAll('.phrase__letter');
    let userGuessedLetterRight = false;
    arrayOfPhrase.forEach((letter, index) => {
      if (target.textContent === letter.toUpperCase()) {
        phraseLetters[index].textContent = target.textContent;
        if (!userGuessedLetterRight) userGuessedLetterRight = true;
      }
    });
    return userGuessedLetterRight;
  }

  #revealThePhrase() {
    const arrayOfPhrase = [...this.phrase];
    const phraseLetters = document.querySelectorAll('.phrase__letter');
    arrayOfPhrase.forEach((letter, index) => {
      phraseLetters[index].textContent = letter.toUpperCase();
    });
  }

  #checkIfGameOver() {
    if (this.numberOfAttempts === 0) {
      this.#toggleButtonsDisable(true);
      this.#revealThePhrase();
      return alert('Game is over. You loose!');
    }
    const phraseLetters = Array.from(
      document.querySelectorAll('.phrase__letter')
    );
    let isPhraseGuessed = true;
    for (let i = 0; i < phraseLetters.length; i++) {
      if (phraseLetters[i].textContent === '') {
        isPhraseGuessed = false;
        break;
      }
    }

    if (isPhraseGuessed) {
      this.#toggleButtonsDisable(true);
      return alert('You win. Congratulations!');
    }
  }

  #handleButtonsClick({ target }) {
    target.disabled = true;
    const userGuessedLetterRight = this.#revealTheLetters(target);
    if (!userGuessedLetterRight) {
      this.#setNumberOfAttempts(--this.numberOfAttempts);
    }
    this.#checkIfGameOver();
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
