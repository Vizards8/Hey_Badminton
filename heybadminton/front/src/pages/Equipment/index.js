import { Layout, Breadcrumb, List, Avatar } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import "./Equipment.css";

const { Content } = Layout;

const data = [
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
];

function Equipment() {
  return (
    <div className="equipment-wrapper">
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2px",
              }}
            >
              <HomeOutlined />
            </div>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tournament</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </Layout>

      <List
        itemLayout="horizontal"
        dataSource={data}
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
    </div>
  );
}

export default Equipment;
