// The angle of the howitzer barrel relative to the ground.
// The muzzle speed (Preferably a list of pre-selected speeds).

import React from 'react';

class ConfigurableControlPane extends React.Component {
	constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const text = event.target.value;
    this.props.onChange(this.props.id, text);
	}

	render() {
		return(
      <div className="component-border">
        <label>
          {this.props.name}
          <input onChange={this.handleChange} value={this.props.value} />
        </label> 
      </div>
		)
	}
}

export default ConfigurableControlPane