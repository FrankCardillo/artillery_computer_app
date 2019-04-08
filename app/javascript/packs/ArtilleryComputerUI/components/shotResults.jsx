import React from 'react';

const ShotResults = ({hitTarget, distanceFromTarget}) => {
	if (hitTarget) {
		return (
			<div className="component-border">
				<div>You Hit the Target!</div>
			</div>
		);
	}

	return (
		<div className="component-border">
			<div>You Missed the Target!</div>
			<div>Distance From Target: {distanceFromTarget}</div>
		</div>
	);
};

export default ShotResults