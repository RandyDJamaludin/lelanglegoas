import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Select, Form, Button } from 'antd'
import { DataCardLocation } from '../AllData/DataCard'
import { ListLelang } from '../Components/Card'
const Option = Select.Option

class Index extends Component {
  render() { 
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    
    function handleBlur() {
      console.log('blur');
    }
    
    function handleFocus() {
      console.log('focus');
    }
    return (
      <div className='wrap-ListLelang'>
        <Grid>
          <Row>
            <Col md={12}>
              <p className='header'> DAFTAR MOBIL - JAKARTA | 31 JANUARY 2018 </p>
              <p className='header'> Pencarian </p>
              <Row> 
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Merk'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Honda</Option>
                    <Option value="lucy">Yamaha</Option>
                    <Option value="tom">Suzuki</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Pilih Model'
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
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Dari Tahun'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">2000</Option>
                    <Option value="lucy">2001</Option>
                    <Option value="tom">2002</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Sampai Tahun'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">2014</Option>
                    <Option value="lucy">2015</Option>
                    <Option value="tom">2016</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Warna'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Putih</Option>
                    <Option value="lucy">Abu - Abu</Option>
                    <Option value="tom">Merah</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Button className='search'> Cari </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{paddingTop:'4%', paddingBottom:'4%'}}>
            {DataCardLocation.map((data,index)=>(
              <Col md={12} key={data.key}>
                <ListLelang
                  number={data.number}
                  name={data.name}
                  merek={data.merek}
                  model={data.model}
                  tipe={data.tipe}
                  at_mt={data.at_mt}
                  year={data.year}
                  warna={data.warna}
                  date={data.date}
                  location={data.location}
                  police={data.police}
                  price={data.price}
                  bundle={data.bundle}
                  image={data.image}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    )
  }
}
 
const WrappedListLelang = Form.create()(Index);
export default WrappedListLelang