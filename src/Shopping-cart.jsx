import React from 'react';
import Home from './Home'
import Cart from './Cart'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from 'react-router-dom';

export default function Shopping(){
    return(
        <Router>
             <Link to = '/Home' >HOME</Link>   <br/> <br/>
            <Link to = '/Cart'>CART</Link>  
            <Switch>
                <Route exact path = '/Home'>
                    <Home/>
                </Route>
                <Route exact path = '/Cart'>
                    <Cart/>
                </Route>
            </Switch>
        </Router>
    );
}