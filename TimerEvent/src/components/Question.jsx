import { useState } from 'react';
import questions from '../data/questions.json';
import Option from '../components/Option.jsx';
import '../object/ScoreCalculator.jsx';
import '../styles/question.scss';
import { Card } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Question = ({ onQuizFinish, onAnswerSubmit }) => {
    const [state, setState] = useState(1);
    const question = questions.questions;

    const currentQuestion = question.find(q => q.id === state);

    const handleNextQuestion = (personneScores) => {
        onAnswerSubmit(personneScores);
        if (state < question.length) {
            setState(state + 1);
        } else {
            console.log("Quiz terminé !");
            onQuizFinish();
        }
    };

    return (
            <Card className={state === 29 ? 'main-card-region' : 'main-card'}>
                <div className='question-title'>
                <h3 className='title'>{currentQuestion.question}</h3>
                <p>Question en cours : {state}</p>
                <Option state={state} propositions={currentQuestion.proposition} personne={currentQuestion.personne} onSubmit={handleNextQuestion}/>
                </div>
            </Card>
    );
};

export default Question;