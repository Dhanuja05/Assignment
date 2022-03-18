import React, { Component } from 'react'

export class Vote extends Component {
    state={
        count1:0,
        

    }
    handleIncrement1=()=>{this.setState({count1:this.state.count1+1})}
   
  render() {
    return (
      
      
       <div className='b'>
           <label> <h1> {this.props.title}</h1></label> 
           <div className='z'>
           <span>{this.state.count1}</span>
           </div>
           <button className='c' onClick={this.handleIncrement1}> VOTE</button>
       </div>
     
       
      
    )
  }
}

export default Vote
