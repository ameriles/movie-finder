import React from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField, IconButton, CircularProgress } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  searchField: {
    margin: theme.spacing.unit
  },
  searchButton: {
    margin: theme.spacing.unit
  },
  progress: {
    margin: theme.spacing.unit
  }
})

class MovieSearchForm extends React.Component {
  onHandleSubmit = (event) => {
    event.preventDefault()
    this.props.onSearch()
  }

  render () {
    const { searchLabel, searchText, onSearchTextChanged, isSearching, classes } = this.props
    return (
      <form autoComplete='off' noValidate onSubmit={this.onHandleSubmit}>
        <Grid container
          direction='row'
          alignItems='center'>
          <Grid item
            className={classes.grow}>
            <TextField label={searchLabel}
              variant='outlined'
              margin='dense'
              className={classes.searchField}
              fullWidth
              onChange={onSearchTextChanged}
              value={searchText} />
          </Grid>
          <Grid item>
            {
              isSearching
                ? <CircularProgress className={classes.progress} />
                : (
                  <IconButton className={classes.searchButton}>
                    <SearchIcon />
                  </IconButton>
                )
            }
          </Grid>
        </Grid>
      </form>
    )
  }
}

MovieSearchForm.propTypes = {
  searchLabel: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChanged: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(MovieSearchForm)
