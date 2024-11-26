/* eslint-disable react/prop-types */
const Result = ({ scores }) => {
    return (
        <div>
            <p>DOUZE</p>
            <p>Baptiste: {scores.Baptiste}</p>
            <p>Agathe: {scores.Agathe}</p>
            <p>Tymau: {scores.Tymau}</p>
            <p>Ludivine: {scores.Ludivine}</p>
            <p>Simon: {scores.Simon}</p>
            <p>Maud: {scores.Maud}</p>
            <p>Camille: {scores.Camille}</p>
            <p>Appoline: {scores.Appoline}</p>
            <p>Marion: {scores.Marion}</p>
            <p>Emma: {scores.Emma}</p>
            <p>Chloé: {scores.Chloé}</p>
        </div>
    );
}

export default Result;
