import React, { Component } from 'react'
import MultipleRegionSelect from  'fy-mutiple-region-relect'
import { Button } from 'antd'
import regionData from './region'
import './style.scss'

class Select extends Component {
  onMutipleSelect = (ref) => {
    this.mutipleSelect = ref;
  }

  getAddress = ()=>{
    console.log(this.mutipleSelect.getAllAddressArr());
  }

  clearAddress = ()=>{
    this.mutipleSelect.clearAddressArr();
  }

  render(){
    const { regions, allAreaList } = regionData;
    return(
      <div className="select-container">
        <h2>测试地区多选</h2>
        <MultipleRegionSelect 
          regions={regions}
          allAreaList={allAreaList}
          showClear={true}
          disabledDistrict={true}
          onRef={this.onMutipleSelect}
        />
        <div className="button-group">
          <Button type="primary" onClick={this.getAddress}>获取地区json</Button>
          <Button style={{marginLeft:20}} onClick={this.clearAddress}>重置</Button>
        </div>
      </div>
    )
  }
}

export default Select
