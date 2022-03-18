import React, { Component } from 'react'
import './Vote.css'
import VotingChild from './VotingChild'
export class Vote extends Component {
   
   
  render() {
    return (
      <>
      <div className='wrapper'>
      <div className='A'>
       <div className='a'>
           <h1><center>VOTING</center></h1>
       </div>
       <VotingChild title="CL"/>
       <VotingChild title="JS"/>
       <VotingChild title="PY"/>
       <VotingChild title="C#"/>
      </div>
      </div>
      </>
    )
  }
}

export default Vote
