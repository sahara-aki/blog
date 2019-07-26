import React, { Component } from 'react'
import './index.scss'
export default class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return <div className="article-container">
      <div className="banner"></div>
      <div className="content-wrapper">
        <h1>JavaScript 七大继承全解析</h1>
        <div className="stamp">
          <span className="publish-date">发布时间: 2019-04-11 15:40:21</span>
          <span className="view-num">104 阅读</span>
          <span className="article-tags">
            <b>JavaScript</b>
            <b>面试</b>
            <b>继承</b>
          </span>
        </div>
        <div className="introduction">
        继承作为基本功和面试必考点，必须要熟练掌握才行。小公司可能仅让你手写继承（一般写 `寄生组合式继承` 即可），大厂就得要求你全面分析各个继承的优缺点了。这篇文章深入浅出，让你全面了解 JavaScript 继承及其优缺点，以在寒冬中立于不败之地。
        </div>
      </div>
    </div>
  }
  
}