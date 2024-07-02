import { SET_PROFILE_DATA } from "./ProductActionsType";

 export  default ProductReducer = ()=>{

    const intialState ={
    data : null
    }

       
    switch (state = intialState,action) {
        case SET_PROFILE_DATA:
             return {
                  ...state,
                  data: action.payload,
             };
        default:
        return state;
   }





}

// ...state


// ecma script vala srudopretion has================>  