/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-param-reassign */

import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Navbar } from '@blueprintjs/core';

import Form from './form';
import List from './list';

import useForm from '../../hooks/form';

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  // eslint-disable-next-line no-use-before-define
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  // eslint-disable-next-line no-unused-vars
  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    const incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Navbar>
        <div className="bp3-navbar-heading">
          To Do List:
          {incomplete}
          {' '}
          items pending
        </div>
      </Navbar>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <List list={list} toggleComplete={toggleComplete} />
    </>
  );
};

export default ToDo;
