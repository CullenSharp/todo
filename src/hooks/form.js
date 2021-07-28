import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    console.log(event);
    event.persist();
    // eslint-disable-next-line no-shadow
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
