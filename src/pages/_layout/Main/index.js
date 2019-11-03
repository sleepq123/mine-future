import React from 'react'
import './index.less'
import { Layout, Menu, Breadcrumb, Button, Dropdown } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { pathNames } from './pathNames'

const { Header, Content, Footer } = Layout;

@withRouter
class Main extends React.Component {
	state = {
		pathNames: [],
	}
	componentDidMount() {
		this.getPathNames();
	}
	componentDidUpdate(preProps) {
        if (preProps.location.pathname !== this.props.location.pathname) {
            this.getPathNames();
        }
    }
	getPathNames() {
		const { pathname } = this.props.location;
		this.setState({
			pathNames: pathname.split('/')
		})
	}
	render() {
		const { pathNames } = this.state;
		const items = pathNames.map(item => {
			return (<Breadcrumb.Item key={item}>
				{item}
			</Breadcrumb.Item>)
		})
		const menu = (
			<Menu>
			<Menu.Item>
			  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
				1st menu item
			  </a>
			</Menu.Item>
			<Menu.Item>
			  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
				2nd menu item
			  </a>
			</Menu.Item>
			<Menu.Item>
			  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
				3rd menu item
			  </a>
			</Menu.Item>
		  </Menu>
		)
		return (
			<Layout style={{ height: '100vh', overflow: 'auto' }}>
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={[this.props.location.pathname]}
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key="/home"><Link to="/home">首页</Link> </Menu.Item>
						<Menu.Item key="/blog"><Link to="/blog">博客</Link> </Menu.Item>
						<Menu.Item key="/about"><Link to="/about">关于我</Link></Menu.Item>
						<Menu.Item key="/share">
							<Dropdown overlay={menu} >
								<Link to="/share">分享</Link>
							</Dropdown>
						</Menu.Item>
						<Menu.Item key="/gays"><Link to="/gays">友情链接</Link></Menu.Item>
					</Menu>
					<Button type="link" style={{ float: 'right', marginTop: 16 }}>登出</Button>
				</Header>
				<Content style={{ padding: '0 3%', marginTop: '64px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item key="index">首页</Breadcrumb.Item>
						{/* <Breadcrumb.Item key={path.name}>{item.name}</Breadcrumb.Item> */}
						{items}
					</Breadcrumb>
					<div style={{ background: '#fff', padding: '24px', minHeight: '500px' }}>{this.props.content}</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>浙ICP备17047793号-1 ©2019 Created sleepq123</Footer>
			</Layout>
		)
	}
}

export default Main;