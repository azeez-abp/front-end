
export const loginReducer  = (state={loading:true},action)=>{
     
    switch (action.type) {
        case 'LOGIN'://if case is LOGIN , LOOK for State that has type LOGIN as key and send it data
           return {...state,payload:action.payload,loading:false };
          // return Object.assign({}, state, {payload:action.payload})// 
        case 'DEFAULT':
            return true
        default:
            return state;
      }



}