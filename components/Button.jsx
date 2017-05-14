import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Image,
  Text,
  View,
  VrButton
} from 'react-vr';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

  }

  render() {
    return (
      <VrButton
        onClick={() => {
          this.setState({open: !this.state.open});
        }}
      >
        <Image
          style={{
            //borderRadius: 20,
            height: this.state.open ? 196 : 0,
            margin: 10,
            width: this.state.open ? 290 : 0,
            transform: [
                {translate: [60, 90, 0]},
                {rotateY: -90}
              ]
          }}
          source={asset('old_woman_broom.jpg')}
        />
      </VrButton>
    );
  }
}