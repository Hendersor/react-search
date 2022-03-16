import React from "react";
import Item from "./Item";
import "./App.scss";
import "./Item";
const { faker } = require("@faker-js/faker");

const fakeUsers = [
  {
    name: faker.name.firstName(),
    country: faker.address.country(),
    image: faker.image.people(),
    number: faker.random.number(),
  },
  {
    name: faker.name.firstName(),
    country: faker.address.country(),
    image: faker.image.people(),
    number: faker.random.number(),
  },
  {
    name: faker.name.firstName(),
    country: faker.address.country(),
    image: faker.image.people(),
    number: faker.random.number(),
  },
  {
    name: faker.name.firstName(),
    country: faker.address.country(),
    image: faker.image.people(),
    number: faker.random.number(),
  },
];

function App() {
  return (
    <div className="app">
      <section className="inputContainer">
        <input className="input" /> <button> Search</button>
      </section>

      <section className="itemsContainer">
        {fakeUsers.map((user) => (
          <Item
            key={user.number}
            name={user.name}
            country={user.country}
            image={user.image}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
