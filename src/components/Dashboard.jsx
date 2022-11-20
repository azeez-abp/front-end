import React, { Component } from 'react'

export default class Dashboard extends Component {

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

    loadHeader = async()=>{
        //dynamically load data
       return await  (import('./header/Navbar').then((module)=>this.setState({...this.state,nav:<module.default/>})))
      }  
 componentDidMount = ()=>{
        this.loadHeader(); 
 }
  render() {
     
    return (
      <div>{this.state.nav}</div>
    )
  }
}
