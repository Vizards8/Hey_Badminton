import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Card,
  Button,
  Modal,
  Typography,
} from "antd";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import "./Courtmate.css";

const { Option } = Select;
const { Title, Paragraph, Text, Link } = Typography;

const data = [
  {
    id: 1,
    title: "Friendly Match 1",
    time: "9:00am",
    date: "2023-04-05",
    location: "Location 1",
    participants: "6",
    maxParticipants: "8",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur.",
    closed: false,
  },
  {
    id: 2,
    title: "Friendly Match 2",
    time: "10:00am",
    date: "2023-04-12",
    location: "Location 2",
    participants: "4",
    maxParticipants: "6",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur.",
    closed: false,
  },
  {
    id: 3,
    title: "Friendly Match 3",
    time: "11:00am",
    date: "2023-04-23",
    location: "Location 3",
    participants: "2",
    maxParticipants: "4",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu turpis malesuada, semper elit sed, gravida leo. Sed ultrices magna in felis volutpat, ut finibus tellus egestas. Donec pulvinar magna id libero egestas convallis. Integer in quam ac magna accumsan consectetur.",
    closed: false,
  },
];

const defaultFilter = {
  date: null,
  time: "all",
  location: "all",
  participants: "all",
  closed: "all",
};

const Courtmate = () => {
  const [visible, setVisible] = useState(false);
  const [detailVisible, setDetailVisvible] = useState(false);
  const [matches, setMatches] = useState(data);
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [filter, setFilter] = useState(defaultFilter);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    let currMatches = [...matches];
    if (filter.date) {
      const formatted_date = filter.date.toISOString().slice(0, 10);
      currMatches = currMatches.filter(
        (match) => match.date === formatted_date
      );
    }
    if (filter.time && filter.time !== "all") {
      currMatches = currMatches.filter((match) => match.time === filter.time);
    }
    if (filter.location && filter.location !== "all") {
      currMatches = currMatches.filter(
        (match) => match.location === filter.location
      );
    }
    if (filter.participants && filter.participants !== "all") {
      currMatches = currMatches.filter(
        (match) => match.participants === filter.participants
      );
    }
    if (filter.closed && filter.closed !== "all") {
      currMatches = currMatches.filter(
        (match) => match.participants === match.maxParticipants
      );
    }
    setFilteredMatches(currMatches);
  }, [filter]);

  const handleJoin = (values) => {
    // TODO: Submit form data to server-side API
    setVisible(false);
  };

  const handleShowDetails = (match) => {
    setSelectedMatch(match);
    setDetailVisvible(true);
  };

  return (
    <div className="courtmate-wrapper">
      <MyBreadcrumb paths={["Courtmate"]} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Title level={2}>Filters</Title>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DatePicker
                value={filter.date}
                onChange={(value) => setFilter({ ...filter, date: value })}
              />
            </Form.Item>
            <Form.Item label="Time">
              <Select
                value={filter.time}
                onChange={(value) => setFilter({ ...filter, time: value })}
              >
                <Option value="all">All</Option>
                <Option value="9:00am">9:00am</Option>
                <Option value="10:00am">10:00am</Option>
                <Option value="11:00am">11:00am</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Location">
              <Select
                value={filter.location}
                onChange={(value) => setFilter({ ...filter, location: value })}
              >
                <Option value="all">All</Option>
                <Option value="Location 1">Location 1</Option>
                <Option value="Location 2">Location 2</Option>
                <Option value="Location 3">Location 3</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Number of players">
              <Select
                value={filter.participants}
                onChange={(value) =>
                  setFilter({ ...filter, participants: value })
                }
              >
                <Option value="all">All</Option>
                <Option value="2">2</Option>
                <Option value="4">4</Option>
                <Option value="6">6</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Status">
              <Select
                value={filter.closed}
                onChange={(value) => setFilter({ ...filter, closed: value })}
              >
                <Option value="all">All</Option>
                <Option value={false}>Open</Option>
                <Option value={true}>Close</Option>
              </Select>
            </Form.Item>
          </Form>
          <Button
            style={{ width: "100%" }}
            onClick={() => setFilter(defaultFilter)}
          >
            Reset
          </Button>
        </div>
        <div style={{ flex: 2, marginLeft: "50px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "50px",
            }}
          >
            {filteredMatches.map((match) => (
              <Card
                key={match.id}
                title={match.title}
                extra={
                  <Button type="primary" onClick={() => setVisible(true)}>
                    Join
                  </Button>
                }
                onClick={handleShowDetails}
                hoverable
              >
                <p>Date: {match.date}</p>
                <p>Time: {match.time}</p>
                <p>Location: {match.location}</p>
                <p>
                  Participants: {match.participants}/{match.maxParticipants}
                </p>
                <p>Note: {match.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Join Match"
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={handleJoin}
      >
        <Form layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Courtmate;
