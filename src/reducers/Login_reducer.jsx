
export const loginReducer  = (state={loading:false},action)=>{

    switch (action.type) {
        case 'LOGIN'://if case is LOGIN , LOOK for State that has type LOGIN as key and send it data
           return {...state,payload:state.payload };
      
        default:
            return state;
      }



}