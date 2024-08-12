import { useState, useEffect } from 'react';
import '../styles/style.scss';

const Timer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-08-14T19:12:12') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
                heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                secondes: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTimeUnit = (unit) => {
        return unit < 10 ? `0${unit}` : unit;
    };

    const timerDisplay = `${formatTimeUnit(timeLeft.jours)}:${formatTimeUnit(timeLeft.heures)}:${formatTimeUnit(timeLeft.minutes)}:${formatTimeUnit(timeLeft.secondes)}`;

    return (
        <div className='cont'>
            <div className="mainbackground">
                <div className='decoration'>
                    <h1>
                        {Object.keys(timeLeft).length ? timerDisplay : 
                            <div>
                            <span>C'est l'heure des marches</span>
                            <div>Voici la première surprise :</div>
                            <div className='rewardfin'><a href="https://baptiste.rousselot.name/gdfwiki">BONBON GRATUIT</a></div>
                            </div>
                        }
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Timer;