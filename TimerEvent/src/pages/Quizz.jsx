import { useState } from 'react';
import Question from '../components/Question.jsx';
import Result from '../components/Result.jsx';
import ScoreCalculator from '../object/ScoreCalculator';

const Quizz = () => {
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [scoreCalculator] = useState(new ScoreCalculator());

    const handleQuizFinish = () => {
        setIsQuizFinished(true);
    };

    const handleAnswerSubmit = (personneScores) => {
        scoreCalculator.updateScores(personneScores);
    };

    return (
        <>
            <h2>Bienvenue Dans ce quizz sur le GDF ! Quel membre du GDF te correspond le plus ?</h2>
            {isQuizFinished ? <Result scores={scoreCalculator.getScores()} /> : <Question onQuizFinish={handleQuizFinish} onAnswerSubmit={handleAnswerSubmit} />}
        </>
    ); 
};

export default Quizz;