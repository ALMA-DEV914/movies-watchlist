import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Login from '../pages/login/Login';


const Routes = () => {
    
        return (
            <Switch>
                <Route exact path='/' component={Home} />
               <Route
                path='/:category/search/:keyword'
                component={Catalog}

            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route path='/:login'>
                 <Login/>
            </Route>
            
            </Switch>
    );
}

export default Routes;
