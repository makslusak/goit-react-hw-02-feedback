import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onIncrement, option }) => (
  <button onClick={onIncrement} className={css.btn} type="button">
    {option}
  </button>
);
Button.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};
