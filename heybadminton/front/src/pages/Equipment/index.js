import { Layout, Breadcrumb, List, Avatar } from 'antd';

import maomao from "@/assets/images/profile.png"

// import logo from "./logo.png"

const {Content} = Layout;

const data = [
  {
    title: 'Topic 1',
    description: 'This is the first topic',
    author: 'John Doe',
    image: maomao,
  },
  {
    title: 'Topic 2',
    description: 'This is the second topic',
    author: 'Jane Smith',
    image: maomao,
  },
  {
    title: 'Topic 3',
    description: 'This is the third topic',
    author: 'Bob Johnson',
    image: maomao,
  },
  {
    title: 'Topic 1',
    description: 'This is the first topic',
    author: 'John Doe',
    image: maomao,
  },
  {
    title: 'Topic 2',
    description: 'This is the second topic',
    author: 'Jane Smith',
    image: maomao,
  },
  {
    title: 'Topic 3',
    description: 'This is the third topic',
    author: 'Bob Johnson',
    image: maomao,
  },
  {
    title: 'Topic 1',
    description: 'This is the first topic',
    author: 'John Doe',
    image: maomao,
  },
  {
    title: 'Topic 2',
    description: 'This is the second topic',
    author: 'Jane Smith',
    image: maomao,
  },
  {
    title: 'Topic 3',
    description: 'This is the third topic',
    author: 'Bob Johnson',
    image: maomao,
  },
  {
    title: 'Topic 1',
    description: 'This is the first topic',
    author: 'John Doe',
    image: maomao,
  },
  {
    title: 'Topic 2',
    description: 'This is the second topic',
    author: 'Jane Smith',
    image: maomao,
  },
  {
    title: 'Topic 3',
    description: 'This is the third topic',
    author: 'Bob Johnson',
    image: maomao,
  },
];

function Equipment() {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Equipment</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={<a href="#">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </Content>
    </Layout>
  );
}

export default Equipment;
