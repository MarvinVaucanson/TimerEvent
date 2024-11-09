/* eslint-disable react/prop-types */
const Result = ({ scores }) => {
    return (
        <div>
            <p>DOUZE</p>
            <p>Baptiste: {scores.Baptiste}</p>
            <p>Agathe: {scores.Agathe}</p>
            <p>Tymau: {scores.Tymau}</p>
        </div>
    );
}

export default Result;
