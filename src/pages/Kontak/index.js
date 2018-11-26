import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import { Icon, Form, Input, Button, Select } from 'antd'
import { Banner } from "../Components/Partial";
const { TextArea } = Input;
const Option = Select.Option;

export class Index extends Component {
  
  state = {
    name: "",
    tipe: "",
    email: "",
    phone: "",
    pesan: ""
  }

  send() {
    alert(`
    nama = ${this.state.name}
    tipe = ${this.state.tipe}
    email = ${this.state.email}
    phone = ${this.state.phone}
    pesan = ${this.state.pesan}
    `)
  }
  render() { 
        return (
          <div>
            <Banner />
            <div className='wrap-kontak'>
              <Grid>
                <Row>
                  <Col md={3}/>

                  <Col xs={12} md={6}>
                  <div className='right-panel'>
                    <div className='header'>
                      <p className='header'> <span><Icon type="form" /></span> Hubungi Legoas </p>
                      <p className='sub-header'> Hubungi kami untuk dilayani oleh sales kami </p> 
                    </div>
                      <div className='form-contact'>
                        <Form onSubmit={this.handleSubmit}>
                          <Row>
                            <Col xs={6} md={6}>
                              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nama Lengkap" onChange={e => this.setState({ name: e.target.value })} />
                            </Col>
                            <Col xs={6} md={6}>
                              <Select
                                placeholder="personal atau perusahaan"
                                showSearch
                                style={{ width: "100%" }}
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                  option.props.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={value => this.setState({ tipe: value })}
                              >
                                <Option value="personal">personal</Option>
                                <Option value="perusahaan">perusahaan</Option>
                              </Select>
                            </Col>
                          </Row>

                          <Row style={{ paddingTop:'3%'}}>
                            <Col xs={6} md={6}>
                              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                            </Col>
                            <Col xs={6} md={6}>
                              <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=" Nomor Telepon" onChange={e => this.setState({ phone: e.target.value })} />
                            </Col>
                            {/* <Col xs={6} md={6}>
                              <Input prefix={<Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Judul " />
                            </Col> */}
                          </Row>

                          <Row style={{ paddingTop:'3%'}}>
                            <Col xs={12} md={12}>
                              <TextArea placeholder='Pesan' onChange={e => this.setState({ pesan: e.target.value })} />
                              <div className='button-contact'>
                                <Button type="primary" onClick={() => this.send()} > Kirim </Button>
                              </div>
                            </Col>
                          </Row>

                        </Form>
                      </div>
                    </div>
                  </Col>

                </Row>
              </Grid>
            </div>
          </div>
        )
    }
}
 
export default Index;