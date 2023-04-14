import React, { useState, useEffect } from "react";
import {
  Layout,
  Form,
  Input,
  Select,
  DatePicker,
  Card,
  Button,
  Modal,
} from "antd";
import { floatButtonPrefixCls } from "antd/es/float-button/FloatButton";

const { Content } = Layout;
const { Option } = Select;

const data = [
  {
    id: 1,
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
    title: "Friendly Match 3",
    time: "11:00am",
    date: "NA",
    location: "Location 3",
    participants: "2",
    maxParticipants: "4",
    closed: false,
  },
];

const defaultFilter = {
  time: "all",
  location: "all",
  participants: "all",
  closed: "all",
};

const Courtmate = () => {
  const [visible, setVisible] = useState(false);
  const [matches, setMatches] = useState(data);
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [filter, setFilter] = useState(defaultFilter);

  useEffect(() => {
    let currMatches = [...matches];
    console.log(filter);
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

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Form layout="vertical">
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
                  onChange={(value) =>
                    setFilter({ ...filter, location: value })
                  }
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
          </div>
          <div style={{ flex: 2, marginLeft: "50px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "50px",
              }}
            >
              {filteredMatches.map((match) => (
                <Card
                  key={match.id}
                  title={match.title}
                  extra={<Button onClick={() => setVisible(true)}>Join</Button>}
                >
                  <p>Location: {match.location}</p>
                  <p>Date: {match.date}</p>
                  <p>Time: {match.time}</p>
                  <p>
                    Participants: {match.participants}/{match.maxParticipants}
                  </p>
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
      </Content>
    </Layout>
  );
};

export default Courtmate;
