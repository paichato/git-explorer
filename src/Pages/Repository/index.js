import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import { Header } from './RepoElements';
import logo from '../../assets/logo.svg';

function Repository() {
    const {params}= useRouteMatch();

    return (
        <>
           <Header>


           </Header>
        </>
    )
}

export default Repository;