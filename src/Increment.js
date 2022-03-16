import React, {Component} from 'react';
import './Increment.css'
class Increment extends Component{
    state={
        count: 0
    }
    handleIncrement=()=>{this.setState({count:this.state.count+1})}
    handleDecrement=()=>{this.setState({count:this.state.count-1})}
    
  render(){
    return(
      <div >
        <h4>Count{this.state.count}</h4>
        <button className='button' onClick={ this.handleIncrement}>Increment</button>
        <button className='button1'onClick={this.handleDecrement}>Decrement</button>
       
      </div>
    )
  }
}
export default Increment;






