import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { SetStateAction, useState } from "react";

const FrecuencyForm = (props: { formik: any }) => {
	const { formik } = props;
	const [value, setValue] = useState("");

	const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
		formik.values.categoria = event.target.value
	};
	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">Frecuencia</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="frecuencia"
				onChange={handleChange}
				value={formik.values.categoria}
			>
				<FormControlLabel value="diario" control={<Radio />} label="diario" />
				<FormControlLabel value="semanal" control={<Radio />} label="semanal" />
			</RadioGroup>
		</FormControl>
	);
};

export default FrecuencyForm;
