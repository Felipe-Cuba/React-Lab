import './profile-component.css';

const Profile = ({ image, alt }) => {
  return <img className="img" src={image} alt={alt} />;
};

export default Profile;
