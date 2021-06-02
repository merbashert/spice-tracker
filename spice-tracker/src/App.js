import React, { useState, useEffect } from 'react'

const App = props => {

    let baseUrl = '';
    if (process.env.NODE_ENV === 'development') {
        baseUrl = 'http://localhost:8888'
    } else {
        baseUrl = 'https://bingetracker.herokuapp.com'
    }

    const[savedSpices, setSavedSpices] = useState([])


    const fetchSpices = () => {
        fetch(`${baseUrl}/spices`)
        .then(data => data.json())
        .then(jData => {
            setSavedSpices(jData)
        }).catch(err=>console.log(err))
    }

    useEffect(() => {
        fetchSpices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savedSpices])

    return (
        <div>

            {savedSpices.map((savedSpice, index) => {
                return (
                    <div>
            

                    {savedSpice.name}{savedSpice.category}

                </div>
            )
        })}
    </div>
)
}


export default App
