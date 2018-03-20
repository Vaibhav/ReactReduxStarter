import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{props.header}</h2>
      </div>
      <button type="submit" className="btn btn-primary" 
          onClick={() => props.clickHandler('The paragraph has changed.')}>
        Change Paragraph
      </button>
      <p className="App-intro">
        {props.para}
      </p>
    </div>
  );
}

App.propTypes = {
  header: PropTypes.string,
  para: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default App;
