import React, {Component} from 'react';
import Print from "./Print"
import Student from"./Student"
import Increment from"./Increment"
import Form from "./Form"
import Register from"./Register"
import Wel from './Wel';


class App extends Component{
  render(){
    return(
      <div >
        <h3>Hello World</h3>
        <Print/>
        <Student/>
        <Increment/>
        <Form/><br></br>
        <Register/><br></br>
        <Wel/>
        
      </div>
    )
  }
}
export default App
