import React from 'react'
import { Avatar, Descriptions, Divider } from 'antd'

class About extends React.Component {
    render() {
        return (
            <div>
                <Descriptions title={<Avatar style={{ backgroundColor: 'oranger', verticalAlign: 'middle' }} size="large">
                    LC
                </Avatar>}
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                    <Descriptions.Item label="姓 名">李 超</Descriptions.Item>
                    <Descriptions.Item label="职 位">前端bug工程师</Descriptions.Item>
                    <Descriptions.Item label="现居住址">浙江杭州</Descriptions.Item>
                    <Descriptions.Item label="爱 好">篮球、足球、游泳、看书</Descriptions.Item>
                    <Descriptions.Item label="">
                        想做一只快乐的、有灵魂的前端开发
                    </Descriptions.Item>
                </Descriptions>
                <Divider />
            </div>
        )
    }
}

export default About;