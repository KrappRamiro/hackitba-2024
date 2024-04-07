import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { SetStateAction, useState } from 'react';

const CategoryForm = (props: { formik: any; }) => {
    const { formik } = props;
    const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValue(event.target.value);
  };
    return (
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Categoria</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="categoria"
            onChange={handleChange}
            value={formik.values.categoria}
          >
            <FormControlLabel value="entrenamiento" control={<Radio />} label="entrenamiento" />
            <FormControlLabel value="descanso" control={<Radio />} label="descanso" />
            <FormControlLabel value="comida" control={<Radio />} label="comida" />

          </RadioGroup>
        </FormControl>
    )
};

export default CategoryForm;
