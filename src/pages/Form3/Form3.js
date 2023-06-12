import { Link } from 'react-router-dom';
import Form3Component from '../../components/forms/form3-component/form3-component';

export default function Form3() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <Form3Component />
      </div>
      <div className="button-container">
        <Link to="/form-2" className="button-link">
          Form 2
        </Link>
        <Link to="/moving-dot" className="button-link">
          Moving Dot
        </Link>
      </div>
    </div>
  );
}
