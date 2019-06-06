import React, { Component } from 'react'

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
        {this.props.number}
      </div>
    )
  }
}

export default Test
