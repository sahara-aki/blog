import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GlobalHeader from 'components/GlobalHeader'
import BackTop from 'components/BackTop'
import Bubble from 'components/Bubble'
import 'styles/motto.scss'
import './style.scss'

class Home extends Component {
  state = {
    list:[
      {
        title:"1111",
        content:"22222fsdlfj我我我的的的的"
      },
      {
        title:"1111",
        content:"22222fsdlfj我我我的的的的"
      },
      {
        title:"1111",
        content:"22222fsdlfj我我我的的的的"
      },
      {
        title:"1111",
        content:"22222fsdlfj我我我的的的的"
      },
    ]
  }
  render() {
    return (
      <div>
        <GlobalHeader />
        <BackTop />
        <div className="home-background">
          <h1 data-text="sahara_aki">
            sahara_aki
          </h1>
          <div className="bubble">
            <Bubble />
          </div>
        </div>
        <div className="latest-article">
          <i className="iconfont iconnew"></i> 
          <span>Lastest Article</span>
        </div>
        <ul className="main-content" ref="main_background">
          {this.state.list.map((item,index)=>{
            return <li className="article-item" key={index}>
              <div className={`article-pic ${index%2===1?"left":"right"}`}>
                <img src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/1_NCg5QdEcwVXLnZQ6AC-CNw.jpeg.jpg?x-oss-process=image/format,webp" alt=""/>
              </div>
              <div className={`article-content ${index%2===1?"right":"left"}`}>
                <div className={`article-time ${index%2===1?"text-right":"text-left"}`}><i className="iconfont iconshijian"></i>Released 2019-04-21 14:16:56</div>
                <div className={`article-title ${index%2===1?"text-right":"text-left"}`}>最后一次搞懂 Event Loop</div>
                <div className="article-tag">
                  <span className="tag-item"><i className="iconfont iconchakan"></i><b>12</b></span>
                  <span className="tag-item"><i className="iconfont icondianzan"></i><b>12</b></span>
                  <span className="tag-item"><i className="iconfont iconbiaoqian"></i><b>12</b></span>
                </div>
                <p className="article-context">
                Event Loop 是 JavaScript 异步编程的核心思想，也是前端进阶必须跨越的一关。同时，它又是面试的必考点，特别是在 Promise 出现之后，各种各样的面试题层出不穷，花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。
                </p>
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Home
