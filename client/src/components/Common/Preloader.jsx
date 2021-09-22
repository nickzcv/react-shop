import './Preloader.scss';

const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <div id="cube">
          <div className="front"></div>
          <div className="back"></div>
          <div className="right"></div>
          <div className="left"></div>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div id="shadow"></div>
      </div>
    </>
  );
};

export default Preloader;
