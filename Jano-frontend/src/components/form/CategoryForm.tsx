import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { SetStateAction, useState } from 'react';

const CategoryForm = (props: { formik: any; }) => {
    const { formik } = props;
    const [value, setValue] = useState('');


    return (
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Categoria</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="categoria"
          >
            <FormControlLabel value="entrenamiento" control={<Radio />} label="entrenamiento" />
            <FormControlLabel value="descanso" control={<Radio />} label="descanso" />
            <FormControlLabel value="comida" control={<Radio />} label="comida" />

          </RadioGroup>
        </FormControl>
    )
};

export default CategoryForm;
