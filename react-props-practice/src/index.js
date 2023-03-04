import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// function Card(props) {
//   return (
//     <div className="bg-image hover-zoom">
//       <img src={props.img} all="actor name" />
//       <p>{props.phoneNo}</p>
//     </div>
//   );
// }
// ReactDOM.render(
//   <div>
//     <h1>myHeading</h1>
//     <Card
//       name="Beyonce"
//       img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//       phoneNo="+123 456 789"
//       email="b@beyonce.com"
//     />
//     <Card
//       name="Jack Bauer"
//       img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//       phoneNo="+987 654 321"
//       email="jack@nowhere.com"
//     />
//   </div>,
//   document.getElementById("root")
// );
//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
