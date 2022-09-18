export const test  = ()=> (senderOfActions)=>{
    //perfoerm all thing // if you pass an action here, dont 
    //use mapDispatch to props
    senderOfActions({type:"TESTING",payload:["hope","tommorow"]})
}