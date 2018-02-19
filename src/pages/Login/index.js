import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Grid, Row, Col } from "react-bootstrap";
import Logo from "../../assets/image/logo.jpeg";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wrap-login">
        <Grid>
          <Row>
            <Col md={4} />
            <Col xs={12} md={5} className="boxshadow-login">
              <Row>
                <Col xs={2} md={3} />
                <Col xs={8} md={6}>
                  <center>
                    <img
                      src={Logo}
                      alt="Logo"
                      style={{ width: "100%", padding: 10 }}
                    />
                  </center>
                </Col>
                <Col md={3} />
              </Row>

              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator("userName", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                      size="large"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                      size="large"
                    />
                  )}
                </FormItem>
                <FormItem className="actionContent">
                  <Row>
                    <Col xs={12} md={6}>
                      {getFieldDecorator("remember", {
                        valuePropName: "checked",
                        initialValue: true
                      })(<Checkbox>Remember me</Checkbox>)}
                    </Col>

                    <Col xs={12} md={6}>
                      <a className="login-form-forgot" href="">
                        Forgot password
                      </a>
                    </Col>
                  </Row>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    size="large"
                  >
                    Log in
                  </Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;
