import React, { Component } from 'react'

export class AccChild extends Component {

  state={
    showInfo:false
  }
  handleshow=(e)=>{this.setState({showInfo:!this.state.showInfo})}
  render() {
    return (
      <div className='b'>

        <div ><h3>{this.props.title} <button className='d' onClick={this.handleshow}>{this.state.showInfo?'-':'+'}</button ></h3>
        {

          this.state.showInfo &&<div className='t'>
         {this.props.info}</div>
        }
        </div>
        
        
      </div> 
    )
  }
}

export default AccChild