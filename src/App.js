import React, { Component } from 'react'
import Props from './Props.js'
import Emp from './Emp.js'
import Change from './Change.js'
export class App extends Component {
  state={
    title:'DoodleBLue',
  }
  render() {
    return (
      <div>
       <Props title={this.state.title}/>
       <Emp employee1="Dhanuja.V"
          salary1= {25000} 
          employee2="Aarathy.G"
          salary2={30000}/>
          <br/>
          <Change />

      </div>
    )
  }
}

export default App
