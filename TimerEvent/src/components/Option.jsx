/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroupe from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio'
import { red,green,grey,lightGreen, orange } from '@mui/material/colors';


const Option = ({ state, propositions }) => {

    return (
        <div>
            <p>Current State: {state}</p>
            <ul>
                {propositions.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Séléctionnez une seule réponse</FormLabel>
                <RadioGroupe
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio  sx={{
                                        color: orange[800],
                                        '&.Mui-checked': {
                                          color: orange[600],
                                        },
                                      }}/>} label="Female" />
                    <FormControlLabel value="male" control={<Radio 
                     sx={{
                        color: red[800],
                        '&.Mui-checked': {
                          color: green[600],
                        },
                      }}/>} label="Male" />
                </RadioGroupe>
            </FormControl>
        </div>
    );
};

export default Option;