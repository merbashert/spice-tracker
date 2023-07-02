
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SpiceEdit from './Spice_Edit'
import logo from './logo.png'
import pencil from './pencil.svg'
import trash from './trash.svg'

const Spice = props => {


    const [show, setShow] = useState(false);

    const url = `https://shop.wegmans.com/search?search_term=${props.savedSpice.name}`;


    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }


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

            {props.savedSpice.expiration_date > props.date ?
                <td className = 'spice-date'>{props.savedSpice.expiration_date.slice(0, -3)}</td>
                :
                <td className = 'past-spice-date'>{props.savedSpice.expiration_date.slice(0, -3)}
                </td>}

                <td className='spice-buttons'>


                    <a href = {url}  target="_blank" rel="noreferrer">
                        <Button variant = "outline-success"><img src = {logo} alt='logo'/></Button></a>

                        <Button variant="outline-success" onClick={handleShow}><img src = {pencil} alt='pencil'/></Button>


                        <Button variant="outline-success" onClick={() => {
                                if (window.confirm('Definitely delete?')) props.handleDeleteSpice(props.savedSpice.id)
                            }}><img src = {trash} alt='trash'/></Button>
                        </td>

                    </tr>
                    </>

            )
        }


        export default Spice
