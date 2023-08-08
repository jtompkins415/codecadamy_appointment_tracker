import React from "react";
import Tile from '../tile/Tile';

export const TileList = ({objectList}) => {


  return (
    <div>
      {objectList.map((object, idx) => {
        const {name, ...rest} = object;
        return <Tile key={idx} name={name} description={rest} />
      })}
    </div>
  );
};
