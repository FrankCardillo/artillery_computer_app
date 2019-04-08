import React from 'react';
import StaticControlPane from './staticControlPane';
import ConfigurableControlPane from './configurableControlPane';

class ComputerControls extends React.Component {
	constructor(props) {
		super(props);

		this.state = { shellWeight: 0, targetDistance: 0, targetSize: 0, angle: 0, speed: 0 };

		this.generateShotAttributes = this.generateShotAttributes.bind(this);
		this.handleFire = this.handleFire.bind(this);
		this.getRandomNumber = this.getRandomNumber.bind(this);
	}

	componentDidMount() {
		this.generateShotAttributes();
	}

	generateShotAttributes() {
		const randomShellWeight = this.getRandomNumber(10, 50);
		const randomTargetDistance = this.getRandomNumber(100, 200);
		const randomTargetSize = this.getRandomNumber(4, 16);

		this.setState({ shellWeight: randomShellWeight, targetDistance: randomTargetDistance, targetSize: randomTargetSize });
	}

	getRandomNumber(min, max) {
		min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	handleFire(event) {
		// make api call here
	}

	render() {
		return (
			<div className="component-border">
				Artillery Computer Controls
				<StaticControlPane name="Shell Weight" value={this.state.shellWeight}></StaticControlPane>
				<StaticControlPane name="Target Distance" value={this.state.targetDistance}></StaticControlPane>
				<StaticControlPane name="Target Size" value={this.state.targetSize}></StaticControlPane>
				<ConfigurableControlPane name="Angle of Barrel" value={this.state.angle}></ConfigurableControlPane>
				<ConfigurableControlPane name="Muzzle Speed" value={this.state.speed}></ConfigurableControlPane>
				<button onClick={this.handleFire}>Fire!</button>
			</div>
		)
	}
}

export default ComputerControls