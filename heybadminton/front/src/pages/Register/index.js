import React, { useState } from 'react'
import { Form, Input, Button, Upload, message, Card } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import logo from '@/assets/images/logo.png'

import './register.less'

const Register = () => {
  const [form] = Form.useForm()
  const [avatarUrl, setAvatarUrl] = useState('')

  // 处理头像上传
  const handleAvatarUpload = (info) => {
    if (info.file.status === 'done') {
      // 上传成功，设置头像地址
      setAvatarUrl(info.file.response.url)
    } else if (info.file.status === 'error') {
      // 上传失败，提示错误信息
      message.error('头像上传失败')
    }
  }

  // 处理提交表单
  const handleSubmit = (values) => {
    // TODO: 处理提交逻辑
    console.log(values)
  }

  return (
    <div className="register">
      <Card className="register-container">
        <Form form={form} onFinish={handleSubmit}>
          <img className="logo" src={logo} alt="" />
          <Form.Item name="avatar" label="Profile">
            <Upload.Dragger
              name="avatar"
              action="/api/upload"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleAvatarUpload}
            >
              {avatarUrl ? (
                <img src={avatarUrl} alt="Profile" style={{ width: '100%' }} />
              ) : (
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
              )}
              <p className="ant-upload-text">Drag or Click to upload profile</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: '请输入邮箱' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: '请确认密码' },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次密码不一致'))
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="introduction" label="Intro">
            <Input.TextArea />
          </Form.Item>
          <div className='button-submit'>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>

        </Form>
      </Card>
    </div>

  )
}

export default Register
