import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Form, Input, Divider, Button, Select, Checkbox } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

export class Index extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form; 
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    return (
      <div className='wrap-registerChoosePage'> 
        <Grid>
          <Row>
            <Col md={1}/>
            <Col md={10}>
              <div className='body-register'>
                <div className='header'>
                  <p> Pendaftaran Peserta Lelang </p>
                </div>
                <div className='body'>
                <Row>
                  <Col md={6}>
                    <div className='headerLeftPanel'>
                      <p> Syarat dan Ketentuan </p>
                    </div>
                    <div className='bodyLeftPanel'>
                      <div className='content'>
                        <h4> PADA SAAT OPEN HOUSE </h4>
                        <p> Selama acara Open House peminat diberikan kesempatan untuk memeriksa fisik & dokumen unit yang akan di Lelang, pada hari Lelang tidak diperkenankan lagi untuk melihat objek lelang. Pengunjung Open House dilarang mengambil atau merusak atau memindahkan atribut, nomor, tulisan atau tanda-tanda yang menempel pada objek lelang.</p>
                        <Divider/>
                        <h4> KONDISI OBYEK YANG DI LELANG </h4>
                        <p> Peserta lelang memahami dan menyetujui bahwa unit yang di Lelang adalah“sebagaimana adanya”. Peserta telah memeriksa/mengerti kondisi fisik unit dan dokumen objek lelang. Jika terdapat kekurangan atau cacat baik yang terlihat maupun tidak terlihat sepenuh nya menjadi menjadi resiko pemenang lelang. Untuk memudahkan pelaksanaan, panitia membuat daftar lot lelang. Daftar lot lelang tidak bisa dijadikan dasar keberatan atau klaim atas unit yang telah dimenangkan. </p>
                        <Divider/>
                        <h4> SEBELUM MENGIKUTI LELANG </h4>
                        <p>Peminat yang bermaksud mengikuti Lelang harus menyetor uang jaminan sebesar Rp 5.000.000,- (lima juta rupiah) / mobil dan melakukan pendaftaran Lelang. Uang jaminan disetorkan ke Rekening PT Balai Lelang Serasi yang harus sudah efektif pada saat pendaftaran peserta Lelang. Peserta dapat mendaftarkan diri sebagai peserta ke panitia lelang di masing-masing kota.</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='headerRightPanel'>
                      <Row>
                        <Form onSubmit={this.handleSubmit}>
                          <Col md={4}>
                            <p> Nama Akun : </p>
                          </Col>
                          <Col md={7}>
                            <FormItem>
                              {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                              })(
                                <Input placeholder="Nama akun" />
                              )}
                            </FormItem>
                          </Col>

                          <Col md={4}>
                            <p> Kata Sandi </p>
                          </Col>
                          <Col md={7}>
                            <FormItem>
                              {getFieldDecorator('password', {
                                rules: [{
                                  required: true, message: 'Please input your password!',
                                }, {
                                  validator: this.checkConfirm,
                                }],
                              })(
                                <Input type="password" placeholder="Kata sandi" />
                              )}
                            </FormItem>
                          </Col>

                          <Col md={4}>
                            <p> Konfirmasi Kata Sandi </p>
                          </Col>
                          <Col md={7}>
                            <FormItem>
                              {getFieldDecorator('confirm', {
                                rules: [{
                                  required: true, message: 'Please confirm your password!',
                                }, {
                                  validator: this.checkPassword,
                                }],
                              })(
                                <Input type="password" onBlur={this.handleConfirmBlur} placeholder="Ulangi kata sandi" />
                              )}
                            </FormItem>
                          </Col>

                          <Col md={4}>
                            <p> No Telepon </p>
                          </Col>
                          <Col md={7}>
                            <FormItem>
                              {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                              })(
                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Phone number" />
                              )}
                            </FormItem>
                          </Col>

                          <Col md={4}>
                            <p> Konfirmasi Kata Sandi </p>
                          </Col>
                          <Col md={7}>
                            <FormItem>
                              {getFieldDecorator('email', {
                                rules: [{
                                  type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                  required: true, message: 'Please input your E-mail!',
                                }],
                              })(
                                <Input placeholder="Email" />
                              )}
                            </FormItem>
                          </Col>

                          <Col md={12}>
                            <FormItem>
                              {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                              })(
                                <Checkbox> Saya Setuju dengan <a href="">Syarat dan Ketentuan</a></Checkbox>
                              )}
                            </FormItem>
                            <Divider/>
                          </Col>

                          <Col md={8}/>
                          <Col md={3}>
                            <FormItem>
                              <Button type="primary" htmlType="submit" style={{float:'right'}}>Daftar</Button>
                            </FormItem>
                          </Col>

                        </Form>
                      </Row>
                    </div>
                  </Col>
                </Row>
                </div>
              </div>
            </Col>
            <Col md={1}/>
          </Row>
        </Grid>
      </div>
    )
  }
}
const WrappedRegistrationForm = Form.create()(Index); 
export default WrappedRegistrationForm;
