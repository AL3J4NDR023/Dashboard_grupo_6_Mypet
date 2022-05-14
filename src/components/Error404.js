import React from 'react';
import imagenFondo from '../assets/images/wallpaperbetter.jpg';

function Error404(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <div>La pagina que estas buscando no existe</div>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}


export default Error404;