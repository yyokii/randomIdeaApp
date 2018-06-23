import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import "./Time.css"

class Time extends Component {
  render() {
    const { hours, minutes, seconds } = this.props

    return (
      <div className="time">
        <span>{( '00' + hours.toString() ).slice( -2 )}:</span>
        <span>{( '00' + minutes.toString() ).slice( -2 )}:</span>
        <span>{( '00' + seconds.toString() ).slice( -2 )}</span>
      </div>
    )
  }
}

// Time.propTypes = {
//   hours: PropTypes.number.isRequired,
//   minutes: PropTypes.number.isRequired,
//   seconds: PropTypes.number.isRequired
// }

function mapStateToProps(state) {
  const { countUpTimer } = state
  const count = countUpTimer.count
  const sph = 60 * 60
  const spm = 60
  let hours = Math.floor(count / sph)
  let minutes = Math.floor((count - hours * sph) / spm)
  let seconds = count % spm
  return {
    hours,
    minutes,
    seconds
  }
}

export default connect(mapStateToProps)(Time)