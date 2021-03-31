const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <div>
      {keys.map(key => (
        <button key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
