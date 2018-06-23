import { combineReducers } from "redux"
import countUpTimer from "./countUpTimer"
import controlTimer from "./controlTimer"

const timerReducer = combineReducers({
  countUpTimer,
  controlTimer,
})

export default timerReducer