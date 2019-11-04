import React, { Component } from 'react'
import BlogTitle from '../../components/BlogTitle'
import 'styles/motto.scss'
import './style.scss'

class Blog extends Component {
  state = {
    list:[
      {
        id:1,
        title:"使用DllPlugin和DllReferencePlugin提高打包速度",
        content:"在项目开发过程中，遇到需要优化打包速度的问题。我们可以通过分离第三库的形式优化构建速度。在项目中我们经常会用到jquery，vue，echarts等第三方库。我们可以把这些第三库和自己的开发代码分离开来，只需要在第一次构建的时候进行打包，以后就不会再去编译这些第三方库，从而优化了打包的速度。这个插件是在一个额外的独立的 webpack（一般设置为webpack.dll.config.js） 设置中创建一个只有 dll 的 bundle(dll-only-bundle)。 这个插件会生成一个名为 manifest.json 的文件，这个文件是用来让 DLLReferencePlugin 映射到相关的依赖上去的."
      },
      {
        id:2,
        title:"最后一次搞懂 Event Loop",
        content:"Event Loop 是 JavaScript 异步编程的核心思想，也是前端进阶必须跨越的一关。同时，它又是面试的必考点，特别是在 Promise 出现之后，各种各样的面试题层出不穷，花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。"
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
    ],
    topList:[
      {
        title:"21 个VSCode 快捷键，让代码更快，更有趣",
        href:"https://juejin.im/post/5d34fdfff265da1b897b0c8d",
        img:"https://yancey-assets.oss-cn-beijing.aliyuncs.com/2c29b9f3f9dd7f3b7c1c6a41f1d9d25433247f4d.jpg?x-oss-process=image/format,webp"
      },
      {
        title:"8个问题看你是否真的懂 JS",
        href:"https://juejin.im/post/5d2d146bf265da1b9163c5c9",
        img:"http://i1.fuimg.com/690255/d1040bed4eefe4f1.jpg"
      },
      {
        title:"【不可思议的CSS】天气不可能那么可爱",
        href:"https://juejin.im/post/5d2f3f3351882556c3186f57",
        img:"https://yancey-assets.oss-cn-beijing.aliyuncs.com/1_NCg5QdEcwVXLnZQ6AC-CNw.jpeg.jpg?x-oss-process=image/format,webp"
      },
    ],
    tags:["CSS3","JavaScript","手写轮播图","HTML5","Flex Layout","Poem","Webpack","React","Git","运维","Vue","Life","Django","手撸淘宝购物车","React Hooks","git","GitHub面板","blur白边问题","回到顶部","微信小程序","Taro","天气APP","JS基础","Node.js","nvm","Node版本管理","ES5","JavaScript API 全解析","Travis CI","持续集成","持续部署","Vuepress","Gitalk","This","面试","前端","Animation","动画","Music","作用域(链)","闭包","词法作用域","原型/原型链","面向对象编程","继承","Promise","手写 Promise","Event Loop","HTTP","X Japan","WeAreX"]
  }
  render() {
    return (
      <div className="blog">
        <div className="banner">
          
        </div>
        <div className="content">
          <ul className="article">
            {this.state.list.map((item,index)=>{
              return <li className="article-item" key={index}>
                <div className={`article-pic ${index%2===1?"left":"right"}`}>
                  <img src="miao.jpg" alt=""/>
                </div>
                <div className={`article-content ${index%2===1?"right":"left"}`}>
                  <div className={`article-time ${index%2===1?"text-right":"text-left"}`}><i className="iconfont iconshijian"></i>Released 2019-04-21 14:16:56</div>
                  <div className={`article-title ${index%2===1?"text-right":"text-left"}`} onClick={()=>{
                    this.props.history.push('/article/'+item.id)
                  }}>{item.title}</div>
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
          <aside className="other">
            <div className="top10">
              <div className="other-title">
                <i className="iconfont iconTOPyuangongfenxi"></i>
                <span>Top 10 Most Viewed</span>
              </div>
              <ul className="top10-list">
                {this.state.topList.map((item,index)=>{
                  return <li className="top10-item" key={index}>
                    <div className="background-blur" style={{background:`url(${item.img})`}}></div>
                    <div className="item-content">
                      <div className="top-content">
                        <div className="top-title">{item.title}</div>
                        <div className="top-href">{item.href}</div>
                      </div>
                      <div className="top-imgbox">
                        <img src={item.img} alt=""/>
                      </div>
                    </div>
                  </li>
                })}
              </ul>
            </div>
            <div className="tags">
              <div className="other-title">
                <i className="iconfont icontag"></i>
                <span>Tags</span>
              </div>
              <div className="tag-list">
                {this.state.tags.map((item,index)=>{
                  return <a className="tag-item" key={index} href="javascript:void(0)">
                    {item}
                  </a>
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}

export default Blog
