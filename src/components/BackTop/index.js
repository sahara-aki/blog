import React, { Component } from 'react'
import './index.scss'

class GlobalHeader extends Component {
  state = {
    show:false
  }

  componentWillMount(){
    this.speed = 0;
  }

  componentDidMount(){
    window.addEventListener("scroll",()=>{
      let scrollTop = this.refs.backTop.parentNode.parentNode.parentNode.scrollTop;
      if(scrollTop >700){
        console.log(this.refs.backTop.style)
        this.refs.backTop.style.top = "-200px";
      } else {
        this.refs.backTop.style.top = "-900px"  
      }
    },true)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  handleBackTop = ()=>{
    let el = this.refs.backTop.parentNode.parentNode.parentNode;
    this.timer = setInterval(()=>{
      let scrollTop = el.scrollTop;
      if(scrollTop<=0){
        this.speed = 0;
        clearInterval(this.timer)
        return
      }
      this.speed += 6;
      el.scrollTop = (scrollTop - this.speed)<=0?0:scrollTop - this.speed;
    },10)
  }

  render() {
    console.log(this.state.show)
    return (
      <div className="backTop" ref="backTop" onClick={this.handleBackTop}>

      </div>
    )
  }
}

export default GlobalHeader
