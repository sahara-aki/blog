import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

class GlobalHeader extends Component {
  state = {
    showHeader: false,
    showToggle: false
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scroll, true)
  }

  scroll = () => {
    let scrollTop = this.refs.header.parentNode.parentNode.scrollTop;
    if (scrollTop > 0) {
      this.setState({
        showHeader: true
      })
    } else {
      this.setState({
        showHeader: false
      })
    }
  }

  changeToggleList = () => {
    this.setState({
      showToggle: !this.state.showToggle
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroll, true)
  }

  render() {
    const { showHeader, showToggle } = this.state;
    return (
      <div className={`global-header ${showHeader ? 'fix-global' : ""}`} ref="header">
        <div className="blog-icon">
          <div className="avatar-box">
            <img className={`avatar ${showHeader ? "fix-avatar" : ""}`} src="./image/avatar.jpeg" alt="" />
          </div>
          <span className="blog-title">墨染白泉の前端技术分享</span>
        </div>
        <ul className="header-catalogue">
          <li className="catalogue-item"><Link to="/" ><i className="iconfont iconhome"></i>Home</Link></li>
          <li className="catalogue-item"><Link to="/blog" ><i className="iconfont iconsvgwrite"></i>Blog</Link></li>
          <li className="catalogue-item"><Link to="/css" ><i className="iconfont iconchuangyi"></i>Css</Link></li>
          <li className="catalogue-item"><Link to="/music"><i className="iconfont iconyinle"></i>Music</Link></li>
        </ul>
        <div className="nav-toggle">
          <div className="toggle-icon" onClick={this.changeToggleList}><a><i className="iconfont iconmulu"></i></a></div>
          <div className="toggle-list" style={{height:showToggle?232:0}}>
            <div className='toggle-item'>
              <Link to="/" ><i className="iconfont iconhome" onClick={this.changeToggleList}></i></Link>
            </div>
            <div className='toggle-item'>
              <Link to="/blog" ><i className="iconfont iconsvgwrite" onClick={this.changeToggleList}></i></Link>
            </div>
            <div className='toggle-item'>
              <Link to="/css" ><i className="iconfont iconchuangyi" onClick={this.changeToggleList}></i></Link>
            </div>
            <div className='toggle-item'>
              <Link to="/music" ><i className="iconfont iconyinle" onClick={this.changeToggleList}></i></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GlobalHeader
