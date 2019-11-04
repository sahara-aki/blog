import React, { Component } from 'react';
import { Form } from 'antd';
import ReactMarkdown from 'react-markdown';
import codeBlock from './CodeBlock';
import 'github-markdown-css';
import './index.scss'

@Form.create()
export default class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      markdown:""
    }
  }

  componentWillMount() {
    const { id }= this.props.match.params;
    fetch(require(`../../../public/md/${id}.md`))
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render(){
    const { markdown } = this.state;
    return <div className="article-container">
      <div className="banner"></div>
      <div className="content-wrapper">
        <ReactMarkdown
          className="markdown-body"
          source={markdown}
          escapeHtml={false}
          renderers={{
            code: codeBlock,
          }}
        />
      </div>
    </div>
  }
  
}