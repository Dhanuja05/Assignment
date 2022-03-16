import React, { Component } from 'react'
import './Props.css'
export class Props extends Component {
  render() {
    return (
      <div className='ir'><h2>Title:{this.props.title}</h2></div>
    )
  }
}

export default Props