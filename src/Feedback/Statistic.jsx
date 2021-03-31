const Statistic = ({ good, neutral, bad, total }) => {
  return (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
      {/* <li>Positive Feedback:</li> */}
    <li > Total:{total()}</li>
  </ul>)

//   let keys = Object.keys(data);

//   keys.map(key => <li key={key}> Total:{() => total(key)}</li>);
 };

export default Statistic;
