import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'

export default function Dashboard() {
    let history =useHistory()
    let location = useLocation()
    console.log(location.state.data.firstName)

const onGoBack=()=>
{
 history.goBack()
}

    return (
        <div>
            <h1>Dashboard of {location.state.data.firstName}</h1>
            <button onClick={onGoBack} >go back</button>
           
        </div>
    )
}
