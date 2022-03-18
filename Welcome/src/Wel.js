import React, { Component } from 'react'
import'./Wel.css'
 class Wel extends Component {
  render() {
    return (
     <div>
       <div className='yo'>
      <div className='bx'>
       <h1>WELCOME !</h1>
       </div>
       <div className='ab'>
       
       <h1><screenLeft>ALREADY REGISTERED?</screenLeft></h1>
      
        <h1>NEW CUSTOMER?</h1>
        
        </div>
        <div>
             
         <div className='bc'>
           </div>
           <div className='gt'>
          <input type='text' placeholder='Username'></input>
          <input type='text' placeholder='Email'></input>
        </div>
        
        <div className='mu'>
          <input type='text' placeholder='Password'></input>
          <input type='text' placeholder='Password'></input>
        </div>
        <div className='en'>
        <button className='ti' onClick={ this.handleCreate}>Sign In</button>
        
        <button className='or' onClick={ this.handleCreate}>Create Account</button>
        
        
        </div>
        </div>
        
        </div>
        
        </div>
       
    
    
    
    )
  }
}

export default Wel
