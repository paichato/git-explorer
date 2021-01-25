import React from 'react';
import {useRouteMatch} from 'react-router-dom';

function Repository() {
    const {params}= useRouteMatch();

    return (
        <>
            <h1>Repository:{params.repository}</h1>
        </>
    )
}

export default Repository;