// Will hold all the score cards
// Will break out the current user's info in a discernably separate space

import React from 'react';
import ReactDOM from 'react-dom';

class ScoreBoard extends React.Component {
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

export default ScoreBoard