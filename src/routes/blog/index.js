import React, { Component } from 'react'
import { getAllTags, getTopList } from '../../api/blog'
import { getArticleList } from '../../api/home'
import { result } from '../../utils/utils'
import './style.scss'
import moment from 'moment'

class Blog extends Component {
  state = {
    list:[],
    topList:[],
    tags:[]
  }

  componentDidMount(){
    this.getArticleData();
    this.getTags();
    this.getTop();
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

  getTags = async ()=>{
    const res = await getAllTags();
    result(res)
      .then(()=>{
        this.setState({
         tags:res.data.map(item=>item.name)
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  getTop = async ()=>{
    const res = await getTopList();
    result(res)
      .then(()=>{
        this.setState({
          topList:res.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  render() {
    return (
      <div className="blog">
        <div className="banner">
          <h1>B L O G</h1>
        </div>
        <div className="content">
          <ul className="article">
            {this.state.list.map((item,index)=>{
              return <li className="article-item" key={index} onClick={()=>{
                this.props.history.push('/article/'+item.id)
              }}>
                <div className={`article-pic ${index%2===1?"left":"right"}`}>
                  <img src={item.imgUrl} alt=""/>
                </div>
                <div className={`article-content ${index%2===1?"right":"left"}`}>
                  <div className={`article-time ${index%2===1?"text-right":"text-left"}`}><i className="iconfont iconshijian"></i>Released {moment(item.createTime*1).format("YYYY-MM-DD HH:mm")}</div>
                  <div className={`article-title ${index%2===1?"text-right":"text-left"}`}>{item.title}</div>
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
                  return <a className="tag-item" key={index}>
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
