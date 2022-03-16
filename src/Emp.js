import React, { Component } from 'react'
import'./Emp.css'
export class Emp extends Component {
  render() {
    return (
        <div>
      <div className='mi'>
          <h2>Employee1:{this.props.employee1}</h2>
          <h2>Salary1:{this.props.salary1}</h2>
          <h2>Employee2:{this.props.employee2}</h2>
          <h2>Salary2:{this.props.salary2}</h2>

      </div>
      </div>
    )
  }
}

export default Emp