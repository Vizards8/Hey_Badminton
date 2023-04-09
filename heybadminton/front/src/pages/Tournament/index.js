import React from "react";
import { Card, List } from "antd";
import "./Tournament.css";

const data = [
  {
    title: "Tournament 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, felis eu cursus hendrerit, nulla nulla congue quam, eget tristique est dui vitae eros.",
    date: "April 12, 2023",
    location: "New York, NY",
    registrationLink: "https://www.example.com/register/tournament-1",
  },
  {
    title: "Tournament 2",
    description:
      "Sed quis ligula euismod, sodales massa et, consequat nulla. Nulla facilisi. Proin nec nunc euismod, ullamcorper risus eu, faucibus nibh.",
    date: "May 2, 2023",
    location: "Los Angeles, CA",
    registrationLink: "https://www.example.com/register/tournament-2",
  },
  {
    title: "Tournament 3",
    description:
      "Donec non elit non elit tincidunt convallis. Ut dignissim mi sit amet diam tincidunt varius. Vestibulum blandit, sapien eget varius tincidunt, elit elit ultrices metus, et placerat lorem tellus ut eros.",
    date: "June 15, 2023",
    location: "Chicago, IL",
    registrationLink: "https://www.example.com/register/tournament-3",
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
