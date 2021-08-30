import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div>
      <h1 className="jumbotron">{counter}</h1>
      <button className="btn btn-primary" onClick={dec}>
        DEC
      </button>
      <button className="btn btn-primary" onClick={inc}>
        INC
      </button>
      <button className="btn btn-primary" onClick={rnd}>
        RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd: () => {
      const value = Math.floor(Math.random() * 10);
      rnd(value);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
