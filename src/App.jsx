import React, { Component } from 'react'

import { Button } from 'antd'
import { DingtalkOutlined, WechatOutlined } from '@ant-design/icons'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        App... <br />
        <Button type="primary">Primary Button</Button>
        <br />
        <DingtalkOutlined />
        <WechatOutlined />
      </div>
    )
  }
}
