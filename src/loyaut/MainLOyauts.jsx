import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Foter from '../components/Foter'

function MainLOyauts() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Foter/>
        </>
    )
}

export default MainLOyauts