
import React, { useState, useEffect } from "react";
import ChartRow from './ChartRow';




function Chart() {
    const [tableRowsData, setptableRowsData] = useState([]);
    const [page, setPage] = useState(0);
	const [produc,setProduc] =useState([{count:2,data:[{id:'sin definir',name:'sin definir',category:'sin definir ',description:'sin definir'}]}])
    

    useEffect(() => {
        const obtenerProductos=() =>{
        fetch(`http://localhost:3000/api/products`)
		.then(response => response.json())
		.then(data => 	setProduc(data))
        }
        obtenerProductos();
        },[])

	useEffect(() => {
        
        fetch(`http://localhost:3001/api/products/page/${page}`)
		.then(response => response.json())
		.then(data => {
			setptableRowsData(data.products)
		})
	},[page])
    
    

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        setPage(page + 1);
    }
    return (
        /* <!-- DataTales Example --> */<>
        <>
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                      

                        </tbody>
                    </table>

                   
                </div>
            </div>
        </div>
        </>
        </>
    )
    
}

export default Chart;