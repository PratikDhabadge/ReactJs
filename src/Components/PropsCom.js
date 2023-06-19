import React, { Component } from 'react'

class PropsCom extends Component {
  render() {
    return (
      <childComponent name="First Child"/>
    );
  }
}

const childComponent=(props)=>{
    return <p>{props.name}</p>
}

export default PropsCom