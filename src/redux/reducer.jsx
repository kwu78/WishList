import {
  ADD_ITEM,
  DELETE_ITEM,
  RESET_ITEM
} from './actions';

const INITIAL_STATE = [];

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items:[...state.items,action.payload] ,
      };
    case DELETE_ITEM:
      
      return {
     items:state.items.filter((item,index)=>{ 
      return index !=action.payload;}),
      };
      // added a reset action
      case RESET_ITEM:
        return{
          items:INITIAL_STATE
        };
    default:
      return {
        items: state
      };
  }
};

export default reducer;