// Will hold all the score cards
// Will break out the current user's info in a discernably separate space

import React from 'react';
import ReactDOM from 'react-dom';
import ScoreCard from './scoreCard';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { count: 1 };
  
  handleCount(value) {
    this.setState((prevState) => ({count: prevState.count + value}));
  }
  handleCount(value) {
    this.setState({count: this.state.count + value});
  }

  render() {
    return (
      <div>
        <div id="top-users-scores">
          1. <ScoreCard></ScoreCard>
          2. <ScoreCard></ScoreCard>
          3. <ScoreCard></ScoreCard>
          4. <ScoreCard></ScoreCard>
          5. <ScoreCard></ScoreCard>
        </div>
        <div id="current-user-score">
          <ScoreCard></ScoreCard>
        </div>
      </div>
    )
  }
}

export default ScoreBoard