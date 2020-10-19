import React from 'react'
import TrademarkTemplate from '../components/Templates/TrademarkTemplate'
import PropTypes from 'prop-types'

const TrademarkPage = ({location}) => <TrademarkTemplate location={location} />

TrademarkPage.propTypes = {
  location: PropTypes.object,
}

export default TrademarkPage
