import React, {Component} from "react";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Buttons from "./FeedbackOptions/FeedbackOptions";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  btnKey = Object.keys(this.state);
  
  onClick = (e) => {
    const key = e.target.textContent;
    this.setState(preState => ({
      [key]: preState[key] + 1,
    }))
  }

  countTotalFeedback = () => {
      const values = Object.values(this.state);
      let total = 0;
      for (const value of values) {
        total += value;
      }
    return total;
  }

  countPositiveFeedbackPercentage = () => {
   return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { btnKey, onClick, countPositiveFeedbackPercentage } = this;
    const totalFeedback = this.countTotalFeedback();
    
    return (
      <>
        <Section title="Please leave feedback">
          <Buttons options={btnKey} onLeaveFeedback={onClick} />
        </Section>

        <Section title="Statistics">
          {totalFeedback <= 0 ? (<Notification message="There is no feedback" />) : (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            feedback={countPositiveFeedbackPercentage()}
          />)}
          </Section>
      </>
    );
  }
}



export default App;
// <Statistics/>
      // <div>
      //   <h2>Please leave feedback</h2>
      //   <button type="button" onClick={this.onClick}>Good</button>
      //   <button type="button" onClick={this.onClick}>Neutral</button>
      //   <button type="button" onClick={this.onClick}>Bad</button>
      //     <div>
      //       <h2>Statistics</h2>
      //       <p>Good: <span>{good}</span></p>
      //       <p>Neutral: <span>{neutral}</span></p>
      //       <p>Bad: <span>{bad}</span></p>
      //       <p>Total: <span>6</span></p>
      //       <p>Positive feedback: <span>50%</span></p>
      //     </div>
      // </div>


  //     yup.string()
  // .test('len', 'Must be exactly 5 characters', val => val.length === 5)
