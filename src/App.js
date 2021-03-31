// import ReactDOM from 'react-dom';
// import Counter from './Component/Counter'
import Section from './Feedback/Section';
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
  positivePercentag = () => {
    let positive = 0;
    let total = this.countTotalFeedback();
    positive = (this.state.good * 100) / total;
    return positive;
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    //  const countTotal=  good + bad + neutral
    //    console.log('this.state', (100 * good) / (good + bad + neutral));
    return (
      <div className="FeadBack">
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.feedbackCounter}
          />
        </Section>
        <div>
          <Section title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.positivePercentag}
            />{' '}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
