import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Pagination, Icon, Input, Select, DatePicker, Form, Button, Divider } from 'antd'
import { CardCarousel, JadwalLelang } from '../Components/Card'
import { DataCardCarousel, DataCardLocation } from '../AllData/DataCard'
import AliceCarousel from 'react-alice-carousel'
import GoCalendar from 'react-icons/lib/go/calendar'
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker

export class Index extends Component {
  
    render() { 
      const { getFieldDecorator } = this.props.form
      const rangeConfig = {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
      }
      function handleChange(value) {
        console.log(`selected ${value}`);
      }
      
      function handleBlur() {
        console.log('blur');
      }
      
      function handleFocus() {
        console.log('focus');
      }

      const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        }
      };
        return (
            <div className='page-jadwal'>
              <div className='landing-lelang'>
                <Grid>
                  <Row>
                    <Col md={12} className='searchPanel'>
                      <h4> CARI DAFTAR LELANG </h4>
                      <Divider/>
                      <Row>
                        <Col md={4}>
                          <h5> Free Keyword</h5>
                          <Input width='100%'/>
                        </Col>
                        <Col md={4}>
                          <h5> Lokasi  </h5>
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="jack">Jakarta Barat</Option>
                            <Option value="lucy">Jakarta Timur</Option>
                            <Option value="tom">Jakarta Utara</Option>
                          </Select>
                        </Col>
                        <Col md={4}>
                          <h5> Merk </h5>
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="jack">Yamaha</Option>
                            <Option value="lucy">Honda</Option>
                            <Option value="tom">Jaguar</Option>
                          </Select>
                        </Col>
                      </Row>
                      <Row style={{paddingTop:10}}>
                        <Col md={4}>
                        <h5> Model </h5>
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="jack">Model A</Option>
                            <Option value="lucy">Model B</Option>
                            <Option value="tom">Model C</Option>
                          </Select>
                        </Col>
                        <Col md={3}>
                          <h5> Tahun </h5>
                          <Input width='100%'/>
                        </Col>
                        <Col md={2}>
                          <h5 style={{marginTop:30}}><center>Sampai dengan </center></h5>
                        </Col>
                        <Col md={3}>
                          <h5> Tahun </h5>
                          <Input width='100%'/>
                        </Col>
                      </Row>
                      <Row style={{paddingTop:10}}>
                        <Col md={4}>
                          <h5> Warna </h5>
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="jack">Merah</Option>
                            <Option value="lucy">Putih</Option>
                            <Option value="tom">Hitam</Option>
                          </Select>
                        </Col>
                        <Col md={4}>
                          <FormItem>
                            <h5> Tanggal</h5>
                            {getFieldDecorator('range-picker', rangeConfig)(
                              <RangePicker width='100%'/>
                            )}
                          </FormItem>
                        </Col>
                        <Col md={4}>
                          <FormItem>
                            <Button type="primary" htmlType="submit" className='buttonSearch'>CARI</Button>
                          </FormItem>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Grid>

                <Grid style={{paddingTop:'2%'}}>
                  <div className='body-header'>
                    <p><GoCalendar id='date'/> JADWAL LELANG</p>
                    <hr/>
                  </div>
                  <Row>
                  {DataCardLocation.map((data, index) => (
                    <Col xs={6} md={12} key={data.key}>
                      
                      <JadwalLelang 
                        number={data.number}
                        name={data.name}
                        year={data.year}
                        type={data.type}
                        location={data.location}
                        date={data.date}
                        time={data.time}
                        image={data.image}
                        price={data.price}
                        grade={data.grade}
                        button={data.button}
                      />
                    </Col>
                  ))}
                  </Row>
                  <Row>
                    <Col xs={12} md={3}/>
                    <Col xs={12} md={6}>
                      <div className='pagination'>
                        <Pagination defaultCurrent={6} total={500} />
                      </div>
                    </Col>
                    <Col xs={12} md={3}/>
                  </Row>
                </Grid>
              </div>
              
              <Grid className='wrap-cardCarousel' style={{ paddingTop:'3%',paddingBottom:'3%'}}>
                <div className='header'>
                  <Row>
                    <Col xs={6} md={6}>
                      <p className='left'>ON GOING AUCTIONS </p>
                    </Col>
                    <Col xs={6} md={6}>
                      <p className='right'>View All Featured Products <Icon type="arrow-right" /></p>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <AliceCarousel
                      duration={400}
                      autoPlay={true}
                      startIndex = {1}
                      fadeOutAnimation={true}
                      mouseDragEnabled={true}
                      playButtonEnabled={true}
                      responsive={responsive}
                      autoPlayInterval={2000}
                      autoPlayDirection="rtl"
                      autoPlayActionDisabled={true}
                      onSlideChange={this.onSlideChange}
                      onSlideChanged={this.onSlideChanged}
                    >
                    {DataCardCarousel.map((data, index) => (
                      <Col xs={12} md={12} key={data.key}>  
                        <CardCarousel
                          name={data.name}
                          image={data.image}
                          color={data.color}
                          lastBid={data.lastBid}
                          openhouse={data.openhouse}
                        />
                      </Col>
                    ))}
                  </AliceCarousel>
                </Row>
              </Grid>

              <Grid className='wrap-cardCarouselMobile'>
                <Row>
                  <AliceCarousel
                      duration={400}
                      autoPlay={true}
                      startIndex = {1}
                      fadeOutAnimation={true}
                      mouseDragEnabled={true}
                      playButtonEnabled={true}
                      responsive={responsive}
                      autoPlayInterval={2000}
                      autoPlayDirection="rtl"
                      autoPlayActionDisabled={true}
                      onSlideChange={this.onSlideChange}
                      onSlideChanged={this.onSlideChanged}
                    >
                    {DataCardCarousel.map((data, index) => (
                      <Col xs={12} md={12} key={data.key}>  
                        <CardCarousel
                          name={data.name}
                          image={data.image}
                          color={data.color}
                          lastBid={data.lastBid}
                          openhouse={data.openhouse}
                        />
                      </Col>
                    ))}
                  </AliceCarousel>
                </Row>
              </Grid>
            </div>

        )
    }
}

const WrappedTimeRelatedForm = Form.create()(Index);
export default WrappedTimeRelatedForm