// The angle of the howitzer barrel relative to the ground.
// The muzzle speed (Preferably a list of pre-selected speeds).

import React from 'react';
import ReactDOM from 'react-dom';

class ConfigurableControlPane extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { count: 1 };
   
    handleCount(value) {
        this.setState((prevState) => ({count: prevState.count + value}));
    }
    handleCount(value) {
        this.setState({count: this.state.count + value});
    }
 
    render() {
        return(
            <div>
                Hello {props}
            </div>
        )
    }
}

export default ConfigurableControlPane