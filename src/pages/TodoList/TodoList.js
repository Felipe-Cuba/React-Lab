import React from 'react';
import { Link } from 'react-router-dom';
import TodoListComponent from '../../components/todolist-component/todolist-component';

import luffy from '../../assets/images/luffy.jpg';

const luffyPerson = {
  name: 'Luffy',
  listColor: {
    color: '#fff',
  },
  imageId: 'ggsMLFB',
};

function TodoList() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <TodoListComponent person={luffyPerson} alt={'Luffy'} avatar={luffy} />
      </div>
      <div className="button-container">
        <Link to="/gallery" className="button-link">
          Gallery
        </Link>
      </div>
    </div>
  );
}

export default TodoList;
