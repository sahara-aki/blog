import React, { useState, useEffect } from 'react'
import { TimeLine } from 'antd'
import './style.scss'
import moment from 'moment'

function TimeLine(){
  const [mode, setMode] = useState(true);
  const [data, setData] = useState([]);
  
  const onChange = e => {
    setMode(e.target.value);
  };

  useEffect(()=>{
    fetch('/json/article.json')
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  },[])

  return (
    <div className="timeLine">
      <div className="banner">
        <h1>Archive</h1>
      </div>
      <div className="content">

      </div>
    </div>
  )
}

export default TimeLine
