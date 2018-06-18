import React from 'react';

const InputForm = (props) =>
  <form onSubmit={props.handleSubmitClick}>
    <label>Input Number:</label>
    <input type="number" name="input-number"/>
    <input type="submit" />
  </form>

  export default InputForm;
