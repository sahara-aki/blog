/*
 * @Author: shilei 
 * @Date: 2020-05-11 11:05:00 
 * @Last Modified by: shilei
 * @Last Modified time: 2020-05-11 11:24:04
 * @Description: object-fit:cover 与 backgournd-size:cover
 */


import React from 'react';
import './index.less'

function Demo() {
  return (
    <div className="demo-container">
      <div className="test-container">
        <div className="test-demo setbackground">

        </div>
        <div className="test-info">
          <p>使用背景图片</p>
          <p>background-size:cover</p>
        </div>
      </div>
      <div className="test-container">
        <div className="test-demo">
          <img src="/bglty.jpg" alt=""/>
        </div>
        <div className="test-info">
          <p>使用img图片</p>
          <p>object-fit:cover</p>
        </div>
      </div>
      <div className="test-container">
        <div className="test-demo">
          <img src="/bglty.jpg" alt="" className="setPosition"/>
        </div>
        <div className="test-info">
          <p>使用img图片</p>
          <p>object-fit:cover;object-position:0% 0%;</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Demo);
