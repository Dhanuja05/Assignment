import React, { Component } from 'react'

export class Reset extends Component {
    state={
        fname:'',
        lname:'',
        date:'',
        mail:'',
        pass:'',
        con:'',
        onsubmitted:false

    }
    handlefname=(e)=>this.setState({fname:e.target.value});
    
    handleRegister=()=>this.setState({onsubmitted:true})


  render() {
    return (
      <div className='w-50 mt-5 ms-5 p-3 border border-3 border-dark'>
             <form className='row'>
              <div className='col-2 w-10 '>
                  <label>Title</label><br></br>
              <select className='form-select'>
                  <option></option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  </select>
                 </div>
              <div className='col-5'><label>FirstName</label><br/>
              <input type='text' placeholder='Firstname' onChange={this.handlefname} value={this.state.fname} class='form-control'></input></div>
              
              <div className='col-5'><label>LastName</label><br/>
              <input type='text' placeholder='Lastname'  onChange={this.state.lname} className='form-control'></input></div>

              <div className='col-6'>
                  <label>Date</label><br/>
                  <input type='date'  onChange={this.state.date} className='form-control'></input> 
              </div>
              <div className='col-6'>
                  <label>Email</label>
                  <input type='email'  onChange={this.state.mail}className='form-control'></input>
              </div>
              <div className='col-6'>
                  <label>Password</label><br/>
                  <input type='password'  onChange={this.state.pass} className='form-control'></input>
              </div>
              <div className='col-6'>
                  <label>Confirm Password</label>
                  <input type='password'  onChange={this.state.con} className='form-control'></input>
              </div>
              <div>
                  <input type='checkbox'></input>
                  <label>Accept Terms&Conditions</label>              
                  </div>
                <div >
                <button className='btn btn-primary' onClick={this.handleRegister}>Register</button>
                <div>
                    <button className='btn btn-secondary'>Reset</button></div>
                </div>  
            
                {this.state.onsubmitted&&<div>
                {this.state.fname}
                    </div>}
            </form>  
        </div>
         
    )
  }
}
export default Reset;