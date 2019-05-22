import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import './index.scss'

class GlobalHeader extends Component {
  state = {
    showHeader:false
  }
  componentDidMount(){
    window.addEventListener("scroll",()=>{
      let scrollTop = this.refs.header.parentNode.parentNode.parentNode.scrollTop;
      if(scrollTop >0){
        this.setState({
          showHeader:true
        })
      } else {
        this.setState({
          showHeader:false
        })
      }
    },true)
  }
  render() {
    const {showHeader} = this.state;
    return (
      <div className={`global-header ${showHeader?'fix-global':""}`} ref="header">
        <div className="blog-icon">水曜日的博客</div>
        <ul className="header-catalogue">
          <li className="catalogue-item"><Link to="/" ><i className="iconfont iconhome"></i>Home</Link></li>
          <li className="catalogue-item"><Link to="/blog" ><i className="iconfont iconsvgwrite"></i>Blog</Link></li>
          <li className="catalogue-item"><Link to="/css" ><i className="iconfont iconchuangyi"></i>Css</Link></li>
          <li className="catalogue-item"><Link to="/music"><i className="iconfont iconyinle"></i>Music</Link></li>
        </ul>
      </div>
    )
  }
}

export default GlobalHeader
