import React from 'react';
import { Layout, Breadcrumb, Carousel, Button, Card, Avatar, Divider } from 'antd';
import { StarOutlined } from '@ant-design/icons';

import "./Home.css";

const { Meta } = Card
const { Content } = Layout;

const HomePage = () => {
  const carouselImages = [
    { id: 1, src: 'https://bwfworldchampionships.bwfbadminton.com/wp-content/uploads/sites/8/2022/09/WC2023_Digital_WC-Site_1024x481_3.jpg' },
    { id: 2, src: 'https://bwfworldtour.bwfbadminton.com/wp-content/uploads/sites/11/2019/11/wt_banner_oct2019.jpg' },
    { id: 3, src: 'https://via.placeholder.com/800x300?text=Image+3' },
  ];

  const CourtmateList = ({ courtmates }) => (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {courtmates.map((courtmate) => (
        <Card style={{ width: '25%', margin: '0 3rem' }} key={courtmate.title}>
          <Meta
            avatar={<Avatar src={courtmate.image} />}
            title={courtmate.title}
            description={
              <div>
                <p>Location: {courtmate.location}</p>
                <p>Date: {courtmate.date}</p>
                <p>Time: {courtmate.time}</p>
                <p>
                  Participants: {courtmate.participants}/{courtmate.maxParticipants}
                </p>
              </div>
            }
          />
        </Card>
      ))}
    </div>
  );

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
  ];

  const Courtmates = [
    {
      id: 1,
      avatar: "https://picsum.photos/50?random=1",
      title: "Friendly Match 1",
      time: "9:00am",
      date: "NA",
      location: "Location 1",
      participants: "6",
      maxParticipants: "8",
      closed: false,
    },
    {
      id: 2,
      avatar: "https://picsum.photos/50?random=2",
      title: "Friendly Match 2",
      time: "10:00am",
      date: "NA",
      location: "Location 2",
      participants: "4",
      maxParticipants: "6",
      closed: false,
    },
    {
      id: 3,
      avatar: "https://picsum.photos/50?random=3",
      title: "Friendly Match 3",
      time: "11:00am",
      date: "NA",
      location: "Location 3",
      participants: "2",
      maxParticipants: "4",
      closed: false,
    },
  ];

  return (
    <div className="equipment-wrapper">
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <h1>Welcome to our website!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque gravida velit, quis tincidunt quam placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <Carousel autoplay>
              {carouselImages.map((image) => (
                <div key={image.id}>
                  <img src={image.src} alt={`Image ${image.id}`} style={{ width: '800px', height: '312.5px', margin: 'auto' }} />
                </div>
              ))}
            </Carousel>

            <Divider orientation="left"><h2>Equipment Products</h2></Divider>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <CourtmateList courtmates={Courtmates} />
            </div>

            <Divider orientation="left"><h2>Courtmate</h2></Divider>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <CourtmateList courtmates={Courtmates} />

            </div>
          </div>

        </Content>
      </Layout>
    </div>
  );
};

export default HomePage;
