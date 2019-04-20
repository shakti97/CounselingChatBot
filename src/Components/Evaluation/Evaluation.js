import React from "react";
import './Evaluation.css';

const Evaluation = props => {
  console.log("props ",props);
  return (
    <React.Fragment>
      <div className='evaluation'>
        <div className='submitTestMessage'>Thanks for taking the test!</div> 
        <br/>
        <div className='submitTestResult'>On the basis of your answers, these three could be favorable career options for you - {props.field[0]} , {props.field[1]} , {props.field[2]} </div>
      </div>
    </React.Fragment>
  );
};
export default Evaluation;
