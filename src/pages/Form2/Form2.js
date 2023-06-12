import { Link } from 'react-router-dom';
import Form2Component from '../../components/forms/form2-component/form2-component';

export default function Form2() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <Form2Component />
      </div>
      <div className="button-container">
        <Link to="/form-1" className="button-link">
          Form 1
        </Link>
        <Link to="/form-3" className="button-link">
          Form 3
        </Link>
      </div>
    </div>
  );
}
