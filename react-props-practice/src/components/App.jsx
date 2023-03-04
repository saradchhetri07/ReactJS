import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function CreateCard(props) {
  return (
    <Card
      key={props.id}
      name={props.name}
      image={props.imgURL}
      phone={props.phone}
      email={props.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
