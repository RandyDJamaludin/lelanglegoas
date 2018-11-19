import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Carousel, Input, Icon,Button,Select,Form } from "antd";
import { BannerJual } from "../Components/Partial";
import LogoWhite from "../../assets/image/legoas-white.png";
// import { BannerAbout } from "../Components/Partial";

const { TextArea } = Input;
const Option = Select.Option;

const FormItem = Form.Item;

export class Index extends Component {

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
            <div>
                <BannerJual/>

                <Grid>
                    <Row className="mb-3">
                    <Col xs={12} md={12}>
                        <div className="mt-2 mb-3">
                            <h4 className="text-center color-grey"> Hubungi legoas <br/> untuk dilayani oleh sales kami </h4>
                        </div>

                        <Form onSubmit={this.handleSubmit} >
                        <div>
                            <Row className="panel-form radius" style={{background:'linear-gradient(#274491, #3960CA)'}}>
                                <Col xs={12} md={8} className="panel-form-left p-3 height-100" style={{background:'#D9D9D9'}}>
                                    <Row className="mt-2">
                                        <Col md={6}>
                                            <FormItem>
                                              {getFieldDecorator('name', {
                                                rules: [{ required: true, message: 'masukkan nama!' }],
                                              })(

                                                  <Input
                                                    placeholder="Nama Anda"
                                                  />
                                              )}
                                            </FormItem>

                                        </Col>
                                        <Col md={6}>
                                            <FormItem>
                                              {getFieldDecorator('status', {
                                                rules: [{ required: true, message: 'harus diisi!' }],
                                              })(
                                                <Select
                                                    style={{ width: '100%' }}
                                                    placeholder="Personal atau perusahaan"
                                                    >
                                                    <Option value="personal">Personal</Option>
                                                    <Option value="perusahaan">Perusahaan</Option>
                                                </Select>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={6}>
                                            <FormItem>
                                                  {getFieldDecorator('email', {
                                                    rules: [{ required: true, message: 'harus diisi!' }],
                                                  })(
                                                    <Input
                                                      placeholder="Email Anda"
                                                    />
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col md={6}>
                                            <FormItem>
                                                  {getFieldDecorator('phone', {
                                                    rules: [{ required: true, message: 'harus diisi!' }],
                                                  })(
                                                <Input
                                                  placeholder="Nomor Ponsel"
                                                />
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={12}>
                                            <FormItem>
                                                {getFieldDecorator('pesan', {
                                                rules: [{ required: true, message: 'harus diisi!' }],
                                                })(
                                                <TextArea
                                                rows={4}
                                                placeholder="Pesan Anda"
                                                />
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 mb-2">
                                        <Col md={12}>
                                            <Button type="primary" className="btn-cs" htmlType="submit">SUBMIT</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={4} className="panel-form-right height-100 p-3">
                                    <img className="mb-3" src={LogoWhite} width={200} style={{marginLeft:'-10px'}} />

                                    <p className="color-white">PT Digital Sarana Legoas <br/> Jl. Raya kaliabang km 0,8</p>

                                    <div className="color-white d-flex">
                                        <div className="pr-2">
                                            <Icon type="mail" />
                                        </div>
                                        <div>
                                            <div>
                                                <small>cs@legoas.co.id</small>
                                            </div>
                                            <div>
                                                <small>021.888388388</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        </Form>
                    </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const JualForm = Form.create()(Index);
export default JualForm;
