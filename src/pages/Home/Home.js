import React, { Component } from 'react';
import { Banner } from '../Components/Partial';
import HomeDescription from './HomeDescription';
import HomeInstagramFeed from './HomeInstagramFeed';
import HomeRekomendasi from './HomeRekomendasi';
import HomeMiniVideo from './HomeMiniVideo';
import HomeTestimoni from './HomeTestimoni';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      video: true
    };
  }

  render() {
    return (
      <div>
        <Banner />

        <HomeDescription />

        <HomeRekomendasi />

        <HomeTestimoni />

        <HomeInstagramFeed />

        <HomeMiniVideo />
      </div>
    );
  }
}

export default Home;
