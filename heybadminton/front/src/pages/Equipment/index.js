import { Layout, Breadcrumb, List, Avatar } from "antd";
import "./Equipment.css";

import maomao from "@/assets/images/profile.png";

const {Content} = Layout;

const data = [
  {
    id: 1,
    title: "Topic 1",
    description: "This is the first topic",
    author: "John Doe",
    image: maomao,
  },
  {
    id: 2,
    title: "Topic 2",
    description: "This is the second topic",
    author: "Jane Smith",
    image: maomao,
  },
  {
    id: 3,
    title: "Topic 3",
    description: "This is the third topic",
    author: "Bob Johnson",
    image: maomao,
  },
  {
    id: 1,
    title: "Topic 1",
    description: "This is the first topic",
    author: "John Doe",
    image: maomao,
  },
  {
    id: 2,
    title: "Topic 2",
    description: "This is the second topic",
    author: "Jane Smith",
    image: maomao,
  },
  {
    id: 3,
    title: "Topic 3",
    description: "This is the third topic",
    author: "Bob Johnson",
    image: maomao,
  },
];

function Equipment() {
  return (
    <div className="equipment-wrapper">
      <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Tournament</Breadcrumb.Item>
        </Breadcrumb>
      </Content>
    </Layout> 
      <div className="site-layout-content">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href={`/posts/${item.id}`}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Equipment;
