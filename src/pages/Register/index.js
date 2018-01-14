import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const FormItem = Form.Item;

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() { 
    const { getFieldDecorator } = this.props.form;
    return ( 
      <div className='wrap-login'>
        <Grid>
          <Row>
            <Col xs={12} md={6} mdPush={3} className='boxshadow-login'>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" size="large" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Email" placeholder="Email" size="large" />
                  )}
                </FormItem>
                
                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Nama" placeholder="Nama" size="large" />
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="No Hp" size="large" />
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" size="large" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Nama" size="large" />
                  )}
                </FormItem>
                
                <FormItem className="actionContent">
                  <Row>
                    <Col xs={12} md={6}>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(
                        <Checkbox>Remember me</Checkbox>
                      )}
                    </Col>
                  </Row>
                  <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                    Log in
                  </Button>
                  <Link to='/login'>
                    <center> Or <a href="">Login now!</a> </center>
                  </Link>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const WrappedRegister = Form.create()(Register);
 
export default WrappedRegister;