import React from 'react';

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