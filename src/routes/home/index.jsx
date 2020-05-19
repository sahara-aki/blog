import React, { Component } from 'react'
import { getArticleList } from '../../api/home'
import Bubble from 'components/Bubble'
import { result } from '../../utils/utils'
import 'styles/motto.scss'
import './style.scss'
import moment from 'moment'

class Home extends Component {
  state = {
    list:[]
  }

  componentDidMount(){
    this.getArticleData();
  }

  getArticleData = async()=>{
    const res = await getArticleList();
    result(res)
      .then(()=>{
        this.setState({
          list:res.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <div className="home-background">
          <div className="name">
            <h1 data-text="sahara_aki">
              sahara_aki
            </h1>
            <div className="description">
              明日、今日よりも好きになれる
            </div>
          </div>
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
            return <li className="article-item" key={index} onClick={()=>this.props.history.push('/article/'+item.id)}>
              <div className={`article-pic ${index%2===1?"left":"right"}`}>
                <img src={item.imgUrl} alt=""/>
              </div>
              <div className={`article-content ${index%2===1?"right":"left"}`}>
          <div className={`article-time ${index%2===1?"text-right":"text-left"}`}><i className="iconfont iconshijian"></i>Released {moment(item.createTime*1).format("YYYY-MM-DD HH:mm")}</div>
                <span className={`article-title ${index%2===1?"text-right":"text-left"}`}>{item.title}</span>
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
        <div className="show-more" onClick={()=>{this.props.history.push("/blog")}}>
          More
        </div>
        <div className="copyright">
          <p className="bottom-title">
            <span>Brought to you with</span>  
            <i className="iconfont iconxinheart118"></i>
            <span>by Sahara_aki</span>  
          </p>
          <div className="copy">
            <div className="copy-info">Copyright © 2019 Sahara_aki Inc. <a href="http://www.beian.miit.gov.cn/">晋ICP备19013475号-1</a></div>
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
