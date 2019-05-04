import React, { Fragment, Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { SkeletonImg, Skeleton } from 'react-js-skeleton';

const SkeletonHolder = () => (
  <Col md={4} className="p-l-30 p-r-30">
    <div className="searchLelang" style={{ paddingBottom: 10 }}>
      <Row
        style={{
          border: '1px solid #ccc',
          padding: 10
        }}
      >
        <Col md={12}>
          <Row className="contentLelang">
            <Col xs={12} md={12}>
              {/* <Image src={this.props.image} width="100%" /> */}
              <SkeletonImg heightSkeleton={100} />
            </Col>
            <Col xs={12} md={12}>
              <div className="headerLelang">
                <p>
                  {' '}
                  <Skeleton width={200} />{' '}
                </p>
              </div>
              <Row className="box">
                <Col md={12}>
                  <p className="title">
                    {' '}
                    <Skeleton width={100} />{' '}
                  </p>
                </Col>
                <Col md={12}>
                  <p className="title">
                    {' '}
                    <Skeleton width={150} />{' '}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </Col>
);

class SkeletonLoader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SkeletonHolder />
        <SkeletonHolder />
        <SkeletonHolder />
      </Fragment>
    );
  }
}

export default SkeletonLoader;
