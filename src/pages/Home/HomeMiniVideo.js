import React, { Fragment, Component } from "react";
import { Button } from "antd";

class MiniVideo extends Component {
  constructor() {
    super();

    this.state = {
      video: true
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.video && (
          <div className="sticky-video">
            <Button
              className="btn-delay"
              type="primary"
              shape="circle"
              icon="close"
              onClick={() => {
                this.setState({ video: false });
              }}
            />
            <div class="video-container">
              <iframe
                className="content-media__object"
                id="featured-video"
                width="444"
                height="255"
                src="https://www.youtube.com/embed/pua_QFrmCqM?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default MiniVideo;
