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
    handletitle=(e)=>this.setState({title:e.target.value})
    handlefname=(e)=>this.setState({fname:e.target.value})
    handlelname=(e)=>this.setState({lname:e.target.value})
    handledate=(e)=>this.setState({date:e.target.value})
    handlemail=(e)=>this.setState({mail:e.target.value})
    handlepass=(e)=>this.setState({pass:e.target.value})
    handlecon=(e)=>this.setState({con:e.target.value})

    handleRegister=(e)=>{e.preventDefault();this.setState({onsubmitted:true})}
    handleReset=(e)=>{e.preventDefault();this.setState({fname:'',
    lname:'',
    date:'',
    mail:'',
    pass:'',
    con:''})}

  render() {
    return (
        <div>
           
            <div className='  m-5 p-5 '>
                {this.state.onsubmitted&&<div>
                
               <label> FirstName:{this.state.title}{this.state.fname}</label><br/>
               <label>LastName:{this.state.lname}</label> <br/>
               <label>Date:{this.state.date}</label><br/>
               <label>Email:{this.state.mail}</label>
                    </div>}
                    </div>
            
      <div className='w-50 mt-5 ms-5 p-3 border border-3 border-dark'>
             <form className='row'>
              <div className='col-2 w-10  '>
                  <label>Title</label><br></br>
              <select className='form-select' onChange={this.handletitle} value={this.state.title}>
                  <option></option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  </select>
                 </div>
              <div className='col-5'><label>FirstName</label><br/>
              <input type='text' placeholder='Firstname' onChange={this.handlefname} value={this.state.fname} class='form-control'></input></div>
              
              <div className='col-5'><label>LastName</label><br/>
              <input type='text' placeholder='Lastname'  onChange={this.handlelname} className='form-control'></input></div>

              <div className='col-6'>
                  <label>Date</label><br/>
                  <input type='date'  onChange={this.handledate} className='form-control'></input> 
              </div>
              <div className='col-6'>
                  <label>Email</label>
                  <input type='email'  onChange={this.handlemail}className='form-control'></input>
              </div>
              <div className='col-6'>
                  <label>Password</label><br/>
                  <input type='password'  className='form-control'></input>
              </div>
              <div className='col-6'>
                  <label>Confirm Password</label>
                  <input type='password'   className='form-control'></input>
              </div>
              <div>
                  <input type='checkbox'></input>
                  <label>Accept Terms&Conditions</label>              
                  </div>
                <div  class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" >
                <button className='btn btn-primary' onClick={(e)=>this.handleRegister(e)}>Register</button>
               
                    <button className='btn btn-secondary' onClick={(e)=>this.handleReset(e)}>Reset</button>
                    </div>
            
            </form>  
           
            </div>
        </div>
         
    )
  }
}
export default Reset;