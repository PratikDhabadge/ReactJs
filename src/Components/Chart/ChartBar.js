import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';
  let salary=1000;
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / salary) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight,} }
        >{barFillHeight}</div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
