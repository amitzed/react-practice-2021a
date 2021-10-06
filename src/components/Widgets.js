import React from "react";

import Widget from "./Widget";

const Widgets = ({prods}) => {
  return (
    <div>

      {prods.map(prod => (
        <Widget
          name={prod.name}
          price={prod.price}
        />
      ))}

    </div>
  )
}


export default Widgets;