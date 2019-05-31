import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Grid, CardHeader, Avatar, CardMedia, CardActions, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { typeIconsMap } from '../../services/movieCreators'
const styles = theme => ({
  movieItem: {
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  media: {
    height: 0,
    paddingTop: 300
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  actions: {
    display: 'flex'
  },
  viewMoreButton: {
    marginLeft: 'auto'
  }
})

const MovieItem = ({ id, title, year, imageUrl, type, classes }) => {
  const avatarIcon = typeIconsMap.get(type)
  return (
    <Grid item className={classes.movieItem}>
      <Card>
        <CardHeader avatar={<Avatar className={classes.avatar}>{avatarIcon}</Avatar>}
          title={title}
          subheader={year} />
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={title}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <Button size='small' color='primary' component={Link} className={classes.viewMoreButton}
            to={`/details/${id}`}>
            Ver Más
            <ChevronRightIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(MovieItem)
