import IconComponent from '../icon-component/IconComponent'; 
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <IconComponent name="spinner" size={64} color="#F0650F" /> 
    </div>
  );
};

export default Spinner;
