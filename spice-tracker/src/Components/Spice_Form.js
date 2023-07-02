import React, { useState } from 'react'
import Button from 'react-bootstrap/button';


const SpiceForm = props =>  {

    const [name, setName] = useState('')
    const [date, setDate] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        const spiceinfo = {
            name:name,
            date:date
        }
        props.handleCreateSpice(spiceinfo);
        props.handleClose()
        setName('')
        setDate('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
        Spice:
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value.toLowerCase())} required/>
        </label>
        <br/>
        <label>
        Expiration Date:
        <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required/>
        </label>
        <br/>
        <Button variant="outline-success" type="submit" onClick={props.handleClose} size="sm" className="modal-button">Put in the Cabinet</Button>
        <Button variant="outline-success" onClick={props.handleClose} size="sm">Cancel</Button>
        </form>
    )
}


export default SpiceForm
