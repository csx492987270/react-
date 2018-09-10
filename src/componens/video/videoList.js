import React, { Component } from 'react';
import './../../css/vIdeoList.css'
class VideoList extends Component { 
    render() {    
        return (
            <div>
              <video src={this.props.video} controls="controls">
              </video>
            </div>
          );

    }
 
}
export default VideoList;