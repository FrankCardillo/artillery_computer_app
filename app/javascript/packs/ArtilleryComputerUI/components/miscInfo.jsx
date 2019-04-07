// Will hold the info panes
// Will pass to them what they ought to render

import React from 'react';
import ReactDOM from 'react-dom';

class MiscInfo extends React.Component {
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
                <InfoPane infoField="Total Users" value=""></InfoPane>
                <InfoPane infoField="Total Shots For All Users" value=""></InfoPane>
                <InfoPane infoField="Avg. # of Shots to Hit Target" value=""></InfoPane>
                <InfoPane infoField="Your Total Shots" value=""></InfoPane>
            </div>
        )
    }
}

export default MiscInfo