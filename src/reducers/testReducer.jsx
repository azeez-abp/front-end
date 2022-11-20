
export const testReducer  = function(/*the state send by dispath*/state={type:"TEST",payload:{name:"Azeez"}},action){

    switch (action.type) {
        case 'TESTING':
            return {...state,payload:action.payload };
        case 'TOGGLE_IS_ON':
            return {...state,payload:action.payload };
        case 'TOGGLE_IS_ON':
            return {...state,payload:action.payload ||[] };

        default:
            return state;
      }



}

