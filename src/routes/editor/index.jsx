import React, { Component } from 'react';
import Editor from 'fy-editor'
import { Button, Input } from 'antd'
import './style.scss'

export default class Fyeditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:"9c7cob-LRsfL-oZPy6U2z6AvEESaVRBjtUP2gDJd:VVT6er09x7WBK-MyeUYBbCAd7bo=:eyJzY29wZSI6InB1YmxpYyIsImRlYWRsaW5lIjoxNTc2NTA0OTIyfQ=="
    }
  }

  initContent = (content)=>{
    this.onEditorRef.setInitValue(content)
  }

  getContent = ()=>{
    console.log(this.onEditorRef.getContent())
  }

  setContent = ()=>{
    this.initContent("<div>试试设置内容</div>")
  }

  changeToken = (e)=>{
    const val = e.target.value;
    this.setState({
      token:val
    })
  }

  render(){
    const { token } = this.state;
    return(
      <div className="editor-container">
          <Editor 
          onRef={(ref)=>{this.onEditorRef = ref}} 
          showMobilePreview={true} 
          showHtmlEdit={true} 
          mobileTitle="测试" 
          token={token}
        />
        <div className="button-group">
          <Button onClick={this.getContent} type="primary">获取内容</Button>
          <Button onClick={this.setContent} style={{margin:20}} type="primary">设置内容</Button>
          <Input placeholder="请输入七牛token" onChange={this.changeToken} style={{width:300}}/>
        </div>
      </div>
    )
  }
}
