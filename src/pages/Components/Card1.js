import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Button } from 'antd'

export class Card1 extends Component {
    render() { 
        return (
            <div>
              <div className='background-card'>
                <center>
                  <Image className='components-card' src={this.props.image} width='70%'/>
                  <h3> {this.props.name} </h3>
                  <p> Start Bid <span className='orange'> {this.props.price}</span></p>
                  <Button type="primary">{this.props.button}</Button>
                </center>
              </div>
            </div>
        )
    }
}
 
export default Card1;