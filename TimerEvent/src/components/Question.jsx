import questions from '../data/questions.json';
import Option from '../components/Option.jsx';


const Question = () => {
    const question = questions.questions;
    let state = 1;

    const currentQuestion = question.find(q => q.id === state);

    return (
        <div>
            <h3>{currentQuestion.question}</h3>
            <Option state={state} propositions={currentQuestion.proposition}/>
        </div>
    );
};

export default Question;
