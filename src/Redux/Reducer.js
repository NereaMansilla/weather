
import { GET_CITY, DELETE_SEARCH, LOADING, CLEAR_DETAIL, DARK_MODE, ERROR } from './Actions'

const initialState = {
  city: [],
  hours: {},
  backUp: [],
  loading: false,
  error: false,
  dark:true

}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    case GET_CITY:
      return {

        ...state,
        city: state.city.concat(action.payload),
        hours: { ...action.payload },
        backUp: state.backUp.concat(action.payload),

      }

 


    case DELETE_SEARCH:
      const a = state.backUp.filter(c => c.location.tz_id !== action.payload)
      return {
        ...state,
        city: [...a],
        backUp: [...a]



      }
    case CLEAR_DETAIL:
      return {
        ...state,
        city: [],
        backUp: [],
        hours:{},
        error:false
      }
      case DARK_MODE:
        return{
          ...state,
          dark:action.payload
        }
        case ERROR:
          return{
            ...state,
            error:true
          }
    default:
      return {
        ...state
      }
  }
}



export default rootReducer