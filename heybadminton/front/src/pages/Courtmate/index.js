import { Layout, Breadcrumb } from 'antd';

const {Content} = Layout;

const data = () => {
  return <div>find a courtmate</div>
}

function Courtmate() {
  return (
    <Layout className="layout">
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Courtmate</Breadcrumb.Item>
      </Breadcrumb>
    </Content>
  </Layout> 
  );
}

export default Courtmate;