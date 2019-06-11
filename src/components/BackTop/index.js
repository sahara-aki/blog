import React, { Component } from 'react'
import './index.scss'

class GlobalHeader extends Component {
  state = {

  }

  componentWillMount(){
    this.speed = 0;
  }

  componentDidMount(){
    window.addEventListener("scroll",this.scroll,true)
  }

  scroll = ()=>{
    let scrollTop = this.refs.backTop.parentNode.parentNode.scrollTop;
    if(scrollTop >700){
      this.refs.backTop.style.top = "-200px";
    } else {
      this.refs.backTop.style.top = "-900px"  
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    window.removeEventListener("scroll",this.scroll,true)
  }

  handleBackTop = ()=>{
    let el = this.refs.backTop.parentNode.parentNode;
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
    return (
      <div className="backTop" ref="backTop" onClick={this.handleBackTop}>

      </div>
    )
  }
}

export default GlobalHeader
