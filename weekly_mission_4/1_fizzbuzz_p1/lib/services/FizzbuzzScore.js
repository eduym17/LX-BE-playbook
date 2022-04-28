class FizzbuzzScore {
  static applyValidationInScore(score) {
    if(score%5 === 0 && score%3 === 0) {
      return {score: score, trick: "FIZZBUZZ"};
    } else if (score%5 === 0) {
      return {score: score, trick: "BUZZ"};
    } else if (score%3 === 0) {
      return {score: score, trick: "FIZZ"};
    } else {
      return {score: score, trick: score};
   }
  }
}

module.exports = FizzbuzzScore;
