import './avatar-component.css'
import { getImageUrl } from '../../utils/getImageUrl';

const Avatar = ({ person, size }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      style={person.theme}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
