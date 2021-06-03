import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const SpiceForm = props =>  {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [date_purchased, setDate_Purchased] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const spiceinfo = {
            name:name,
            category:category,
            date_purchased:date_purchased
        }
        props.handleCreateSpice(spiceinfo);
        props.handleClose()
        setName('')
        setCategory('')
        setDate_Purchased('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
        Item:
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value.toLowerCase())} required/>
        </label>

        <label>
        Category:
        <select value={category} onChange={e => setCategory(e.target.value)} id="category" className='dropdown' required>
        <option value=""></option>
        <option value="basics">Basics</option>
        <option value="spice_blends">Spice Blends</option>
        <option value="novelty">Novelty</option>
        </select>
        </label>
        <label>
        Date Purchased (if known - YYYY/MM/DD):
        <input type="text" id="date_purchased" value={date_purchased} onChange={e => setDate_Purchased(e.target.value)}/>
        </label>

        <br/>
        <Button type="submit" onClick={props.handleClose}>Put in the Box</Button>
        <Button onClick={props.handleClose}>Cancel</Button>
        </form>
    )
}


export default SpiceForm
