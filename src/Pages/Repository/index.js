import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import { Header } from './RepoElements';
import logo from '../../assets/logo.svg';
import {FiChevronLeft, FiChevronsLeft} from 'react-icons/fi';

function Repository() {
    const {params}= useRouteMatch();

    return (
        <>
           <Header>
                <img src={logo} alt="Github Explorer"/>
                <Link to="/git-explorer">
                <FiChevronLeft size={16}/>
                    Voltar
                    
                    </Link>
                
           </Header>
        </>
    )
}

export default Repository;