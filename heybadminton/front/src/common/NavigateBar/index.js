import React from 'react'
import './header.less'
import logo from '@/assets/images/logo.png'
import avar from '@/assets/images/avar.png'
import { Input, Dropdown, Avatar, Space, message } from 'antd'

import { getToken } from '@/utils'

const { Search } = Input

const beforeItems = [
  {
    key: 'register',
    label: (
      <a href="/register">
        Register
      </a>
    ),
  },
  {
    key: 'log in',
    label: (
      <a href="/login">
        Login
      </a>
    ),
  },
]

const afterItems = [
  {
    key: 'profile',
    label: (
      <a href="/profile">
        profile
      </a>
    ),
  },
  {
    key: 'logout',
    label: (
      <a href="/logout">
        Logout
      </a>
    ),
  },
]

const NavigateBar = () => {

  const [messageApi, contextHolder] = message.useMessage()
  const onSearch = (value) => {
    console.log(value)
    messageApi.open({
      type: 'warning',
      content: 'Still in working!',
    })
  }

  const items = (getToken() == null) ? beforeItems : afterItems
  // const avar_src = (getToken() == null) ? beforeItems : afterItems

  return (
    <div className="header">
      <div className="navbar">
        <div className='nav-logo'>
          <a href='/'>
            <img src={logo} className="img-logo" alt='logo' />
          </a>
        </div>
        <div className='nav-item'>
          <ul>
            <li><a href='/game' className='selected'>Tournament</a></li>
            <li><a href='/equip'>Equipment</a></li>
            <li><a href='/courtmate'>Courtmate</a></li>
            <li><a href='/locations'>Court Locations</a></li>
          </ul>
        </div>
        <div className='nav-search'>
          {contextHolder}
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 300 }} />
        </div>

        <div className='nav-dropdown-menu'>
          <Dropdown
            menu={{
              items,
            }}
          >
            <span onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar src={avar} />
              </Space>
            </span>
          </Dropdown>
        </div>

      </div>
    </div>
  )
}

export default NavigateBar