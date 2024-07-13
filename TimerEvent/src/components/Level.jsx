import tutelImage from '../assets/tutel.png';
import data from '../data/data.json';

const Level = () => {

    const percent = ['1%','10%', '20%', '30%', '40%','50%','60%', '70%', '80%', '90%', '100%'];
    const challenge = ['Plateau de Fromage','On joue au mille borne', 'masqué', 'Cocktail Misterious Club Party', 'masqué','Je clip j’aime les carottes durant la semaine','masqué', 'Kamouflage App 2025', 'masqué', 'Je leak le mdp de Kamouflage pendant 15min', 'J’adore la mode'];
    const accomplie = data.accomplie;
    let temp = 0;
    let actual = -1;

    for (let i = 0; i < accomplie.length; i++) {
        if (accomplie[i] == 1) {
            temp += 1;
        }
    }

    temp = (temp / accomplie.length) * 100;
    temp = Math.round(temp*100)/100

    for (let k = 0; k < percent.length; k++) {
        if (temp < parseFloat(percent[k])) {
            actual = k - 1;
            break;
        }
    }

    if (actual === 11) {
        actual = 10 ;
    }

    
    return (
        <>
        <div className='level'>
            <div className='mainbackground'>
                <div className='colorlevel'>
                    <span className='percent'>{ temp }% </span>
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