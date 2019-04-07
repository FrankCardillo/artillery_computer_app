// Individual control for the artillery computer
// The weight of the howitzer shell.
// The distance to the target.
// The size of the target.

import React from 'react';
import ReactDOM from 'react-dom';

const StaticControlPane = ({name, value}) => (
    <div className="component-border">
    <div>
        {name}
    </div>
    <div>
        {value}
    </div>
    </div>
);  

export default StaticControlPane