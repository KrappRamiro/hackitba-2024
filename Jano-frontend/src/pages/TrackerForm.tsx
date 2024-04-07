import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button
} from '@mui/material';

import CategoryForm from '../components/form/CategoryForm';
import FrecuencyForm from '../components/form/FrecuencyForm';
import GoalForm from '../components/form/GoalForm';

const steps = [' Categoria', 'Frecuencia', 'Objetivo'];

const TrackerForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = () => {
    
	console.log(formik.values)
  }

  const formik = useFormik({
    initialValues: {
      categoria:"entrenamiento",
	  frecuencia:"diario",
	  objetivo:1
    },
    onSubmit: () => {
      if (activeStep === steps.length - 1) {
        console.log('last step');
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  });

  const formContent = (step: number) => {
    switch(step) {
      case 0:
        return <CategoryForm formik={formik} />;
      case 1:
        return <FrecuencyForm formik={formik} />;
      case 2:
        return <GoalForm formik={formik} />;
      default:
        return <div>404: Not Found</div>
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: 2,
		maxHeight: '100%',
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel className=''>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px' }}
        >
          {formContent(activeStep)}
        </Grid>
        {formik.errors && (
          <Grid
            item
            xs={12}
          >
            <FormHelperText error>
              {/* {formik.errors} */}
            </FormHelperText>
          </Grid>
        )}
        <Grid
          item
          xs={12}
        >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              Next
            </Button>
          ) }
        </Grid>
      </Grid>
    </Box>
  )
}

export default TrackerForm;