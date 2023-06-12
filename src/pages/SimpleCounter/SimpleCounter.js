import { Link } from 'react-router-dom';
import SimpleCounterComponent from '../../components/simple-counter-component/simple-counter-component';

export default function SimpleCounter() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <SimpleCounterComponent />
      </div>
      <div className="button-container">
        <Link to="/memory-gallery" className="button-link">
          Memory Gallery
        </Link>
        <Link to="/form-1" className="button-link">
          Form 1
        </Link>
      </div>
    </div>
  );
}
