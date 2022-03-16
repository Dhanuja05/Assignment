import React, { Component } from 'react'
import './Vote.css'
export class Vote extends Component {
    state={
        count1:0,
        count2:0,
        count3:0,
        count4:0,

    }
    handleIncrement1=()=>{this.setState({count1:this.state.count1+1})}
    handleIncrement2=()=>{this.setState({count2:this.state.count2+1})}
    handleIncrement3=()=>{this.setState({count3:this.state.count3+1})}
    handleIncrement4=()=>{this.setState({count4:this.state.count4+1})}
  render() {
    return (
      <div className='A'>
       <div className='a'>
           <h1><center>VOTING</center></h1>
       </div>
       <div className='b'>
           <label> <h1> CL </h1></label> 
           <div className='z'>
           <span>{this.state.count1}</span>
           </div>
           <button className='c' onClick={this.handleIncrement1}> VOTE</button>
       </div>
       <br/>
       <div className='d'>
          <label> <h1> PY </h1></label>
           <div className='y'>
           <span>{this.state.count2}</span>
           </div>
           <button className='e' onClick={this.handleIncrement2}> VOTE</button>
       </div>
       <br/>
       <div className='f'>
          <label><h1>JS </h1></label> 
           <div className='x'>
           <span>{this.state.count3}</span>
           </div>
           <button className='g' onClick={this.handleIncrement3}> VOTE</button>
       </div>
       <br/>
       <div className='h'>
          <label><h1>C#</h1></label> 
           <div className='w'>
           <span>{this.state.count4}</span>
           </div>
           <button className='i' onClick={this.handleIncrement4}> VOTE</button>
       </div>
       <br/>
      </div>
    )
  }
}

export default Vote
