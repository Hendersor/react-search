import React from "react";
import "./App.scss";
import Item from "./components/Item";
import Search from "./components/Search"
const { faker } = require("@faker-js/faker");



const defaultFakeUsers = [
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
  const [todos, setTodos] = React.useState(defaultFakeUsers);
  const [searchValue, setSearchValue] = React.useState("");

  let searchedTodos = [];
  if(!searchValue.length >=1){
    searchedTodos = todos
  }else{
     searchedTodos = todos.filter(todo =>{
     const todoText = todo.name.toLowerCase();
     const searchText = searchValue.toLowerCase();
     return todoText.includes(searchText)
    })
  }

  return (
    <div className="app">
      <section className="inputContainer">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>

      <section className="itemsContainer">
        {searchedTodos.map((user) => (
          <Item
            key={user.number}
            name={user.name}
            country={user.country}
            image={user.image}
          />
        ))}
      </section>

      <section className="buttonContainer">
        <button onClick={() => setTodos(defaultFakeUsers)} className="blue">Refresh</button>
        <button onClick={() => setTodos([])} className="red">Delete</button>
      </section>    
    </div>
  );
}

export default App;
