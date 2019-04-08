import React from 'react';

const ScoreCard = ({userName, accuracy, shots}) => (
  <div className="component-border">
    <div>Name: {userName}</div>
    <div>Overall Accuracy: {accuracy}</div>
    <div>Total Shots: {shots}</div>
  </div>
);
   
export default ScoreCard