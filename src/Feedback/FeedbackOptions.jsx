import styles from '../Feedback/feedBack.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <div className={styles.btn__container}>
      {keys.map(key => (
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
export default FeedbackOptions;
