import { useState } from 'react';
import questions from '../data/questions.json';
import Option from '../components/Option.jsx';
import Result from './Result.jsx';


const Question = () => {
    const [state,setState] = useState(1);
    const question = questions.questions;

    const currentQuestion = question.find(q => q.id === state);

    const handleNextQuestion = () => {
        if (state < question.length) {
            setState(state + 1);
        } else {
            console.log("Quiz terminé !"); //on fait remonter que c'est fini à quizz I guess
        }
    };

    return (
        <div>
            <h3>{currentQuestion.question}</h3>
            <p>Question en cours : {state}</p>
            <Option state={state} propositions={currentQuestion.proposition} onSubmit={handleNextQuestion}/>
            <Result></Result>
        </div>
    );
};

export default Question;
