import React from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import { Grid } from '@material-ui/core'

const MovieList = ({ movies }) => (
  <Grid container
    direction='column'
    justify='flex-start'>
    {movies.map(x => <MovieItem key={x.id} id={x.id} title={x.title} year={x.year} imageUrl={x.imageUrl} type={x.type} />)}
  </Grid>
)

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieList
