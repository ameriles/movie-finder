import React from 'react'
import MovieIcon from '@material-ui/icons/Movie'
import TvIcon from '@material-ui/icons/Tv'

const NO_PHOTO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'

export const typeIconsMap = new Map([
  ['movie', <MovieIcon />],
  ['series', <TvIcon />]
])

export const createSimpleMovie = (x) => {
  return {
    id: x.imdbID,
    title: x.Title,
    year: x.Year,
    type: x.Type,
    imageUrl: x.Poster !== 'N/A' ? x.Poster : NO_PHOTO_URL
  }
}

export const createFullMovie = (x) => {
  return {
    title: x.Title,
    year: x.Year,
    type: x.Type,
    imageUrl: x.Poster !== 'N/A' ? x.Poster : NO_PHOTO_URL,
    released: x.Released,
    runtime: x.Runtime,
    genre: x.Genre,
    director: x.Director,
    cast: x.Actors ? x.Actors.split(',') : '',
    plot: x.Plot,
    ratings: x.Ratings ? x.Ratings.map(r => ({ source: r.Source, value: r.Value })) : [],
    awards: x.Awards,
    boxOffice: x.BoxOffice
  }
}
