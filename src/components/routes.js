import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute'


//component


import Mainpage from './mainpage/mainpage';
import NewRecipe from './newrecipe/newRecipe';
import Leave from './legal/leave';
import Mixer from './mixer/mixer'
import Login from './login/login'
import NotFound from './notfound/notfound'





class Routes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                  <Switch>
                    <Route path ="/" exact component={Mainpage} />
                    <Route path ="/newrecipe" exact component={NewRecipe} />
                    <Route path="/leave" component={Leave} />
                    <Route path="/mixer" component={Mixer} />
                    <Route path="/login" exact component={Login} />
                {/* <PrivateRoute isLogged={this.props.auth} path='/newrecipe' exact component={newRecipe}/> */}
                    <Route path='*' component={NotFound} />
                 </Switch>
                 
        );
    }
} 

export default Routes;
