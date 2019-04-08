import React from 'react';
import ComputerControls from './computerControls';
import ScoreBoard from './scoreBoard';
import ShotResults from './shotResults';
import MiscInfo from './miscInfo';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {shotFired: false};
	}
  
  // the shot fired event needs to come in from the backend. Only then do we know the shot was really fired and recorded in the DB
  // TODO: how to do this?

  render() {
    let shotResult = <div></div>
    if (this.state.shotFired) {
      shotResult = <ShotResults></ShotResults>
    }
    return(
      <div className="component-border">
        Artillery Targeting Computer
        <ComputerControls></ComputerControls>
        <ScoreBoard></ScoreBoard>
        <MiscInfo></MiscInfo>
        {shotResult}
      </div>
    )
  }
}
export default LandingPage