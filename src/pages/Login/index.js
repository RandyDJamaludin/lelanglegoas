import React, { Component } from "react"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import { Link } from "react-router-dom"
import { Grid, Row, Col } from "react-bootstrap"
import { connect } from 'react-redux'
import { login } from '../../actions/login'
import {setFailed} from '../../actions/processor'
import Logo from "../../assets/image/logo.jpeg"
const FormItem = Form.Item;

class Login extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps !== this.props) {
      return true
    }

    if(nextState !== this.state) {
      return true
    }

    return false
  }

  componentWillUpdate(nextProps) {
    const { loading, success, failed, navigation } = nextProps
    console.log(failed)
    if (
      failed.condition === true &&
      failed.process_on === 'FAILED_PROCESS_LOGIN'
    ) {
      alert('Login gagal', 'Silahkan Cek Kembali Akun Anda!')
    }
  }

  componentDidUpdate(prevProps) {
    const { failed, setFailed } = prevProps

  }

  handleLogin(){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
        this.props.login(values.username, values.password)
      }else{
        console.log('error:', err)
        alert('login gagal')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
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

              <Form className="login-form">
                <FormItem>
                  {getFieldDecorator("username", {
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
                    onClick={() => this.handleLogin()}
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
const mapStateToProps = state => {
  return{
    success: state.success,
    loading: state.loading,
    failed: state.failed,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    login: (username, password) => dispatch(login(username,password)),
    setFailed: (condition, process_on, message) => dispatch(setFailed(condition, process_on, message))
  }
}
const WrappedNormalLoginForm = Form.create()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
