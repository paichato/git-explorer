import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import { Header, Issues, RepositoryInfo } from './RepoElements';
import logo from '../../assets/logo.svg';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';

function Repository() {
    const {params}= useRouteMatch();
    const [repository, setRepository]=useState(null);
    const [issues, setIssues]=useState([])

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response=>{
            console.log(response.data);
            setRepository(response.data);
        })
        api.get(`repos/${params.repository}/issues`).then(response=>{
            console.log(response.data);
            setIssues(response.data);
        })
    }, [params.repository])

    return (
        <>
           <Header>
                <img src={logo} alt="Github Explorer"/>
                {/* <Link to="/git-explorer"> */}
                <Link to="/git-explorer/">
                <FiChevronLeft size={16}/>
                    Back
                    
                    </Link>
                
           </Header>
            {repository && (
                <RepositoryInfo>
                <header>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>

                    <li>
                        <strong>{repository.forks_count}</strong>
                        <span>Forks</span>
                    </li>

                    <li>
                        <strong>{repository.open_issues_count}</strong>
                        <span>Open Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>
            )}
            <Issues>
                {issues.map(issue=>(
                <a key={issue.id} href={issue.html_url} target="#blank" >
                    
                    <div>
                       <strong>{issue.title}</strong>
                       <p>{issue.user.login}</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                ))}
            </Issues>

        </>
    )
}

export default Repository;