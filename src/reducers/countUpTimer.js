import { COUNT_UP, RESET_COUNT } from "../actions";

const initialState = {
  count: 0,
}

export default function countUpTimer(state=initialState, action) {
  switch(action.type) {
    case RESET_COUNT:
      return Object.assign({}, state, initialState)
    case COUNT_UP:
      return Object.assign({}, state, {
        count: action.count + 1,
      })
    default:
      return state
  }
}