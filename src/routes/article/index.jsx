import React, { Component } from 'react';
import { Form } from 'antd';
import ReactMarkdown from 'react-markdown';
import { getArticleDetail } from '../../api/blog'
import { result } from '../../utils/utils'
import 'github-markdown-css';
import './index.scss'

@Form.create()
export default class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      markdown:"",
      detail:{}
    }
  }

  componentWillMount() {
    this.getContent();
    this.getDetail();
  }

  getContent = ()=>{
    const { id }= this.props.match.params;
    fetch(require(`../../../public/md/${id}.md`))
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  getDetail = async ()=>{
    const { id }= this.props.match.params;
    const res = await getArticleDetail({
      id
    });
    result(res)
      .then(()=>{
        this.setState({
          detail:res.data[0]
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  render(){
    const { markdown, detail } = this.state;
    const bannerUrl = detail.imgUrl || "";
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