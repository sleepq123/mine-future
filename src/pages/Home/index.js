import React from 'react'
import { List, Card, Row, Col } from 'antd'
import './index.less'

class Home extends React.Component {
    state = {
        data: [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 5',
            },
            {
                title: 'Title 6',
            },
        ],
        list: [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ]
    }

    render() {
        let { data, list } = this.state;
        return (
            <Row style={{ display: 'flex' }}>
                <Col
                    xs={24} sm={24} md={24} lg={19} xl={18}
                >
                    <List
                        grid={{
                            gutter: 24,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 4,
                            xxl: 3,
                        }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Card title={item.title}>Card content</Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col
                    offset={1}
                    xs={0} sm={0} md={0} lg={4} xl={5}
                >
                    <List
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={list}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Col>
            </Row>
        )
    }
}

export default Home;