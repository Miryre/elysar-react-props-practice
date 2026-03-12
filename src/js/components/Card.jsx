import Button1 from "./Button1";

const Card = ({name, carMake, image, carYear, carModel}) => {
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
            {carYear}
          </a>
          <Button1 carModel={carModel} />
        </div>
      </div>
    </>
  );
};


export default Card;
