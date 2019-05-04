import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PengertianLelang from './PengertianLelang';
import TataCaraLelang from './TataCaraLelang';
import PeraturanLelang from './PeraturanLelang';

class InfoLelang extends Component {
  state = {
    tab: 1
  };

  renderTab = ({ tab }) => {
    switch (tab) {
      case 1:
        return <PengertianLelang />;
      case 2:
        return <TataCaraLelang />;
      case 3:
        return <PeraturanLelang />;

      default:
        return <PengertianLelang />;
    }
  };

  handleClickMenu = tab => {
    this.setState({ tab: tab });
  };

  render() {
    const { tab } = this.state;
    return (
      <div>
        <Grid className="p-t-100 p-b-100" style={{ paddingTop: '3%', paddingBottom: '3%' }}>
          <Row>
            <Col md={12}>
              <div className="info-lelang-ct">
                <div className="menu-info">
                  <div
                    className={`menu-item ${tab === 1 ? 'active' : ''}`}
                    onClick={this.handleClickMenu.bind(this, 1)}
                  >
                    PENGERTIAN LELANG
                  </div>
                  <div
                    className={`menu-item ${tab === 2 ? 'active' : ''}`}
                    onClick={this.handleClickMenu.bind(this, 2)}
                  >
                    TATA CARA LELANG
                  </div>
                  <div
                    className={`menu-item ${tab === 3 ? 'active' : ''}`}
                    onClick={this.handleClickMenu.bind(this, 3)}
                  >
                    PERATURAN LELANG
                  </div>
                </div>
                {this.renderTab(this.state)}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default InfoLelang;
