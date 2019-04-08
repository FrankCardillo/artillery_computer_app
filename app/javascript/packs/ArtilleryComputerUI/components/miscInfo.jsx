// Will hold the info panes
// Will pass to them what they ought to render

import React from 'react';
import InfoPane from './infoPane';

class MiscInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = { totalUsers: 0, totalShotsAllUsers: 0, averageShots: 0, totalShotsCurrentUser: 0 };
	}
	
	// need to pull these stats from the DB when the component loads
	// gonna probably be a lifecycle hook. maybe componentDidMount(). 
	// I remember one of them is the correct place to update state

	render() {
		return(
			<div className="component-border">
				<InfoPane infoField="Total Users" value={this.state.totalUsers}></InfoPane>
				<InfoPane infoField="Total Shots For All Users" value={this.state.totalShotsAllUsers}></InfoPane>
				<InfoPane infoField="Avg. # of Shots to Hit Target" value={this.state.averageShots}></InfoPane>
				<InfoPane infoField="Your Total Shots" value={this.state.totalShotsCurrentUser}></InfoPane>
			</div>
		)
	}
}

export default MiscInfo