import { List, Avatar, Pagination, Collapse, Input, Button, Upload, Space } from "antd";
import React, { useState } from "react";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import { PictureOutlined } from "@ant-design/icons";
import dummy_posts from "@/assets/data/posts.json";
import dummy_author from "@/assets/data/author.json";

import "./Equipment.css";

const { Panel } = Collapse;
const { TextArea } = Input;

function Equipment() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]); // store all posts
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState(dummy_posts);

  const pageSize = 10;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentData = data.slice(start, end); // display only the current page of posts

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleButtonClick = () => {
    setLoading(true);
    // Create a new post object with the current date as the ID
    const newPost = {
      id: new Date().getTime(),
      title: title,
      description: content,
      image: "https://picsum.photos/50?random=2",
    };
    // Add the new post to the data array
    setData([newPost, ...Userdata]);
    // Reset the form
    setTitle('');
    setContent('');
    setLoading(false);
  };

  return (
    <div className="equipment-wrapper">
      <MyBreadcrumb paths={["Equipment"]} />
      <List
        itemLayout="horizontal"
        dataSource={currentData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={dummy_author.avatar} />}
              title={<a href={`/post/${item.id}`}>{item.title}</a>}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handleChangePage}
      />

      <div style={{ paddingTop: '1rem' }}> {/* Add padding top */} </div>


      <Collapse size="large">
        <Panel header="Create a post" key="1">
          <Input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              marginBottom: 24,
              marginTop: 12,
            }}
            onChange={handleContentChange}
            placeholder="Content"
            value={content}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Upload
                action=""
                listType="picture"
              // defaultFileList={[...fileList]}
              >
                <Button icon={<PictureOutlined />}>Upload</Button>
              </Upload>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Space>
              <Button type="primary" onClick={handleButtonClick} htmlType="submit" loading={loading}>
                Post
              </Button>
            </Space>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Equipment;
