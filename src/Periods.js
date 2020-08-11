import React from 'react';

function Periods(props) {
  return props.educations.map((entry) => (
    <div key={entry.activity} className="column-grid">
      <div className="year_column em_text">{entry.year}</div>
      <div className="event_column">
        <p className="em_text">{entry.activity}</p>
        <p>{entry.detail}</p>
      </div>
    </div>
  ));
}

export default Periods;
