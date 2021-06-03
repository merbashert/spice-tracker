import React, { useState } from 'react';

import Home from './Components/Home/Home.js'
import Search from './Components/Search/Search.js'
import Edit from './Components/Edit/Edit.js'




let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    baseUrl = 'https://bingetracker.herokuapp.com'
}


const App = props => {

        const [view, setView] = useState('home');



    return (
        <>


        {view === 'home' ?

            <div>
                <h1>What am I Watching?</h1>
                <Home
                    setView={setView}
                    baseUrl={baseUrl}/>

            </div>
            :
            view === 'search' ?
            <Search
                setView={setView}/>
            :
            view === 'edit' ?
            <Edit
                setView={setView}
                baseUrl={baseUrl}
                />
            :
            null
        }
        </>
);
}

export default App;
