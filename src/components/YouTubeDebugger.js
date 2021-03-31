// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  };

  changeBitrate = () => {
    this.setState(prevState => ({
      ...prevState, settings: {...prevState.settings, bitrate: 12} 
    }));
  };

  changeVideoResolution = () => {
    this.setState(prevState => ({
      ...prevState, settings: {...prevState.settings, video: {resolution: '720p'}}
    }));
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>{this.state.timesClicked}</button>
        <button className="resolution" onClick={this.changeVideoResolution}>{this.state.timesClicked}</button>
      </div>
    );
  };
};