import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
  state = {
    firstname: '', lastname: '', mail: '', bpnum: '', comname: '', job: '', street: '', city: '', stapro: '', zipcode: '', countreg: '', topic: ''
  }
  render() {
    return (
      <div className="v">
        <h1>Contact Us</h1>
        <div className='cc'>
          <div><label>First Name </label><br />
            <input type="text" value={this.state.firstname}></input></div>
          <div><label>Last Name </label><br />
            <input type="text" value={this.state.lastname}></input><br /></div>
        </div>
        <div className="dd">
          <div><label>Email </label><br />
            <input type="text" value={this.state.mail}></input></div>
          <div><label>Business Phone </label><br />
            <input type="text" value={this.state.bpnum}></input></div>
        </div>
        <div className='ee'>
          <div><label>Company Name </label><br />
            <input type="text" value={this.state.comname}></input></div>
          <div><label>Job Title </label><br />
            <input type="text" value={this.state.job}></input></div>
        </div><br />
        <div className='ff'>
          <label>Street1</label><br/>
          <input type="text" value={this.state.street}></input></div>
        <div className='hh'>
          <div><label>City </label><br />
            <input type="text" value={this.state.city}></input></div>
          <div><label>State/Province </label><br />
            <input type="text" value={this.state.stapro}></input></div>
        </div>
        <div className='gg'>
          <div><label>ZIP/Poastal code </label><br />
            <input type="text" value={this.state.zipcode}></input></div>
          <div><label>Country/Region </label><br />
            <input type="text" value={this.state.countreg}></input></div>
        </div><br />
        <div className='ii'>
          <label>Topic</label><br />
          <input type="text" value={this.state.topic}></input></div>
      </div>
    )
  }
}
export default Form;
