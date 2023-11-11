import React from "react";
import { TextField } from "@mui/material";

const SignupStep3 = ({ formData, updateForm }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateForm({
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <TextField
        label="Country"
        variant="outlined"
        fullWidth
        name="country"
        value={formData.address.country}
        onChange={handleChange}
      />
      <TextField
        label="State"
        variant="outlined"
        fullWidth
        name="state"
        value={formData.address.state}
        onChange={handleChange}
      />
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        name="city"
        value={formData.address.city}
        onChange={handleChange}
      />
      <TextField
        label="Zip Code"
        variant="outlined"
        fullWidth
        name="zipCode"
        value={formData.address.zipCode}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignupStep3;