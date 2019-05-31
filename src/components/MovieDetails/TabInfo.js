import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DateRangeIcon from '@material-ui/icons/DateRange'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import MovieFilterIcon from '@material-ui/icons/MovieFilter'
import MovieIcon from '@material-ui/icons/Movie'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class TabInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      castOpen: false
    }
  }

  onExpandCast = () => {
    this.setState({
      castOpen: !this.state.castOpen
    })
  }

  render () {
    const { classes, movie } = this.props
    const { castOpen } = this.state
    return (
      <List dense={false}>
        <ListItem>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary={movie.released} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PlayArrowIcon />
          </ListItemIcon>
          <ListItemText primary={movie.runtime} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MovieFilterIcon />
          </ListItemIcon>
          <ListItemText primary={movie.genre} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary={movie.director} />
        </ListItem>
        <ListItem button onClick={this.onExpandCast}>
          <ListItemIcon>
            <RecentActorsIcon />
          </ListItemIcon>
          <ListItemText inset primary='Cast' />
          {castOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={castOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {movie.cast.map(actor => (
              <ListItem key={actor} className={classes.nested}>
                <ListItemText inset primary={actor} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    )
  }
}

export default withStyles(styles)(TabInfo)
