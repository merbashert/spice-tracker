import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const SpiceEdit = props => {

    const [name, setName] = useState(props.savedSpice.name)
    const [expiration_date, setExpiration_Date] = useState(props.savedSpice.expiration_date)


    const handleSubmit = (e) => {
        e.preventDefault()
        const spiceinfo = {
            name:name,
            expiration_date:expiration_date

        }
        props.handleUpdateSpice(spiceinfo)
        setName('')
        setExpiration_Date('')
        }

        return (
            <div className='spice-edit'>
            <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            </label><br/>
            <label>
            Date:
            <input type="date" placeholder="Date" id="date" value={expiration_date} onChange={e => setExpiration_Date(e.target.value)}/>
            </label><br/>

            <Button type="submit" onClick={props.handleClose}>Apply Changes</Button>
            <Button onClick={props.handleClose}>Cancel</Button>
            </form>
            </div>
        )

}

export default SpiceEdit
