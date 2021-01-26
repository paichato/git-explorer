import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import { Header, RepositoryInfo } from './RepoElements';
import logo from '../../assets/logo.svg';
import {FiChevronLeft} from 'react-icons/fi';

function Repository() {
    const {params}= useRouteMatch();

    return (
        <>
           <Header>
                <img src={logo} alt="Github Explorer"/>
                <Link to="/git-explorer">
                <FiChevronLeft size={16}/>
                    Back
                    
                    </Link>
                
           </Header>
            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/65548563?s=460&u=aeb76087c3f98948fe4228b17831d4d7cefb17ed&v=4" alt="paichato" />
                    <div>
                        <strong>paichato/unform</strong>
                        <p>Repo description</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>

                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>

                    <li>
                        <strong>67</strong>
                        <span>Open Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>

        </>
    )
}

export default Repository;