import React, { Component } from "react";
import Instafeed from 'react-instafeed';
const instafeedTarget = 'instafeed';

class InstagramFeed extends Component {
    constructor() {
      super();
      this.state = {
      };
    }

    componentDidMount() {

    }

    shouldComponentUpdate() {
        return false;
    }

    render(){
        return(
            <div id={instafeedTarget}>
                  <Instafeed
                    limit='4'
                    ref='instafeed'
                    resolution='standard_resolution'
                    sortBy='most-recent'
                    target={instafeedTarget}
                    template={`<a href='{{link}}' target='_blank' class='instafeed__item'>
                      <img class='instafeed__item__background' src='{{image}}' />
                        <div class='instafeed__item__overlay'>
                          <div class='instafeed__item__overlay--inner'>
                          </div>
                        </div>
                    </a>`}
                    userId='7647214269'
                    clientId='c593810dc87b45a28539dc0851bb53a8'
                    accessToken='7647214269.1677ed0.3d3a0abad52e43c4ae9ff481ca4dcad2'
                  />
            </div>
        )
    }
}

export default InstagramFeed
