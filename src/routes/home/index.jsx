import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bubble from 'components/Bubble'
import 'styles/motto.scss'
import './style.scss'

class Home extends Component {
  state = {
    list:[
      {
        id:1,
        title:"浅谈http缓存",
        content:"前端组的同事一起弄了个前端组的分享计划，想着给他们讲点什么，花了一周时间整理了http缓存的知识，花了一个多小时也算帮同事们重新理了理这套东西，并且讲解了福佑加油的白屏现象是如何产生的，这里就当一个整理分享了。"
      },
      {
        id:2,
        title:"webpack实践之DLLPlugin 和 DLLReferencePlugin的使用",
        content:"前段时间前端组内分享了用dllPlugin来减少打包时间的方法,这里做一下整理说明,有需要的朋友可以参考下"
      },
      {
        id:3,
        title:"静止的世界",
        content:"你眼中看似落叶纷飞变化无常的世界，实际只是躺在上帝怀中一份早已谱好的乐章。"
      },
    ]
  }
  render() {
    return (
      <div>
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
                <img src="/image/miao.jpg" alt=""/>
              </div>
              <div className={`article-content ${index%2===1?"right":"left"}`}>
                <div className={`article-time ${index%2===1?"text-right":"text-left"}`}><i className="iconfont iconshijian"></i>Released 2019-04-21 14:16:56</div>
                <Link to={'/article/'+item.id} className={`article-title ${index%2===1?"text-right":"text-left"}`}>{item.title}</Link>
                <div className="article-tag">
                  <span className="tag-item"><i className="iconfont iconchakan"></i><b>12</b></span>
                  <span className="tag-item"><i className="iconfont icondianzan"></i><b>12</b></span>
                  <span className="tag-item"><i className="iconfont iconbiaoqian"></i><b>12</b></span>
                </div>
                <p className="article-context" style={{"WebkitBoxOrient": "vertical"}}>
                {item.content}
                </p>
              </div>
            </li>
          })}
        </ul>
        <div className="show-more">
          More
        </div>
        <div className="copyright">
          <p className="bottom-title">
            <span>Brought to you with</span>  
            <i className="iconfont iconxinheart118"></i>
            <span>by Sahara_aki</span>  
          </p>
          <div className="copy">
            <div className="copy-info">Copyright © 2019 Sahara_aki Inc. All rights reserved.</div>
            <ul className="friend-link">
              <li><a>About</a></li>
              <li><a>Privacy Policy</a></li>
              <li><a>Apps</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
