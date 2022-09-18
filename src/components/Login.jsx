
import React from 'react'
import { useEffect } from 'react'
import { connect} from 'react-redux'
import * as actions from './../action/All_action'
//import { test } from '../action/Test_action'// you can use this on alone as the second params of the connect method

function Login(props) {
  console.log(props," PROP")
  let { Login_action} = props
useEffect(()=>{
  //s let b =  loginfunction('adioadeyoriazeez@gmail.com','123456')
 
  setTimeout(()=>{
   
     Login_action('adioadeyoriazeez@gmail.com','123456')
  },3000)
  //s let b =  loginfunction('adioadeyoriazeez@gmail.com','123456')
   // let b=   loginfunction('adioadeyoriazeez@gmail.com','123456')()
 //console.log(b,"bbbbbbbbbbbbbbb")
    //.then(d=>console.log(d)).catch(e=>{console.log(e)}) 
    //https://rallycoding.herokuapp.com/api/music_albums
},[]);

  return (
    <div>Login</div>
  )
}


let linkStateToProps  = state=>{
    //get the data
    //console.log(state,"MY STATES")
    return{
         __Login__  : state.loginReducer
    }
}
console.log(actions)

const mapDispatchToProps = (dispatch) => {
    return {
      Login_action:(email,password)=>  dispatch ({type:"LOGIN_"}),
      increment:   () => dispatch({ type: 'INCREMENT',payload:+1 }),
      decrement:   () => dispatch({ type: 'DECREMENT' }),
      reset:       () => dispatch({ type: 'RESET' }),
    }
  }
//[actions_file,test]
export default connect(
/*mapstateto propslinkStateToProps*/
 linkStateToProps , 
/*mapDispathtoprops*/
actions
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


export default connect(linkStateToProps, linkingDispathcToprops )(Login)//this pass the Login_action to Login as props*/