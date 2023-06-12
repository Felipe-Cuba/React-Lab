import './gallery-component.css';

import Profile from '../profile-component/profile-component';

import guts from '../../assets/images/guts.jpg';
import punpun from '../../assets/images/punpun.jpeg';
import kaneki from '../../assets/images/kaneki.jpg';

const GalleryComponent = () => {
  return (
    <section className="container">
      <h1>Amazing Characters</h1>
      <div className="gallery">
        <Profile image={guts} alt="Guts" />
        <Profile image={punpun} alt="Punpun" />
        <Profile image={kaneki} alt="Kaneki" />
      </div>
    </section>
  );
};

export default GalleryComponent;
