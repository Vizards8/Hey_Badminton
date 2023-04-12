import React from "react";
import { Card, List } from "antd";
import "./Tournament.css";

const data = [
  {
    title: "BWF World Championships",
    description: "The BWF World Championships is the most prestigious tournament in badminton, featuring the world's best players competing for the title of world champion in five disciplines.",
    date: "August 21-27, 2023",
    location: "Tokyo, Japan",
    registrationLink: "https://development.bwfbadminton.com/register-official",
    },
    {
    title: "YONEX All England Open",
    description: "The YONEX All England Open is one of the oldest and most prestigious badminton tournaments in the world, part of the BWF World Tour, and considered one of the five most prestigious events in the tour.",
    date: "March 7-12, 2023",
    location: "Birmingham, England",
    registrationLink: "https://www.allenglandbadminton.com/",
    },
    {
    title: "TOTAL BWF Sudirman Cup",
    description: "The TOTAL BWF Sudirman Cup is a mixed team badminton championship held every two years. It features teams from different countries competing in a knockout format tournament, named after Dick Sudirman, a former Indonesian badminton player and coach.",
    date: "May 22-29, 2023",
    location: "Mumbai, India",
    registrationLink: "https://bwfsudirmancup.bwfbadminton.com/",
    },
];

const Tournament = () => {
  return (
    <div className="tournament-wrapper">
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="tournament-list-item">
            <Card
              className="tournament-card"
              title={item.title}
              extra={
                <a
                  href={item.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              }
            >
              <p>{item.description}</p>
              <p>Date: {item.date}</p>
              <p>Location: {item.location}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Tournament;
