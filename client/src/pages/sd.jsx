import React, { useState } from 'react';
import axios from 'axios';

const typeRent = [
  { id: 1, name: 'Days' },
  { id: 2, name: 'Month' },
  { id: 3, name: 'Years' },
];

const Form = () => {
  const [selectedTypeRent, setSelectedTypeRent] = useState(null);

  const handleTypeRentChange = (e) => {
    setSelectedTypeRent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      typeRent: selectedTypeRent,
    };

    axios.post('/api/post-data', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type Rent:
        <select onChange={handleTypeRentChange}>
          {typeRent.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;