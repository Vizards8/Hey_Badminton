import React from 'react'
import { Layout, Menu, Breadcrumb, Carousel, Button, Card, Avatar, Divider } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const { Content } = Layout

const HomePage = () => {
  const carouselImages = [
    { id: 1, src: 'https://bwfworldchampionships.bwfbadminton.com/wp-content/uploads/sites/8/2022/09/WC2023_Digital_WC-Site_1024x481_3.jpg' },
    { id: 2, src: 'https://bwfworldtour.bwfbadminton.com/wp-content/uploads/sites/11/2019/11/wt_banner_oct2019.jpg' },
    { id: 3, src: 'https://via.placeholder.com/800x300?text=Image+3' },
  ]

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/200x200?text=Product+1',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Sed scelerisque gravida velit, quis tincidunt quam placerat sed.',
      image: 'https://via.placeholder.com/200x200?text=Product+2',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'https://via.placeholder.com/200x200?text=Product+3',
      price: 39.99,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/64x64?text=JD',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque gravida velit, quis tincidunt quam placerat sed.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/64x64?text=JS',
      rating: 5,
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      avatar: 'https://via.placeholder.com/64x64?text=BJ',
      rating: 3,
      text: 'Fusce eget risus nec quam posuere dignissim a a libero. Suspendisse bibendum nisi ut tellus laoreet, ac eleifend metus suscipit.',
    },
  ]

  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ 'margin-top': '20px' }}>
          <h1>Welcome to our website!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque gravida velit, quis tincidunt quam placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

          <Divider orientation="left"><h2>Tournament</h2></Divider>
          <Carousel autoplay>
            {carouselImages.map((image) => (
              <div key={image.id}>
                <img src={image.src} alt={`Image ${image.id}`} style={{ width: '800px', height: '312.5px', margin: 'auto' }} />
              </div>
            ))}
          </Carousel>

          <Divider orientation="left"><h2>Equipment</h2></Divider>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {products.map((product) => (
              <Card key={product.id} style={{ width: 250, margin: '16px' }}>
                <img src={product.image} alt={product.name} style={{ height: 200 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
                  <h3>{product.name}</h3>
                </div>
                <p>{product.description}</p>
                <Button type="primary">View Detail</Button>
              </Card>
            ))}
          </div>

          <Divider orientation="left"><h2>Play together</h2></Divider>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} style={{ width: 300, margin: '16px', padding: '16px', border: '1px solid #f0f0f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Avatar src={testimonial.avatar} />
                  <span>{testimonial.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                  <StarOutlined style={{ color: '#ffc107', marginRight: '8px' }} />
                  <span>{testimonial.rating} stars</span>
                </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default HomePage
