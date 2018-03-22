import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {
  Pagination,
  Input,
  Select,
  Form,
  Button,
  Divider
} from "antd";
import { JadwalLelang, SearchLelang } from "../Components/Card";
import {
  DataJadwalMotor,
  DataJadwalMobil,
  DataCardLocation
} from "../AllData/DataCard";
import GoCalendar from "react-icons/lib/go/calendar";
const FormItem = Form.Item;
const Option = Select.Option;

export class Index extends Component {
  render() {

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    function handleBlur() {
      console.log("blur");
    }

    function handleFocus() {
      console.log("focus");
    }

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
          <Grid style={{paddingTop:'3%', paddingBottom:'3%'}}>
            <Row>
              <Col md={5} className="searchPanel">
                <p style={{ fontWeight: "bold" }}> CARI MOBIL / MOTOR </p>
                <Divider />
                <Row>
                  <Col md={4}>
                    <p> Free Keyword</p>
                    <Input width="100%" />
                  </Col>
                  <Col md={4}>
                    <p> Lokasi </p>
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Jakarta Barat</Option>
                      <Option value="lucy">Jakarta Timur</Option>
                      <Option value="tom">Jakarta Utara</Option>
                    </Select>
                  </Col>
                  <Col md={4}>
                    <p> Merek </p>
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Yamaha</Option>
                      <Option value="lucy">Honda</Option>
                      <Option value="tom">Jaguar</Option>
                    </Select>
                  </Col>
                </Row>
                <Row style={{ paddingTop: 10 }}>
                  <Col md={6}>
                    <p> Model </p>
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Model A</Option>
                      <Option value="lucy">Model B</Option>
                      <Option value="tom">Model C</Option>
                    </Select>
                  </Col>
                  <Col md={6}>
                    <p> Warna </p>
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Merah</Option>
                      <Option value="lucy">Putih</Option>
                      <Option value="tom">Hitam</Option>
                    </Select>
                  </Col>
                </Row>
                <Row style={{ paddingTop: 10 }}>
                  <Col md={5}>
                    <p> Tahun </p>
                    <Input width="100%" />
                  </Col>
                  <Col md={2}>
                    <p style={{ marginTop: 30, textAlign: "center" }}> S/d </p>
                  </Col>
                  <Col md={5}>
                    <p> Tahun </p>
                    <Input width="100%" />
                  </Col>
                </Row>
                <Row style={{ paddingTop: 15 }}>
                  <Col md={12}>
                    <p> Jenis Unit </p>
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Mobil</Option>
                      <Option value="lucy">Motor</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="buttonSearch"
                      >
                        CARI
                      </Button>
                    </FormItem>
                  </Col>
                </Row>
              </Col>
              <Col md={1} />
              <Col md={6}>
                <Row id="hasilPencarian">
                  <p style={{ fontWeight: "bold", marginLeft: 10 }}>
                    {" "}
                    Hasil Pencarian{" "}
                  </p>
                  {DataCardLocation.map((data, index) => (
                    <Col md={12} key={data.key}>
                      <SearchLelang
                        number={data.number}
                        name={data.name}
                        police={data.police}
                        pajak={data.pajak}
                        price={data.price}
                        bundle={data.bundle}
                        year={data.year}
                        type={data.type}
                        image={data.image}
                      />
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col xs={1} md={3} />
                  <Col xs={10} md={7}>
                    <Pagination defaultCurrent={6} total={50} />
                  </Col>
                  <Col xs={1} md={3} />
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

const WrappedTimeRelatedForm = Form.create()(Index);
export default WrappedTimeRelatedForm;
