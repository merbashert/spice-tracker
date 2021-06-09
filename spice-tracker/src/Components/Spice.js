
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const Spice = props => {



    return (
        <tr>
        <td className='spice-name'>{props.savedSpice.name}</td>
        <td className='spice-details'>{props.savedSpice.category}</td>
        <td className = 'spice-box'>{props.savedSpice.date_purchased}</td>
        <td className='spice-buttons'>
            <Button onClick={(e) => {if (window.confirm(`Definitely delete ${props.savedSpice.name}?`)) props.handleDeleteSpice(props.savedSpice.id)}}>Delete</Button></td>
        </tr>

    )
}


export default Spice
