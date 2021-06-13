import React, { useState } from 'react'
import Button from 'react-bootstrap/button';


const SpiceForm = props =>  {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const spiceinfo = {
            name:name,
            category:category,
            date:date
        }
        props.handleCreateSpice(spiceinfo);
        props.handleClose()
        setName('')
        setCategory('')
        setDate('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
        Spice:
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required/>
        </label>
        <br/>
        <label>
        Category:
        <select value={category} onChange={e => setCategory(e.target.value)} id="category" className='dropdown' required>
            <option value=""></option>
            <option value="basics">Basics</option>
            <option value="spice blends">Spice Blends</option>
            <option value="novelty">Novelty</option>
        </select>
        </label>
        <br/>
        <label>
        Date Purchased (if known):
        <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)}/>
        </label>
        <br/>
        <button type="submit" onClick={props.handleClose} size="sm">Put in the Cabinet</button>
        <button onClick={props.handleClose} size="sm">Cancel</button>
        </form>
    )
}


export default SpiceForm
