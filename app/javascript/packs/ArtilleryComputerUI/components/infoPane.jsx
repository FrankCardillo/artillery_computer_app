// will hold the info passed to it.
// Total shots for this user.
// Total shots for all users.
// Total Users.
// Avg number of shots to hit the target.

import React from 'react';

const InfoPane = ({infoField, value}) => (
	<div className="component-border">
		<div>{infoField}</div>
		<div>{value}</div>
	</div>
);
   
export default InfoPane