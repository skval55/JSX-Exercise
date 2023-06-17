const App = () => (
  <div>
    <Person
      name="shrek"
      age={30}
      hobbies={["being green", "swamping", "being an ogre"]}
    />
    <Person
      name="derek"
      age={16}
      hobbies={["shredding Gnar", "getting skurdy", "being a shredder"]}
    />
    <Person
      name="alexander xavier centrium"
      age={19}
      hobbies={["running", "getting real skurdy", "being fricking dope"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
