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
        title:"使用DllPlugin和DllReferencePlugin提高打包速度",
        content:"在项目开发过程中，遇到需要优化打包速度的问题。我们可以通过分离第三库的形式优化构建速度。在项目中我们经常会用到jquery，vue，echarts等第三方库。我们可以把这些第三库和自己的开发代码分离开来，只需要在第一次构建的时候进行打包，以后就不会再去编译这些第三方库，从而优化了打包的速度。这个插件是在一个额外的独立的 webpack（一般设置为webpack.dll.config.js） 设置中创建一个只有 dll 的 bundle(dll-only-bundle)。 这个插件会生成一个名为 manifest.json 的文件，这个文件是用来让 DLLReferencePlugin 映射到相关的依赖上去的."
      },
      {
        title:"最后一次搞懂 Event Loop",
        content:"Event Loop 是 JavaScript 异步编程的核心思想，也是前端进阶必须跨越的一关。同时，它又是面试的必考点，特别是在 Promise 出现之后，各种各样的面试题层出不穷，花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。"
      },
      {
        title:"AI神经网络如何辨别事物",
        content:"人工智能已经发展了六七十年，经历了几度繁荣和衰落。虽然已取得不错的进展，但是与理想中的人工智能差距还是很大。人工智能三大学派：符号学派、连接学派、行为学派。符号学派认为，任何能够将物理的某些模式或符号进行操作并转化成另外一些模式或符号的系统，就可能产生智能行为；连接学派认为高级的智能行为是从大量神经网络的连接中自发出现的，通过大量神经元来模拟大脑；行为学派并没有把目光聚焦到高级智能的人类身上，而是关注低级的昆虫能灵活走动并快速反应。上世纪的八九十年代形成三足鼎立的形势。"
      },
      {
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
                <img src="http://i1.fuimg.com/690255/d1040bed4eefe4f1.jpg" alt=""/>
              </div>
              <div className={`article-content ${index%2===1?"right":"left"}`}>
                <div className={`article-time ${index%2===1?"text-right":"text-left"}`}><i className="iconfont iconshijian"></i>Released 2019-04-21 14:16:56</div>
                <div className={`article-title ${index%2===1?"text-right":"text-left"}`}>{item.title}</div>
                <div className="article-tag">
                  <span className="tag-item"><i className="iconfont iconchakan"></i><b>12</b></span>
                  <span className="tag-item"><i className="iconfont icondianzan"></i><b>12</b></span>
                  <span className="tag-item"><i className="iconfont iconbiaoqian"></i><b>12</b></span>
                </div>
                <p className="article-context">
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
