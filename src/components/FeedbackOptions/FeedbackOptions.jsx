import PropTypes from 'prop-types';
import { OptionsContainer, Option } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <Option
          key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </Option>
      ))}
    </OptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
