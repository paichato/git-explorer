import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/index.js';
import Repository from '../Pages/Repository'


function Routes(){
    return(
        <Switch>
            <Route path="/git-explorer" exact component={Dashboard}></Route>
            <Route path="/git-explorer/repository/:repository+" component={Repository}></Route>
        </Switch>
    )
}
export default Routes;

