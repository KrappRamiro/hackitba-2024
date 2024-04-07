import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

const GoalForm = (props: { formik: any; }) => {
    const { formik } = props;

    return (
        <FormControl>
          <FormLabel className='text-white' id="demo-row-radio-buttons-group-label">Objetivo</FormLabel>
          <TextField
          className='bg-gray-700'
          name="objetivo"
          label="objetivo"
          variant="outlined"
          type="number"
          fullWidth
          size="small"
          value={formik.values.objetivo}
          onChange={formik.handleChange}
          error={formik.touched.objetivo && Boolean(formik.errors.objetivo)}
          helperText={formik.touched.objetivo && formik.errors.objetivo}
        />
        </FormControl>
    )
};

export default GoalForm;
