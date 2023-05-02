import { getImageUrl } from '../../utils/getImageUrl';
import './list-component.css';

const List = ({ people }) => {
  people.sort((a, b) => (a.name > b.name ? 1 : -1));

  const listItems = people.map((person) => (
    <li key={person.id} className="card">
      <div className="card-image">
        <img
          className="image-icon"
          src={getImageUrl(person)}
          alt={person.name}
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">{person.name}</h2>
        <p className="card-text">
          <b>{person.profession}</b> know for {person.accomplishment}
        </p>
      </div>
    </li>
  ));

  return (
    <>
      <h1>List characters</h1>
      <div className="container-list">
        <ul className="list-component">{listItems}</ul>
      </div>
    </>
  );
};

export default List;
