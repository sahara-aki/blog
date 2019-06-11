import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import './index.scss'

class GlobalHeader extends Component {
  state = {
    showHeader:false
  }
  componentDidMount(){
    window.addEventListener("scroll",this.scroll,true)
  }

  scroll = ()=>{
    let scrollTop = this.refs.header.parentNode.parentNode.scrollTop;
      if(scrollTop >0){
        this.setState({
          showHeader:true
        })
      } else {
        this.setState({
          showHeader:false
        })
    }
  }

  componentWillUnmount(){
    window.removeEventListener("scroll",this.scroll,true)
  }

  render() {
    const {showHeader} = this.state;
    return (
      <div className={`global-header ${showHeader?'fix-global':""}`} ref="header">
        <div className="blog-icon">
          <div className="avatar-box">
            <img className={`avatar ${showHeader?"fix-avatar":""}`}  src="http://i1.fuimg.com/690255/9bd8953e2e6329fa.jpg" alt=""/>
          </div>
          <span className="blog-title">sahara_aki的博客</span>
        </div>
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
