import React, { Component } from 'react'
import { Button, Row, Col, Input, Form, InputNumber } from 'antd'
import './style.scss'

const FormItem = Form.Item

@Form.create()


class Home extends Component {
  state = {
    count:0,
    visible:false,
    minutePhysical:0,
    minutePointPrice:0,
    income:0,
    cost:0,
    totalNum:0
  }

  //标准价校验
  patternLevel = (rule, value, callback) => {
    if (value < 0 || value>175) {
      callback('请输入0~175之间的等级');
    } else {
      callback();
    }
  };


  handleCount = ()=>{
    this.props.form.validateFields((err,values)=>{
      if(err) return;
      const { level, max, pointPrice, riceBallPoint, riceBallPrice, onlineHour } = values;
      //每小时恢复体力
      const minutePhysical = Math.round(max*0.01 + level*0.02 + 2)*12;
      //每小时消耗点卡金钱
      const minutePointPrice = pointPrice * 6;
      //总共换元宵数
      const totalNum = (onlineHour*minutePhysical/15/riceBallPoint).toFixed(2);
      //收益总数
      const income = Math.round(onlineHour*minutePhysical/15/riceBallPoint*riceBallPrice)*10000;
      //总消耗
      const cost = Math.round( onlineHour * minutePointPrice);
      this.setState({
        count:income-cost,
        visible:true,
        minutePhysical,
        minutePointPrice,
        income,
        cost,
        totalNum
      })

    })
  }

  handleReset = ()=>{
    this.props.form.resetFields();
    this.setState({
      count:0,
      visible:false
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const { visible, count, minutePhysical, minutePointPrice, income, cost, totalNum } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className="calculator">
        <h2>元宵节收益计算器</h2>
        <p className="author">Created by<i className="iconfont iconxinheart118"></i> 国子监-花气袭人</p>
        <div>
          <Row>
            <FormItem {...formItemLayout} label="等级">
              {getFieldDecorator('level',{
                rules:[
                  {
                    required: true,
                    message: '请输入等级',
                  },
                  {
                    validator: this.patternLevel,
                  },
                ]
              })(<Input placeholder="请输入等级(0-175)" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="体力上限">
              {getFieldDecorator('max',{
                rules:[
                  {
                    required: true,
                    message: '请输入体力上限',
                  }
                ]
              })(<InputNumber placeholder="请输入体力上限" precision={0} style={{width:"100%"}}/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="点卡价格(两)">
              {getFieldDecorator('pointPrice',{
                rules:[
                  {
                    required: true,
                    message: '请输入点卡价格',
                  }
                ]
              })(<InputNumber placeholder="请输入点卡价格(两)" style={{width:"100%"}}/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="元宵单个积分">
              {getFieldDecorator('riceBallPoint',{
                rules:[
                  {
                    required: true,
                    message: '请输入元宵单个积分',
                  }
                ]
              })(<InputNumber placeholder="请输入元宵单个积分" precision={0} style={{width:"100%"}}/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="元宵单价(W)">
              {getFieldDecorator('riceBallPrice',{
                rules:[
                  {
                    required: true,
                    message: '请输入元宵单价(W)',
                  }
                ]
              })(<InputNumber placeholder="请输入元宵单价" style={{width:"100%"}}/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="在线时长(小时)">
              {getFieldDecorator('onlineHour',{
                rules:[
                  {
                    required: true,
                    message: '请输入每日在线时长',
                  }
                ]
              })(<InputNumber placeholder="请输入每日在线时长(0~24)" style={{width:"100%"}}/>)}
            </FormItem>
          </Row>
          <Row type="flex" justify="center">
            <Button type="primary" style={{marginRight:20}} onClick={this.handleCount}>计算</Button>
            <Button onClick={this.handleReset}>重置</Button>
          </Row>
         { visible && <Row className="count">
  共收益<span>{Math.round(count/10000)}</span>W梦幻币,其中每小时回复体力<span>{minutePhysical}</span>点,每小时消耗点卡钱<span>{minutePointPrice}</span>两,总共可换 <span>{totalNum}</span>个元宵, 毛收益<span>{income}</span>,总消耗<span>{cost}</span>两
          </Row>}
        </div>
      </div>
    )
  }
}

export default Home
