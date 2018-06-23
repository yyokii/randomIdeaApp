import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Button.css'

export default class Button extends Component {
  render() {
    const { running, text, onClick, count } = this.props

    if (running && text==="RESET") {
      return (
        <span className={"btn-disactive"}>
          {text}
        </span>
      )
    }
    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault()
          onClick(count)
        }}
        className={"btn-"+text.toLowerCase()}
      >
        {text}
      </a>
    )
  }
}

// Button.propTypes = {
//   running: PropTypes.bool.isRequired,
//   text: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired,
//   count: PropTypes.number.isRequired
// }
