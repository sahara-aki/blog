import React, { Component } from 'react'
import Child from './Child'

class Test extends Component {
  state = {
    number:1
  }

  add = ()=>{
    this.setState({
      number:this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>点击+1</button>
        <Child {...this.state}/>
      </div>
    )
  }
}

export default Test
