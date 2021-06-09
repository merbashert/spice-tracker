import React, { useState, useEffect } from 'react'
import Spice from './Components/Spice'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import SpiceForm from './Components/Spice_Form'


const App = props => {

    let baseUrl = '';
    if (process.env.NODE_ENV === 'development') {
        baseUrl = 'http://localhost:8888'
    } else {
        baseUrl = 'https://bingetracker.herokuapp.com'
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
    }, [savedSpices])

    return (
        <>

        <Modal show={show} onHide={handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
            <Modal.Header closeButton>
                <Modal.Title>Add Spice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='add-form'>
                    <SpiceForm handleCreateSpice={handleCreateSpice} handleClose={handleClose}/>
                </div>
            </Modal.Body>
        </Modal>

        <div id='add-box'>
            <button onClick={() => handleShow()} id = 'add-random'>Add New</button><br/>
        </div>

        <Table>
            <thead>
                <tr>
                    <th>Spice</th>
                    <th>Category</th>
                    <th>Date Purchased</th>
                </tr>
            </thead>
            <tbody>
                {savedSpices.map((savedSpice) => {
                    return (
                        <Spice
                            savedSpice={savedSpice}
                            key={savedSpice.id}
                            handleDeleteSpice={handleDeleteSpice}
                            />
                    )
                })}
            </tbody>
        </Table>
        </>
)
}


export default App
