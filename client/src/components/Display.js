import React from 'react';

const Display = (props) =>
  <div>
    <table>
      <tr>
        <th>Current Time</th>
        <th>Input</th>
        <th>Result</th>
        <th>Occurrences</th>
        <th>Time of Last Occurrence</th>
      </tr>
      <tbody>
        <th>{props.datetime}</th>
        <th>{props.number}</th>
        <th>{props.value}</th>
        <th>{props.occurrences}</th>
        <th>{props.last_datetime}</th>
      </tbody>
    </table>
  </div>

  export default Display;
