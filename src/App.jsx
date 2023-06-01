import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [allContacts, setAllContacts] = useState([...contacts]);

  // criterio de ordenación
  // const [sort, setSort] = useState("");
  // if (sort == "popularity") {
  //   const sortedContacts = [...allContacts];
  //   sortedContacts.sort();
  //   setAllContacts();
  // }

  let listFive = allContacts.map((person) => (
    <tr>
      <th>
        <img className="logo" src={person.pictureUrl} />
      </th>
      <th>{person.name}</th>
      <th>{person.popularity.toFixed(2)}</th>
      <th>{person.wonOscar ? "🏆" : ""}</th>
      <th>{person.wonEmmy ? "🏆" : ""}</th>
    </tr>
  ));
  return (
    <div className="App">
      <h1>LAB | React IronContacts </h1>
      <button>Sort by popularity</button>
      <button>Sort by name</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>{listFive}</tbody>
      </table>
    </div>
  );
}

export default App;
