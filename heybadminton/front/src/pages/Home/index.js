<<<<<<< HEAD
import React from 'react'
import { Layout, Menu, Breadcrumb, Carousel, Button, Card, Avatar, Divider } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const { Content } = Layout
=======
import React from 'react';
import { Layout, Carousel, Card, Avatar, Divider } from 'antd';

import "./Home.css";

const { Meta } = Card
const { Content } = Layout;
>>>>>>> f42d7abfecce4a562e4671be5d4ccc3b175e8d6f

const HomePage = () => {
  const carouselImages = [
    { id: 1, src: 'https://bwfworldchampionships.bwfbadminton.com/wp-content/uploads/sites/8/2022/09/WC2023_Digital_WC-Site_1024x481_3.jpg' },
    { id: 2, src: 'https://bwfworldtour.bwfbadminton.com/wp-content/uploads/sites/11/2019/11/wt_banner_oct2019.jpg' },
    { id: 3, src: 'https://via.placeholder.com/800x300?text=Image+3' },
  ]

  const CourtmateList = ({ courtmates }) => (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      {courtmates.map((courtmate) => (
        <Card style={{ width: '30%', margin: '0 1rem 1rem' }} key={courtmate.id}>
          <Meta
            avatar={<Avatar src={courtmate.avatar} />}
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

  const EquipmentList = ({ Equipments }) => (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      {Equipments.map((Equipment) => (
        <Card style={{ width: '30%', margin: '0 1rem 1rem' }} key={Equipment.id}>
          <Meta
            avatar={<Avatar src={Equipment.avatar} />}
            title={Equipment.title}
            description={
              Equipment.description.slice(0, 50) + (Equipment.description.length > 50 ? '...' : '')
            }
          />
        </Card>
      ))}
    </div>
  );



  const Equipments = [
    {
      id: 1,
      avatar: "https://picsum.photos/50?random=1",
      title: "Equipment Match 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur."
    },
    {
      id: 2,
      avatar: "https://picsum.photos/50?random=2",
      title: "Equipment May 2",
      description: "The BWF World Championships is the most prestigious tournament in badminton, featuring the world's best players competing for the title of world champion in five disciplines."
    },
    {
      id: 3,
      avatar: "https://picsum.photos/50?random=3",
      title: "Equipment Oct 3",
      description: "The YONEX All England Open is one of the oldest and most prestigious badminton tournaments in the world, part of the BWF World Tour, and considered one of the five most prestigious events in the tour."
    },
    {
      id: 4,
      avatar: "https://picsum.photos/50?random=4",
      title: "Equipment Dec 12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur."
    },
    {
      id: 5,
      avatar: "https://picsum.photos/50?random=5",
      title: "Equipment Nov 17",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur."
    },
    {
      id: 6,
      avatar: "https://picsum.photos/50?random=6",
      title: "Equipment Match 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur."
    },
  ]

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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
      avatar: "https://picsum.photos/50?random=3",
      title: "Friendly Match 3",
      time: "11:00am",
      date: "NA",
      location: "Location 3",
      participants: "2",
      maxParticipants: "4",
      closed: false,
    },
  ]

  return (
<<<<<<< HEAD
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ 'margin-top': '20px' }}>
          <h1>Welcome to our website!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque gravida velit, quis tincidunt quam placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
=======
    <div className="equipment-wrapper">

      <Content style={{}}>
        <div className="site-layout-content">
          {/* <h1>Welcome to our website!</h1> */}
          <Divider style={{ borderColor: 'black' }}><h2>Smash your way to greatness - Play Badminton!</h2></Divider>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque gravida velit, quis tincidunt quam placerat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p> */}
          <Carousel autoplay>
            {carouselImages.map((image) => (
              <div key={image.id}>
                <img src={image.src} alt={`Slide ${image.id}`} style={{ width: '960px', height: '420px', margin: 'auto' }} />
              </div>
            ))}
          </Carousel>



          <Divider orientation="left" style={{ borderColor: 'black' }}>
            <h2>Equipment Products</h2>
          </Divider>

          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <EquipmentList Equipments={Equipments} />
          </div>

          <Divider orientation="left" style={{ borderColor: 'black' }}><h2>Courtmate</h2></Divider>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <CourtmateList courtmates={Courtmates} />

          </div>
        </div>

      </Content>

    </div>
  );
};
>>>>>>> f42d7abfecce4a562e4671be5d4ccc3b175e8d6f

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
