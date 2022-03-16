import React, { Component } from 'react';
import './Register.css'
 class Register extends Component {
     
     
 render() {
    return (
      <div className='t'>
          <h1><center>Register New Account</center></h1>
          <div className='dv'>
               
              <div><input type='text' placeholder='First Name'></input></div>
            
              <div><input type='text' placeholder='Last Name'></input></div>
            </div>  
            <div className='cv'>
              
                <input type='text'  placeholder="Name"></input>
            </div>
            <div className='hf'>
                <input type='text' placeholder='City'></input>
            </div>
            <div className='rf'>
                
                <input type='text' placeholder='Phone Number'></input>
            </div>
            <div className='rt'>
              
                <input type='email' placeholder='E-mail'></input>
                </div>
            <div className='nj'>
                <div className='grad'>
            <button className='jn' onClick={ this.handleCreate}>Create Account</button>
            </div></div>    




            
        </div>
    )
  }
}

export default Register;