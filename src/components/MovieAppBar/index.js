import React from 'react'
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
  render () {
    const { classes, onGoBack, onMenuToggle, isHome } = this.props
    const mainButton = isHome
      ? <IconButton className={classes.menuButton} color='inherit'
        onClick={onMenuToggle}>
        <MenuIcon />
      </IconButton>
      : <IconButton className={classes.menuButton} color='inherit'
        onClick={onGoBack}>
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

export default withStyles(styles)(MovieFinderAppBar)
