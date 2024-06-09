import React from 'react';

const Step3 = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Step 3</h2>
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Step3;
