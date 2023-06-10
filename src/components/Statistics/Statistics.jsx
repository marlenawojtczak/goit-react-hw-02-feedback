import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>good: {good}</Item>
      <Item>neutral: {neutral}</Item>
      <Item>bad: {bad}</Item>
      <Item>total: {total}</Item>
      <Item>positive feedback: {positivePercentage}%</Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
