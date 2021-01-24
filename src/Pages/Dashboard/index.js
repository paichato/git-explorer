import React from 'react'
import { Title, Form } from './DashElements'
import logo from '../../assets/logo.svg'

function Dashboard() {
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repos on GitHub</Title>
            <Form action="">
                <input placeholder="Write the name of the repo"/>
                <button type="submit">Search</button>
            </Form>
        </>
    )
}

export default Dashboard;
