import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { withRouter } from 'react-router-dom'
import apiData from '@src/api/user.js'

@withRouter
class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.login(values);
            }
        });
    };

    async login(params) {
        try {
            let res = await apiData.login(params);
            message.success('登录成功，欢迎您');
            console.log(res);
            
            localStorage.setItem('token', 'Bearer ' + res.data.token);
            this.props.history.push('/home');
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{}}>
                MINN_FUTRUE
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入你的用户名或手机号!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名或手机号"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="请输入密码"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                        <a href="">现在就去注册!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);
