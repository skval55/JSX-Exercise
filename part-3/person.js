const Person = (props) => {
  const responses = ["Please go vote!", "You must be 18"];
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>
        Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name},
        age: {props.age}
      </p>
      <p>{props.age >= 18 ? responses[0] : responses[1]}</p>
      <div>hobbies</div>
      <ul>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
