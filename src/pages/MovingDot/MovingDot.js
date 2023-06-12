import { Link } from 'react-router-dom';
import MovingDotComponent from '../../components/moving-dot-component/moving-dot-component';

export default function MovingDot() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <MovingDotComponent />
      </div>
      <div className="button-container">
        <Link to="/form-3" className="button-link">
          Form 3
        </Link>
      </div>
    </div>
  );
}
