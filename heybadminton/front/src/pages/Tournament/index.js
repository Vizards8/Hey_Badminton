import React from "react";
import { Layout, Breadcrumb, Card, List} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "./Tournament.css";

const {Content} = Layout;

const data = [
  {
    title: "BWF World Championships",
    description:
      "The BWF World Championships is the most prestigious tournament in badminton, featuring the world's best players competing for the title of world champion in five disciplines.",
    date: "August 21-27, 2023",
    location: "Tokyo, Japan",
    registrationLink: "https://development.bwfbadminton.com/register-official",
    pic: "https://bwfworldchampionships.bwfbadminton.com/wp-content/plugins/bwf-menu-system/images/logo-wch-mobile-09.png",
  },
  {
    title: "YONEX All England Open",
    description:
      "The YONEX All England Open is one of the oldest and most prestigious badminton tournaments in the world, part of the BWF World Tour, and considered one of the five most prestigious events in the tour.",
    date: "March 7-12, 2023",
    location: "Birmingham, England",
    registrationLink: "https://www.allenglandbadminton.com/",
    pic: "https://www.allenglandbadminton.com/wp-content/uploads/2021/09/All-England-Badminton.png",
  },
  {
    title: "TOTAL BWF Sudirman Cup",
    description:
      "The TOTAL BWF Sudirman Cup is a mixed team badminton championship held every two years. It features teams from different countries competing in a knockout format tournament, named after Dick Sudirman, a former Indonesian badminton player and coach.",
    date: "May 22-29, 2023",
    location: "Mumbai, India",
    registrationLink: "https://bwfsudirmancup.bwfbadminton.com/",
    pic: "https://extranet.bwf.sport/docs/events/4708/logo-colour/TotalEnergies_BWF_Sudirman%20Cup_2023.svg",
  },
];

const Tournament = () => {
  return (
    <div className="tournament-wrapper">
      <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
              <HomeOutlined />
          </div>
          <Breadcrumb.Item>
            <a href={'/'}>Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href={'/game'}>Tournament</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Content>
    </Layout> 
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              className="tournament-card"
              cover={
                <img
                  alt="Tournament Logo"
                  src={item.pic}
                  className="tournament-pic"
                />
              }
            >
              <Card
                title={item.title}
                extra={
                  <a
                    href={item.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                }
              >
                <p>{item.description}</p>
                <p>Date: {item.date}</p>
                <p>Location: {item.location}</p>
              </Card>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Tournament;
