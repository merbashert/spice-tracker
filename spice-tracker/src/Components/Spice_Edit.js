import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const SpiceEdit = props => {

    const [name, setName] = useState(props.savedSpice.name)
    const [category, setCategory] = useState(props.savedSpice.category)
    const [date, setDate] = useState(props.savedSpice.date)


    const handleSubmit = (e) => {
        e.preventDefault()
        const spiceinfo = {
            name:name,
            category:category,
            date:date,

        }
        props.handleUpdateSpice(spiceinfo)
        setName('')
        setCategory('')
        setDate('')
        }

        return (
            <div className='spice-edit'>
            <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            </label><br/>
            <label id="category">
            Main Color:
            <select value={category} onChange={e => setCategory(e.target.value)} id="category">
            <option category="basics">basics</option>
            <option category="novelty">novelty</option>
            <option category="spice blends">spice blends</option>
            </select>
            </label><br/>
            <label>
            Date:
            <input type="date" placeholder="Date" id="date" value={date} onChange={e => setDate(e.target.value)}/>
            </label><br/>

            <Button type="submit" onClick={props.handleClose}>Apply Changes</Button>
            <Button onClick={props.handleClose}>Cancel</Button>
            </form>
            </div>
        )

}

export default SpiceEdit
