import React from 'react'
import loginClasses from './login.scss'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log("登录ok")
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a href="">Forgot password</a>
                <Button type="primary" htmlType="submit">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </FormItem>
            </Form>
        )
    }
}
const LoginFormWrapper = Form.create()(LoginForm)
class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={[loginClasses['m-login']].join(" ")}>
                <LoginFormWrapper />
            </div>
        )
    }
}

export default Login