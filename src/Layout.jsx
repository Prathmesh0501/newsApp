import React from 'react'
import Header from './Header'
import News from './Business'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
