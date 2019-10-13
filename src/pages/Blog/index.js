import React from 'react'
import apiData from '@src/api/user';

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
        return <h1>博客</h1>
    }
}

export default Blog;