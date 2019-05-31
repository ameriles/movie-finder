import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import NotificationsIcon from '@material-ui/icons/Notifications'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class TabScore extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ratingOpen: true
    }
  }

  onExpandRating = () => {
    this.setState({
      ratingOpen: !this.state.ratingOpen
    })
  }

  render () {
    const { movie, classes } = this.props
    const { ratingOpen } = this.state
    return (<List dense={false}>
      <ListItem button onClick={this.onExpandRating}>
        <ListItemIcon>
          <StarBorderIcon />
        </ListItemIcon>
        <ListItemText inset primary='Ratings' />
        {ratingOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={ratingOpen} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {movie.ratings.map(rating => (
            <ListItem className={classes.nested}>
              <ListItemText inset primary={`${rating.source}: ${rating.value}`} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary={movie.boxOffice} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary={movie.awards} />
      </ListItem>
    </List>
    )
  }
}
export default withStyles(styles)(TabScore)
