// Holds all the control panes and the fire button
// tells the control panes what to render, generates random numbers for some of them

import React from 'react';
import ReactDOM from 'react-dom';
import StaticControlPane from './staticControlPane';
import ConfigurableControlPane from './configurableControlPane';

class ComputerControls extends React.Component {
	constructor(props) {
		super(props);
	}

	state = { shellWeight: 0, targetDistance: 0, targetSize: 0 };
	
	// pseudo randomly generate the shellWeight, targetDistance, targetSize
	// let the configurable control pane handle its own stuff

	render() {
		return (
			<div>
				<StaticControlPane name="Shell Weight" value={this.state.shellWeight}></StaticControlPane>
				<StaticControlPane name="Target Distance" value={this.state.targetDistance}></StaticControlPane>
				<StaticControlPane name="Target Size" value={this.state.targetSize}></StaticControlPane>
				<ConfigurableControlPane name="Angle of Barrel"></ConfigurableControlPane>
				<ConfigurableControlPane name="Muzzle Speed"></ConfigurableControlPane>
			</div>
		)
	}
}

export default ComputerControls