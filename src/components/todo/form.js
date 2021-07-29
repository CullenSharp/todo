/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */

import React, { useContext } from 'react';
import propTypes from 'prop-types';
import {
  Card,
  H2,
  InputGroup,
  Button,
  Elevation,
  Switch,
} from '@blueprintjs/core';

import { SettingsContext } from '../../context/settings';

function Form({ handleChange, handleSubmit }) {
  const {
    showComplete, toggleShow, pageNumber, changeItemsPerPage,
  } = useContext(SettingsContext);
  return (
    <Card id="form" interactive elevation={Elevation.FOUR}>
      <form onSubmit={handleSubmit}>

        <H2>Add To Do Item</H2>

        <label>
          <span>To Do Item</span>
          <InputGroup onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <InputGroup onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <Button type="submit">Add Item</Button>
        </label>

        <label>
          <span>Show completed</span>
          <Switch checked={showComplete} onChange={toggleShow} />
        </label>
        <label>
          <span>Items per page</span>
          <input type="number" min="1" max="10" value={pageNumber} onChange={changeItemsPerPage} />
        </label>
      </form>
    </Card>
  );
}
Form.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default Form;
