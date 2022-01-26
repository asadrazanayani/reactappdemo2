import React, { useState, useEffect, Children } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";
import Error from "./components/characters/Error";
import Character from "./components/characters/Character";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} items={items} />
          </div>
        </Route>
        <Route
          exact
          path="/character/:id"
          render={(props) => <Character {...props} />}
        />
        <Route exact path="/*">
          <div className="container">
            <Error />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
