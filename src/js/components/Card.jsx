const Card = ({name, carMake, image}) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="a random image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {carMake}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};


export default Card;
