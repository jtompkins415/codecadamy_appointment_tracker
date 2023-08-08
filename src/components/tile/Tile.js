import React from "react";

const Tile = ({name, description}) => {

  const values = Object.values(description)
  

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {values.map((value, idx) =>(
        <p key={idx} className="tile">{value}</p>
      ))}
    </div>
  );
};

export default Tile;