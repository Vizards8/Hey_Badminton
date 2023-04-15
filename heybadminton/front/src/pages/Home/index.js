import React from "react";
import { Layout, Carousel, Card, Avatar, Divider, Button } from "antd";
import { StarOutlined } from "@ant-design/icons";

import "./Home.css";
import dummy_author from "@/assets/data/author.json";
import dummy_posts from "@/assets/data/posts.json";
import dummy_matches from "@/assets/data/matches.json";

const { Meta } = Card;
const { Content } = Layout;

const HomePage = () => {
  const carouselImages = [
    {
      id: 1,
      src: "https://bwfworldchampionships.bwfbadminton.com/wp-content/uploads/sites/8/2022/09/WC2023_Digital_WC-Site_1024x481_3.jpg",
    },
    {
      id: 2,
      src: "https://bwfworldtour.bwfbadminton.com/wp-content/uploads/sites/11/2019/11/wt_banner_oct2019.jpg",
    },
    { id: 3, src: "https://via.placeholder.com/800x300?text=Image+3" },
  ];

  const CourtmateList = ({ courtmates }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {courtmates.map((courtmate) => (
        <Card
          style={{ width: "30%", margin: "0 1rem 1rem" }}
          key={courtmate.id}
        >
          <Meta
            avatar={<Avatar src={author.avatar} />}
            title={courtmate.title}
            description={
              <div>
                <p>Location: {courtmate.location}</p>
                <p>Date: {courtmate.date}</p>
                <p>Time: {courtmate.time}</p>
                <p>
                  Participants: {courtmate.participants}/
                  {courtmate.maxParticipants}
                </p>
              </div>
            }
          />
        </Card>
      ))}
    </div>
  );

  const EquipmentList = ({ Equipments }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {Equipments.map((Equipment) => (
        <Card
          style={{ width: "30%", margin: "0 1rem 1rem" }}
          key={Equipment.id}
        >
          <Meta
            avatar={<Avatar src={author.avatar} />}
            title={Equipment.title}
            description={
              Equipment.content.slice(0, 50) +
              (Equipment.content.length > 50 ? "..." : "")
            }
          />
        </Card>
      ))}
    </div>
  );

  const author = dummy_author;
  const posts = dummy_posts.slice(0, 6);
  const matches = dummy_matches;

  return (
    <div className="home-wrapper">
      <Divider style={{ borderColor: "black" }}>
        <h2>Smash your way to greatness - Play Badminton!</h2>
      </Divider>
      <Carousel autoplay>
        {carouselImages.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={`Slide ${image.id}`}
              style={{
                width: "960px",
                height: "420px",
                margin: "auto",
              }}
            />
          </div>
        ))}
      </Carousel>

      <Divider orientation="left" style={{ borderColor: "black" }}>
        <h2>Equipment</h2>
      </Divider>
      <EquipmentList Equipments={posts} />

      <Divider orientation="left" style={{ borderColor: "black" }}>
        <h2>Courtmate</h2>
      </Divider>
      <CourtmateList courtmates={matches} />
    </div>
  );
};

export default HomePage;
