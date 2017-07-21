import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import Home from './pages/index'
import './styles/index.css'

class App extends React.Component {
  componentWillMount () {
    window.addEventListener('hashchange', () => {
      window.scrollTo(0, 0)
    }, false)
  }
  render () {
    return (
      <Router>
        <div className='container' id='page-main'>
          <p>Hello Word</p>

          <NavLink exact to='/' activeClassName='header-active'>Index Link</NavLink>
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'))
