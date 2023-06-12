import { Link } from 'react-router-dom';
import Form1Component from '../../components/forms/form1-component/form1-component';

export default function Form1() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <Form1Component />
      </div>
      <div className="button-container">
        <Link to="/simple-counter" className="button-link">
          Counter
        </Link>
        <Link to="/form-2" className="button-link">
          Form 2
        </Link>
      </div>
    </div>
  );
}
