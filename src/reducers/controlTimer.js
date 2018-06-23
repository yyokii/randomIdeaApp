import { START_COUNT, STOP_COUNT, RESET_COUNT } from "../actions";

const initialState = {
  running: false,
}

export default function controlTimer( state = initialState, action ) {
  switch( action.type ) {
    case START_COUNT:
      return Object.assign({}, state, {
        running: true,
      })
    case STOP_COUNT:
      return Object.assign({}, state, {
        running: false,
      })
    case RESET_COUNT:
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}
