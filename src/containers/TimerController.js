import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  startCount,
  stopCount,
  resetCount,
  countUp,
} from '../actions'
import Button from '../components/Button'

class TimerController extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.runTimer = this.runTimer.bind(this)
  }

  handleClick = count => {
    const { running, dispatch } = this.props
    if( running ) {
      dispatch(stopCount())
    } else {
      dispatch(startCount())
      this.runTimer()
    }
  }

  handleReset = () => {
    this.props.dispatch(resetCount())
  }

  runTimer = (interval = 1000) => {
    let self = this
    let timer = () => {
      setTimeout(() => {
        if (self.props.running) {
          self.props.dispatch(countUp(self.props.count))
          timer()
        }
      }, interval)
    }
    timer()
  }

  render() {
    const { running, count } = this.props
    return (
      <div>
        <Button
          running={running}
          text={running ? 'STOP': 'START'}
          onClick={this.handleClick}
          count={count}
        />
        <Button
          running={running}
          text={'RESET'}
          onClick={this.handleReset}
          count={count}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { controlTimer, countUpTimer } = state
  const running = controlTimer.running
  const count = countUpTimer.count
  return {
    running,
    count
  }
}

export default connect(mapStateToProps)(TimerController)