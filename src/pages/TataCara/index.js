import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Collapsible from 'react-collapsible';


export class Index extends Component {
    render() { 
        return (
            <div>
              <div className='wrap-tatacara'>
                <div className='header'>
                  <Grid>
                    <Row>
                      <Col xs={12} md={12}>
                        <div className='body-tatacara'>
                          <p className='header'> Bagaimana Cara Membuat Lelangnya ? </p>
                          <p className='sub-header'> Terakhir di Update 01 Januari 2018 </p>
                        </div>
                        <Collapsible trigger="MELAKUKAN PENDAFTARAN"  transitionTime={100} easing='ease' open={true} lazyRender={true}>
                          <div className='body1'>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                          </div>
                        </Collapsible>

                        <Collapsible trigger="MELAKUKAN PENDAFTARAN"  transitionTime={100} easing='ease'>
                          <div className='body1'>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                          </div>
                        </Collapsible>

                        <Collapsible trigger="MELAKUKAN PENDAFTARAN"  transitionTime={100} easing='ease'>
                          <div className='body1'>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                          </div>
                        </Collapsible>
                      </Col>
                    </Row>
                  </Grid>
                </div>
              </div>
            </div>
        )
    }
}
 
export default Index;