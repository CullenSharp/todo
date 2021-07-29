/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
import React, { useState, useContext } from 'react';
import {
  Card, Elevation, H2, InputGroup, Button,
} from '@blueprintjs/core';

import { AuthorizationContext } from '../../context/authorization';

function login() {
  const [values, setValues] = useState('');
  const { login } = useContext(AuthorizationContext);

  function handleChange(e) {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    if (e) e.preventDefault();
    const { username, password } = values;
    login(username, password);
  }

  return (
    <Card interactive elevation={Elevation.FOUR}>
      <H2>Login</H2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <InputGroup onChange={handleChange} placeholder="username" type="text" name="username" />
        </label>

        <label>
          <span>Password</span>
          <InputGroup onChange={handleChange} placeholder="password" type="password" name="password" />
        </label>

        <label>
          <Button type="submit">Login</Button>
        </label>
      </form>
    </Card>
  );
}

export default login;
