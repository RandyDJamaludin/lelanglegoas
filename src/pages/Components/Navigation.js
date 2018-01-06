import React, { Component } from 'react'
import { Menu, Col, Row } from 'antd';

class Navigation extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <div className="gutter-example">
          <Row gutter={24}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={12}>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">

                <Menu.Item key="beranda">
                  Beranda
                </Menu.Item>

                <Menu.Item key="tataCara">
                  Tata Cara Lelang
                </Menu.Item>

                <Menu.Item key="lokasiLelang">
                  Lokasi Lelang
                </Menu.Item>

                <Menu.Item key="jadwalLelang">
                  Jawal Lelang
                </Menu.Item>

                <Menu.Item key="kontakKami">
                  Kontak Kami
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
 
export default Navigation;