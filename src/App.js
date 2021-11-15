import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { Button, Card, Modal } from 'antd'

import './ui.css'
import 'antd/dist/antd.css'

export default class App extends Component {

  //初始化状态
  state = {
    modalAddInfoVisible: false,
    todoObj: {},
    nums: [
      { id: nanoid(), num: Math.ceil(Math.random() * 10) },
      { id: nanoid(), num: Math.ceil(Math.random() * 10) },
      { id: nanoid(), num: Math.ceil(Math.random() * 10) },
      { id: nanoid(), num: Math.ceil(Math.random() * 10) },
      { id: nanoid(), num: Math.ceil(Math.random() * 10) }
    ]
  }

  openModalAddInfo = (type, id, num) => {
    this.setState({ modalAddInfoVisible: true, todoObj: { id, num } })
  }

  //
  increment = () => {
    //获取原todos
    const { todoObj, nums } = this.state
    var newNums = nums.map((num, index) => {
      return num.id === todoObj.id ? { id: todoObj.id, num: todoObj.num + 1 } : num;
    })
    //更新状态
    this.setState({ modalAddInfoVisible: false, nums: newNums, todoObj: {} })
  }

  decrement = () => {
    //获取原todos
    const { todoObj, nums } = this.state
    var newNums = nums.map((num, index) => {
      return num.id === todoObj.id ? { id: todoObj.id, num: todoObj.num - 1 } : num;
    })
    //更新状态
    this.setState({ modalAddInfoVisible: false, nums: newNums, todoObj: {} })
  }

  render() {
    const { nums } = this.state
    return (
      <div style={{ textAlign: 'center' }}>
        <Card title="测试">
          {
            nums.map(num => (
              <Button className="button" key={num.id} type="primary" onClick={() => this.openModalAddInfo("modalCenter", num.id, num.num)}>{num.num}</Button>
            ))
          }
        </Card>

        
        <Modal title="测试+1"
          visible={this.state.modalAddInfoVisible}
          footer={null}
          onOk={() => {
            this.setState({ modalAddInfoVisible: false })
          }}
          onCancel={() => {
            this.setState({ modalAddInfoVisible: false })
          }}
        >
          <div>当前点击的数字:<span style={{fontSize:'28px',color:'red'}}>{this.state.todoObj.num}</span></div><div style={{textAlign:'center'}}><span><Button className="button" type="primary" onClick={this.increment}>+1</Button><Button className="button" type="primary" onClick={this.decrement}>-1</Button></span></div>
        </Modal>
      </div>
    )
  }
}
