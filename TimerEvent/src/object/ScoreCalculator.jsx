class ScoreCalculator {
    constructor() {
        this.scores = {
            "Baptiste": 0,
            "Agathe": 0,
            "Tymau": 0
        };
    }

    updateScores(personneScores) {
        this.scores.Baptiste += personneScores[0];
        this.scores.Agathe += personneScores[1];
        this.scores.Tymau += personneScores[2];
    }

    getScores() {
        return this.scores;
    }
}

export default ScoreCalculator;