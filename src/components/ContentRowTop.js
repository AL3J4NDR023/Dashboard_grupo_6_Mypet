import React from 'react';

import GeneralContent from './Data/GeneralContent';
import Categorias from './Cards/categorias';
import Product from './Cards/Product';

import Chart from './Tablas/Chart';





function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div>
				
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies//GeneralContent-->*/}
					<GeneralContent />
	
					{/*<!-- Content Row Last Product in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<Product />
						{/*<!-- End content row last product in Data Base -->*/}

						{/*<!-- Categorias -->*/}
						<Categorias />
						
					</div>
					<Chart />
				</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;