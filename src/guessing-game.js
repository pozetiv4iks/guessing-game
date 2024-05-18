class GuessingGame {
    constructor() {
      this.min;
      this.max;
      this.resultsGame;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      this.resultsGame = Math.round((this.max - this.min) / 2) + this.min;
      return this.resultsGame;
    }
  
    lower() {
      this.max = this.resultsGame;
    }
  
    greater() {
      this.min = this.resultsGame;
    }
  }
  
  module.exports = GuessingGame;
