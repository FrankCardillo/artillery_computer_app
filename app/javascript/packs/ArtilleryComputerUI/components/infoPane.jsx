import React from 'react';

const InfoPane = ({infoField, value}) => (
	<div className="component-border">
		<div>{infoField}</div>
		<div>{value}</div>
	</div>
);
   
export default InfoPane