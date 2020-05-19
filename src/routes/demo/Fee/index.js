/*
 * @Author: shilei 
 * @Date: 2020-05-18 14:28:36 
 * @Last Modified by: shilei
 * @Last Modified time: 2020-05-19 10:44:40
 * @Description: 军火模拟器
 */


import React, { Component } from 'react'
import { Button, Row, Col, } from 'antd'
import './index.scss'

class Home extends Component {
  state = {
    equip:[],
    tujian:[],
    usingTujian:null,
    selectEquip:null,
    times:1
  }

  componentDidMount(){
    document.title = "花气袭人打造模拟器"
    this.initEquip();
  }

  initEquip = ()=>{
    let equip = [];
    let tujian = [];
    for(let i=0;i<10;i++){
      equip.push({
        id:i,
        isAppraise:false,
        type:this.getConfig(),
        mainType:{
          type:Math.random()>0.5?1:0,
          value:Math.floor((Math.random()*14+28))
        }
      })
      tujian.push({
        id:i,
        isAppraise:false,
      })
    }
    this.setState({
      equip,
      tujian
    })
  }

  useTujian = (index)=>{
    this.setState({
      usingTujian:index
    })
  }

  viewEquip = (index)=>{
    let { equip, tujian, usingTujian } = this.state;
    this.setState({
      selectEquip:index
    })
    if(usingTujian !== null){
      tujian[usingTujian].isAppraise = true;
      equip[index].isAppraise = true;
      this.setState({
        tujian,
        usingTujian:null,
      })
    }
  }

  //从数组里面随机获取一个值
  getRandom = (arr)=>{
    const index = Math.floor((Math.random()*arr.length));
    return arr[index]
  }

  getConfig = ()=>{
    const typeObj = ["固定伤害","伤害","法术伤害","速度","狂爆等级","物理暴击等级","法术暴击等级","封印命中等级","法术伤害结果","穿刺等级","治疗能力"];
    const times = Math.round((Math.random()*1+2));
    let config = [];
    for(let i=0; i<times;i++){
      let type = this.getRandom(typeObj);
      let value = "";
      if(type === "伤害" || type === "法术伤害" || type === "固定伤害" || type === "封印命中等级" ||type === "法术暴击等级" || type === "物理暴击等级") {
        value = Math.floor((Math.random()*11+10)); // 14~21
        if(value <14){
          value = 14;
        }
      } else {
        value = Math.floor((Math.random()*10+5)); //10~15
        if(value<10){
          value = 10;
        }
      }
      config.push(`${type}+${value}`)
    }
    return config
  }

  //再来一车
  getReset = ()=>{
    let { times } = this.state;
    this.setState({
      usingTujian:null,
      selectEquip:null,
      times:times+1
    })
    this.initEquip();
  }

  jdAllEquip = ()=>{
    let { equip, tujian, times } = this.state;
    equip = equip.map(item=>{
      const { id, type, mainType } = item;
      return {
        id, 
        type, 
        mainType,
        isAppraise:true
      }
    })
    tujian = tujian.map(item=>{
      const { id } = item
      return {
        id,
        isAppraise:true,
      }
    })
    this.setState({
      equip,
      tujian,
    })
  }

  getColor = (time)=>{
    if(time <5){
      return "normal"
    } else if(time >=5 && time <20){
      return "middle"
    } else {
      return 'high'
    }
  }


  render() {
    const { equip, tujian, selectEquip, usingTujian, times } = this.state;
    return (
      <div className="equip-container">
        <div className="equip-content">
          {equip.map((item,index)=>{
            return <div className="equip-item" key={item.id+"equip"} onClick={()=>this.viewEquip(index)} style={{borderColor:selectEquip === index?"red":"transparent"}}>
              <img src="https://public.fuyoukache.com/FlfGy3JeJSp8Y5TFjaLQh32HZVea" alt=""/>
            </div>
          })}
          {tujian.map((item,index)=>{
            return <div className="equip-item" key={item.id+"tujian"} style={{visibility:item.isAppraise?"hidden":"visible",borderColor:usingTujian === index?"red":"transparent"}} onClick={()=>this.useTujian(index)}>
              <img src="https://public.fuyoukache.com/FrS1oar6T-sIXF454QRporXbg6AT" alt=""/>
            </div>
          })}
        </div>
        <div className="equip-info">
          <div className="equip-name">
            <div className="img-box">
              <img src="https://public.fuyoukache.com/FlfGy3JeJSp8Y5TFjaLQh32HZVea" alt=""/>
            </div>
            <div className="bold">九曜光华</div>
            <div>九曜星君为谢王母娘娘蟠桃会之请，特凝聚九曜光华，成此宝戒；戒中聚星辰之力，华彩耀目，仙气袅然。</div>
            <div>【类型】戒指</div>
            <div>【装备条件】等级140级</div>
          </div>
          {selectEquip !== null && <div className="equip-extra">
            {equip[selectEquip].isAppraise === false && <div className="bold">未鉴定物品</div>}
            {equip[selectEquip].isAppraise === true && <div>
                <div className="bold">等级 140</div>
                <div className="bold">{equip[selectEquip].mainType.type?"伤害":"防御"} +{equip[selectEquip].mainType.value}</div>
                <div className="bold">耐久度 500</div>
                {equip[selectEquip].type.map((item,index)=>{
                  return <div className="value" key={index+"item"}>{item}</div>
                })}
              </div>}
            <div>制造者:花气袭人″强化打造</div>
          </div>}
        </div>
        <Row type="flex" justify="space-around" style={{padding:20}}>
          <Button type="primary" onClick={this.jdAllEquip}>一键鉴定</Button>
          <Button type="primary" onClick={this.getReset}>再来一车</Button>
        </Row>
        <div className="total-cost">
          总计花费(100:1450比例):
          <span className={this.getColor(times)}>{times*2480}元</span>
        </div>
      </div>
    )
  }
}

export default Home
