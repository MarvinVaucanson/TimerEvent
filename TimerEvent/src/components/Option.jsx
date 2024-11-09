/* eslint-disable react/prop-types */
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import '../styles/options.scss';
import Button from '@mui/material/Button';

const getGradientColor = (index, maxIndex, addOffset = false) => {
    const offset = addOffset ? 1 : 0.7;
    const r = Math.min(200, Math.floor((index / maxIndex) * 255));
    const g = Math.min(255, Math.floor(((maxIndex - index) / maxIndex) * 200));
    return `rgb(${r}, ${g}, 0, ${offset})`;
};

const Option = ({ propositions, personne, onSubmit }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Réponse soumise :', selectedValue);
    onSubmit(personne[selectedValue]);
  };

  return (
    <div className='options'>
      <FormControl className='formOption'>
        <FormLabel id="demo-radio-buttons-group-label">Sélectionnez une seule réponse</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={selectedValue}
          onChange={handleRadioChange}
        >
          {propositions.map((option, index) => (
            <FormControlLabel
              className='bouton'
              key={index}
              value={index.toString()}
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                    },
                  }}
                />
              }
              label={option}
              sx={{
                backgroundColor: selectedValue === index.toString() ? (getGradientColor(index, propositions.length -1, true)) : getGradientColor(index, propositions.length - 1, false),
                '&.Mui-checked': {
                },
              }}
            />
          ))}
        </RadioGroup>
        <Button onClick={handleSubmit} className='validationButton'>Valider</Button>
      </FormControl>
    </div>
  );
};

export default Option;
