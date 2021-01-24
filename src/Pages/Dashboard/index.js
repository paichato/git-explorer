import React from 'react'
import { Title } from './DashElements'
import logo from '../../assets/logo.svg'

function Dashboard() {
    return (
        <>
            <img src={logo}/>
            <Title>Explore repos on GitHub</Title>
        </>
    )
}

export default Dashboard;
