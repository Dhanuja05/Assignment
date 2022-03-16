import React, { Component } from 'react'
import'./Change.css'
export class Change extends Component {
    state={
        name:"Welcome"
    }
    handlechange=()=>{
        if(this.state.name==="Welcome"){
            this.setState({name:"Hello World"})
        }
        else{
            this.setState({name:"Welcome"})
        }
    }
  render() {
    return (
      <div className='a'>
         {this.state.name}
         <button className='b' onClick={this.handlechange}>Change</button>
         </div>
    )
  }
}

export default Change