import React from 'react'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardMedia, Typography, Avatar, CircularProgress, Paper, Tabs, Tab } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { createFullMovie, typeIconsMap } from '../../services/movieCreators'
import TabInfo from './TabInfo'
import TabPlot from './TabPlot'
import TabScore from './TabScore'

const styles = theme => ({
  details: {
    margin: theme.spacing.unit
  },
  media: {
    height: 0,
    paddingTop: 640
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  tabContent: {
    padding: theme.spacing.unit,
    minHeight: 300
  }
})

class MovieDetails extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: false,
      movie: null,
      selectedTab: 0
    }
  }

  componentDidMount () {
    const { match: { params: { id } } } = this.props
    this.setState({
      isLoading: true
    })

    axios.get(`http://www.omdbapi.com/?apikey=83aa7ea6&i=${id}`)
      .then(res => {
        const movie = createFullMovie(res.data)
        console.log(movie)
        this.setState({ movie })
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  onTabChange = (event, value) => {
    this.setState({
      selectedTab: value
    })
  }

  render () {
    const { classes } = this.props
    const { movie, selectedTab } = this.state
    return (
      movie !== null
        ? <div>
          <Card className={classes.details} square>
            <CardHeader
              avatar={<Avatar className={classes.avatar}>{typeIconsMap.get(movie.type)}</Avatar>}
              title={movie.title}
              subheader={movie.year}
            />
            <CardMedia
              className={classes.media}
              image={movie.imageUrl}
              title='Poster'
            />
            <CardContent>
              <Typography component='p'>
                {movie.plot}
              </Typography>
            </CardContent>
          </Card>
          <Paper square>
            <Tabs value={selectedTab} onChange={this.onTabChange}
              indicatorColor='primary' textColor='primary'
              variant='fullWidth'>
              <Tab label='Info' />
              <Tab label='Plot' />
              <Tab label='Score' />
            </Tabs>
          </Paper>
          <Paper square className={classes.tabContent}>
            {selectedTab === 0 && <TabInfo movie={movie} />}
            {selectedTab === 1 && <TabPlot plot={movie.plot} />}
            {selectedTab === 2 && <TabScore movie={movie} />}
          </Paper>
        </div>
        : <CircularProgress />
    )
  }
}

export default withStyles(styles)(withRouter(MovieDetails))
