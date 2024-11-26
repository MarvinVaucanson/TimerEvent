class ScoreCalculator {
    constructor() {
        this.scores = {
            "Baptiste": 0,
            "Agathe": 0,
            "Tymau": 0,
            "Ludivine": 0,
            "Simon": 0,
            "Maud": 0,
            "Camille": 0,
            "Appoline": 0,
            "Marion": 0,
            "Emma": 0,
            "Chloé": 0,
            "Titouan": 0,
        };
    }

    updateScores(personneScores) {
        this.scores.Baptiste += personneScores[0];
        this.scores.Agathe += personneScores[1];
        this.scores.Tymau += personneScores[2];
        this.scores.Ludivine += personneScores[3];
        this.scores.Simon += personneScores[4];
        this.scores.Maud += personneScores[5];
        this.scores.Camille += personneScores[6];
        this.scores.Appoline += personneScores[7];
        this.scores.Marion += personneScores[8];
        this.scores.Emma += personneScores[9];
        this.scores.Chloé += personneScores[10];
        this.scores.Titouan += personneScores[11];
    }

    getScores() {
        return this.scores;
    }
}

export default ScoreCalculator;