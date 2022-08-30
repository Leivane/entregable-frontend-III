import React, { useState } from "react";



const Item = ({ aumentarUno, nombre, descripcion, itemStock }) => {
  const [stock, setStock] = useState(itemStock);

  const comprar = () => {
      setStock(stock - 1);
      aumentarUno();
  }


  return (
    <div className='producto'>
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
          <h5>Cantidad en stock: <span>{stock < 1 ? "Agotado" : stock}</span></h5>
          <button disabled={stock < 1} onClick={() => { comprar(); }}>
              {stock <= 0 ? "Sin Stock" : "Comprar"}
          </button>
          
    </div>
  
  )
}
export default Item;