import request from '../request';
export const  Login_action  =(email,password)=> /*arrow funtion that return arrow function*/async dispatch=> {
    let postLogin  =  await request().getData({
        url : 'https://abp.com.ng/student/set-login',
        appends:[email,password,JSON.stringify(['abp']),'abp' ],
        keys: ['email','pass','post1','token_login']
       })
  
       //if(postLogin.res){
       await   dispatch({type:'LOGIN',payload:postLogin})
       //}
      //since this has been dispatch here, no need for 
       ///mapDispatchToProps,dont use dispath here
   // let request  =   await axios({ method: 'get', url: 'https://api.exchangerate.host/latest',responseType: 'stream'
    //  });
   // with sync awaait no need for then catch 
   

}


