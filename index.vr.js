import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Image,
  Text,
  View
} from 'react-vr';

class CityGreeting extends Component {
  render(){
    return(
      <Text> Hello {this.props.name}!</Text>
    );
  }
}

class WelcomeToVR extends Component {

  render() {
    return (
      <View> 
        <Pano source={asset('VillageOverview_360.jpg')}/>

         <Image
          style={{
            //borderRadius: 10,
            height: 196,
            margin: 10,
            width: 290,
            transform: [
                {translate: [60, 90, 0]},
                {rotateY: -90}
              ]
          }}
          source={asset('old_woman_broom.jpg')}
        />

        <Image
          style={{
            //borderRadius: 10,
            height: 196,
            margin: 10,
            width: 290,
            transform: [
                {translate: [-200, 300, 250]},
                {rotateY: 175}
              ]
          }}
          source={asset('farmer.jpg')}
        />

        <Image
          style={{
            //borderRadius: 10,
            height: 196,
            margin: 10,
            width: 290,
            transform: [
                {translate: [-400, 520, 0]},
                {rotateY: 90}
              ]
          }}
          source={asset('village_houses.jpg')}
        />

        <View
          style={{
            backgroundColor: 'red',
            fontSize: 3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
                {translate: [3, 0.2, 0]},
                {rotateY: -90}
              ],
          }}>
          <CityGreeting name='Shanghai' />
        </View>

        <View
          style={{
            backgroundColor: 'red',
            fontSize: 3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.25,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translate: [3, 0.2, 0]},
              {rotateY: -90}
            ],
          }}>
          <CityGreeting name='Beijing'/>
        </View>

        <View
          style={{
            backgroundColor: 'red',
            fontSize: 3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.25,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translate: [-3, 0.3, 0]},
              {rotateY: 90}
            ],
          }}>
          <CityGreeting name='Chengdu'/>
        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
