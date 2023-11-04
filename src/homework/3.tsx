import React, { useState } from 'react';

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event:SyntheticEvent) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
