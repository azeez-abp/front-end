import { Login_action as Login } from "./Login_action";
import { test } from "./Test_action";

export const  Login_action   = Login;
export const  Test_action  =  test;


/**
 * 1 create store(@param all reducer,@param composeEnhancer(applyMiddleWare(thunk)))
 * 2 create action function that @return {type:'NAMEOFACTION':payload:DATA_FROM_REQUEST_OR_ANY}
 * 3 create reducers function(@param action{}, state) @return state by checking action type
 * 2
 * connect the component to store using connect(@param mapStateToProps object {}  || module(a file with exported a function  get by using import * as nick_name from 'file_dir')gives data that can bbe used  ,@param mapDispatchToProps {} or module gives function that can be called )(@retun a function that takes the component APP)
 * 
 * 
 */  