import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Tag } from 'antd'

export class CardCarousel extends Component {
    render() { 
        return (
            <div className='background-cardCarousel'>
            <center>
                <Image className='components-card' src={this.props.image}/>
                <h3>{this.props.name} </h3>
                <p className='color'> {this.props.color} </p>
                <p className='last'> Last Bid <span className='orange'> {this.props.lastBid}</span></p>
                <Tag color="green">{this.props.openhouse}</Tag>
            </center>
            </div>
        )
    }
}
 
export default CardCarousel;