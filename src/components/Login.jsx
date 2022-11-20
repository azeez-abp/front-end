
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { connect} from 'react-redux'
import * as actions from './../action/All_action'
import {UserCircleIcon,LockClosedIcon} from '@heroicons/react/24/outline'

import '../style/login.css'

//import { test } from '../action/Test_action'// you can use this on alone as the second params of the connect method
/*
function Login(props) {
  console.log(props," PROP")
  let { Login_action,__Login__DATA} = props
 const [loginData,setLoginData]   = useState(null)
useEffect(()=>{
    setTimeout(()=>{
        Login_action('adioadeyoriazeez@gmail.com','123456')
        setLoginData(__Login__DATA.payload)
        console.log("efgbgf b")
    },3000)

});

  return (
    <div> 
     status  {
        loginData ?(
            loginData.err?loginData.err:loginData.suc
        ):'loading'
       }

    </div>
  )
}

*/

 class Login extends React.Component {
      constructor(props){
    //   props.Login_action('adioadeyoriazeez@gmail.com','123456')
        super(props)
      }
   state  = {
      login:{
        a:'Noting',
       
    }
    ,
    nav:<div>Heading Loading</div>,
    rememberCheck:false,
    password_show:false
   }

   componentDidMount = ()=>{
   // console.log(JSON.stringify(this.props.__Login__DATA) )
       this.loadHeader()
     function login(){
      this.props.Login_action('adioadeyoriazeez@gmail.com','123456')

      ///1.call this login function or tie to dispatch to props
       //(dispatchToProp return must return object or function) 
       let count  = 0;
       let p_  =  setInterval(()=>{//
        ////server side request must be called insdide set time out
        let response  =  this.props.__Login__DATA.payload?this.props.__Login__DATA.payload.res:null
       //2. The the data of the login is got from stateTo props that return reducers 
        if(response){
          this.setState({...this.state,hasLogin:response.data,status:response.suc})
        }
     
         if(!this.props.__Login__DATA.loading && this.state.hasLogin){
            
          clearInterval(p_)   
         }
      },30)

     }
      
   }
  
    login_  = ()=>{

        this.setState({...this.state,loading:true,suc:false,err:false})
 
        let login =()=>{
          this.props.Login_action(this.state.email,this.state.pass)
    
          ///1.call this login function or tie to dispatch to props
           //(dispatchToProp return must return object or function) 
           let count  = 0;
           let p_  =  setInterval(()=>{//
            ////server side request must be called insdide set time out
            let response  =  this.props.__Login__DATA.payload?this.props.__Login__DATA.payload.res:null
           //2. The the data of the login is got from stateTo props that return reducers 
           console.log(this.props.__Login__DATA.payload)
           if( response && response.err ){
             this.setState({...this.state,err:response.err,loading:false})
           }else{
            if(response.suc.match(/detected/i)){
              this.setState({...this.state,err:response.suc,loading:false})
              return false;
            }
            this.setState({...this.state,err:response.suc,loading:false})
            setInterval(()=>{window.location.href="/dashboard"},3000)
           }

           if(response){
         
            clearInterval(p_)
          }

        
           
         
          
          },2000)
    
         }
    try {
       login();
    } catch (error) {
      console.log(error)
    }
        
    }
  
  loadHeader = async()=>{
    //dynamically load data
   return await  (import('./header/Navbar').then((module)=>this.setState({...this.state,nav:<module.default/>})))
  }  
  
  getInputValue  =(ev)=>{
      this.setState({...this.state,[ev.target.name]:ev.target.value})
     // console.log(ev.target.name,ev.target.value)
  }

  showPassword  = ()=>{
    this.setState({...this.state,password_show:!this.state.password_show})
  }
  render() {
    return (
      <div  style={{position:'relative'}}>

        <div className='login'>
           <div className='left h-screen bg-main-dark-bg' 
           style={{backgroundImage:"url(./images/student.jpg)",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
           >
           
           </div>

           <div className='right flex justify-center items-center h-screen bg-main-dark-bg'>
            <div className='container p-8 w-1/2 h-3/4 rounded-md
             bg-half-transparent' >
                               <div style={{color:"tomato",fontSize:'22px',fontWeight:'700'}}>{this.state.err?this.state.err:(this.state.suc?this.state.suc:'')}</div>
             <div className='header'> 
                
                <h1 className='text-white' style={{    fontSize: '35px',
                 marginBottom: '25px'}}>WELCOME BACK TO ABP</h1>

             </div>

             <div className='body'>
                 
                 <div className="mt-1 flex relative rounded-md shadow-sm">
                    <label htmlFor='Email' className='text-white absolute -top-8 text-lg'>Enter Email</label>
                    <span style={{    background: '#333'}} className="inline-flex bg-opacity-20 items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                    <UserCircleIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <input type="text" name="email"  className="block w-full h-12 flex-1 rounded-none rounded-r-md border-gray-300 text-2xl focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={this.getInputValue} placeholder="Email" style={{fontSize:'1.2em',fontWeight:'600'}} defaultValue={this.state.email||''}/>
                  </div>

                  <div className="mt-12 flex relative rounded-md shadow-sm">
                    <label htmlFor='Password' className='text-white absolute -top-8 text-lg'>Enter Password</label>
                    <span style={{    background: '#333'}} className="inline-flex bg-opacity-20 items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                    <LockClosedIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <input name="pass" type={this.state.password_show?'text':'password'}   className="block w-full h-12 flex-1 rounded-none rounded-r-md border-gray-300 text-2xl focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Password" onChange={this.getInputValue}  defaultValue={this.state.pass||''} style={{fontSize:'1.2em',fontWeight:'600'}} />
                  
                   
                  </div>
                  <div onClick={this.showPassword}className='mt-12 flex relative'>
                     <p  className='text-white cursor-pointer'>{this.state.password_show?'Hide password':'Show password'}</p>
                   </div>
                 
                  
          
          <div className="flex justify-between items-center mb-6 mt-8">
              <div className="form-group form-check" style={{position:"relative"}}>
                <input  type="checkbox" className={`${this.state.rememberCheck&&'checked-in'} form-check-input appearance-none h-4 w-4 border-red-600 border  rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer
                 `} id="exampleCheck2" onClick={()=>{this.setState({...this.state,rememberCheck:!this.state.rememberCheck})}}/>
                <label className="form-check-label text-white inline-block text-gray-800-" htmlFor="exampleCheck2">Remember me</label>
              </div>
              <a href="#!" className="text-gray-800- text-white">Forgot password?</a>
            </div>


            <div  className="flex  justify-between items-center mb-6 mt-8">
            <button disabled={this.state.loading && 'true' }  onClick={this.login_} type="button" className="submit relative inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                Login {this.state.loading?<img  className='spinner' src='./images/loading.gif'/>:'' } 
              </button>
            </div>
             </div>

             <div className='footer'>
             <h3 className='text-white' style={{    fontSize: '20px',
                 marginBottom: '25px',textAlign:'center'}}>GATE WAY TO HIGHER INSTITUTIONS</h3>
             </div>
             </div>

           </div>

        </div>
       
         {/*this.state.navnave bar*/}
        {  
          /* this.state.hasLogin?JSON.stringify( this.state.hasLogin):"Logding..."
        */
        }
        </div>
    )
  }
}


//Dispath \\
           //\\
               ///==>props of the class
          //\\
///state //









let linkStateToProps  = reducderList=>{
    ////the new state that is comming => get them in props of the class
    return{
      ///////this is coming from reducer
         __Login__DATA /*this is prop*/ : reducderList.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      Login_action:(email,password)=>  dispatch ({type:"LOGIN_",payload:{err:"vbhjk"}}),
      increment:   () => dispatch({ type: 'INCREMENT',payload:+1 }),
      decrement:   () => dispatch({ type: 'DECREMENT' }),
      reset:       () => dispatch({ type: 'RESET' }),
    }
  }

  const mapDispatch = {
     ////the new props that is comming=> get them in props of the class
    toggleOn: () => ({ type: 'TOGGLE_IS_ON' })
  }
//[actions_file,test]
export default connect(
/*mapstateto propslinkStateToProps*/
 linkStateToProps , 
 //mapDispatchToProps
//mapDispatch,
actions //in this function, we has dispath so is dispath
)(Login)//this pass the Login_action to Login as props

/*
import React from 'react'
import { useEffect } from 'react'
import { connect} from 'react-redux'
import {Login_action} from './../action/Login_action'

function Login({__Login__,loginfunction}) {
  console.log(__Login__,"Login")

useEffect(()=>{
    loginfunction('adioadeyoriazeez@gmail.com','123456')
//  let b=   loginfunction('adioadeyoriazeez@gmail.com','123456')()
//  console.log(b,"bbbbbbbbbbbbbbb")
    //.then(d=>console.log(d)).catch(e=>{console.log(e)}) 
    //https://rallycoding.herokuapp.com/api/music_albums
},[]);

  return (
    <div>Login</div>
  )
}

//////////////////////////end of component
let linkStateToProps  = state=>{
    console.log(state,"MY STATES")
    return{
         __Login__  : state.loginReducer
    }
}

let linkingDispathcToprops  = dispatch=>{
    ///connect action function to component props 
         console.log(dispatch,'disptch')
    return{
         loginfunction: dispatch(Login_action)
    }
}


export default connect(linkStateToProps, linkingDispathcToprops )(Login)//this pass the Login_action to Login as props

*/