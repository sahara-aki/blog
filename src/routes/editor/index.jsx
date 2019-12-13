import React, { Component } from 'react';
import Editor from 'fy-editor'
import { Button } from 'antd'
import './style.scss'

export default class Fyeditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:"9c7cob-LRsfL-oZPy6U2z6AvEESaVRBjtUP2gDJd:NshZb7pHrZPbgcnDLTY_Hz5-vH0=:eyJzY29wZSI6InB1YmxpYyIsImRlYWRsaW5lIjoxNTc2MjU0NjI4fQ=="
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
          <Button onClick={this.setContent} style={{marginLeft:20}} type="primary">设置内容</Button>
        </div>
      </div>
    )
  }
}
