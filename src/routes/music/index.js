/*
 * @Author: shilei 
 * @Date: 2020-05-20 16:22:28 
 * @Last Modified by: shilei
 * @Last Modified time: 2020-05-22 17:13:54
 * @Description: 音乐
 */


import React, { Component } from 'react';
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import { getFavoriteMusicList, getMusicLyricById } from '../../api/music'
import { result } from '../../utils/utils'
import './index.less'

class Music extends Component {

  state = {
    musicList:[],
    musicLyric:""
  }

  componentDidMount(){
    this.getMusic();
  }

  switchMusic = async (index, id)=>{
    this.ap.list.switch(index);
    if(this.ap.audio.paused){
      this.ap.play();
    }
    const res = await getMusicLyricById({id});

    if(res && res.lrc && res.code == 200){
      this.setState({
        musicLyric:res.lrc.lyric
      })
      console.log(this.ap)
      this.ap.lrc.show()
    }
  }

  getMusic = async ()=>{
    let res = await getFavoriteMusicList();
    result(res)
      .then(()=>{
        this.setState({
          musicList: res.data
        })
        const audio = res.data.map(item=>{
          const { name, artist, url, cover, lrc } = item;
          return {
            name, artist, url, cover, lrc
          }
        })
        const ap = new APlayer({
          container: document.getElementById('aplayer'),
          lrcType: 1,
          fixed: true,
          audio
        })
        this.ap = ap;
      })
  }
  
  render(){
    const { musicList } = this.state;
      return (
        <div className="music-container">
          <div className="banner">
            <h1>M U S I C</h1>
          </div>
          <div className="albums-container">
            <h3 className="title">Sahara Music</h3>
            <div className="albums">
              {musicList.map((item,index)=>{
                return <div className="album-item" key={index}>
                <img src={item.img} alt=""/>
                <div className="music-info">
                  <div className="music-name">{item.name}</div>
                  <div className="music-author">{item.artist}</div>
                  <div className="music-line"></div>
                  <div className="listen-button" onClick={()=>{this.switchMusic(index, item.id)}}>LISTEN</div>
                </div>
              </div>
              })}
            </div>
          </div>
          <div id="aplayer">
          </div>
        </div>
      );
  }
}

export default Music;
