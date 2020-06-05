import React from 'react'
import './index.less'

const About = () => (
  <div className="about-container">
    <div className="banner">
      <img src="https://public.fuyoukache.com/Fu2NhQlcnY-mEmLYYAOPZhm18UJT" alt=""/>
    </div>
    <h1>关于我</h1>
    <div className="description">
    「今でもあなたは私の光。」
    </div>
    <h2>
      个人简介
    </h2>
    <div className="infomation">
    初めまして！我是 Sahara_aki, 人在北京, 前端工程师. 平时喜欢 <span className="delete">唱跳rap篮球</span><span>养宠物</span><span>种植花草</span><span>折腾技术</span>, 这个 Blog 项目就是产出之一, 希望以此契机打打基础. 平时后端运维也喜欢玩一玩, 业余玩<b>手办</b>, <b>梦幻西游PK</b>发烧友...
    </div>
    <h2>关于 Blog</h2>
    <div className="infomation">
      博客基于react+antd搭建,参考了许多大佬的博客风格,建议和批评都可以在下面github地址中blog项目提出issue, 期待共同学习, 共同进步~
    </div>
    <h2>联系方式</h2>
    <div className="infomation contact">
      <p><i className="iconfont iconyouxiang"></i>Email: whitevivian@foxmail.com</p>
      <p><i className="iconfont icongithub"></i>github:<a href="https://github.com/sahara-aki" target="_blank">https://github.com/sahara-aki</a></p>
    </div>
  </div>
)

export default React.memo(About);
