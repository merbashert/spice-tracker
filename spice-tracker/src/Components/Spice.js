
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SpiceEdit from './Spice_Edit'

const Spice = props => {


    const [show, setShow] = useState(false);

    const today = new Date(),
   date = today.getFullYear() + '-' + (today.getMonth < 10 ? (today.getMonth() + 1):'0'+today.getMonth()) + '-' + today.getDate();


    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
        console.log(date);
    }

    const shortened_expiration_date = props.savedSpice.expiration_date.slice(0, -3);

    const handleUpdateSpice = (updateData) => {
        fetch(`${props.baseUrl}/spices/${props.savedSpice.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedSpice => {
            props.fetchSpices()
        }).catch(err=>console.log(err))
    }

    return (
        <>
        <Modal show={show} onHide={handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Spice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SpiceEdit savedSpice={props.savedSpice} handleUpdateSpice={handleUpdateSpice} handleClose={handleClose}/>
            </Modal.Body>
        </Modal>

        <tr>
            <td className='spice-name'>{props.savedSpice.name}</td>

            {props.savedSpice.expiration_date > date ?
                <td className = 'spice-date'>{shortened_expiration_date}</td> : <td className = 'past-spice-date'>{shortened_expiration_date}</td>}

            <td className='spice-buttons'>
                <Button variant="outline-success" onClick={handleShow}>Edit</Button>
                <Button variant="outline-success" onClick={(e) => {if (window.confirm(`Definitely delete ${props.savedSpice.name}?`)) props.handleDeleteSpice(props.savedSpice.id)}}>Delete</Button></td>
            </tr>
            </>

    )
}


export default Spice
