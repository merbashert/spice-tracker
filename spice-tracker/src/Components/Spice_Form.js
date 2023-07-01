import React, { useState } from 'react'
import Button from 'react-bootstrap/button';


const SpiceForm = props =>  {

    const [name, setName] = useState('')
    const [date, setDate] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()



    const handleSubmit = (e) => {
        e.preventDefault()
        const spiceinfo = {
            name:name,
            date: year + '-' + month  
        }
        console.log(spiceinfo);
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
            <br/>
            <label>
                Month:
                <select value={month} onChange={e => setMonth(e.target.value)} id="date" className='dropdown' required>
                    <option value=""></option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </label>
            <label>
                Year:
                <select value={year} onChange={e => setYear(e.target.value)} id="date" className='dropdown' required>
                    <option value=""></option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </label>
            <br/>
            <Button variant="outline-success" type="submit" onClick={props.handleClose} size="sm" className="modal-button">Put in the Cabinet</Button>
            <Button variant="outline-success" onClick={props.handleClose} size="sm">Cancel</Button>
        </form>
    )
}


export default SpiceForm
