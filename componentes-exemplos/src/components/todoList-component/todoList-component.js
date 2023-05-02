import './todoList-component.css';

function formatDate (date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

const TodoList = ({ avatar, alt, person, date }) => {
  return (
    <div className="container-todo">
      <h1 className="todo-title">
        {person.name}'s To Do List for {formatDate(date)}
      </h1>
      <img src={avatar} alt={alt} className="photo" />
      <ul className="list" style={person.listColor}>
        <li className="list-item"> Comer carne</li>
        <li className="list-item"> Comer carne</li>
        <li className="list-item"> Comer carne</li>
        <li className="list-item"> Dormir </li>
      </ul>
    </div>
  );
};

export default TodoList;
