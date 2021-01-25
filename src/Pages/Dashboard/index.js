import React from 'react'
import { Title, Form, Repositories } from './DashElements'
import logo from '../../assets/logo.svg'
import {FiChevronRight} from 'react-icons/fi';

function Dashboard() {
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repos on GitHub</Title>
            <Form action="">
                <input placeholder="Write the name of the repo"/>
                <button type="submit">Search</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/65548563?s=460&u=aeb76087c3f98948fe4228b17831d4d7cefb17ed&v=4" alt="Marlon D Jesus"></img>
                    <div>
                        <strong>send</strong>
                        <p>This a SPA Landing page of `Send`</p>
                    </div>
                <FiChevronRight size={20}/>
                </a>
                
                
            </Repositories>
        </>
    )
}

export default Dashboard;
