import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
             <Link to="/requests">Requests</Link>
             <Link to="/tasks">Tasks</Link>
             <Link to="/leaves">Leaves</Link>

        </div>
    )
}
