import { useState } from 'react';
import questions from '../data/questions.json';
import Option from '../components/Option.jsx';


const Question = () => {
    const [state,setState] = useState(1);
    const question = questions.questions;

    const currentQuestion = question.find(q => q.id === state);

    const handleNextQuestion = () => {
        if (state < question.length) {
            setState(state + 1); // Incrémente l'état pour passer à la question suivante
        } else {
            console.log("Quiz terminé !");
        }
    };

    return (
        <div>
            <h3>{currentQuestion.question}</h3>
            <p>Question en cours : {state}</p>
            <Option state={state} propositions={currentQuestion.proposition} onSubmit={handleNextQuestion}/>
        </div>
    );
};

export default Question;
