import React from 'react';
import ComputerControls from './computerControls';
import ScoreBoard from './scoreBoard';
import ShotResults from './shotResults';
class LandingPage extends React.Component {
  render() {
    let shotResult = <div></div>
    if (this.state.shotFired) {
      shotResult = <ShotResults></ShotResults>
    }
    return(
      <div>
        <ComputerControls></ComputerControls>
        <ScoreBoard></ScoreBoard>
        <MiscInfo></MiscInfo>
        {shotResult}
      </div>
    )
  }
}
export default LandingPage