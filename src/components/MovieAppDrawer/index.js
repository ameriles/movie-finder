import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'

const MovieAppDrawer = ({ open, onToggle }) => (
  <Drawer open={open} onClose={onToggle}>
    <div
      tabIndex={0}
      role='button'
      onClick={onToggle}
      onKeyDown={onToggle}>
      <List component='nav'>
        <ListItem button component={Link} to='/'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={Link} to='/about'>
          <ListItemIcon>
            <LiveHelpIcon />
          </ListItemIcon>
          <ListItemText primary='About Us' />
        </ListItem>
      </List>
    </div>
  </Drawer>
)

MovieAppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default MovieAppDrawer
