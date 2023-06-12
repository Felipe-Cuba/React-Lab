import { Link } from 'react-router-dom';
import ToolbarComponent from '../../components/toolbar-component/toolbar-component';

export default function Toolbar() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <ToolbarComponent />
      </div>
      <div className="button-right">
        <Link to="/memory-gallery" className="button-link">
          Gallery
        </Link>
      </div>
    </div>
  );
}
