import React from 'react'
import { withRouter } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class MovieFinderAppBar extends React.Component {
  goBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render () {
    const { classes, onMenuToggle, location } = this.props
    const isHome = location.pathname === '/'

    const mainButton = isHome
      ? <IconButton className={classes.menuButton} color='inherit'
        onClick={onMenuToggle}>
        <MenuIcon />
      </IconButton>
      : <IconButton className={classes.menuButton} color='inherit'
        onClick={this.goBack}>
        <ArrowBackIcon />
      </IconButton>

    return (
      <AppBar position='static'>
        <Toolbar>
          {mainButton}
          <Typography variant='h6' color='inherit' className={classes.grow}>
          Movie Finder
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(withStyles(styles)(MovieFinderAppBar))
