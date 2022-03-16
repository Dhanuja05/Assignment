import React, { Component } from 'react'
import './Wel.css'

 class Wel extends Component {
  render() {
    return (
      <div className='fv'>
         <h1><center>WELCOME!</center></h1>
      <br></br>
      
      <div className='jj'>
          <h3>ALREADY REGISTERED?</h3>
      </div>
     
      
      
      <div className='gf'>
          <input type='email' placeholder='Email'></input>
      </div>
      <div className='bin'>
          <input type='password' placeholder='Password'></input>
      </div>
      <div className='yu'>
          <button onClick={this.handleCreate}>Sign In</button>
          
      </div>
      
      <br></br>
     <div classname='lj'>
      <div className='lc'>
        <h3>NEW CUSTOMER?</h3>
      </div>
     
        
       <div className='my'>
           <input type='email' placeholder='Email'></input>
        </div>   
        <div className='ki'>
        <input type='password' placeholder='Password'></input>
        </div>  
        <div className='yn'>
          <button onClick={this.handleCreate}>Create Account</button>
      </div>
      </div>
      </div>
    
    )
  }
}

export default Wel
