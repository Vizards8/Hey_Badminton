import React from 'react'
import './header.less'
import logo from '@/assets/images/logo.png'
import profile from '@/assets/images/profile.png'
import { Input, Dropdown, Avatar, Space, message } from 'antd'

const { Search } = Input

const items = [
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
      content: 'This is a warning message',
    })
  }

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
                <Avatar src={profile} />
              </Space>
            </span>
          </Dropdown>
        </div>

      </div>
    </div>
  )
}

export default NavigateBar