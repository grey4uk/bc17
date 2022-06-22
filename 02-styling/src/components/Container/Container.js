import './Container.scss';

const Container = ({ children }) => {
  return (
    <div className='container-wrapper'>{children}</div>
  );
};

export default Container;
