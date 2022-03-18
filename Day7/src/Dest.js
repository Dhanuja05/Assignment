import React, { Component } from 'react'

export class Dest extends Component {
  state={
    name:'',
    age:'',
    source:'',
    destination:'',
    agree:'',
    gender:'',
    onsubmit:false,

  }
   handlechange=(e)=>this.setState({[e.target.name]:e.target.value})
   handleSubmit=(e)=>{e.preventDefault()
     this.setState({onsubmit:true})
    }
  render() {
    return (
      <div>
      <div className='  m-5 p-5 border border-secondary border-4 w-50'>
                {this.state.onsubmit&&<div>
                    <label>NAME:{this.state.name}</label><br/>
                    <label>AGE:{this.state.age}</label><br/>
                    <label>GENDER:{this.state.gender}</label><br></br>
                    <label>Travelling from{this.state.source} to{this.state.destination}</label><br/>
                    <label>Yes,I agree to all terms and conditions{this.state.agree}</label>
                  
                    </div>}
                    </div>
      <div className='w-50 col-10 m-5 p-4 border border-dark'>
         
            <div className='col-6'>
              <label>NAME</label>
              <input type='text' className='form-control' name='name'  onChange={this.handlechange} value={this.state.name}></input>
            </div><br/>
          <div className='col-6'>
              <label>AGE</label>
              <input type='number' className='form-control' name='age'  onChange={this.handlechange} value={this.state.age}></input>
          </div><br/>
          <div>
            <label>GENDER</label>
            
            <input type='radio' name='gender' onChange={this.handlechange} value='Male'></input>

            
            <label>MALE</label>
            <input type='radio' name='gender' onChange={this.handlechange} value='Female'>
            </input>
            
            <label>FEMALE</label>
            
          </div>
          <div className='col-5'>
                  <label>SOURCE</label>
              <select className='form-select' name='source' onChange={this.handlechange} value={this.state.source}>
                  <option></option>
                  <option>CHENNAI</option>
                  <option>BANGALORE</option>
                  <option>HYDERABAD</option>
                  </select>
                 </div><br/>
                 <div className='col-5'>
                  <label>DESTINATION</label>
              <select className='form-select'  name='destination' onChange={this.handlechange} value={this.state.destination}>
                  <option></option>
                  <option>DELHI</option>
                  <option>KOLKATA</option>
                  <option>SHIMLA</option>
                  </select>
                 </div><br/>
                 <div>
                  <input type='checkbox' name='agree' onchange={this.handlechange} value={this.state.agree} ></input>
                  <label>I Agree To All Terms And Conditions</label>              
                  </div>
               <div>
                 <button className='btn btn-primary' onClick={(e)=>this.handleSubmit(e)}>SUBMIT</button>  
                </div>      
        
      </div>
      </div>
    )
  }
}

export default Dest
