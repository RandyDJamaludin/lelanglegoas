import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import { Button } from 'antd'

export class ContentTab extends Component {
    render() { 
        return (
            <div>
              <div className='background-card2'>
                <center>
                  <Image className='components-card2' src={this.props.image} width='70%'/>
                  <h3> {this.props.name} </h3>
                  <p className='skin'> {this.props.color} </p>
                  <p className='price'> Start Bid <span className='orange'> {this.props.price} </span></p>
                  <Button type="primary">{this.props.button}</Button>
                </center>
              </div>
            </div>
        )
    }
}
 
export default ContentTab;