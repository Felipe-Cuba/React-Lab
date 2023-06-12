import Profile from '../profile-component/profile-component';
import './todolist-component.css';

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

const TodoListComponent = ({ avatar, alt, person, date }) => {
  return (
    <div className="container-todo">
      <h1 className="todo-title">
        To Do List for {formatDate(date)}
      </h1>
      <Profile person={person} image={avatar} alt={alt} />
      <ul className="list" style={person.listColor}>
        <li className="list-item"> Comer carne</li>
        <li className="list-item"> Comer carne</li>
        <li className="list-item"> Comer carne</li>
        <li className="list-item"> Dormir </li>
      </ul>
    </div>
  );
};

export default TodoListComponent;
