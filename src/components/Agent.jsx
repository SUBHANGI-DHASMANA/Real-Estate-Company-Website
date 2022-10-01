import React from 'react'
import AgentBox from './AgentBox'
import agentimg1 from '../images/s1.png'
import agentimg2 from '../images/s2.png'
import agentimg3 from '../images/s3.png'

const Agent = () => {
  return (
    <div className='agent' id='agents'>
      <div className="a-heading">
        <h1>Agents</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, fuga.</p>
      </div>
      <div className="b-container">
        <AgentBox image={agentimg1} name="Ali"/>
        <AgentBox image={agentimg2} name="Develops"/>
        <AgentBox image={agentimg3} name="Websites"/>
      </div>
    </div>
  )
}

export default Agent
