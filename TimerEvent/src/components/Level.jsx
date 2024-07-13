import tutelImage from '../assets/tutel.png';
const Level = () => {

    const percent = ['1%','10%', '20%', '30%', '40%','50%','60%', '70%', '80%', '90%', '100%'];
    const challenge = ['Plateau de Fromage','On joue au mille borne', 'masqué', 'Cocktail Misterious Club Party', 'masqué','Je clip j’aime les carottes durant la semaine','masqué', 'Kamouflage App 2025', 'masqué', 'Je leak le mdp de Kamouflage pendant 15min', 'J’adore la mode'];
    const actual = 0;

    // const maskWidth = 95 - parseInt(percent[actual]);

    return (
        <>
        <div className='level'>
            <div className='mainbackground'>
                <div className='colorlevel'>
                    <span className='percent'>{ percent[actual] }</span>
                    {/* <div className='mask' style={{ height: `${maskWidth}%` }}></div> */}
                    <img className='levelimage' src={tutelImage}></img>
                </div>
                <div className='evolutionlevel' >
                    <ul className='bar'>
                        {percent.slice().reverse().map((percentValue, index) => (
                        <li 
                            key={index}
                            className={parseInt(percentValue) <= parseInt(percent[actual]) ? 'reach' : 'unreach'}
                            >
                        </li>
                        ))}
                    </ul>
                    <ul>
                        {percent.slice().reverse().map((percentValue, index) => (
                        <li 
                            key={index}
                            // className={parseInt(percentValue) <= parseInt(percent[actual]) ? 'reach' : ''}
                            >
                            {percentValue}
                        </li>
                        ))}
                    </ul>
                    <ul className='reward'>
                        {challenge.reverse().map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Level;