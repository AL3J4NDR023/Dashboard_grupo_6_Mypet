import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>
                        {props.description}
                    </td>
                    
                   
                    <td>{props.category}</td>
                    
                    
                    
                </tr>
            )
    }
    
        

export default ChartRow;