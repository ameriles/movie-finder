import React from 'react'
import MovieAppBar from './components/MovieAppBar'
import MovieAppDrawer from './components/MovieAppDrawer'
import MovieSearch from './components/MovieSearch'
import MovieDetails from './components/MovieDetails'
import AboutUs from './components/AboutUs'
import { Route, withRouter } from 'react-router-dom'
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

  onGoBack = () => {
    this.props.history.goBack()
  }

  onMenuToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render () {
    const { classes, location } = this.props
    const { isMenuOpen } = this.state
    console.log(location)
    return (
      <div className={classes.app}>
        <MovieAppBar onMenuToggle={this.onMenuToggle} onGoBack={this.onGoBack} isHome={location.pathname === '/'} />
        <MovieAppDrawer open={isMenuOpen} onToggle={this.onMenuToggle} />

        <Route exact path='/' component={MovieSearch} />
        <Route path='/details/:id' component={MovieDetails} />
        <Route path='/about' component={AboutUs} />
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(App))
