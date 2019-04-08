// The angle of the howitzer barrel relative to the ground.
// The muzzle speed (Preferably a list of pre-selected speeds).

import React from 'react';

class ConfigurableControlPane extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
    event.preventDefault();
		alert('A value was submitted: ' + this.state.value);
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit} className="component-border">
				<label>
					{this.props.name}
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default ConfigurableControlPane