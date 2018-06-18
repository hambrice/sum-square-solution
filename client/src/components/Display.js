import React from 'react';

const Display = (props) =>
  <div>
    <table>
      <thead>
        <tr>
          <th>Current Time</th>
          <th>Input</th>
          <th>Result</th>
          <th>Occurrences</th>
          <th>Time of Last Occurrence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{props.datetime}</th>
          <th>{props.number}</th>
          <th>{props.value}</th>
          <th>{props.occurrences}</th>
          <th>{props.lastDatetime}</th>
        </tr>
      </tbody>
    </table>
  </div>

  export default Display;
