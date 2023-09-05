import React from 'react';

export function ToDoItem({completed, id, title, priority, toggleTodo, deleteTodo}) {
    return(
        <li>
          <label>
            <input 
              type='checkbox' 
              checked={completed} 
              onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title} (Priority: {priority})
          </label>
          <button
            onClick={() => deleteTodo(id)} 
            className='btn btn-danger'
          >
          X
          </button>
        </li>
    )
} 