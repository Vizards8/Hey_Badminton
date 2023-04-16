import React, { useState } from "react";
import { Tabs, List, Button, Modal, Typography, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import MyBreadcrumb from "@/common/MyBreadcrumb";

import "./Admin.css";

import dummy_author from "@/assets/data/author.json";
import dummy_posts from "@/assets/data/posts.json";
import dummy_matches from "@/assets/data/matches.json";

const { Title, Paragraph, Text, Link } = Typography;
const { TabPane } = Tabs;

function Admin() {
  const [posts, setPosts] = useState(dummy_posts);
  const [matches, setMatches] = useState(dummy_matches);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [matchToDelete, setMatchToDelete] = useState(null);
  const [currentTab, setCurrentTab] = useState("posts");

  const handlePostDeleteClick = (post) => {
    setPostToDelete(post);
    setDeleteModalVisible(true);
  };

  const handleMatchDeleteClick = (match) => {
    setMatchToDelete(match);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    if (postToDelete !== null) {
      setPosts(posts.filter((p) => p.id !== postToDelete.id));
      setPostToDelete(null);
    } else {
      setMatches(matches.filter((m) => m.id !== matchToDelete.id));
      setMatchToDelete(null);
    }
    setDeleteModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setPostToDelete(null);
    setMatchToDelete(null);
    setDeleteModalVisible(false);
  };

  return (
    <div className="admin-wrapper">
      <MyBreadcrumb paths={["Admin"]} />
      <Title>Admin Page</Title>
      <Tabs activeKey={currentTab} onChange={(key) => setCurrentTab(key)}>
        <TabPane tab="Posts" key="posts">
          <List
            style={{ marginTop: "20px" }}
            itemLayout="horizontal"
            dataSource={posts}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handlePostDeleteClick(item)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={dummy_author.avatar} />}
                  title={item.title}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Matches" key="matches">
          <List
            style={{ marginTop: "20px" }}
            itemLayout="horizontal"
            dataSource={matches}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleMatchDeleteClick(item)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta title={item.title} description={item.note} />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
      <Modal
        title="Confirm Delete"
        open={deleteModalVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        <p>Are you sure you want to delete "{postToDelete?.title}"?</p>
      </Modal>
    </div>
  );
}

export default Admin;
