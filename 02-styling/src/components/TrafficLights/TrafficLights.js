import s from './TrafficLights.module.css';

const TrafficLights = ({ type }) => {
  const chooseLight = () => {
    switch (type) {
      case 'ready':
        return 'red';
      case 'steady':
        return 'yellow';
      case 'go':
        return 'green';
      default:
        return 'green';
    }
  };
  return (
    <div
      className={s.round}
      style={{ background: chooseLight() }}>
      {type}
    </div>
  );
};

export default TrafficLights;
