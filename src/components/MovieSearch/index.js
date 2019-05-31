import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import MovieSearchForm from './MovieSearchForm'
import MovieList from './MovieList'
import { createSimpleMovie } from '../../services/movieCreators'

const styles = theme => ({
  container: {
    minHeight: '100%',
    backgroundColor: theme.palette.background.default
  },
  grow: {
    flexGrow: 1
  },
  progress: {
    margin: '0 auto'
  }
})

class MovieSearch extends React.Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      isSearching: false,
      searchText: ''
    }
  }

  createMovies (data) {
    const movies = data.Search.map(x => createSimpleMovie(x))

    return movies
  }

  onSearch = () => {
    this.setState({
      isSearching: true
    })

    const { searchText } = this.state
    axios.get(`http://www.omdbapi.com/?apikey=83aa7ea6&s=${searchText}`)
      .then(res => {
        if (!res.data.Error) {
          const movies = this.createMovies(res.data)
          this.setState({ movies })
        } else {
          this.setState({
            movies: []
          })
        }
      }).catch(error => {
        console.log(error)
        this.setState({
          movies: []
        })
      }).finally(() => {
        this.setState({
          isSearching: false
        })
      })
  }

  onSearchTextChanged = (e) => {
    this.setState({
      searchText: e.currentTarget.value
    })
  }

  render () {
    const { classes } = this.props
    const { searchText, isSearching, movies } = this.state
    return (
      <Grid container
        justify='flex-start'
        direction='column'
        className={classes.container}>
        <Grid item>
          <MovieSearchForm searchLabel='Busca películas o series'
            searchText={searchText}
            onSearchTextChanged={this.onSearchTextChanged}
            onSearch={this.onSearch}
            isSearching={isSearching} />
        </Grid>
        <Grid item
          className={classes.grow}>
          <MovieList movies={movies} />
        </Grid>
      </Grid>
    )
  }
}

MovieSearch.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(MovieSearch)
