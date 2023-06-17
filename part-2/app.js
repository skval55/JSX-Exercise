const App = () => (
  <div>
    <Tweet
      username="Shmeckhead"
      name="small boi"
      date="12/12/12"
      message="yeah yeah yeah heard it"
    />
    <Tweet
      username="slimemaster"
      name="slimey"
      date="2/4/23"
      message="happy day shmecks"
    />
    <Tweet
      username="smelly guy"
      name="smelly smells"
      date="1/1/18"
      message="happy new years guy! Did anyone else hear the earth was gonna blow up this year?"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
