import React, {useState} from 'react';
import propTypes from 'prop-types';

/**
 * renders a form for adding todo list items
 * @param {function} addItem sets state in parent component
 * @return {html}
 * @example
 *  <>
 *    <h3>add item<h3>
 *    <form>
 *      <label>
 *        <span>To Do Item</span>
 *        <input name="text" placeholder="Add To Do List Item"/>
 *      </label>
 *      <label>
 *        <span>Difficulty Rating</span>
 *        <input defaultValue="1" type="range" name="difficulty"/>
 *      </label>
 *      <label>
 *        <span>Assigned To</span>
 *        <input type="text" name="assignee" placeholder="Assigned To"/>
 *      </label>
 *    <button>Add Item</button>
 *  </>
 */
function TodoForm({addItem}) {
  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    addItem(item);
    const emptyItem = {};
    setItem({...emptyItem});
  };
  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            defaultValue="1"
            type="range" min="1"
            max="5" name="difficulty"
            onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange} />
        </label>
        <button>Add Item</button>
      </form>
    </>
  );
}
TodoForm.propTypes = {
  addItem: propTypes.func,
};

export default TodoForm;
