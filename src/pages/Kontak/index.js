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
                  <Col xs={12} md={6}>
                    <div className='left-panel'>
                      <div className='contact-us'>
                        <p className='header'><span> <Icon type="contacts" /></span> KONTAK KAMI </p>
                        <p className='desc'> Ada yang perlu Anda tanyakan mengenai MPM Lelang dan MPM Group? Silakan jangan ragu untuk menghubungi kami. Kami akan siap melayani Anda dengan sepenuh hati </p> 
                      </div>
                      <div className='corporate'>
                        <p className='header'> PT. TELE DIGITAL KREATIF </p>
                        <p className='sub-header'> HEAD OFFICE </p>
                      </div>
                      <Row>
                        <Col xs={12} md={6}>
                          <p> Sunburst, CBD Lot II No. 10
                              Jl. Kapten Sudirman Sunburst, 
                              CBD Lot II No. 10
                              Jl. Kapten Sudirman
                              BSD City - Jakarta 15322
                          </p>
                        </Col>
                        <Col xs={12} md={12}/>
                      </Row>

                      <Row>
                        <Col xs={12} md={6}>
                          <div className='header-icon'>
                            <p className='phone'> <Icon type="phone" /> + 628 0000 0000 </p>
                            <p className='phone'> <Icon type="mail" /> product@telecreativenow.com</p>
                          </div>
                        </Col>
                      </Row>

                    </div>
                  </Col>

                  <Col xs={12} md={6}>
                    <div className='right-panel'>
                      <div className='header'>
                        <p className='header'> <span><Icon type="form" /></span> Form Kontak </p>
                        <p className='sub-header'> Anda juga bisa menghubungi kami secara langsung dengan mengirimkan pesan melalui form kontak berikut ini. </p> 
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