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
      sceneIndex: 0,
      numScenes: scenes.length
    }
  }

  incrementScene = () => {
  	console.log('inc')
	this.changeScene(this.state.sceneIndex+1);
  }

  decrementScene = () => {
    this.changeScene(this.state.sceneIndex-1);
  }

  changeScene = (sceneIndex) => {
  	sceneIndex = sceneIndex % this.state.numScenes;
    this.setState({sceneIndex});
  }

  render() {
    return (
      <Scene
      	sceneIndex={this.state.sceneIndex}
      	scenery={scenes[this.state.sceneIndex]}
      	incrementScene={this.incrementScene}
      	sound={<Sound source={asset(scenes[this.state.sceneIndex].audio)} />} />
    );
  }
}





class Scene extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	sound: this.props.sound,
    	images: this.props.scenery.images
    }
  }

  componentDidMount() {
  	setTimeout(this.props.incrementScene, this.props.scenery.duration);
  }

  componentWillReceiveProps(nextProps) {
  	this.setState({images:nextProps.scenery.images});
  	this.setState({sound:null});
  	setTimeout(() => this.setState({sound:nextProps.sound}), 500);
  }

  render() {
    return (
      <View> 
      	<VrButton onClick={this.props.incrementScene} ignoreLongClick={true}>
        	<Pano source={asset(this.props.scenery.pano)} />
        </VrButton>

		{this.state.sound}
        
    	{
    		this.state.images.map((img, index) =>
	          <SceneImage key={index + this.props.sceneIndex*100} img={img} />
	        )
    	}

      </View>
    );
  }
}





class SceneImage extends Component {

  constructor() {
    super();
    this.state = {
      visible: false,
      sceneIndex: 0
    }
  }

  componentDidMount() {
  	console.log('true')
  	this.becomeInvisible(this.state.sceneIndex);
  	setTimeout(()=>this.becomeVisible(this.state.sceneIndex), this.props.img.showtime);
  	setTimeout(()=>this.becomeInvisible(this.state.sceneIndex), this.props.img.hidetime);
  }

  componentWillReceiveProps(nextProps) {
  	this.becomeInvisible(this.state.sceneIndex);
  	this.setState({sceneIndex:this.state.sceneIndex+1});
 	setTimeout(()=>this.becomeInvisible(this.state.sceneIndex), this.props.img.hidetime);
  	setTimeout(()=>this.becomeVisible(this.state.sceneIndex), this.props.img.showtime);
  }

  becomeVisible = (idx) => {
  	if (idx == this.state.sceneIndex) {
  		this.setState({visible: true});
  	}
  }

  becomeInvisible = (idx) => {
  	if (idx == this.state.sceneIndex) {
    	this.setState({visible: false});
    }
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