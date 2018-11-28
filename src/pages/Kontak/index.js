import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import { Icon, Form, Input, Button } from 'antd'
const { TextArea } = Input;

export class Index extends Component {
    render() { 
        return (
            <div className='wrap-kontak'>
              <Grid>
                <Row>
                  <Col md={3}/>

                  <Col xs={12} md={6}>
                    <div className='right-panel'>
                      <div className='header'>
                        <p className='header'> <span><Icon type="form" /></span> Form Kontak </p>
                        <p className='sub-header'> Hubungi kami dengan cara mengirimkan pesan kepada kami </p> 
                      </div>
                      <div className='form-contact'>
                        <Form onSubmit={this.handleSubmit}>
                          <Row>
                            <Col xs={6} md={6}>
                              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nama Lengkap" />
                            </Col>
                            <Col xs={6} md={6}>
                              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            </Col>
                          </Row>

                          <Row style={{ paddingTop:'3%'}}>
                            <Col xs={6} md={6}>
                              <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=" Nomor Telepon" />
                            </Col>
                            <Col xs={6} md={6}>
                              <Input prefix={<Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Judul " />
                            </Col>
                          </Row>

                          <Row style={{ paddingTop:'3%'}}>
                            <Col xs={12} md={12}>
                              <TextArea placeholder='Pesan'/>
                              <div className='button-contact'>
                                <Button type="primary"> Kirim </Button>
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
        )
    }
}
 
export default Index;