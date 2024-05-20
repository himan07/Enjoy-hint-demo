import React from 'react';
import './EnjoyHintDemo.css';

const EnjoyHintDemo = () => {
  const startTour = () => {
    // Ensure that EnjoyHint is available in the global scope
    if (window.EnjoyHint) {
      const EnjoyHint = window.EnjoyHint;
      const enjoyhint_instance = new EnjoyHint({});
      const enjoyhint_script_steps = [
        {
          selector: '#box1',
          event_type: 'next',
          description: 'This is the first box.',
          showSkip: false,
        },
        {
          selector: '#box2',
          event_type: 'next',
          description: 'This is the second box.',
          showSkip: false,
        },
        {
          selector: '#box3',
          event_type: 'next',
          description: 'This is the third box.',
          showSkip: false,
        },
        {
          selector: '#box4',
          event_type: 'next',
          description: 'This is the fourth box.',
          showSkip: false,
        },
      ];

      // Set script config
      enjoyhint_instance.set(enjoyhint_script_steps);

      // Run EnjoyHint script
      enjoyhint_instance.run();
    } else {
      console.error('EnjoyHint is not loaded');
    }
  };

  return (
    <div className="container">
      <h1>React EnjoyHint Demo</h1>
      <button onClick={startTour} className="start-button">Start Tour</button>
      <div id="box1" className="box">Box 1</div>
      <div id="box2" className="box">Box 2</div>
      <div id="box3" className="box">Box 3</div>
      <div id="box4" className="box">Box 4</div>
    </div>
  );
};

export default EnjoyHintDemo;
