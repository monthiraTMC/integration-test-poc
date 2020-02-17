import React from 'react';
import { connect } from 'react-redux';
import { addCount } from './countActions';

// Counter Component
export const Counter = ({ count, addCount }) => (
  <input type="button" onClick={addCount} value={`The count is ${count}`} />
);

// Counter Container
export default connect(state => ({ count: state.count }), {
  addCount,
})(Counter);
