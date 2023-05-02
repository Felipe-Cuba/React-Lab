import './profile-component.css';

import noimage from '../../assets/images/noimage.jpg';
import Avatar from '../avatar-component/avatar-component';

const Card = ({ title, children }) => {
  return (
    <div className="card-component">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const Profile = ({ image, alt, person }) => {
  // console.log(person);
  if (image) {
    return <img className="img" src={image} alt={alt} />;
  } else if (person) {
    return (
      <Card title={person.name}>
        <Avatar person={person} size={250} />
      </Card>
    );
  } else {
    return <img className="img" src={noimage} alt={alt} />;
  }
};

export default Profile;
