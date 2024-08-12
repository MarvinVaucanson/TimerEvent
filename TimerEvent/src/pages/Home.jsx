// import React from 'react';
import Level from '../components/Level.jsx';
import Plot from '../components/Plot.jsx';
import Timer from '../components/Timer.jsx'
import Challenge from '../components/Challenge.jsx';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <Link to="/marches/quizz/">
                <button>Go to Quizz</button>
            </Link>
            </div>
            <Timer />
            <Plot />
            <Level />
            <Plot />
            <Challenge />
        </>
    ); 
};

export default Home;