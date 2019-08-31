import React from 'react'
import './index.less'
import { Layout, Menu, Breadcrumb } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { pathNames } from './pathNames'

const { Header, Content, Footer } = Layout;

@withRouter
class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.props.location.pathname]}
            style={{ lineHeight: '64px' }}
          >
            {console.log(this.props)
            }
            <Menu.Item key="/home"><Link to="/home">首页</Link> </Menu.Item>
            <Menu.Item key="/blog"><Link to="/blog">博客</Link> </Menu.Item>
            <Menu.Item key="/share"><Link to="/share">分享</Link></Menu.Item>
            <Menu.Item key="/about"><Link to="/about">关于我</Link></Menu.Item>
            <Menu.Item key="/gays"><Link to="/gays">友情链接</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 3%', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {pathNames.map((item) => {
              return <Breadcrumb.Item key={item.name}>{item.name}</Breadcrumb.Item>
            })}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>{this.props.content}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>浙ICP备17047793号-1 ©2019 Created sleepq123</Footer>
      </Layout>
    )
  }
}

export default Main;