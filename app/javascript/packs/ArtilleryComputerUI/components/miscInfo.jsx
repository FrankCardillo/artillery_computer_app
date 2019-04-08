import React from 'react';
import InfoPane from './infoPane';

class MiscInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = { totalUsers: 0, totalShotsAllUsers: 0, averageShots: 0, totalShotsCurrentUser: 0 };

		this.updateInfo = this.updateInfo.bind(this);
	}
	
	componentDidMount() {
		this.updateInfo();
	}

	updateInfo() {
		let numberUsers = 0;
		let numberShots = 0;
		let avgShots = 0;
		let currentShots = 0;

		// api call here to get info (mvp will only get info on the initial component mount)
		// later on, this should be able to pull data as it changes. some kind of reactive, event based stream

		this.setState({ totalUsers: numberUsers, totalShotsAllUsers: numberShots, averageShots: avgShots, totalShotsCurrentUser: currentShots });
	}

	render() {
		return(
			<div className="component-border">
				Miscellaneous Information
				<InfoPane infoField="Total Users" value={this.state.totalUsers}></InfoPane>
				<InfoPane infoField="Total Shots For All Users" value={this.state.totalShotsAllUsers}></InfoPane>
				<InfoPane infoField="Avg. # of Shots to Hit Target" value={this.state.averageShots}></InfoPane>
				<InfoPane infoField="Your Total Shots" value={this.state.totalShotsCurrentUser}></InfoPane>
			</div>
		)
	}
}

export default MiscInfo