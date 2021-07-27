import React from 'react';
import propTypes from 'prop-types';

/**
 * @param {array} list of tasks to complete
 * @return {html}
 * @example
 *  <ul>
 *    <li>
 *      <span>clean room</span>
 *    <li>
 *  </ul>
 */
function TodoList({list, handleComplete}) {
  return (
    <ul>
      {list.map((item) => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => handleComplete(item._id)}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
TodoList.propTypes = {
  list: propTypes.array,
  handleComplete: propTypes.func,
};
export default TodoList;
