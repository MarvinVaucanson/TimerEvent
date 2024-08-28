import Question from '../components/Question.jsx';

let tab = {
    "Baptiste":0,
    "Agathe":0,
    "Tymau":0
}

console.log(tab)

const Quizz = () => {
    return (
        <>
            <h2>Bienvenue Dans ce quizz sur le GDF ! Quel membre du GDF te correspond le plus ?</h2>
            <Question />
        </>
    ); 
};

export default Quizz;