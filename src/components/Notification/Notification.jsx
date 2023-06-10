import React from 'react';
import PropTypes from 'prop-types';
import { Info } from './Notification.styled';

const Notification = ({ message }) => {
  return <Info>{message}</Info>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
