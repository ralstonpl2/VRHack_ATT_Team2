import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Image,
  Text,
  View,
  VrButton,
  Sound
} from 'react-vr';
import scenes from './scenes/'

class App extends Component {

  constructor() {
    super();
    this.state = {
      sceneIndex: 0
    }
  }

  incrementScene = (e) => {
	this.changeScene(this.state.sceneIndex+1);    
  }

  decrementScene = (e) => {
    this.changeScene(this.state.sceneIndex-1);
  }

  changeScene = (sceneIndex) => {
    this.setState({sceneIndex});
  }

  render() {
    return (
      <Scene scenery={scenes[this.state.sceneIndex]} incrementScene={this.incrementScene} sound={<Sound source={asset(scenes[this.state.sceneIndex].audio)} />} />
    );
  }
}





class Scene extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	sound: this.props.sound
    }
  }

  componentDidMount() {
  	setTimeout(() => this.props.incrementScene({}), this.props.scenery.duration);
  }

  componentWillReceiveProps(nextProps) {
  	console.log(nextProps)
  	this.setState({sound:null});
  	setTimeout(() => this.setState({sound:nextProps.sound}), 500)
  }

  render() {
    return (
      <View> 
      	<VrButton onClick={this.props.incrementScene} ignoreLongClick={true}>
        	<Pano source={asset(this.props.scenery.pano)}/>
        </VrButton>

		{this.state.sound}
        
        {this.props.scenery.images.map((img, index) =>
          <SceneImage key={index} img={img} />
        )}

      </View>
    );
  }
}





class SceneImage extends Component {

  constructor() {
    super();
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
  	setTimeout(this.becomeVisible, this.props.img.showtime);
  	setTimeout(this.becomeInvisible, this.props.img.hidetime);
  }

  componentWillReceiveProps() {
  	setTimeout(this.becomeVisible, this.props.img.showtime);
  	setTimeout(this.becomeInvisible, this.props.img.hidetime);
  }

  becomeVisible = () => {
    this.setState({visible: true});
  }

  becomeInvisible = () => {
    this.setState({visible: false});
  }

  render() {
    return (
		<Image
		style={this.state.visible ? this.props.img.style : Object.assign({},this.props.img.style,{transform: [{translate: [100, 50, -5000]}]})}
		source={asset(this.props.img.path)}
		/>
				
    );
  }
}

AppRegistry.registerComponent('App', () => App);