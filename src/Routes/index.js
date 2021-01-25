import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/index.js';
import Repository from '../Pages/Repository'


function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/repository/:repository+" component={Repository}></Route>
        </Switch>
    )
}
export default Routes;

