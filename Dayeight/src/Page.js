import React, { Component } from 'react'

export class Page extends Component {
    state={
        fname:'',
        lname:'',
        age:'',
        onsubmitted:false,
        showage:false,
        

    }
    handlechange=(e)=>this.setState({[e.target.name]:e.target.value})
    handleSubmit=(e)=>{e.preventDefault();this.setState({onsubmitted:true})}
    handleReset=(e)=>{e.preventDefault();this.setState({fname:'',
    lname:'',
    age:'',
    })}
    handleshowage=(e)=>{e.preventDefault();this.setState({showage:true})}
    handlehideage=(e)=>{e.preventDefault();this.setState({showage:false})}
     handletoggle=(e)=>{e.preventDefault();this.setState({showage:!this.state.showage})}
 
  render() {
    return (
      <div>
            <div className='  m-5 p-5 '>
                {this.state.onsubmitted&&<div class=' w-25 m-5 p-2 border border-3 border-dark'>
                
               <label> NAME:{this.state.fname}  {this.state.lname}</label><br/>
               {
                     this.state.showage&&<div>
                 <label>AGE:{this.state.age} </label><br/>    
                 </div> 
                 }
               <button className='btn btn-secondary' onClick={this.handletoggle}>{this.state.showage?'Hide Age':'Show Age'}</button>
                    </div>}
                   
                    </div>
                    <div>{!this.state.onsubmitted&&(
          <div className=' w-25 m-5 p-3 border border-2 border-dark'>
              <form class='col'>
                  <div className='w-50 '>
              <label>FIRST NAME</label>
              <input type='text' className='form-control' placeholder='First Name' name='fname' onChange={this.handlechange} value={this.state.fname} ></input>
              <label>LAST NAME</label>
              <input type='text' className='form-control' placeholder='Last Name' name='lname' onChange={this.handlechange} value={this.state.lname}></input>
              <label>AGE</label>
              <input type ='number' className='form-control' placeholder='Age' name='age' onChange={this.handlechange} value={this.state.age}></input>
              </div>
              <div className='mt-2'>
                  <button  className='btn  btn-outline-primary' onClick={this.handleSubmit} >SUBMIT</button>
                 
                
                  <button className='btn btn-outline-secondary' onClick={this.handleReset}>RESET</button>
              </div>
              </form>
          </div>)}
            </div>
        
      </div>
    )
  }
}

export default Page