/*
 * @Author: shilei 
 * @Date: 2020-05-20 14:09:13 
 * @Last Modified by: shilei
 * @Last Modified time: 2020-05-20 16:11:21
 * @Description: 底部备案信息
 */



import React from 'react';
import './index.less'

function Footer() {
  return (
    <div className="copyright">
      <p className="bottom-title">
        <span>Brought to you with</span>  
        <i className="iconfont iconxinheart118"></i>
        <span>by Sahara_aki</span>  
      </p>
      <div className="copy">
        <div className="copy-info">
          <span>Copyright © 2019 Sahara_aki Inc. </span>
          <a href="http://www.beian.miit.gov.cn/">晋ICP备19013475号-1</a>
        </div>
        
        <ul className="friend-link">
          <li><a>About</a></li>
          <li><a>Privacy Policy</a></li>
          <li><a>Apps</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Footer);
