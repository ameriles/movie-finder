import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  about: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit
  }
})

const AboutUs = ({ classes }) => (
  <Paper className={classes.about}>
    <Typography variant='h5'>
      Movie Finder 2019
    </Typography>
    <Typography>
      Powered by The OMDB Api
    </Typography>
  </Paper>
)

export default withStyles(styles)(AboutUs)
