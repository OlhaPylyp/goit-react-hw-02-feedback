import PropTypes from 'prop-types';
import styles from '../Feedback/feedBack.module.css';


const Notification = ({ message }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.message}>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
