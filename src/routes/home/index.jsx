import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bubble from 'components/Bubble'
import 'styles/motto.scss'
import './style.scss'

class Home extends Component {
  state = {
    list:[
      {
        id:2,
        title:"静止的世界",
        content:"你眼中看似落叶纷飞变化无常的世界，实际只是躺在上帝怀中一份早已谱好的乐章。"
      },
      {
        id:1,
        title:"浅谈http缓存",
        content:"前端组的同事一起弄了个前端组的分享计划，想着给他们讲点什么，花了一周时间整理了http缓存的知识，花了一个多小时也算帮同事们重新理了理这套东西，并且讲解了福佑加油的白屏现象是如何产生的，这里就当一个整理分享了。"
      },
      {
        id:3,
        title:"AI神经网络如何辨别事物",
        content:"人工智能已经发展了六七十年，经历了几度繁荣和衰落。虽然已取得不错的进展，但是与理想中的人工智能差距还是很大。人工智能三大学派：符号学派、连接学派、行为学派。符号学派认为，任何能够将物理的某些模式或符号进行操作并转化成另外一些模式或符号的系统，就可能产生智能行为；连接学派认为高级的智能行为是从大量神经网络的连接中自发出现的，通过大量神经元来模拟大脑；行为学派并没有把目光聚焦到高级智能的人类身上，而是关注低级的昆虫能灵活走动并快速反应。上世纪的八九十年代形成三足鼎立的形势。"
      },
      {
        id:4,
        title:"本地开发环境启动HTTPS",
        content:"今天我们访问的所有网站几乎都是受HTTPS保护的。如果你的站点还没有，那你应该使用它。使用HTTPS保护服务器也意味着你不能从不是HTTPS服务器向此服务器发送请求。这给使用本地开发环境的开发人员带来了一个问题，因为它们都运行在开箱即用的http://localhost环境中。在我参与的项目启动阶段，我们决定使用HTTPS来保护AWS弹性负载均衡入口，这是增强安全性的一部分。我遇到了这样的情况，本地开发环境对服务器的请求开始被拒绝。"
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
