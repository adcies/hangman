import '../sass/Statistics.scss';

export default class Statistics {
  constructor() {
    this.initialNumberOfAttempts = null;
    this.winsInfo = document.querySelector('.statistics__wins-info');
    this.lossesInfo = document.querySelector('.statistics__losses-info');
    this.averageFailedAttemptsInfo = document.querySelector(
      '.statistics__attempts-info'
    );
    this.numberOfWins = 0;
    this.numberOfLosses = 0;
    this.attempts = [];
  }

  setInitialNumberOfAttempts(initialNumberOfAttempts) {
    this.initialNumberOfAttempts = initialNumberOfAttempts;
  }

  #calculateAverageFailedAttempts(arrayOfAttempts) {
    let sum = 0;
    arrayOfAttempts.forEach((number) => {
      sum += number;
    });
    const average = sum / arrayOfAttempts.length;
    return average;
  }

  addAverageFailedAttempts(numberOfAttemptsLeft) {
    if (
      typeof this.initialNumberOfAttempts === 'number' &&
      isFinite(this.initialNumberOfAttempts)
    ) {
      const failedAttempts =
        this.initialNumberOfAttempts - numberOfAttemptsLeft;
      console.log(this.initialNumberOfAttempts);
      this.attempts.push(failedAttempts);
      const average = this.#calculateAverageFailedAttempts(this.attempts);
      this.averageFailedAttemptsInfo.textContent = +average.toFixed(2);
    }
  }

  incrementLosses() {
    this.lossesInfo.textContent = ++this.numberOfLosses;
  }

  incrementWins() {
    this.winsInfo.textContent = ++this.numberOfWins;
  }

  renderInitialValues() {
    this.winsInfo.textContent = this.numberOfWins;
    this.lossesInfo.textContent = this.numberOfLosses;
    this.averageFailedAttemptsInfo.textContent = '-';
  }
}
