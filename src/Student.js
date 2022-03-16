import React, {Component} from 'react';
import './Student.css';
class Student extends Component{
    state={
        name: "Dhanuja",
        age:21
    }
  render(){
    return(
      <div>
          <p> My name is : <span class = 'a'>{this.state.name}</span> <br></br> My age is: <span class = 'b'>{this.state.age}</span></p>
      </div>
    )
  }
}
export default Student
