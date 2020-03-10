import React, { Component } from 'react'
import 'styles/motto.scss'
import './style.scss'
import moment from 'moment'

class Blog extends Component {
  state = {
    list:[],
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

  componentDidMount(){
    fetch('/json/article.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list:data.reverse()
        })
      })
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
                  <img src={item.imgUrl} alt=""/>
                </div>
                <div className={`article-content ${index%2===1?"right":"left"}`}>
                  <div className={`article-time ${index%2===1?"text-right":"text-left"}`}><i className="iconfont iconshijian"></i>Released {moment(item.createTime*1).format("YYYY-MM-DD HH:mm")}</div>
                  <div className={`article-title ${index%2===1?"text-right":"text-left"}`} onClick={()=>{
                    this.props.history.push('/article/'+item.id)
                  }}>{item.title}</div>
                  <div className="article-tag">
                    <span className="tag-item"><i className="iconfont iconchakan"></i><b>{item.lookover}</b></span>
                    <span className="tag-item"><i className="iconfont icondianzan"></i><b>{item.like}</b></span>
                    <span className="tag-item"><i className="iconfont iconbiaoqian"></i><b>{item.collection}</b></span>
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
                  return <a className="top10-item" key={index} href={item.href} target="_blank">
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
                  </a>
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
