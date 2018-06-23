export const START_COUNT = 'START_COUNT'
export const STOP_COUNT = 'STOP_COUNT'
export const RESET_COUNT = 'RESET_COUNT'
export const COUNT_UP = 'COUNT_UP'

export function startCount () {
  return {
    type: START_COUNT,
  }
}

export function stopCount () {
  return {
    type: STOP_COUNT,
  }
}

export function resetCount () {
  return {
    type: RESET_COUNT,
  }
}

export function countUp (count) {
  return {
    type: COUNT_UP,
    count
  }
}
