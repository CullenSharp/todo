/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import propTypes from 'prop-types';
import { Card, Elevation, Button } from '@blueprintjs/core';

function List({ list, toggleComplete }) {
  return (
    <section className="card-group">
      {list.map((item) => (
        <Card interactive elevation={Elevation.FOUR} key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>
              Assigned to:
              {item.assignee}
            </small>
          </p>
          <p>
            <small>
              Difficulty:
              {item.difficulty}
            </small>
          </p>
          <Button
            role="button"
            onClick={() => toggleComplete(item.id)}
            intent={item.complete ? 'Success' : 'Danger'}
          >
            {item.complete ? ' complete' : ' incomplete'}
          </Button>
          <hr />
        </Card>
      ))}
    </section>
  );
}
List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  list: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

export default List;
