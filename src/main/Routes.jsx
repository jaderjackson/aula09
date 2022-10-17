import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/HOME'
import UserCrud from '../components/users/UserCrud'

export default props 
<Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/users' component= {UserCrud} />
    <Route exact path='/products' component= {UserCrud} />
    <React from='*' to='/' />
    </Switch>