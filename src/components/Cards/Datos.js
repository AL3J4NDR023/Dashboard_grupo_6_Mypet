import React from 'react';
import Product from './Product';
import User from './User';

 
function Datos() {
  return (
    <React.Fragment>
    
      
      
        <ul className="ultimos">
          <li className="list">
          <Product />
          </li>
          <li>
          <User />{" "}
          </li>
        </ul>
      
    </React.Fragment>
  );
}
export default Datos;
