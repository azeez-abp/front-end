
export const testReducer  = function(/*the state send by dispath*/state={type:"TEST",payload:{name:"Azeez"}},action){

    switch (action.type) {
        case 'TESTING':
            return {...state,payload:state.payload };
        case 'INCREAMENT':
            return {...state,payload:state.payload };

        default:
            return state;
      }



}

