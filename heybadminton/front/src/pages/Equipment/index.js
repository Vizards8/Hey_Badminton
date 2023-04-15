import { List, Avatar, Pagination, Collapse, Input, Button, Upload } from "antd";
import React, { useState } from "react";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import { PictureOutlined } from "@ant-design/icons";


import "./Equipment.css";

const { Panel } = Collapse;
const { TextArea } = Input;

function Equipment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleButtonClick = () => {
    const message = `Title: ${title}\nContent: ${content}`;
    console.log(message);
    // do something with the title and content values
  };

  const [data] = useState([
    {
      id: 1,
      title: "Topic 1",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 2,
      title: "Topic 2",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 3,
      title: "Topic 3",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 1,
      title: "Topic 1",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 2,
      title: "Topic 2",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 3,
      title: "Topic 3",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 1,
      title: "Topic 1",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 2,
      title: "Topic 2",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 3,
      title: "Topic 3",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
    {
      id: 5,
      title: "Topic 5",
      description: "This is the second topic",
      author: "Jane Smith",
      image: "https://picsum.photos/50?random=2",
    },
    {
      id: 6,
      title: "Topic 6",
      description: "This is the third topic",
      author: "Bob Johnson",
      image: "https://picsum.photos/50?random=3",
    },
    {
      id: 4,
      title: "Topic 4",
      description: "This is the first topic",
      author: "John Doe",
      image: "https://picsum.photos/50?random=1",
    },
  ]);
  const pageSize = 10;

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentData = data.slice(startIdx, endIdx);

  return (
    <div className="equipment-wrapper">
      <MyBreadcrumb paths={["Equipment"]} />
      <List
        itemLayout="horizontal"
        dataSource={currentData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<a href={`/post/${item.id}`}>{item.title}</a>}
              description={item.description}
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
          <Input placeholder="Title" value={title} onChange={handleTitleChange} />
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
            <Button type="primary" onClick={handleButtonClick}>
              Post
            </Button>
          </div>
        </Panel>

      </Collapse>



    </div>
  );
}

export default Equipment;
