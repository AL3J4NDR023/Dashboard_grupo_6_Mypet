import React, { useState, useEffect } from "react";
import TopBar from "../TopBar";
import SmallCard from './SmallCard';



/*aca pasamos el fetch*/

const GeneralContent = () => {
	const [productos, setproductos] = useState([{count:2,data:[{name:'sin definir',category:'sin definir ',}]}]);
	const [users, setusers] = useState([{count:2}]);
		
	
	useEffect(() => {   
		fetch("http://localhost:3000/api/products")
		.then(response => response.json())
		.then(data => {
			setproductos(data)
		})
	},[])

	useEffect(() => {   
		fetch("http://localhost:3000/api/users")
		.then(response => response.json())
		.then(user => {
			setusers(user)
		})
	},[])


	
	console.log('aqui va user',users)
	
	
	 
	
	return (
		 <div className="resumen">
			
			<div className="row">
			
			<SmallCard  
			name='Productos'
			count={productos.count}

			/>
			<SmallCard  
			name='Usuarios'
			count={users.count}

			/>
				
			   
	
			</div></div>
		)
	}
	
	
	export default GeneralContent;