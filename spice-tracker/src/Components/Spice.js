
import React, { useState } from 'react'


const Spice = props => {



    return (
        <>
        <td className='spice-name'>{props.savedSpice.name}</td>
        <td className='spice-details'>{props.savedSpice.category}</td>
        <td className = 'spice-box'>{props.savedSpice.date_purchased}</td>
        <td className='spice-buttons'></td>

        </>

    )
}


export default Spice
