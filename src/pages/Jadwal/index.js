import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import { Pagination } from "antd"
import { JadwalLelang } from "../Components/Card"
import { DataJadwalMotor, DataJadwalMobil } from "../AllData/DataCard"
import GoCalendar from "react-icons/lib/go/calendar"


export class Index extends Component {
  render() {

    return (
      <div className="page-jadwal" style={{ paddingBottom: "3%" }}>
        <div className="landing-lelang">
          <Grid style={{ paddingTop: "2%" }}>
            <div className="body-header">
              <p>
                <GoCalendar id="date" /> JADWAL LELANG
              </p>
              <hr />
            </div>
            <Row>
              <Col md={6}>
                <Row>
                  {DataJadwalMobil.map((data, index) => (
                    <Col xs={12} md={12} key={data.key}>
                      <JadwalLelang
                        transport={data.transport}
                        location={data.location}
                        date={data.date}
                        time={data.time}
                        openhouse={data.openhouse}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  {DataJadwalMotor.map((data, index) => (
                    <Col xs={12} md={12} key={data.key}>
                      <JadwalLelang
                        transport={data.transport}
                        location={data.location}
                        date={data.date}
                        time={data.time}
                        openhouse={data.openhouse}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} />
              <Col xs={12} md={4}>
                <div className="pagination">
                  <Pagination defaultCurrent={6} total={50} />
                </div>
              </Col>
              <Col xs={12} md={4} />
            </Row>
          </Grid>
          
        </div>
      </div>
    );
  }
}

export default Index;
