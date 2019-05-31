import React from 'react'
import MovieAppBar from './components/MovieAppBar'
import MovieAppDrawer from './components/MovieAppDrawer'
import MovieSearch from './components/MovieSearch'
import MovieDetails from './components/MovieDetails'
import AboutUs from './components/AboutUs'
import { HashRouter, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

const styles = {
  app: {
    height: '100vh'
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isMenuOpen: false
    }
  }

  onMenuToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render () {
    const { classes } = this.props
    const { isMenuOpen } = this.state
    return (
      <div className={classes.app}>
        <HashRouter>
          <MovieAppBar onMenuToggle={this.onMenuToggle} />
          <MovieAppDrawer open={isMenuOpen} onToggle={this.onMenuToggle} />

          <Route exact path='/' component={MovieSearch} />
          <Route path='/details/:id' component={MovieDetails} />
          <Route path='/about' component={AboutUs} />
        </HashRouter>
      </div>
    )
  }
}

export default withStyles(styles)(App)
