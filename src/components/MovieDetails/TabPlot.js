import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const TabPlot = ({ plot }) => (
  <Typography variant='body1'>
    {plot}
  </Typography>
)

TabPlot.propTypes = {
  plot: PropTypes.string.isRequired
}

export default TabPlot
