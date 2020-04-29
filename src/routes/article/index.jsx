import React, { Component } from 'react';
import { Form } from 'antd';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import './index.scss'

@Form.create()
export default class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      markdown:"",
      bannerUrl:""
    }
  }

  componentWillMount() {
    this.getBanner();
    this.getContent();
  }

  getContent = ()=>{
    const { id }= this.props.match.params;
    fetch(require(`../../../public/md/${id}.md`))
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }


  getBanner = ()=>{
    const { id }= this.props.match.params;
    fetch('/json/article.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          bannerUrl:data.filter(item=>item.id == id)[0].imgUrl
        })
      })
  }

  render(){
    const { markdown, bannerUrl } = this.state;
    return <div className="article-container">
      <div className="banner">
        <img src={bannerUrl} alt=""/>
        <h2>ARTICLE</h2>
      </div>
      <div className="content-wrapper">
        <ReactMarkdown
          className="markdown-body"
          source={markdown}
          escapeHtml={false}
        />
      </div>
    </div>
  }
  
}