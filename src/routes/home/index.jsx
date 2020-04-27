import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bubble from 'components/Bubble'
import 'styles/motto.scss'
import './style.scss'
import moment from 'moment'
// import ReactAplayer from 'react-aplayer';

class Home extends Component {
  state = {
    list:[]
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
    const props = {
      // fixed:true,
      autoplay:false,
      audio: [
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'http://m10.music.126.net/20200401185025/7286ba4fc4a399f6e44fa74ae5bb3f97/ymusic/d970/cc44/1344/386c1ad4b02a6ddff04873919e6808db.mp3',
          cover: 'http://public.fuyoukache.com/FkwXyBJfGm5vsNGxfYvVfGgxR7Vv',
        }
      ]
    };

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
        {/* <div className="music">
          <ReactAplayer
            {...props}
          ></ReactAplayer>
        </div> */}
      </div>
    )
  }
}

export default Home
