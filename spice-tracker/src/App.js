import React, { useState, useEffect } from 'react'
import Spice from './Components/Spice'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';

import SpiceForm from './Components/Spice_Form'

import './Components/Spices.css';

const App = props => {

    let baseUrl = '';
    if (process.env.NODE_ENV === 'development') {
        baseUrl = 'http://localhost:8888'
    } else {
        baseUrl = 'https://meredithbashert.com/spicetracker-backend'
    }


    const[savedSpices, setSavedSpices] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    const fetchSpices = () => {
        fetch(`${baseUrl}/spices`)
        .then(data => data.json())
        .then(jData => {
            setSavedSpices(jData)
        }).catch(err=>console.log(err))
    }

    const handleCreateSpice = (spiceData) => {
        fetch(`${baseUrl}/spices`, {
            body: JSON.stringify(spiceData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdSpice => {
            return createdSpice.json()
        })
        .then(json => {
            setSavedSpices(json)
        })
        .catch(err=>console.log(err))
    }



    const handleDeleteSpice = (id) => {
        fetch(`${baseUrl}/spices/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            setSavedSpices(savedSpices.filter(savedSpice => savedSpice.id !== id))
        }).catch(err=>console.log(err))
    }

    useEffect(() => {
        fetchSpices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>

        <Modal show={show} onHide={handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
            <Modal.Header closeButton>
                <Modal.Title>Add Spice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='form'>
                    <SpiceForm handleCreateSpice={handleCreateSpice} handleClose={handleClose}/>
                </div>
            </Modal.Body>
        </Modal>




        <Button variant="outline-success" onClick={() => handleShow()} id = 'add-spice'>Add New</Button>
{savedSpices.length > 0 ?
        <Table striped size='sm' id="spice-table">
            <thead>
                <tr>
                    <th>Spice</th>
                    <th>Expiration Date</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {savedSpices.map((savedSpice) => {
                    return (
                        <Spice
                            savedSpice={savedSpice}
                            key={savedSpice.id}
                            fetchSpices={fetchSpices}
                            handleDeleteSpice={handleDeleteSpice}
                            baseUrl={baseUrl}
                            />
                    )
                })}
            </tbody>
        </Table>
    :
    <h3 className='loading'>Loading...</h3>
}
        </>
)
}


export default App
