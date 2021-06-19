
import React from 'react'
import Button from 'react-bootstrap/button';


const Spice = props => {



    return (
        <tr>
        <td className='spice-name'>{props.savedSpice.name}</td>
        <td className='spice-category'>{props.savedSpice.category}</td>
        <td className = 'spice-date'>{props.savedSpice.date_purchased}</td>
        <td className='spice-buttons'>
            <Button variant="outline-success" onClick={(e) => {if (window.confirm(`Definitely delete ${props.savedSpice.name}?`)) props.handleDeleteSpice(props.savedSpice.id)}}>Delete</Button></td>
        </tr>

    )
}


export default Spice
