import Register from "./Register";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <main className="App">
          <Login />
        </main>
      </Route>
      <Route exact path="/Register">
        <main className="App">
          <Register />
        </main>
      </Route>
    </Switch>
  );
}

export default App;
