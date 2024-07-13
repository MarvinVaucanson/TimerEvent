// import React from 'react';
import Level from '../components/Level.jsx';
import Plot from '../components/Plot.jsx';
import Timer from '../components/Timer.jsx'
import Challenge from '../components/Challenge.jsx';


const Home = () => {
    return (
        <>
            <Timer />
            <Plot />
            <Level />
            <Plot />
            <Challenge />

        </>
    ); 
};

export default Home;