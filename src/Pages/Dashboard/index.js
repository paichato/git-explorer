import React, {useState} from 'react'
import { Title, Form, Repositories } from './DashElements'
import logo from '../../assets/logo.svg'
import {FiChevronRight} from 'react-icons/fi';

function Dashboard() {
    const [newRepo, setNewRepo]=useState('')
    const [repositories, setRepositories]= useState([]);
    const handleRepository=()=>{
        //Add new repo
        console.log(newRepo);   
    }

    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repos on GitHub</Title>
            <Form onSubmit={handleRepository} action="">
                <input value={newRepo} onChange={(e)=>setNewRepo(e.target.value)} placeholder="Write the name of the repo"/>
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
