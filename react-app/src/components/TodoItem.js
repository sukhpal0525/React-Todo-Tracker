import React from 'react';

function TodoItem({ task }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.taskName}
      </span>
    </li>
  );
}

export default TodoItem;
