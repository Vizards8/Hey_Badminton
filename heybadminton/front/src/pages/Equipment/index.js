import { List, Avatar, Pagination } from "antd";
import React, { useState } from "react";
import MyBreadcrumb from "@/common/MyBreadcrumb";

import "./Equipment.css";

function Equipment() {
  const [currentPage, setCurrentPage] = useState(1);
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

      {/* <ul>
        {currentData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handleChangePage}
      /> */}
    </div>
  );
}

export default Equipment;
