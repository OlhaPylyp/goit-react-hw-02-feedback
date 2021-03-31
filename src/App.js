// import ReactDOM from 'react-dom';
// import Counter from './Component/Counter'
import Statistic from './Feedback/Statistic';
import FeedbackOptions from './Feedback/FeedbackOptions';
import { Component } from 'react';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  feedbackCounter = event => {
    this.setState(preState => {
      return {
        [event]: preState[event] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = values.reduce((total, value) => total + value, 0);
    return total;
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    //  const countTotal=  good + bad + neutral
    //    console.log('this.state', (100 * good) / (good + bad + neutral));
    return (
      <div className="FeadBack">
        <h2>Please leave Feedback</h2>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.feedbackCounter}
        />
        <div>
          <h2>Statistics</h2>
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
          />
          {/*  positivePercentage={}> */}
        </div>
      </div>
    );
  }
}

export default App;
