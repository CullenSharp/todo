/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

function List({ list, toggleComplete }) {
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
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
          <div
            role="button"
            onClick={() => toggleComplete(item.id)}
          >
            Complete:
            {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  list: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

export default List;
