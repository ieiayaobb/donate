
import React from 'react'

// First we import some components...
import { Router, Route, Link } from 'react-router'

import {render} from 'react-dom'

import Main from './components/main.js'
import Login from './components/login.js'

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={Login}>
    </Route>
  </Router>
), document.getElementById("app"))
