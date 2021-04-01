import PropTypes from 'prop-types';
import styles from '../Feedback/feedBack.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <div className={styles.btn__container}>
      {Object.keys(options).map(key => (
        <button
          className={styles.btn}
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    onLeaveFeedback: PropTypes.func,
  }).isRequired,
};
export default FeedbackOptions;
