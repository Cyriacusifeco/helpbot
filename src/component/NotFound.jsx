import NotFoundImg from './../assets/404.svg';

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        src={`${NotFoundImg}`}
        alt=""
        style={{ height: '80vh', padding: '2rem 0 0 0' }}
      />
    </div>
  );
};

export default NotFound;
