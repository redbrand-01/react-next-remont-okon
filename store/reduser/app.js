import { ADD_WIDTH } from '../../constant/store'

const initState = {
  width: 0,
}

export const app  = ( state = initState , action ) => {
  switch (action.type) {
    case ADD_WIDTH : {
      return {
        width: action.width
      }
    }
    default:
      return state
  }
}
