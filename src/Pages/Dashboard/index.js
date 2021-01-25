import React, {useState} from 'react'
import { Title, Form, Repositories, Error } from './DashElements'
import logo from '../../assets/logo.svg'
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';

function Dashboard() {
    const [newRepo, setNewRepo]=useState('');
    const [inputError,setInputError]=useState('');
    const [repositories, setRepositories]= useState([]);
    async function  handleRepository(event){
        //Add new repo
        console.log(newRepo);  
        event.preventDefault(); 

        if(!newRepo){
            setInputError('Type the author/name of the repo');
            return;
        }
        try{
            const response= await api.get(`repos/${newRepo}`);
        console.log(response.data);
        const repository=response.data;
        setRepositories([...repositories, repository]);
        setNewRepo('');
        
        }catch(err){
            setInputError('Error on search for repo')

        }

        

    }

    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repos on GitHub</Title>
            <Form onSubmit={handleRepository} action="">
                <input value={newRepo} onChange={(e)=>setNewRepo(e.target.value)} placeholder="Write the name of the repo. Ex: facebook/react"/>
                <button type="submit">Search</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
               {repositories.map(repository=>{
                   return(
                    <a key={repository.full_name} href="teste">
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} ></img>
                    <div>
                       <strong>{repository.full_name}</strong>
                       <p>{repository.description}</p>
                   </div>
               <FiChevronRight size={20}/>
               </a>
               )})}
                
                
            </Repositories>
        </>
    )
}

export default Dashboard;
