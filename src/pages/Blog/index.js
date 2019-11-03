import React from 'react'
import apiData from '@src/api/user'
import { Link } from 'react-router-dom'
import { Steps, Divider } from 'antd'
import BlogInfo from './blogInfo'

const { Step } = Steps

class Blog extends React.Component{
    componentDidMount() {
        this.login();
    }

    async login() {
        try {
            let res = await apiData.userList({
                page: 1,
                pageSize: 10,
            })
            console.log(res.data);
            
        } catch (error) {
            console.error(error);
        }
    }
    render(){
        return (<div>
            <Divider />
            <Steps progressDot current={1} direction="vertical">
              <Step title="Finished" description="This is a description. This is a description." />
              <Step title="Finished" description="This is a description. This is a description." />
              <Step title="In Progress" description="This is a description. This is a description." />
              <Step title="Waiting" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
            <Link to="/blog/info/2">跳转</Link>

          </div>)
    }
}

export default Blog;