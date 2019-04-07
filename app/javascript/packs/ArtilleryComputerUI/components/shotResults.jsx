// Pops up after the shot is fired and the result is calculated.
// Should display:
// Whether the target was hit or missed.
// How far away from the target the shell landed.

import React from 'react';
import ReactDOM from 'react-dom';

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