const Card = ({ img, name }) => {
  return (
    <div className="card-container">
      <div className="imagecontainer">
        <img src={img} alt={name} width="300" height="200" className="img" />
      </div>
      <div className="foodname">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Card;
