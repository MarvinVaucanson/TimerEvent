import data from '../data/data.json';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';

const Challenge = () => {

    const defi = data.defi;
    const accomplie = data.accomplie;
        
    return (
        <div className='challenge'>
            <div className='mainbackground'>
                <h2>Voici la liste des défis à accomplir</h2>
                <h3>Pour les valider il faut envoyer une preuve par message à Baptiste</h3>
                <FormGroup>
                    {defi.slice().map((defiValue, index) => (
                            <FormControlLabel key={index} className={accomplie[index] == 0 ? 'lielt no' : 'lielt yes'} control={
                                <Checkbox className={index}
                                    checked={accomplie[index] == 1}
                                    readOnly
                                    sx={{
                                        color: orange[800],
                                        '&.Mui-checked': {
                                          color: orange[600],
                                        },
                                      }}
                                />
                            } label={defiValue}/>
                    ))}
                </FormGroup>
            </div>
        </div>
    );
};

export default Challenge;