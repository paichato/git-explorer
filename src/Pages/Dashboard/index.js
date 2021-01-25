import React, {useState, useEffect} from 'react'
import { Title, Form, Repositories, Error } from './DashElements'
import logo from '../../assets/logo.svg'
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';
import {Link} from 'react-router-dom';


function Dashboard() {
    const [newRepo, setNewRepo]=useState('');
    const [inputError,setInputError]=useState('');
    const [repositories, setRepositories]= useState(()=>{
        const storagedRepositories=
        localStorage.getItem('@GithubExplorer:repositories',);

        if(storagedRepositories){
            return JSON.parse(storagedRepositories);
        }else{
            return [];
        }
            
        });
    
        useEffect(() => {
            localStorage.setItem('@GithubExplorer:repositories',
            JSON.stringify(repositories),)
            
        }, [repositories]);

    

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
        setInputError('');
        
        }catch(err){
            setInputError('Error on search for repo')

        }

        

    }

    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repos on GitHub</Title>
            <Form hasError={!!inputError} onSubmit={handleRepository} action="">
                <input value={newRepo} onChange={(e)=>setNewRepo(e.target.value)} placeholder="Write the name of the repo. Ex: facebook/react"/>
                <button type="submit">Search</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
               {repositories.map(repository=>{
                   return(
                    <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} ></img>
                    <div>
                       <strong>{repository.full_name}</strong>
                       <p>{repository.description}</p>
                   </div>
               <FiChevronRight size={20}/>
               </Link>
               )})}
                
                
            </Repositories>
        </>
    )
}

export default Dashboard;
