import tutelImage from '../assets/tutel.png'

const Level = () => {

    const percent = ['1%','10%', '20%', '30%', '40%','50%','60%', '70%', '80%', '90%', '100%'];
    const challenge = ['1%','10%', '20%', '30%', '40%','50%','60%', '70%', '80%', '90%', '100%']

    return (
        <>
        <div className='level'>
            <span>20%</span>
            <img className='levelimage' src={tutelImage}></img>
            <div className='evolutionlevel' >
                <ul>
                    {percent.reverse().map((percent, index) => (
                    <li key={index}>{percent}</li>
                    ))}
                </ul>
                <ul>
                    {challenge.reverse().map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div>
            <p>douze</p>
        </div>
        </>
    );
};

export default Level;